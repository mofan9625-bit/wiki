# 机场wiki指南 — 完整技术实施与合规规格说明书

## 一、项目技术栈硬约束
- **核心框架**：Astro 4.x (TypeScript 严格模式)
- **内容集合**：Astro Content Collections (Markdown / MDX)
- **样式系统**：Tailwind CSS + 轻量原生 CSS (白底 + 蓝灰主色卡片博客系统)
- **站内搜索**：Pagefind 静态搜索引擎 (`/search/` 页面 + Header 模态检索)
- **Sitemap & RSS**：`@astrojs/sitemap` 自动生成，过滤 draft 草稿；`@astrojs/rss` 发布更新源
- **部署环境**：Apache 静态托管 (`dist/` 作为 DocumentRoot + `.htaccess` 规则配置)
- **图标系统**：`astro-icon` + Lucide Icons

---

## 二、视觉风格系统与 CSS 变量规范

```css
:root {
  --text-h1: 36px;
  --text-h2: 26px;
  --text-h3: 20px;
  --text-h4: 18px;

  --text-body: 17px;
  --text-body-mobile: 16px;
  --text-lead: 19px;

  --text-label: 14px;
  --text-meta: 13px;
  --text-caption: 12px;

  --leading-tight: 1.3;
  --leading-snug: 1.5;
  --leading-normal: 1.7;
  --leading-relaxed: 1.85;

  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;

  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI",
    "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-mono: "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace;

  --bg-page: #ffffff;
  --bg-subtle: #f8fafc;
  --bg-card: #ffffff;
  --bg-elevated: #f1f5f9;
  --bg-hover: #f8fafc;

  --text-primary: #0f172a;
  --text-body: #334155;
  --text-muted: #64748b;
  --text-faint: #94a3b8;

  --accent: #2563eb;
  --accent-hover: #1d4ed8;
  --accent-light: #60a5fa;
  --accent-subtle: #eff6ff;
  --accent-strong: #1e40af;

  --border-subtle: #f1f5f9;
  --border-default: #e2e8f0;
  --border-strong: #cbd5e1;

  --status-good: #16a34a;
  --status-mid: #d97706;
  --status-low: #dc2626;
  --status-vendor: #8b5cf6;
  --status-measured: #2563eb;
  --status-untested: #94a3b8;

  --shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.04);
  --shadow-md: 0 4px 12px rgba(15, 23, 42, 0.06);
  --shadow-lg: 0 8px 24px rgba(15, 23, 42, 0.08);
}
```

### 排版与可访问性底线
- 正文桌面端字号严格保持 **17px** (移动端 16px)
- 浅色背景下正文对比度必须 **≥ 7:1** (WCAG AAA 级标准)
- 所有数据报表、延迟、吞吐及价格数值必须使用等宽字体 (`--font-mono`) 并开启 `font-variant-numeric: tabular-nums`
- 页面任何元素在 320px–1920px 宽度下均**不得产生水平滚动溢出** (表格允许自身内部横向平滑滚动)

---

## 三、合规披露与推广链接审计规则 (最高优先级)

1. **无隶属关系全站声明**：Header 导航副标题、全站 Footer、关于页、免责声明页醒目标注“本站为独立第三方选型指南，与任何机场品牌、网络代理服务商或开源软件无隶属关系”。
2. **合法用途约束提示**：页脚展示“请严格遵守当地法律法规，本站内容仅供科研学习、海外合规贸易及学术交流等合法用途”。
3. **推广链接处理**：
   - 所有品牌商注册链接、优惠购买外链必须带有：`target="_blank" rel="nofollow sponsored noopener"`
   - 链接卡片附近必须固定展示披露说明：**“含推广链接，通过链接注册可能为本站带来佣金，不影响用户支付价格”**。
   - **重构时严格保留原有查询参数及邀请码片段**（例如：`https://sahude.gsyvipaff.com/#/?code=keqgvT5Y` 中的 `code=keqgvT5Y`）。
