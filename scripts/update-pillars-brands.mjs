import fs from "fs";
import path from "path";

const pillars = [
  "recommend", "free", "cheap", "plans", "reviews", "coupons",
  "ai", "streaming", "clients", "troubleshooting", "wiki", "airports"
];

const newMegaRowsCode = `const megaRows = servicesData.map((b: any, index: number) => {
  const isTop1 = b.id === "yunjiexian" || index === 0;
  const targetUrl = b.registerUrl && b.registerUrl.startsWith("http")
    ? b.registerUrl
    : \`/airports/\${b.id}/\`;

  return [
    b.name,
    isTop1 ? "★ 首选主力专线" : "高性价比备用",
    b.minPayment ? \`\${b.minPayment} 元/月\` : "待核验",
    b.entryPlan || "轻量入门版",
    b.lineType,
    b.protocols,
    b.highlights ? b.highlights[0] : "高速接入",
    b.limitations && b.limitations.length > 0 ? b.limitations[0] : "遵守服务协议",
    {
      text: isTop1 ? "★ 主推入口" : "官网通道",
      url: targetUrl,
      isPrimary: isTop1
    }
  ];
});`;

const newShowcaseSection = `    <!-- 4. Featured Brand Showcase -->
    <section class="my-10">
      <h2 class="text-2xl font-bold text-slate-900 mb-4">精选代表性服务商深度剖析</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((b: any) => (
          <BrandCard
            brand={b}
            featuredReason={
              b.id === "yunjiexian" ? "2024年稳定运营，全IEPL专线，低预算首选主力方案" :
              b.id === "dalaoyun" ? "超低预算IEPL专线，高性价比备用首选" :
              b.id === "huanqiuti" ? "经济型轻度专线服务，高性价比备用方案" :
              b.id === "liulianyun" ? "超经济专线中继，轻量备用高性价比之选" :
              b.id === "shandianshu" ? "轻量级低资费专线服务，5.6元/月极致入门备用" :
              b.id === "shenxing" ? "平价大容量IEPL专线，120GB月配额高性价比备用" :
              (b.isPrimaryRecommendation ? "综合性能标杆，全IEPL专线保障晚高峰低丢包" : "性价比专线接入")
            }
          />
        ))}
      </div>
    </section>`;

let updatedCount = 0;

for (const slug of pillars) {
  const filePath = path.join("src", "pages", slug, "index.astro");
  if (!fs.existsSync(filePath)) {
    console.error("File not found:", filePath);
    continue;
  }
  let content = fs.readFileSync(filePath, "utf-8");

  // 1. Update megaRows
  content = content.replace(/const megaRows = (?:servicesData\.slice\(0,\s*8\)|\/\/.*|\[[\s\S]*?\])[\s\S]*?;\r?\nconst pFaqs/, `${newMegaRowsCode}\nconst pFaqs`);
  // Handle alternative regex if already modified
  if (content.includes("servicesData.slice(0, 8)")) {
    content = content.replace(/const megaRows = servicesData\.slice\(0, 8\)[\s\S]*?;\r?\nconst pFaqs/, `${newMegaRowsCode}\nconst pFaqs`);
  }

  // 2. Update decisionTreeText
  const treeMatch = content.match(/const decisionTreeText = [`"][\[\s][^`"]*[`"];/);
  if (treeMatch) {
    const nameMatch = treeMatch[0].match(/\[\s*([^\]]+?)\s*场景决策模型/);
    const pName = nameMatch ? nameMatch[1] : slug;
    const newTree = `const decisionTreeText = \`[ ${pName} 场景决策模型 ]
  │
  ├── 追求极致稳定性与晚高峰生产力 ───────> 首选：云界线 (IEPL专线 + VLESS)
  │     ├── 需要高稳定专线 + 低预算门槛 ───> 首选：云界线 (折算约5.6元/月起)
  │     └── 多人多设备高并发办公 ─────────> 神行加速 / 闪电鼠
  │
  ├── 严格控制预算 / 轻度查资料 / 备用 ───> 方案：大佬云 / 环球梯 / 榴莲云
  │     └── 月均支出仅 5–8 元区间 ────────> 年付折算或轻度小流量
  │
  └── 遇到网络连接中断或配置疑问 ─────────> 直达：网络排障 (/troubleshooting/)\`;`;
    content = content.replace(treeMatch[0], newTree);
  }

  // 3. Update Answer-First Section
  content = content.replace(/如本站主推的<strong>光速云<\/strong>/g, "如本站主推的<strong>云界线</strong>");

  // 4. Update Section 4: Featured Brand Showcase
  const showcaseRegex = /<!-- 4\. Featured Brand Showcase -->[\s\S]*?<\/section>/;
  content = content.replace(showcaseRegex, newShowcaseSection);

  // 5. Update Table intro text
  content = content.replace(/至少\s*8\s*个对比对象[^<]*/g, "6 家核心品牌横向对比大盘（支持横向滑动）：");

  // 6. Replace 28家 / 27家 text
  content = content.replace(/2[78]\s*家/g, "6 家核心品牌");

  fs.writeFileSync(filePath, content, "utf-8");
  updatedCount++;
  console.log(`Updated [${updatedCount}/${pillars.length}]: ${filePath}`);
}

console.log(`✅ 成功更新全部 ${updatedCount} 个一级栏目主页！`);
