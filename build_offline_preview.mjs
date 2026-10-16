import fs from "fs";
import path from "path";

const srcDir = path.resolve("dist");
const outDir = path.resolve("offline_preview");

console.log("Building standalone offline preview directory from dist/...");

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// 1. Copy dist to offline_preview
if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}
copyRecursiveSync(srcDir, outDir);

// 2. Walk all HTML files and rewrite absolute paths to relative paths
function walkAndTransformHtml(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkAndTransformHtml(fullPath);
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      const relToRoot = path.relative(outDir, fullPath).replace(/\\/g, "/");
      const depth = relToRoot.split("/").length - 1;
      const prefix = depth === 0 ? "./" : "../".repeat(depth);

      let content = fs.readFileSync(fullPath, "utf-8");

      // Replace /_astro/ assets
      content = content.replace(/(href|src)="\/(?:_astro\/)([^"]+)"/g, `$1="${prefix}_astro/$2"`);
      content = content.replace(/(href|src)="\/(?:favicon\.svg)"/g, `$1="${prefix}favicon.svg"`);

      // Replace internal links
      // href="/" -> prefix + "index.html"
      content = content.replace(/href="\/"/g, `href="${prefix}index.html"`);

      // href="/path/" -> prefix + "path/index.html"
      content = content.replace(/href="\/([a-zA-Z0-9_\-\/]+)\/"/g, (match, p1) => {
        return `href="${prefix}${p1}/index.html"`;
      });

      // href="/path" -> prefix + "path/index.html"
      content = content.replace(/href="\/([a-zA-Z0-9_\-]+)"/g, (match, p1) => {
        return `href="${prefix}${p1}/index.html"`;
      });

      fs.writeFileSync(fullPath, content, "utf-8");
    }
  }
}

walkAndTransformHtml(outDir);

// Create root entry: 【离线双击预览网站】.html
const rootLauncherHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0; url=offline_preview/index.html">
  <title>正在加载离线预览...</title>
  <style>
    body { font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background: #f8fafc; }
    .box { text-align: center; padding: 32px; background: #fff; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    a { display: inline-block; margin-top: 16px; padding: 10px 20px; background: #2563eb; color: #fff; text-decoration: none; border-radius: 6px; font-weight: 600; }
  </style>
</head>
<body>
  <div class="box">
    <h2>正在打开「机场wiki指南」离线完整预览...</h2>
    <p>如果浏览器未自动跳转，请点击下方按钮直接进入：</p>
    <a href="offline_preview/index.html">点击进入离线网站首页 →</a>
  </div>
</body>
</html>`;

fs.writeFileSync("【离线双击预览网站】.html", rootLauncherHtml, "utf-8");
fs.writeFileSync("offline_preview.html", rootLauncherHtml, "utf-8");

console.log("Offline preview package created at offline_preview/ and 【离线双击预览网站】.html successfully!");
