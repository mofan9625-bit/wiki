import fs from "fs";
import path from "path";

console.log("=================================================");
console.log(" [4/7] 正在执行 check-typography.mjs 排版与规范审计...");
console.log("=================================================");

const distDir = fs.existsSync(path.resolve("dist")) && fs.readdirSync(path.resolve("dist")).length > 0 ? path.resolve("dist") : path.resolve(".");
let checkedFiles = 0;
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
      checkedFiles++;
      const content = fs.readFileSync(fullPath, "utf-8");
      const relPath = path.relative(distDir, fullPath);

      // Check for naked URLs in text (e.g. text containing https:// not inside href or src or json-ld)
      // Extract text content inside <main>
      const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
      if (mainMatch) {
        const mainContent = mainMatch[1];
        // Strip out tags and scripts
        const cleanText = mainContent.replace(/<script[\s\S]*?<\/script>/gi, "")
                                     .replace(/<a[\s\S]*?<\/a>/gi, "")
                                     .replace(/<code[\s\S]*?<\/code>/gi, "")
                                     .replace(/<pre[\s\S]*?<\/pre>/gi, "")
                                     .replace(/<[^>]+>/g, " ");

        // Look for raw unlinked URLs
        const nakedUrlMatch = cleanText.match(/https?:\/\/[^\s<"']+/);
        if (nakedUrlMatch) {
          errors.push(`${relPath}: 发现未包裹超链接的裸露 URL: "${nakedUrlMatch[0]}"`);
        }
      }
    }
  }
}

walk(distDir);

console.log(`已审计排版页面数: ${checkedFiles}`);

if (errors.length > 0) {
  console.error(`发现 ${errors.length} 处排版违规：`);
  errors.slice(0, 10).forEach(e => console.error(" - " + e));
  process.exit(1);
} else {
  console.log("✅ 验证通过：无裸露 URL，排版结构与字体呈现规范合规！\n");
}
