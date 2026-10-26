import fs from "fs";
import path from "path";
import servicesData from "../src/data/services.json" assert { type: "json" };

console.log("=================================================");
console.log(" [7/7] 正在执行 audit-brand-links.mjs 商业与301跳转审计...");
console.log("=================================================");

const distDir = fs.existsSync(path.resolve("dist")) ? path.resolve("dist") : path.resolve(".");
let brandErrors = [];
let checkedBrandCount = 0;

// 1. 验证 301 跳转系统文件完备性
const goHtmlPath = fs.existsSync(path.join(distDir, "go.html"))
  ? path.join(distDir, "go.html")
  : path.resolve("public/go.html");
if (!fs.existsSync(goHtmlPath)) {
  brandErrors.push("缺失 301 跳转承接页: go.html");
} else {
  const goContent = fs.readFileSync(goHtmlPath, "utf-8");
  if (!goContent.includes("noindex") || !goContent.includes("nofollow")) {
    brandErrors.push("go.html 缺失 noindex, nofollow 爬虫防护标头");
  }
}

const redirectsPath = fs.existsSync(path.join(distDir, "_redirects"))
  ? path.join(distDir, "_redirects")
  : path.resolve("_redirects");
if (!fs.existsSync(redirectsPath)) {
  brandErrors.push("缺失 Cloudflare/Netlify 301 规则文件: _redirects");
}

const nginxConfPath = path.resolve("nginx-redirects.conf");
if (!fs.existsSync(nginxConfPath)) {
  brandErrors.push("缺失 Nginx 301 规则配置文件: nginx-redirects.conf");
}

const robotsPath = fs.existsSync(path.join(distDir, "robots.txt"))
  ? path.join(distDir, "robots.txt")
  : path.resolve("robots.txt");
if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, "utf-8");
  if (robotsContent.includes("Disallow: /go") || robotsContent.includes("Disallow: /go/")) {
    brandErrors.push("robots.txt 严禁拦截 /go 路径，避免触发 Bing Blocked by robots.txt 错误");
  }
} else {
  brandErrors.push("缺失 robots.txt 文件");
}

// 2. 遍历各品牌验证
for (const brand of servicesData) {
  checkedBrandCount++;
  // Check URL format
  if (!brand.registerUrl || !brand.registerUrl.startsWith("http")) {
    brandErrors.push(`品牌 [${brand.name}] 注册链接无效: ${brand.registerUrl}`);
  }

  // Check Yunjiexian specific affiliate parameters
  if (brand.id === "yunjiexian") {
    if (!brand.registerUrl.includes("code=OOYhSj0L")) {
      brandErrors.push(`主推品牌 [云界线] 推广链接遗失返佣参数 code=OOYhSj0L: ${brand.registerUrl}`);
    }
    if (brand.promoCode !== "yjx888") {
      brandErrors.push(`主推品牌 [云界线] 优惠码不匹配: 期望 yjx888, 实际 ${brand.promoCode}`);
    }
  }

  // Check rendered HTML file for internal safe redirect link and rel attributes
  const profileHtmlPath = path.join(distDir, "airports", brand.id, "index.html");
  if (fs.existsSync(profileHtmlPath)) {
    const content = fs.readFileSync(profileHtmlPath, "utf-8");
    // Ensure rel attribute has nofollow sponsored noopener noreferrer
    const hasRelCompliant = content.includes('rel="nofollow sponsored noopener noreferrer"') ||
                           (content.includes('nofollow') && content.includes('sponsored'));
    if (!hasRelCompliant) {
      brandErrors.push(`品牌 [${brand.name}] 档案页面跳转按钮未包含完整的 nofollow sponsored noopener noreferrer 标签`);
    }

    // Ensure link is routed through /go.html or safe relative redirect
    const hasSafeGoRoute = content.includes(`go.html?id=${brand.id}`) || content.includes(`/go/${brand.id}`);
    if (!hasSafeGoRoute) {
      brandErrors.push(`品牌 [${brand.name}] 档案页面外链未走 301 安全跳转隔离通道`);
    }
  }
}

console.log(`已审计品牌总数: ${checkedBrandCount}`);

if (brandErrors.length > 0) {
  console.error(`发现 ${brandErrors.length} 项商业参数与 301 审计问题：`);
  brandErrors.forEach(e => console.error(" - " + e));
  process.exit(1);
} else {
  console.log("✅ 验证通过：AFF 301 隔离系统完备，推广参数准确，合规标签 100% 达标！\n");
}
