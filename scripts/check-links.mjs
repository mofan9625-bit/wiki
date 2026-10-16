import fs from "fs";
import path from "path";

console.log("=================================================");
console.log(" [2/7] 正在执行 check-links.mjs 死链扫描...");
console.log("=================================================");

const distDir = fs.existsSync(path.resolve("dist")) ? path.resolve("dist") : path.resolve(".");
const allLinks = new Set();
let deadLinks = [];
let internalLinkCount = 0;

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "_astro" && entry.name !== "pagefind" && entry.name !== "node_modules" && entry.name !== ".git" && entry.name !== ".astro" && entry.name !== "src" && entry.name !== "scripts" && entry.name !== "public" && entry.name !== "planning_pack" && entry.name !== "offline_preview") {
        walk(fullPath);
      }
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      const content = fs.readFileSync(fullPath, "utf-8");
      const hrefRegex = /href="([^"#?]+)(?:[#?][^"]*)?"/g;
      let match;
      while ((match = hrefRegex.exec(content)) !== null) {
        const href = match[1];
        const isExternal = href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:") || href.startsWith("javascript:") || href.startsWith("#") || href.startsWith("//");
        
        if (!isExternal) {
          internalLinkCount++;
          let targetPath = href.startsWith("/")
            ? path.join(distDir, href)
            : path.resolve(path.dirname(fullPath), href);

          let valid = false;
          if (fs.existsSync(targetPath)) {
            if (fs.statSync(targetPath).isDirectory()) {
              valid = fs.existsSync(path.join(targetPath, "index.html"));
            } else {
              valid = true;
            }
          } else if (fs.existsSync(targetPath + ".html")) {
            valid = true;
          } else if (href.endsWith("/") && fs.existsSync(path.join(distDir, href, "index.html"))) {
            valid = true;
          }

          if (!valid) {
            deadLinks.push({
              source: path.relative(distDir, fullPath),
              target: href
            });
          }
        }
      }
    }
  }
}

walk(distDir);

console.log(`已扫描内部链接总量: ${internalLinkCount}`);

if (deadLinks.length > 0) {
  console.error(`发现 ${deadLinks.length} 个死链：`);
  deadLinks.slice(0, 10).forEach(d => console.error(` - 页面 ${d.source} 链接至不存在的目标: ${d.target}`));
  process.exit(1);
} else {
  console.log("✅ 验证通过：全站 0 死链，所有站内超链接 100% 连通可达！\n");
}