4. **数据真实性标注**：
   - 数据字段必须标注 `dataStatus: "vendor" | "measured" | "unverified"`
   - 品牌方主张一律添加前缀“品牌资料显示”
   - 未实测字段显示“待核验”Badge，未知值保持未知，严禁用“0”或“支持”混淆视听。
5. **严禁生成内容**：
   - 严禁包含真实可用节点配置参数、真实订阅Base64串、破解绕过授权内容、翻墙翻网审查教学。
   - 教程示范统一使用结构化安全占位符（如 `https://subscribe.example.com/api/v1/client/subscribe?token=(占位)`）。

---

## 四、GEO / AEO 优化实施规范

1. **Answer-First 结构模型**：
   - 关键章节均以“核心问题 → 直接答案 → 适用条件 → 比较依据 → 证据来源 → 下一步行动”组织。
   - 回答应具有独立理解性，不使用“如上所述”、“大家心知肚明”等代词。
2. **结构化数据 (JSON-LD)**：
   - 首页：`WebSite`
   - 一级与二级专题：`CollectionPage` + `ItemList`
   - 独立文章：`Article` 或 `TechArticle`
   - 分类链路：`BreadcrumbList`
   - 品牌服务：`Service`
   - 客户端软件：`SoftwareApplication`
   - 实测验收：具备事实基础的 `Review`
   - **禁止虚构作者资质、公司地址、虚假评分或评论人数**。
3. **搜索引擎与 AI 爬虫访问控制**：
   - 独立配置 `robots.txt`，规范对待 Googlebot、Bingbot、OAI-SearchBot 与 PerplexityBot。
   - 明确 FAQ 结构化数据在现代搜索引擎中的语义角色，不将其当作收录保证。

---

## 五、7 个自动化质量校验脚本规格

| 脚本文件 | 核心校验职责 | 阻断构建条件 |
|---|---|---|
| `scripts/validate-content.mjs` | 检查全站 Frontmatter、重复 slug、缺失 title/desc、占位残留 | 存在必填字段缺失或非法字符 |
| `scripts/check-links.mjs` | 检查全站内部链接、404 死链、孤立无父级页面、空锚文本 | 存在内部死链或指向草稿链接 |
| `scripts/check-seo.mjs` | 检查 Title/H1 唯一性、TL;DR、H2数量(≥5)、表格/步骤(≥2)、字数(≥7000) | SEO 结构不达标 |
| `scripts/check-typography.mjs` | 检查字体层级、硬编码字体像素、对比度 ≥ 7:1、等宽数字使用 | 字号过小或对比度不合规 |
| `scripts/check-pillar-hub.mjs` | 检查 12 个一级栏目：字数 ≥ 7000、巨幅表 ≥ 8x8、决策树 ≥ 3层、FAQ ≥ 15、内链 ≥ 30 | Pillar Hub 深度不足 |
| `scripts/check-content-map.mjs` | 检查 553 个规划节点唯一性、432 篇文章 ID 唯一、无悬空引用、草稿不入公开 sitemap | 内容地图冲突或悬空 |
| `scripts/audit-brand-links.mjs` | 检查推广链接 rel 属性、商业披露提示、原始邀请码保留情况 | 推广链接未合规标记或邀请码丢失 |

---

## 六、Apache 静态部署规范 (`.htaccess`)
- 强制 HTTPS 重定向
- 统一规范去除 www
- 移除尾部未匹配斜杠或保持目录斜杠一致性
- 配置 404 错误页指向 `/404.html`
- 开启 Gzip / Deflate 压缩 (`text/html`, `text/css`, `application/javascript`, `application/json`)
- 配置静态资产持久缓存 (`Cache-Control: max-age=31536000, immutable` 针对构建 Hash 文件)
- 安全响应头：`X-Content-Type-Options: nosniff`、`Referrer-Policy: strict-origin-when-cross-origin`、`Permissions-Policy`
- 禁用目录遍历：`Options -Indexes`
