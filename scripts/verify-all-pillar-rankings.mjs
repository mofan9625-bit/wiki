import fs from "fs";
import path from "path";

const targetTop6 = [
  "云界线",
  "大佬云",
  "环球梯",
  "榴莲云",
  "闪电鼠",
  "神行加速"
];

const checkPages = [
  { name: "首页 (根目录 index.html)", file: "index.html" },
  { name: "推荐主页 (recommend/index.html)", file: "recommend/index.html" },
  { name: "便宜机场 (cheap/index.html)", file: "cheap/index.html" },
  { name: "套餐对比 (plans/index.html)", file: "plans/index.html" },
  { name: "免费机场 (free/index.html)", file: "free/index.html" },
  { name: "AI机场 (ai/index.html)", file: "ai/index.html" },
  { name: "机场评测 (reviews/index.html)", file: "reviews/index.html" },
  { name: "机场优惠码 (coupons/index.html)", file: "coupons/index.html" },
  { name: "客户端教程 (clients/index.html)", file: "clients/index.html" },
  { name: "网络排障 (troubleshooting/index.html)", file: "troubleshooting/index.html" },
  { name: "机场百科 (wiki/index.html)", file: "wiki/index.html" },
  { name: "机场大全 (airports/index.html)", file: "airports/index.html" },
];

console.log("=================================================");
console.log("       全站多页面品牌推荐排名完整核验");
console.log("=================================================\n");

let allPassed = true;

for (const p of checkPages) {
  let targetPath = p.file;
  if (!fs.existsSync(targetPath)) {
    if (fs.existsSync(path.join("dist", p.file))) {
      targetPath = path.join("dist", p.file);
    } else {
      console.error(`❌ 文件不存在: ${p.file}`);
      allPassed = false;
      continue;
    }
  }

  const html = fs.readFileSync(targetPath, "utf-8");
  console.log(`\n【核验页面】：${p.name}`);

  // 1. Check Decision Tree
  const hasTreeYunjiexian = html.includes("首选：云界线");
  const hasTreeBackup = html.includes("大佬云 / 环球梯 / 榴莲云") || html.includes("神行加速 / 闪电鼠");
  console.log(` - 决策树 首选：云界线: ${hasTreeYunjiexian ? "✅ 通过" : "❌ 失败"}`);
  console.log(` - 决策树 备选：大佬云/环球梯/榴莲云/神行加速/闪电鼠: ${hasTreeBackup ? "✅ 通过" : "❌ 失败"}`);
  if (!hasTreeYunjiexian || !hasTreeBackup) allPassed = false;

  // 2. Check Cards
  const cardNames = [];
  const cardRegex = /<span class="text-xs font-bold px-2 py-0\.5 rounded bg-slate-100 text-slate-700 font-mono">\s*(#[0-9]+)\s*<\/span>[\s\S]*?<h3[^>]*>\s*<a[^>]*>\s*([^<]+)\s*<\/a>/g;
  let cm;
  while ((cm = cardRegex.exec(html)) !== null) {
    cardNames.push({ rank: cm[1], name: cm[2].trim() });
  }

  const hasPrimaryBadge = html.includes("本站主推方案");
  const cardCountOk = cardNames.length === 6;
  console.log(` - 卡片数量: ${cardNames.length} 个 (要求严格为 6): ${cardCountOk ? "✅ 符合" : "❌ 不符合"}`);
  console.log(` - 存在“本站主推方案”高亮角标: ${hasPrimaryBadge ? "✅ 是" : "❌ 否"}`);
  console.log(` - 卡片排列: ${cardNames.map(c => `${c.rank} ${c.name}`).join(" -> ")}`);

  const top6CardsMatch = targetTop6.every((name, idx) => cardNames[idx] && cardNames[idx].name === name && cardNames[idx].rank === `#${idx + 1}`);
  if (top6CardsMatch && cardCountOk) {
    console.log(` - 卡片 1~6 排序与序号严格吻合且仅有 6 个: ✅ 完美匹配！`);
  } else {
    console.log(` - 卡片 1~6 排序与序号: ❌ 不匹配！`);
    allPassed = false;
  }

  // 3. Check Comparison Table
  const tableStart = html.indexOf("<table class=\"data-table");
  if (tableStart !== -1) {
    const tableEnd = html.indexOf("</table>", tableStart);
    const tableHtml = html.substring(tableStart, tableEnd);
    const tbodyStart = tableHtml.indexOf("<tbody>");
    const tbody = tableHtml.substring(tbodyStart);
    const rows = tbody.split("<tr>").filter(r => r.includes("<td"));
    
    const rowCountOk = rows.length === 6;
    console.log(` - 对比表格行数: ${rows.length} (要求严格为 6): ${rowCountOk ? "✅ 符合" : "❌ 不符合"}`);
    if (!rowCountOk) allPassed = false;

    const tableFirst6 = [];
    let tableLinksValid = true;

    rows.slice(0, 6).forEach((row, idx) => {
      const tds = row.split("<td").filter(c => c.includes("</td>")).map(c => "<td" + c);
      const bName = tds[0].replace(/<[^>]+>/g, "").trim();
      const lastTd = tds[tds.length - 1];
      const hasA = lastTd.includes("<a ");
      const hasTarget = lastTd.includes('target="_blank"');
      const hasRel = lastTd.includes('rel="nofollow sponsored noopener"');
      const hrefMatch = lastTd.match(/href="([^"]+)"/);
      const href = hrefMatch ? hrefMatch[1] : "";
      const isLinkOk = hasA && hasTarget && hasRel && href.length > 0 && href !== "#";

      if (!isLinkOk) tableLinksValid = false;
      tableFirst6.push({ name: bName, isLinkOk, href });
    });

    console.log(` - 表格前 6 行品牌: ${tableFirst6.map(r => r.name).join(" -> ")}`);
    const tableTop6Match = targetTop6.every((name, idx) => tableFirst6[idx] && tableFirst6[idx].name === name);
    console.log(` - 表格前 6 行顺序: ${tableTop6Match ? "✅ 严格吻合" : "❌ 不吻合"}`);
    console.log(` - 表格直达通道 <a> 标签与属性验证: ${tableLinksValid ? "✅ 全部为有效直达 <a> 链接" : "❌ 存在纯文本或无效链接"}`);

    if (!tableTop6Match || !tableLinksValid) allPassed = false;
  }
}

console.log("\n=================================================");
if (allPassed) {
  console.log("🎉 验证结果：全站所有目标页面 100% 顺利通过检查！");
} else {
  console.log("❌ 验证结果：存在未通过检查的页面项，请查阅上方日志。");
}
console.log("=================================================");
