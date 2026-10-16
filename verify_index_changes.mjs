import fs from "fs";

const html = fs.readFileSync("index.html", "utf-8");

console.log("=== 完整核对 6 大品牌推荐卡片 ===");
const cardSection = html.substring(html.indexOf("快速决策首选"), html.indexOf("选型快速决策树"));
const cardRegex = /<span class="text-xs font-bold px-2 py-0\.5 rounded bg-slate-100 text-slate-700 font-mono">\s*(#[0-9]+)\s*<\/span>[\s\S]*?<h3[^>]*>\s*<a[^>]*>\s*([^<]+)\s*<\/a>/g;

let match;
while ((match = cardRegex.exec(cardSection)) !== null) {
  console.log(` - 卡片: ${match[1]} | 品牌: ${match[2].trim()}`);
}

console.log("\n=== 完整核对选型决策树 ===");
const treeStart = html.indexOf("选型快速决策树");
const treeEnd = html.indexOf("核心品牌综合参数大盘");
const treeSection = html.substring(treeStart, treeEnd);
console.log("分支 1 包含首选云界线:", treeSection.includes("首选：云界线"));
console.log("分支 2 包含大佬云 / 环球梯 / 榴莲云:", treeSection.includes("大佬云 / 环球梯 / 榴莲云"));

console.log("\n=== 完整核对综合参数大盘前 6 行 ===");
const tableStart = html.indexOf("核心品牌综合参数大盘");
const tableEnd = html.indexOf("12 个一级专业栏目知识库");
const tableSection = html.substring(tableStart, tableEnd);

const tbodyStart = tableSection.indexOf("<tbody>");
const tbodyEnd = tableSection.indexOf("</tbody>");
const tbody = tableSection.substring(tbodyStart, tbodyEnd);

const rows = tbody.split("<tr>").filter(r => r.includes("<td"));
rows.slice(0, 10).forEach((row, idx) => {
  const tds = row.split("<td").filter(c => c.includes("</td>")).map(c => "<td" + c);
  const brandName = tds[0].replace(/<[^>]+>/g, "").trim();
  const position = tds[1].replace(/<[^>]+>/g, "").trim();
  const lastCol = tds[tds.length - 1];
  
  const hasA = lastCol.includes("<a ");
  const hasTargetBlank = lastCol.includes('target="_blank"');
  const hasRel = lastCol.includes('rel="nofollow sponsored noopener"');
  const hasHover = lastCol.includes("hover:underline") && (lastCol.includes("hover:text-blue-600") || lastCol.includes("hover:text-blue-800"));
  const hrefMatch = lastCol.match(/href="([^"]+)"/);
  const href = hrefMatch ? hrefMatch[1] : "NONE";

  console.log(` - 第 ${idx + 1} 行: ${brandName} | 定位: ${position}`);
  console.log(`   * 标签为 <a>: ${hasA} | href: ${href}`);
  console.log(`   * target="_blank": ${hasTargetBlank} | rel="nofollow sponsored noopener": ${hasRel}`);
  console.log(`   * 悬浮样式 (hover:underline): ${hasHover}`);
});

console.log("\n=== 完整核对 FAQ Q3 ===");
const faqStart = html.indexOf("机场选型通用常见疑问");
const faqSection = html.substring(faqStart);
const hasFaqYunjiexian = faqSection.includes("为什么云界线被列为本站首选主推方案？");
console.log("FAQ Q3 首选品牌提问包含云界线:", hasFaqYunjiexian);
