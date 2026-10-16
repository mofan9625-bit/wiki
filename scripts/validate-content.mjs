import fs from "fs";
import path from "path";

console.log("=================================================");
console.log(" [1/7] 正在执行 validate-content.mjs 质量审计...");
console.log("=================================================");

const distDir = fs.existsSync(path.resolve("dist")) && fs.readdirSync(path.resolve("dist")).length > 0 ? path.resolve("dist") : path.resolve(".");

const forbiddenPatterns = [
  /TODO/i,
  /FIXME/i,
  /待写/i,
  /待补充/i,
  /占位符/i,
  /Lorem Ipsum/i,
  /TBD/i
];

let totalFilesChecked = 0;
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
      totalFilesChecked++;
      const content = fs.readFileSync(fullPath, "utf-8");
      
      for (const pattern of forbiddenPatterns) {
        if (pattern.test(content)) {
          // Allow "待核验" (which is an intentional compliance status badge), but disallow "待写" / "TODO"
          const match = content.match(pattern);
          errors.push(`文件 ${path.relative(distDir, fullPath)} 包含违规占位文本: "${match[0]}"`);
        }
      }
    }
  }
}

walk(distDir);

console.log(`已审计 HTML 文件数量: ${totalFilesChecked}`);

if (errors.length > 0) {
  console.error(`发现 ${errors.length} 处违规内容：`);
  errors.slice(0, 10).forEach(e => console.error(" - " + e));
  process.exit(1);
} else {
  console.log("✅ 验证通过：全站无任何 TODO、待写占位符，内容完整合规！\n");
}
