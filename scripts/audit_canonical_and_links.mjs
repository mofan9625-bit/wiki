import fs from 'fs';
import path from 'path';

console.log("=================================================");
console.log(" 正在执行全站 Canonical 标签与链接全面审计...");
console.log("=================================================");

let totalHtml = 0;
let canonicalErrors = [];
let deadLinks = [];
let robotsMissing = 0;

function scan(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '_astro') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scan(full);
    } else if (entry.name.endsWith('.html')) {
      // Exclude utility redirect files if any
      if (entry.name === 'offline_preview.html') continue;

      totalHtml++;
      const content = fs.readFileSync(full, 'utf-8');
      const relPath = path.relative('.', full).replace(/\\/g, '/');

      // 1. Check Canonical
      const canonicalMatch = content.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
      if (!canonicalMatch) {
        canonicalErrors.push(`页面缺少 canonical 标签: ${relPath}`);
      } else {
        const canonicalUrl = canonicalMatch[1];
        if (!canonicalUrl.startsWith("https://jichangwiki.cc/")) {
          canonicalErrors.push(`页面 canonical 非绝对根路径: ${relPath} -> ${canonicalUrl}`);
        }
      }

      // 2. Check Robots tag
      if (!content.includes('name="robots"')) {
        robotsMissing++;
      }

      // 3. Check internal links
      const hrefMatches = [...content.matchAll(/href="([^"#][^"]*)"/g)].map(m => m[1]);
      for (const href of hrefMatches) {
        if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('javascript:')) {
          continue;
        }

        // Relative link resolution
        const dirOfFile = path.dirname(full);
        const targetResolved = path.resolve(dirOfFile, href);

        if (!fs.existsSync(targetResolved)) {
          // Check if it's missing /index.html or similar
          deadLinks.push({ source: relPath, target: href });
        }
      }
    }
  }
}

scan('.');

console.log(`已审计 HTML 文件总量: ${totalHtml}`);
console.log(`Canonical 异常数量: ${canonicalErrors.length}`);
console.log(`Robots 标签缺失数量: ${robotsMissing}`);
console.log(`站内死链数量: ${deadLinks.length}`);

if (canonicalErrors.length > 0) {
  console.log('--- Canonical 错误列表 (前 10 项) ---');
  canonicalErrors.slice(0, 10).forEach(e => console.log(' - ' + e));
}

if (deadLinks.length > 0) {
  console.log('--- 死链列表 (前 10 项) ---');
  deadLinks.slice(0, 10).forEach(e => console.log(` - ${e.source} -> ${e.target}`));
}

if (canonicalErrors.length === 0 && deadLinks.length === 0) {
  console.log("=================================================");
  console.log("✅ 验证 100% 通过！");
  console.log(" - 全站所有 HTML 均具备标准 https://jichangwiki.cc/ 绝对 canonical 标签；");
  console.log(" - 全站站内相对超链接 0 死链，全部连通有效；");
  console.log(" - Bing 搜索引擎蜘蛛抓取路径畅通无阻，无任何 404 隐患！");
  console.log("=================================================");
} else {
  process.exit(1);
}
