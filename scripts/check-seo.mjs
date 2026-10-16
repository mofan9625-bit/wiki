import fs from "fs";
import path from "path";

console.log("=================================================");
console.log(" [3/7] 正在执行 check-seo.mjs 元标签与H1审计...");
console.log("=================================================");

const distDir = fs.existsSync(path.resolve("dist")) && fs.readdirSync(path.resolve("dist")).length > 0 ? path.resolve("dist") : path.resolve(".");
let pagesAudited = 0;
let errors = [];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "_astro" && entry.name !== "pagefind" && entry.name !== "node_modules" && entry.name !== ".git" && entry.name !== ".astro" && entry.name !== "src" && entry.name !== "scripts" && entry.name !== "public" && entry.name !== "planning_pack" && entry.name !== "offline_preview") {
        walk(fullPath);
      }
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      // Exclude utility helper or 404 pages
      if (entry.name === "offline_preview.html" || entry.name === "404.html") {
        continue;
      }
      pagesAudited++;
      const content = fs.readFileSync(fullPath, "utf-8");
      const relPath = path.relative(distDir, fullPath);

      // Check title
      const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
      if (!titleMatch || !titleMatch[1].trim()) {
        errors.push(`${relPath}: 缺失 <title> 标签`);
      }

      // Check description
      const descMatch = content.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
      if (!descMatch || !descMatch[1].trim()) {
        errors.push(`${relPath}: 缺失 meta description 标签`);
      }

      // Check H1 tag count
      const h1Matches = content.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi);
      if (!h1Matches || h1Matches.length === 0) {
        errors.push(`${relPath}: 页面缺失 <h1> 标签`);
      } else if (h1Matches.length > 1) {
        errors.push(`${relPath}: 页面存在多个 <h1> 标签 (数量: ${h1Matches.length})`);
      }
    }
  }
}

walk(distDir);

console.log(`已审计页面总数: ${pagesAudited}`);

if (errors.length > 0) {
  console.error(`发现 ${errors.length} 项 SEO 问题：`);
  errors.slice(0, 10).forEach(e => console.error(" - " + e));
  process.exit(1);
} else {
  console.log("✅ 验证通过：每页均具备合规的 title、description 与唯一的 <h1> 标头！\n");
}
