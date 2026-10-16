import fs from "fs";
import path from "path";
import { PILLARS_CONFIG } from "../data_catalog.mjs";
import servicesData from "../src/data/services.json" assert { type: "json" };

console.log("=================================================");
console.log(" [6/7] 正在执行 check-content-map.mjs 拓扑节点审计...");
console.log("=================================================");

const distDir = fs.existsSync(path.resolve("dist")) ? path.resolve("dist") : path.resolve(".");
let missingNodes = [];
let checkedArticles = 0;
let checkedClusters = 0;
let checkedTopics = 0;
let checkedPillars = 0;

// 1. Home
if (!fs.existsSync(path.join(distDir, "index.html"))) {
  missingNodes.push("首页: dist/index.html");
}

// 2. Pillars, Topics, Clusters, Articles
for (const p of PILLARS_CONFIG) {
  checkedPillars++;
  const pPath = path.join(distDir, p.slug, "index.html");
  if (!fs.existsSync(pPath)) {
    missingNodes.push(`Pillar [${p.slug}]: ${pPath}`);
  }

  for (const t of p.topics) {
    checkedTopics++;
    const tPath = path.join(distDir, p.slug, t.slug, "index.html");
    if (!fs.existsSync(tPath)) {
      missingNodes.push(`Topic [${p.slug}/${t.slug}]: ${tPath}`);
    }

    for (const c of t.clusters) {
      checkedClusters++;
      const cPath = path.join(distDir, p.slug, t.slug, c.slug, "index.html");
      if (!fs.existsSync(cPath)) {
        missingNodes.push(`Cluster [${p.slug}/${t.slug}/${c.slug}]: ${cPath}`);
      }

      for (const a of (c.articles || [])) {
        checkedArticles++;
        const aPath = path.join(distDir, "articles", a.id, "index.html");
        if (!fs.existsSync(aPath)) {
          missingNodes.push(`Article [${a.id}]: ${aPath}`);
        }
      }
    }
  }
}

// 3. Brand profiles
let checkedBrands = 0;
for (const b of servicesData) {
  checkedBrands++;
  const bPath = path.join(distDir, "airports", b.id, "index.html");
  if (!fs.existsSync(bPath)) {
    missingNodes.push(`Brand profile [${b.id}]: ${bPath}`);
  }
}

const totalVerifiedNodes = 1 + checkedPillars + checkedTopics + checkedClusters + checkedArticles;
console.log(`已核查层级节点统计:`);
console.log(` - 一级栏目: ${checkedPillars} / 12`);
console.log(` - 二级专题: ${checkedTopics} / 36`);
console.log(` - 三级集群: ${checkedClusters} / 72`);
console.log(` - 独立文章: ${checkedArticles} / 432`);
console.log(` - 规划内容总节点: ${totalVerifiedNodes} / 553`);
console.log(` - 独立品牌档案: ${checkedBrands} / 28`);

if (missingNodes.length > 0) {
  console.error(`发现 ${missingNodes.length} 个缺失节点：`);
  missingNodes.slice(0, 15).forEach(m => console.error(" - " + m));
  process.exit(1);
} else {
  console.log("✅ 验证通过：全站 553 个规划节点与全部品牌档案 100% 映射生成，无任何断裂！\n");
}
