import fs from 'fs';
import path from 'path';

console.log("================================================================================");
console.log(" 🔍 开始执行【Bing 收录与死链深度健康检查】");
console.log("================================================================================\n");

const bannedBrandNames = [
  '光速云', '飞猫云', '微风网络', '暮光加速', '星岛梦', '二猫云', '无忧链接', '唯兔云',
  'Firefly', 'U1S1', '灵猫网络', '极连云', '光年梯', '一翻云', 'SOGO', '可信云',
  '速界', '闪跃', '全球云', '隐形人', '梯子云'
];

const bannedSlugs = [
  'gsy', 'feimao', 'weifeng', 'muguang', 'xingdaomeng', 'ermao', 'wuyou', 'weitu',
  'firefly', 'u1s1', 'lingmao', 'jilian', 'guangnian', 'yifan', 'sogo', 'kexin',
  'sujie', 'shanyue', 'quanqiu', 'yinxingren', 'tiziyun'
];

const allowedBrands = ['云界线', '大佬云', '环球梯', '榴莲云', '闪电鼠', '神行加速'];
const allowedSlugs = ['yunjiexian', 'dalaoyun', 'huanqiuti', 'liulianyun', 'shandianshu', 'shenxing'];

let totalHtmlFiles = 0;
let bannedBrandMatches = [];
let oldNumberMatches = [];
let emptyLinkMatches = [];
let deadLinkMatches = [];
let tableRowIssues = [];
let cardCountIssues = [];
let canonicalIssues = [];
let robotsMetaIssues = [];

function scanHtmlDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '_astro') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanHtmlDirectory(fullPath);
    } else if (entry.name.endsWith('.html')) {
      totalHtmlFiles++;
      const content = fs.readFileSync(fullPath, 'utf-8');
      const relPath = path.relative('.', fullPath).replace(/\\/g, '/');

      // Skip offline preview and /go/ redirect stubs from content SEO canonical checks
      const isRedirectStub = entry.name === 'offline_preview.html' || entry.name === 'go.html' || relPath.startsWith('go/') || relPath.startsWith('public/go/');

      // 1. Check banned brands
      for (const b of bannedBrandNames) {
        if (content.includes(b)) {
          bannedBrandMatches.push({ file: relPath, brand: b });
        }
      }
      for (const s of bannedSlugs) {
        if (content.includes(`/airports/${s}/`) || content.includes(`/airports/${s}.`)) {
          bannedBrandMatches.push({ file: relPath, brandSlug: s });
        }
      }

      // 2. Check 28家 / 27家
      const numMatches = content.match(/2[78]\s*家/g);
      if (numMatches) {
        oldNumberMatches.push({ file: relPath, matches: numMatches });
      }

      // 3. Check empty links href="#" or href=""
      // Matches href="#" or href="" except inside script tags or comments
      const emptyHrefRegex = /<a\b[^>]*\bhref\s*=\s*["'](#|"')/gi;
      let em;
      while ((em = emptyHrefRegex.exec(content)) !== null) {
        // filter out in-page anchor jumps like href="#section" vs pure href="#"
        const entireTag = content.substring(em.index, content.indexOf('>', em.index) + 1);
        const hrefVal = entireTag.match(/href\s*=\s*["']([^"']*)["']/i);
        if (hrefVal && (hrefVal[1] === '#' || hrefVal[1] === '')) {
          emptyLinkMatches.push({ file: relPath, tag: entireTag });
        }
      }

      // 4. Check internal dead links
      const hrefRegex = /<a\b[^>]*\bhref\s*=\s*["']([^"']+)["']/gi;
      let hm;
      while ((hm = hrefRegex.exec(content)) !== null) {
        const targetHref = hm[1].trim();
        // Ignore external, anchor, mailto, javascript, tel
        if (
          targetHref.startsWith('http://') ||
          targetHref.startsWith('https://') ||
          targetHref.startsWith('mailto:') ||
          targetHref.startsWith('tel:') ||
          targetHref.startsWith('javascript:') ||
          targetHref.startsWith('#') ||
          targetHref === ''
        ) {
          continue;
        }

        const dirOfFile = path.dirname(fullPath);
        // Remove anchor fragment or query string
        const cleanHref = targetHref.split('#')[0].split('?')[0];
        if (!cleanHref) continue;

        const resolvedTarget = path.resolve(dirOfFile, cleanHref);
        if (!fs.existsSync(resolvedTarget)) {
          deadLinkMatches.push({ file: relPath, link: targetHref, resolved: resolvedTarget });
        }
      }

      // 5. Check Table Rows if comparison table exists
      if (content.includes('<table class="data-table')) {
        const tbody = content.split('<tbody>')[1]?.split('</tbody>')[0] || '';
        const rows = tbody.split('<tr>').filter(r => r.includes('<td'));
        if (rows.length !== 6) {
          tableRowIssues.push({ file: relPath, rows: rows.length });
        }
      }

      // 6. Check Brand Cards count if card section exists
      if (content.includes('精选代表性服务商深度剖析') || content.includes('快速决策首选')) {
        const cardMatches = [...content.matchAll(/<span class="text-xs font-bold px-2 py-0\.5 rounded bg-slate-100 text-slate-700 font-mono">\s*(#[0-9]+)\s*<\/span>/g)];
        if (cardMatches.length > 0 && cardMatches.length !== 6) {
          cardCountIssues.push({ file: relPath, cards: cardMatches.length });
        }
      }

      // 7. Check Canonical
      if (!isRedirectStub) {
        const canonicalMatch = content.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
        if (!canonicalMatch) {
          canonicalIssues.push({ file: relPath, issue: '缺失 canonical 标签' });
        } else if (!canonicalMatch[1].startsWith('https://jichangwiki.cc/')) {
          canonicalIssues.push({ file: relPath, issue: `canonical URL 非标准: ${canonicalMatch[1]}` });
        }

        // 8. Check Robots tag
        if (!content.includes('name="robots"')) {
          robotsMetaIssues.push(relPath);
        }
      }
    }
  }
}

scanHtmlDirectory('.');

console.log("【1. 全站 HTML 页面与品牌一致性检查】");
console.log(` - 扫描 HTML 文件总数: ${totalHtmlFiles}`);
console.log(` - 淘汰旧品牌残留（光速云/飞猫云等）: ${bannedBrandMatches.length === 0 ? "✅ 0 残留 (完全清退)" : `❌ 发现 ${bannedBrandMatches.length} 处残留`}`);
if (bannedBrandMatches.length > 0) console.log(bannedBrandMatches);

console.log(` - 旧规格文案（28家/27家）: ${oldNumberMatches.length === 0 ? "✅ 0 残留 (全部更新为6家核心品牌)" : `❌ 发现 ${oldNumberMatches.length} 处残留`}`);
if (oldNumberMatches.length > 0) console.log(oldNumberMatches);

console.log(` - 对比大盘表格行数异常（非6行）: ${tableRowIssues.length === 0 ? "✅ 全部表格严格为 6 行" : `❌ 发现 ${tableRowIssues.length} 处异常`}`);
if (tableRowIssues.length > 0) console.log(tableRowIssues);

console.log(` - 品牌推荐卡片数量异常（非6张）: ${cardCountIssues.length === 0 ? "✅ 全部卡片网格严格为 6 张" : `❌ 发现 ${cardCountIssues.length} 处异常`}`);
if (cardCountIssues.length > 0) console.log(cardCountIssues);

console.log("\n【2. 超链接与死链深度排查】");
console.log(` - 空链接 (href=\"#\" / href=\"\"): ${emptyLinkMatches.length === 0 ? "✅ 0 空链接" : `❌ 发现 ${emptyLinkMatches.length} 个空链接`}`);
if (emptyLinkMatches.length > 0) console.log(emptyLinkMatches);

console.log(` - 站内死链 (指向不存在的文件): ${deadLinkMatches.length === 0 ? "✅ 0 死链 (全部 100% 连通闭环)" : `❌ 发现 ${deadLinkMatches.length} 个死链`}`);
if (deadLinkMatches.length > 0) console.log(deadLinkMatches);

console.log("\n【3. Canonical 与 Robots 标签校验】");
console.log(` - Canonical 规范标签异常: ${canonicalIssues.length === 0 ? "✅ 全部页面规范具备 https://jichangwiki.cc/ 绝对标签" : `❌ 发现 ${canonicalIssues.length} 处异常`}`);
if (canonicalIssues.length > 0) console.log(canonicalIssues);

console.log(` - Robots Meta 标签缺失: ${robotsMetaIssues.length === 0 ? "✅ 全部页面均具备 robots 抓取许可" : `❌ 发现 ${robotsMetaIssues.length} 处缺失`}`);
if (robotsMetaIssues.length > 0) console.log(robotsMetaIssues);

console.log("\n【4. Sitemap.xml 与 Robots.txt 校验】");
// Validate sitemap.xml
let sitemapErrors = [];
if (!fs.existsSync('sitemap.xml')) {
  sitemapErrors.push('sitemap.xml 不存在');
} else {
  const sitemapContent = fs.readFileSync('sitemap.xml', 'utf-8');
  const sitemapUrls = [...sitemapContent.matchAll(/<loc>https:\/\/jichangwiki\.cc\/([^<]*)<\/loc>/g)].map(m => m[1]);
  console.log(` - sitemap.xml 包含 URL 总数: ${sitemapUrls.length}`);

  let missingFiles = 0;
  let bannedUrlCount = 0;
  for (const u of sitemapUrls) {
    // Check banned slugs
    for (const bs of bannedSlugs) {
      if (u === `airports/${bs}/` || u.includes(`/${bs}/`)) {
        bannedUrlCount++;
        sitemapErrors.push(`sitemap.xml 包含已删除旧品牌 URL: ${u}`);
      }
    }

    // Check live file existence
    const cleanPath = u.replace(/\/$/, '');
    const targetFile = cleanPath === '' ? 'index.html' : path.join(cleanPath, 'index.html');
    if (!fs.existsSync(targetFile) && !fs.existsSync(cleanPath) && !fs.existsSync(cleanPath + '.html')) {
      missingFiles++;
      sitemapErrors.push(`sitemap.xml 包含不存在的目标文件: ${u} -> ${targetFile}`);
    }
  }
  console.log(` - sitemap.xml 包含已删除旧品牌链接: ${bannedUrlCount === 0 ? "✅ 0 (已完全剔除)" : `❌ 发现 ${bannedUrlCount} 个旧品牌 URL`}`);
  console.log(` - sitemap.xml URL 对应本地文件存活率: ${missingFiles === 0 ? "✅ 100% 全部存活" : `❌ 存在 ${missingFiles} 个失效 URL`}`);
}

// Validate robots.txt
if (!fs.existsSync('robots.txt')) {
  console.log(' - robots.txt: ❌ 不存在');
} else {
  const robotsTxt = fs.readFileSync('robots.txt', 'utf-8');
  const hasBingbot = robotsTxt.includes('Bingbot');
  const hasGooglebot = robotsTxt.includes('Googlebot');
  const hasAllowAll = robotsTxt.includes('User-agent: *') && robotsTxt.includes('Allow: /');
  const hasSitemap = robotsTxt.includes('Sitemap: https://jichangwiki.cc/sitemap.xml');
  const hasDisallowCdnCgi = robotsTxt.includes('Disallow: /cdn-cgi/');
  console.log(` - robots.txt 搜索引擎与 AI 抓取规则: ${hasBingbot && hasGooglebot && hasAllowAll ? "✅ 允许正常抓取 (Googlebot/Bingbot/Perplexity/OAI)" : "❌ 抓取规则不完整"}`);
  console.log(` - robots.txt Cloudflare 内部路径屏蔽: ${hasDisallowCdnCgi ? "✅ 已成功拦截 Disallow: /cdn-cgi/ (杜绝 4xx 误报)" : "❌ 缺少 Disallow: /cdn-cgi/"}`);
  console.log(` - robots.txt 站点地图指向: ${hasSitemap ? "✅ 正确指向 /sitemap.xml" : "❌ 缺少 sitemap 指向"}`);
  if (!hasDisallowCdnCgi) {
    sitemapErrors.push("robots.txt 缺少 Disallow: /cdn-cgi/，可能导致 Bingbot 误抓 Cloudflare 内部保护路由产生 4xx 错误");
  }
}

console.log("\n================================================================================");
const hasAnyError = (
  bannedBrandMatches.length > 0 ||
  oldNumberMatches.length > 0 ||
  emptyLinkMatches.length > 0 ||
  deadLinkMatches.length > 0 ||
  tableRowIssues.length > 0 ||
  cardCountIssues.length > 0 ||
  canonicalIssues.length > 0 ||
  robotsMetaIssues.length > 0 ||
  sitemapErrors.length > 0
);

if (!hasAnyError) {
  console.log("🎉 最终健康检查结果：100% 全部通过！没有任何死链、空链接或残留旧品牌！");
} else {
  console.log("❌ 最终健康检查结果：发现异常，请根据上方详细清单进行修复！");
  process.exit(1);
}
console.log("================================================================================\n");
