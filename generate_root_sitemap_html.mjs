import fs from "fs";
import path from "path";
import { PILLARS_CONFIG, STATIC_PAGES } from "./data_catalog.mjs";
import servicesData from "./src/data/services.json" assert { type: "json" };

const totalArticles = 432;
const totalClusters = 72;
const totalTopics = 36;
const totalPillars = 12;
const totalNodes = 1 + totalPillars + totalTopics + totalClusters + totalArticles;

const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>机场wiki指南 - 网站地图全景索引 (553 节点与 6 家核心品牌)</title>
  <meta name="description" content="机场wiki指南全站层级地图：汇集首页、12个一级栏目、36个二级专题、72个三级内容集群与432篇独立SEO文章的完整可访问索引树。">
  <link rel="canonical" href="https://jichangwiki.cc/sitemap/">
  <meta name="robots" content="index, follow">
  <style id="core-theme-css">
    :root {
      --primary: #2563eb;
      --primary-dark: #1d4ed8;
      --bg: #f8fafc;
      --card-bg: #ffffff;
      --text-main: #0f172a;
      --text-muted: #64748b;
      --border: #e2e8f0;
      --radius: 12px;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
      background: var(--bg);
      color: var(--text-main);
      line-height: 1.6;
      padding: 24px 16px 80px;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    header {
      text-align: center;
      margin-bottom: 32px;
      background: var(--card-bg);
      padding: 36px 24px;
      border-radius: var(--radius);
      border: 1px solid var(--border);
      box-shadow: 0 4px 12px rgba(0,0,0,0.03);
    }
    .badge {
      display: inline-block;
      padding: 4px 12px;
      background: #eff6ff;
      color: var(--primary);
      font-size: 13px;
      font-weight: 600;
      border-radius: 999px;
      margin-bottom: 12px;
    }
    h1 {
      font-size: 28px;
      font-weight: 800;
      color: var(--text-main);
      margin-bottom: 12px;
    }
    .desc {
      font-size: 15px;
      color: var(--text-muted);
      max-width: 760px;
      margin: 0 auto 24px;
    }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
      gap: 12px;
      margin-top: 20px;
    }
    .stat-card {
      background: #f1f5f9;
      padding: 14px 10px;
      border-radius: 8px;
      border: 1px solid #e2e8f0;
    }
    .stat-num {
      font-size: 22px;
      font-weight: 800;
      color: var(--primary);
      font-family: monospace;
    }
    .stat-label {
      font-size: 12px;
      color: var(--text-muted);
      font-weight: 500;
    }
    .preview-alert {
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      border-radius: var(--radius);
      padding: 16px 20px;
      margin-bottom: 32px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }
    .preview-alert-text {
      font-size: 14px;
      color: #1e3a8a;
    }
    .btn-group {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }
    .btn {
      display: inline-block;
      padding: 8px 16px;
      font-size: 13px;
      font-weight: 600;
      border-radius: 6px;
      text-decoration: none;
      transition: all 0.2s;
    }
    .btn-primary {
      background: var(--primary);
      color: #fff;
    }
    .btn-primary:hover { background: var(--primary-dark); }
    .btn-secondary {
      background: #fff;
      color: #334155;
      border: 1px solid #cbd5e1;
    }
    .btn-secondary:hover { background: #f8fafc; }
    .section-title {
      font-size: 20px;
      font-weight: 700;
      margin: 32px 0 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .pillar-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 24px;
      margin-bottom: 24px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.02);
    }
    .pillar-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      border-bottom: 1px solid var(--border);
      padding-bottom: 12px;
      margin-bottom: 16px;
      flex-wrap: wrap;
      gap: 8px;
    }
    .pillar-name {
      font-size: 18px;
      font-weight: 700;
      color: var(--text-main);
    }
    .pillar-slug {
      font-size: 12px;
      color: var(--primary);
      font-family: monospace;
      font-weight: 600;
    }
    .topic-box {
      background: #f8fafc;
      border: 1px solid #edf2f7;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 14px;
    }
    .topic-title {
      font-size: 15px;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 10px;
    }
    .cluster-box {
      margin-left: 8px;
      margin-bottom: 12px;
      padding-left: 12px;
      border-left: 3px solid #cbd5e1;
    }
    .cluster-title {
      font-size: 13px;
      font-weight: 600;
      color: #334155;
      margin-bottom: 8px;
    }
    .article-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 8px;
    }
    .article-item {
      font-size: 12px;
      background: #fff;
      border: 1px solid #e2e8f0;
      padding: 6px 10px;
      border-radius: 6px;
      color: #334155;
      text-decoration: none;
      display: flex;
      align-items: baseline;
      gap: 6px;
      transition: all 0.15s;
    }
    .article-item:hover {
      border-color: var(--primary);
      color: var(--primary);
      background: #f0f7ff;
    }
    .art-id {
      font-family: monospace;
      font-size: 11px;
      color: #64748b;
      font-weight: 600;
      flex-shrink: 0;
    }
    .art-title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .brand-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 12px;
    }
    .brand-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 14px 16px;
      text-decoration: none;
      color: var(--text-main);
      transition: all 0.2s;
    }
    .brand-card:hover {
      border-color: var(--primary);
      box-shadow: 0 4px 12px rgba(37,99,235,0.08);
      transform: translateY(-1px);
    }
    .brand-name {
      font-weight: 700;
      font-size: 15px;
      margin-bottom: 4px;
      color: var(--primary);
    }
    .brand-meta {
      font-size: 12px;
      color: var(--text-muted);
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="badge">机场wiki指南 · 全站架构地图</div>
      <h1>网站完整地图与内容拓扑全景</h1>
      <p class="desc">
        jichangwiki.cc 规划的 553 个内容节点（1 首页 + 12 栏目 + 36 专题 + 72 集群 + 432 文章）与 6 家核心品牌档案可在此直接查阅与离线索引。
      </p>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-num">${totalNodes}</div>
          <div class="stat-label">规划内容节点</div>
        </div>
        <div class="stat-card">
          <div class="stat-num">${totalPillars}</div>
          <div class="stat-label">一级栏目</div>
        </div>
        <div class="stat-card">
          <div class="stat-num">${totalTopics}</div>
          <div class="stat-label">二级专题</div>
        </div>
        <div class="stat-card">
          <div class="stat-num">${totalClusters}</div>
          <div class="stat-label">三级集群</div>
        </div>
        <div class="stat-card">
          <div class="stat-num">${totalArticles}</div>
          <div class="stat-label">独立文章</div>
        </div>
        <div class="stat-card">
          <div class="stat-num">${servicesData.length}</div>
          <div class="stat-label">已录入品牌</div>
        </div>
      </div>
    </header>

    <div class="preview-alert">
      <div class="preview-alert-text">
        <strong>离线与在线全兼容导航：</strong>
        点击以下按钮即可直接浏览首页或标准 XML 地图。
      </div>
      <div class="btn-group">
        <a href="./index.html" class="btn btn-primary">访问首页</a>
        <a href="./sitemap/index.html" class="btn btn-secondary">全站地图索引</a>
        <a href="./sitemap.xml" class="btn btn-secondary" target="_blank">标准 sitemap.xml</a>
      </div>
    </div>

    <div class="section-title">
      <span>📚 12 个一级栏目与 553 节点层级拓扑</span>
    </div>

    ${PILLARS_CONFIG.map(p => `
      <div class="pillar-card">
        <div class="pillar-header">
          <div>
            <span class="pillar-name">${p.name}</span>
            <span style="font-size: 13px; color: #64748b; margin-left: 8px;">${p.desc || p.duty}</span>
          </div>
          <a href="./${p.slug}/index.html" class="pillar-slug">/${p.slug}/ →</a>
        </div>

        ${p.topics.map(t => `
          <div class="topic-box">
            <div class="topic-title">
              📌 <strong>${t.name}</strong> 
              <span style="font-size: 12px; color: #64748b;">(${t.desc})</span>
              <a href="./${p.slug}/${t.slug}/index.html" style="font-size: 12px; color: #2563eb; margin-left: 8px; text-decoration: none;">查看专题 →</a>
            </div>

            ${t.clusters.map(c => `
              <div class="cluster-box">
                <div class="cluster-title">
                  🔹 <strong>${c.name}</strong>
                  <span style="font-size: 11px; color: #64748b;">(编号: ${c.id})</span>
                  <a href="./${p.slug}/${t.slug}/${c.slug}/index.html" style="font-size: 11px; color: #2563eb; margin-left: 6px; text-decoration: none;">集群详情 →</a>
                </div>
                <div class="article-grid">
                  ${(c.articles || []).map(a => `
                    <a href="./articles/${a.id}/index.html" class="article-item" title="${a.title}">
                      <span class="art-id">[${a.id}]</span>
                      <span class="art-title">${a.title}</span>
                    </a>
                  `).join("")}
                </div>
              </div>
            `).join("")}
          </div>
        `).join("")}
      </div>
    `).join("")}

    <div class="section-title">
      <span>🏢 6 家核心品牌档案索引</span>
    </div>
    <div class="brand-grid">
      ${servicesData.map(b => `
        <a href="./airports/${b.id}/index.html" class="brand-card">
          <div class="brand-name">${b.name} (${b.id})</div>
          <div class="brand-meta">
            ${b.lineType} · ${b.protocols || "VLESS"}<br>
            资费: ${b.entryPlan || (b.minPayment + '元/月')}
          </div>
        </a>
      `).join("")}
    </div>

    <div class="section-title" style="margin-top: 36px;">
      <span>⚖️ 政策与合规页面</span>
    </div>
    <div class="brand-grid">
      ${STATIC_PAGES.map(sp => {
        const linkPath = sp.url.endsWith(".html") ? `.${sp.url}` : `.${sp.url}index.html`;
        return `
        <a href="${linkPath}" class="brand-card">
          <div class="brand-name">${sp.title}</div>
          <div class="brand-meta">${sp.url}</div>
        </a>
      `}).join("")}
    </div>
  </div>
</body>
</html>
`;

fs.writeFileSync("网站地图.html", html, "utf-8");
fs.writeFileSync("【全站553页面网站地图】.html", html, "utf-8");
if (fs.existsSync("dist")) {
  fs.writeFileSync("dist/sitemap.html", html, "utf-8");
  fs.writeFileSync("dist/网站地图.html", html, "utf-8");
}

console.log("Visual sitemap HTML generated at root and dist successfully!");
