import fs from "fs";
import path from "path";
import { PILLARS_CONFIG } from "../data_catalog.mjs";

console.log("=================================================");
console.log(" [5/7] 正在执行 check-pillar-hub.mjs 核心栏目审计...");
console.log("=================================================");

const distDir = fs.existsSync(path.resolve("dist")) && fs.existsSync(path.join(path.resolve("dist"), "recommend")) ? path.resolve("dist") : path.resolve(".");
let pillarErrors = [];

for (const p of PILLARS_CONFIG) {
  const pillarHtmlPath = path.join(distDir, p.slug, "index.html");
  if (!fs.existsSync(pillarHtmlPath)) {
    pillarErrors.push(`Pillar [${p.slug}] 静态页面不存在: ${pillarHtmlPath}`);
    continue;
  }

  const content = fs.readFileSync(pillarHtmlPath, "utf-8");

  // Check 1: Decision tree
  const hasDecisionTree = content.includes("决策树") || content.includes("快速决策") || content.includes("决策建议");
  if (!hasDecisionTree) {
    pillarErrors.push(`Pillar [${p.slug}] 缺少决策树/快速决策模块`);
  }

  // Check 2: Mega Table / Comparison Table
  const hasTable = content.includes("<table") || content.includes("对比大盘") || content.includes("megaTableCols");
  if (!hasTable) {
    pillarErrors.push(`Pillar [${p.slug}] 缺少对比大盘表`);
  }

  // Check 3: FAQ section
  const hasFAQ = content.includes("常见问题") || content.includes("FAQ") || content.includes("<details");
  if (!hasFAQ) {
    pillarErrors.push(`Pillar [${p.slug}] 缺少常见问答 FAQ 模块`);
  }

  // Check 4: Brand Cards / Recommendations
  const hasBrandCards = content.includes("云界线") || content.includes("品牌推荐") || content.includes("候选方案");
  if (!hasBrandCards) {
    pillarErrors.push(`Pillar [${p.slug}] 缺少品牌推荐卡片模块`);
  }
}

if (pillarErrors.length > 0) {
  console.error(`发现 ${pillarErrors.length} 个 Pillar 规范问题：`);
  pillarErrors.forEach(e => console.error(" - " + e));
  process.exit(1);
} else {
  console.log(`✅ 验证通过：全部 ${PILLARS_CONFIG.length} 个一级 Pillar 均完整包含决策树、大盘表、常见问答与品牌卡片！\n`);
}
