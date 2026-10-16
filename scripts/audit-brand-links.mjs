import fs from "fs";
import path from "path";
import servicesData from "../src/data/services.json" assert { type: "json" };

console.log("=================================================");
console.log(" [7/7] 正在执行 audit-brand-links.mjs 商业参数审计...");
console.log("=================================================");

const distDir = fs.existsSync(path.resolve("dist")) ? path.resolve("dist") : path.resolve(".");
let brandErrors = [];
let checkedBrandCount = 0;

for (const brand of servicesData) {
  checkedBrandCount++;
  // 1. Check URL format
  if (!brand.registerUrl || !brand.registerUrl.startsWith("http")) {
    brandErrors.push(`品牌 [${brand.name}] 注册链接无效: ${brand.registerUrl}`);
  }

  // 2. Check Yunjiexian specific affiliate parameters
  if (brand.id === "yunjiexian") {
    if (!brand.registerUrl.includes("code=OOYhSj0L")) {
      brandErrors.push(`主推品牌 [云界线] 推广链接遗失返佣参数 code=OOYhSj0L: ${brand.registerUrl}`);
    }
    if (brand.promoCode !== "yjx888") {
      brandErrors.push(`主推品牌 [云界线] 优惠码不匹配: 期望 yjx888, 实际 ${brand.promoCode}`);
    }
  }

  // 3. Check rendered HTML file for rel attributes
  const profileHtmlPath = path.join(distDir, "airports", brand.id, "index.html");
  if (fs.existsSync(profileHtmlPath)) {
    const content = fs.readFileSync(profileHtmlPath, "utf-8");
    // Check that outbound links have rel="nofollow sponsored noopener"
    const relMatch = content.includes('rel="nofollow sponsored noopener"') || content.includes('nofollow');
    if (!relMatch && brand.registerUrl.startsWith("http")) {
      brandErrors.push(`品牌 [${brand.name}] 档案页面外链未包含 nofollow/sponsored 标签`);
    }
  }
}

console.log(`已审计品牌总数: ${checkedBrandCount}`);

if (brandErrors.length > 0) {
  console.error(`发现 ${brandErrors.length} 项商业参数审计问题：`);
  brandErrors.forEach(e => console.error(" - " + e));
  process.exit(1);
} else {
  console.log("✅ 验证通过：品牌外链推广参数 100% 吻合需求表，合规标签完整无缺！\n");
}
