import fs from "fs";
import path from "path";

console.log("=== 开始执行 CSS 全量内联与全站离线双击自适应处理 ===");

const distDir = path.resolve("dist");
const astroDir = path.join(distDir, "_astro");
let cssFileName = "";
if (fs.existsSync(astroDir)) {
  const cssFiles = fs.readdirSync(astroDir).filter(f => f.endsWith(".css"));
  if (cssFiles.length > 0) {
    cssFileName = cssFiles[0];
  }
}
const cssPath = cssFileName ? path.join(astroDir, cssFileName) : "";

if (!cssPath || !fs.existsSync(cssPath)) {
  console.error("错误：CSS 文件未找到在:", astroDir);
  process.exit(1);
}

const cssContent = fs.readFileSync(cssPath, "utf-8");
console.log(`已读取主样式表 [${cssFileName}]，体积: ${(cssContent.length / 1024).toFixed(1)} KB`);

const styleBlock = `<style id="core-theme-css">\n${cssContent}\n</style>`;

// Process a directory recursively
function processDirectory(dir, rootDir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "_astro" && entry.name !== "pagefind") {
        processDirectory(fullPath, rootDir);
      }
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      let content = fs.readFileSync(fullPath, "utf-8");
      const relToRoot = path.relative(rootDir, fullPath).replace(/\\/g, "/");
      const depth = relToRoot.split("/").length - 1;
      const prefix = depth === 0 ? "./" : "../".repeat(depth);

      // 1. Inject CSS into <head> directly if not already injected
      if (!content.includes('id="core-theme-css"')) {
        content = content.replace(/<\/head>/i, `${styleBlock}\n</head>`);
      }

      // 2. Also keep/adjust the link tag to be relative
      content = content.replace(/<link rel="stylesheet" href="\/_astro\/[^"]+">/g, 
        `<link rel="stylesheet" href="${prefix}_astro/${cssFileName}">`);

      // 3. Fix favicon
      content = content.replace(/href="\/favicon\.svg"/g, `href="${prefix}favicon.svg"`);

      // 4. Transform internal href links to relative with index.html
      // Root: href="/"
      content = content.replace(/href="\/"/g, `href="${prefix}index.html"`);

      // href="/path/" -> prefix + path/index.html
      content = content.replace(/href="\/([a-zA-Z0-9_\-\/]+)\/"/g, (match, p1) => {
        return `href="${prefix}${p1}/index.html"`;
      });

      // href="/path" -> prefix + path/index.html (e.g. /sitemap)
      content = content.replace(/href="\/([a-zA-Z0-9_\-]+)"/g, (match, p1) => {
        return `href="${prefix}${p1}/index.html"`;
      });

      // 5. Constrain any naked SVG icons with inline max-width
      content = content.replace(/<svg class="w-([0-9\.]+) h-([0-9\.]+)/g, (match, w, h) => {
        const px = Math.round(parseFloat(w) * 4);
        return `<svg width="${px}" height="${px}" style="max-width:${px}px;max-height:${px}px;display:inline-block;" class="w-${w} h-${h}`;
      });

      fs.writeFileSync(fullPath, content, "utf-8");
    }
  }
}

console.log("正在向 dist/ 目录下所有 HTML 文件注入内联 CSS 与自适应相对链接...");
processDirectory(distDir, distDir);

console.log("正在向 offline_preview/ 目录下所有 HTML 文件注入内联 CSS 与自适应相对链接...");
const offlineDir = path.resolve("offline_preview");
if (fs.existsSync(offlineDir)) {
  processDirectory(offlineDir, offlineDir);
}

// Also create a standalone, double-clickable index.html in the root workspace
console.log("正在生成根目录直接双击预览文件 index.html 与 【全站离线预览入口】.html...");
let rootIndexContent = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

// In the root index.html, paths to subpages go into ./dist/
// e.g. href="./recommend/index.html" -> href="./dist/recommend/index.html"
rootIndexContent = rootIndexContent.replace(/href="\.\/([a-zA-Z0-9_\-\/]+)\/index\.html"/g, 'href="./dist/$1/index.html"');
rootIndexContent = rootIndexContent.replace(/href="\.\/_astro\//g, 'href="./dist/_astro/');
rootIndexContent = rootIndexContent.replace(/href="\.\/favicon\.svg"/g, 'href="./dist/favicon.svg"');
rootIndexContent = rootIndexContent.replace(/href="\.\/index\.html"/g, 'href="./index.html"');

fs.writeFileSync("index.html", rootIndexContent, "utf-8");
fs.writeFileSync("【全站离线预览入口】.html", rootIndexContent, "utf-8");
fs.writeFileSync("【离线双击预览网站】.html", rootIndexContent, "utf-8");

console.log("✅ 全部完成！现在无论通过哪种方式打开，均可 100% 完整加载 Tailwind 现代卡片 UI！");
