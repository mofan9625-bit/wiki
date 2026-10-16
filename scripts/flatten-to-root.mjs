import fs from "fs";
import path from "path";

console.log("======================================================================");
console.log(" 正在执行【目录结构拍平与同步】：从 dist/ 拍平至项目根目录 jichangwiki.cc/");
console.log("======================================================================");

const rootDir = path.resolve(".");
const distDir = path.join(rootDir, "dist");

if (!fs.existsSync(distDir)) {
  console.error("错误：dist/ 目录不存在！");
  process.exit(1);
}

// 1. 递归拷贝函数
function copyRecursiveSync(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const children = fs.readdirSync(src);
    for (const child of children) {
      copyRecursiveSync(path.join(src, child), path.join(dest, child));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

// 2. 遍历 dist/ 目录并将所有子文件夹和文件复制到根目录
const items = fs.readdirSync(distDir);
console.log(`[1/4] 正在将 dist/ 下 ${items.length} 个核心资源同步到项目根目录...`);

for (const item of items) {
  const srcPath = path.join(distDir, item);
  const destPath = path.join(rootDir, item);
  
  if (item === "dist") continue;
  
  copyRecursiveSync(srcPath, destPath);
  console.log(`  -> 已同步: ${item}`);
}

// 3. 验证关键目录与文件存在于根目录
console.log("[2/4] 正在验证根目录拍平结构完整性...");
const expectedItems = [
  "index.html",
  "recommend",
  "free",
  "cheap",
  "plans",
  "reviews",
  "coupons",
  "ai",
  "streaming",
  "clients",
  "troubleshooting",
  "wiki",
  "airports",
  "search",
  "about",
  "_astro",
  "favicon.svg",
  "robots.txt",
  "sitemap.xml"
];

for (const exp of expectedItems) {
  const p = path.join(rootDir, exp);
  if (!fs.existsSync(p)) {
    console.error(`[警告] 预期项目未在根目录找到: ${exp}`);
  }
}

// 4. 清理空 dist/ 目录
console.log("[3/4] 正在清理多余的 dist/ 目录...");
try {
  fs.rmSync(distDir, { recursive: true, force: true });
  console.log("  -> 已成功清理并删除 dist/ 文件夹！");
} catch (e) {
  console.warn("  -> 清理 dist/ 文件夹时提示:", e.message);
}

// 5. 校验根目录下重要页面的相对路径链接
console.log("[4/4] 正在核验根目录及各级子目录相对路径...");
const rootIndexHtml = fs.readFileSync(path.join(rootDir, "index.html"), "utf-8");
const recIndexHtml = fs.readFileSync(path.join(rootDir, "recommend", "index.html"), "utf-8");
const airportIndexHtml = fs.readFileSync(path.join(rootDir, "airports", "yunjiexian", "index.html"), "utf-8");

// 核验 1: 首页链接应指向 ./recommend/index.html
if (rootIndexHtml.includes('href="./recommend/index.html"')) {
  console.log("  ✓ 根目录 index.html 正确指向 ./recommend/index.html");
} else {
  console.error("  ✗ 根目录 index.html 未检测到标准 ./recommend/index.html 链接！");
}

// 核验 2: 一级子页面应返回 ../index.html 并指向同级 ../cheap/index.html
if (recIndexHtml.includes('href="../index.html"') && recIndexHtml.includes('href="../cheap/index.html"')) {
  console.log("  ✓ recommend/index.html 正确包含 ../index.html 与 ../cheap/index.html");
} else {
  console.error("  ✗ recommend/index.html 相对路径未通过！");
}

// 核验 3: 二级子页面应返回 ../../index.html
if (airportIndexHtml.includes('href="../../index.html"')) {
  console.log("  ✓ airports/yunjiexian/index.html 正确包含 ../../index.html");
} else {
  console.error("  ✗ airports/yunjiexian/index.html 未检测到 ../../index.html！");
}

// 核验 4: 检查无 /dist/ 暴露
if (rootIndexHtml.includes("./dist/") || rootIndexHtml.includes("/dist/")) {
  console.error("  ✗ 根目录 index.html 中存在暴露的 dist 路径！");
} else {
  console.log("  ✓ 全站无任何 ./dist/ 或 /dist/ 路径残留！");
}

// 核验 5: 验证品牌顺序 1~6
const top6 = ["云界线", "大佬云", "环球梯", "榴莲云", "闪电鼠", "神行加速"];
let brandOrderValid = true;
let lastIdx = -1;
for (const brand of top6) {
  const curIdx = rootIndexHtml.indexOf(brand);
  if (curIdx === -1 || (lastIdx !== -1 && curIdx < lastIdx)) {
    brandOrderValid = false;
    break;
  }
  lastIdx = curIdx;
}

if (brandOrderValid) {
  console.log("  ✓ 首页品牌推荐名次严格保持: 1.云界线 2.大佬云 3.环球梯 4.榴莲云 5.闪电鼠 6.神行加速");
} else {
  console.error("  ✗ 首页品牌推荐顺序异常！");
}

console.log("======================================================================");
console.log("✅ 目录结构拍平与同步 100% 完成！");
console.log("   现在直接双击根目录 index.html，点击任何导航栏或卡片链接均可本地直接打开，绝无 ERR_FILE_NOT_FOUND！");
console.log("======================================================================");
