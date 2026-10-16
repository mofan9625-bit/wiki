import fs from "fs";
import path from "path";

console.log("=== 正在检查全站所有 HTML 文件中的 /dist/ 路径暴露情况 ===");

let found = 0;
function walk(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      if (item.name !== "node_modules" && item.name !== ".git" && item.name !== ".astro") {
        walk(full);
      }
    } else if (item.isFile() && item.name.endsWith(".html")) {
      const content = fs.readFileSync(full, "utf-8");
      if (content.includes("./dist/") || content.includes("/dist/") || content.includes('href="dist/')) {
        console.error(`[警告] 文件中发现 dist 路径: ${full}`);
        found++;
      }
    }
  }
}

if (fs.existsSync(path.resolve("dist"))) {
  walk(path.resolve("dist"));
}
walk(path.resolve("."));

if (found === 0) {
  console.log("✅ 验证通过：全站 0 处暴露 dist/ 路径！所有内链与静态资源均已规范化为标准根相对路径。");
} else {
  console.error(`❌ 发现 ${found} 处可能存在 dist/ 路径暴露！`);
  process.exit(1);
}
