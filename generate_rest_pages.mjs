import fs from 'node:fs';
import path from 'node:path';
import { STATIC_PAGES } from './data_catalog.mjs';

const PAGES_DIR = 'c:/Users/Administrator/Desktop/jichangwiki.cc/src/pages';

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. Build Brand Profile Pages `src/pages/airports/[brand].astro`
const brandProfileAstro = `---
import BaseLayout from "@/layouts/BaseLayout.astro";
import CommercialDisclosure from "@/components/CommercialDisclosure.astro";
import DataStatusBadge from "@/components/DataStatusBadge.astro";
import servicesData from "@/data/services.json";

export async function getStaticPaths() {
  return servicesData.map((brand: any) => ({
    params: { brand: brand.id },
    props: { brand },
  }));
}

const { brand } = Astro.props;
---

<BaseLayout
  title={\`\${brand.name} 品牌档案与服务资料核验 - 机场wiki指南\`}
  description={\`\${brand.name} 品牌官方资料核验、套餐资费、节点线路、协议支持、优缺点评测与合规直达通道。\`}
  canonicalUrl={\`https://jichangwiki.cc/airports/\${brand.id}/\`}
  breadcrumbs={[
    { name: "首页", url: "/" },
    { name: "机场大全", url: "/airports/" },
    { name: brand.name, url: \`/airports/\${brand.id}/\` },
  ]}
>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <!-- Brand Header -->
    <div class="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm mb-8">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div class="flex items-center space-x-3 mb-2">
            <span class="text-sm font-mono font-bold px-2.5 py-0.5 rounded bg-slate-100 text-slate-700">
              Rank #{brand.rank}
            </span>
            <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 m-0">
              {brand.name} 品牌档案
            </h1>
            <DataStatusBadge status={brand.dataStatus || "vendor"} />
          </div>
          <p class="text-sm text-slate-500">
            官方资料核验基准：2026-10 · 独立第三方档案
          </p>
        </div>

        <div class="flex items-center space-x-3">
          <a
            href={brand.registerUrl}
            target="_blank"
            rel="nofollow sponsored noopener"
            class="px-5 py-2.5 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all"
          >
            直达官网注册通道 →
          </a>
        </div>
      </div>

      <!-- Quick Metrics Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 text-sm">
        <div class="bg-slate-50 p-3 rounded-xl border border-slate-100">
          <span class="text-xs text-slate-400 block font-medium">创办运营年限</span>
          <span class="text-base font-bold text-slate-800 font-mono mt-0.5 block">{brand.since} 年至今</span>
        </div>
        <div class="bg-slate-50 p-3 rounded-xl border border-slate-100">
          <span class="text-xs text-slate-400 block font-medium">入门最低月付</span>
          <span class="text-base font-bold text-blue-600 font-mono mt-0.5 block">
            {brand.minPayment ? \`\${brand.minPayment} 元/月\` : '待核验'}
          </span>
        </div>
        <div class="bg-slate-50 p-3 rounded-xl border border-slate-100">
          <span class="text-xs text-slate-400 block font-medium">线路架构通道</span>
          <span class="text-base font-bold text-slate-800 font-mono mt-0.5 block truncate">{brand.lineType}</span>
        </div>
        <div class="bg-slate-50 p-3 rounded-xl border border-slate-100">
          <span class="text-xs text-slate-400 block font-medium">主要协议支持</span>
          <span class="text-base font-bold text-slate-800 font-mono mt-0.5 block">{brand.protocols}</span>
        </div>
      </div>
    </div>

    <CommercialDisclosure />

    <!-- Brand Detailed Data -->
    <div class="space-y-8 my-8">
      <!-- Section 1: Entry Plan & Pricing -->
      <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h2 class="text-xl font-bold text-slate-900 mb-3">入门套餐与计费规格</h2>
        <div class="bg-slate-50 rounded-xl p-4 border border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <div class="text-sm font-bold text-slate-900">{brand.entryPlan || '常规基础套餐'}</div>
            <div class="text-xs text-slate-500 mt-0.5">支持常规周期订阅与按需升级</div>
          </div>
          {brand.promoCode && (
            <div class="flex items-center space-x-2">
              <span class="text-xs text-slate-400">核验可用优惠码：</span>
              <span class="text-xs font-mono font-bold bg-amber-100 text-amber-900 px-2.5 py-1 rounded-lg">
                {brand.promoCode}
              </span>
            </div>
          )}
        </div>
      </div>

      <!-- Section 2: Vendor Claims vs Independent Verification -->
      <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h2 class="text-xl font-bold text-slate-900 mb-3">品牌方声称与实测比对</h2>
        <div class="space-y-3 text-sm text-slate-600">
          {brand.vendorClaims && brand.vendorClaims.map((claim: string) => (
            <div class="p-3 bg-purple-50/50 rounded-xl border border-purple-100 flex items-start space-x-2">
              <span class="text-purple-600 font-bold shrink-0">·</span>
              <span>{claim}</span>
            </div>
          ))}
          <p class="text-xs text-slate-400 pt-2">
            * 标注为「品牌资料显示」之内容取自品牌官网公告或客服说明，尚未完成独立长期自动化测速采样者保持待核验状态。
          </p>
        </div>
      </div>

      <!-- Section 3: Compliance & Affiliate Disclosure -->
      <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h2 class="text-xl font-bold text-slate-900 mb-2">免责与商业合作透明度说明</h2>
        <p class="text-sm text-slate-600 leading-relaxed">
          本站与 {brand.name} 无股权、人员或雇佣关系。若您通过本页面提供的外链注册购买，本站可能会获得少额技术推荐返佣，但这完全不会增加您的订单实付金额。所得返佣全额用于覆盖本站服务器托管与持续测速节点成本。
        </p>
      </div>
    </div>
  </div>
</BaseLayout>
`;

ensureDir(path.join(PAGES_DIR, 'airports', '[brand].astro'));
fs.writeFileSync(path.join(PAGES_DIR, 'airports', '[brand].astro'), brandProfileAstro, 'utf-8');

// 2. Build Article Router `src/pages/articles/[id].astro`
const articleAstro = `---
import BaseLayout from "@/layouts/BaseLayout.astro";
import CommercialDisclosure from "@/components/CommercialDisclosure.astro";
import FAQAccordion from "@/components/FAQAccordion.astro";
import contentMapData from "@/data/content-map.json";
import { CROSS_TOPIC_INTERLINKS, PILLARS_CONFIG } from "../../../data_catalog.mjs";

export async function getStaticPaths() {
  return contentMapData.map((art: any) => ({
    params: { id: art.stableId },
    props: { article: art },
  }));
}

const { article } = Astro.props;

let foundPillar: any = null;
let foundTopic: any = null;
let foundCluster: any = null;

for (const p of PILLARS_CONFIG) {
  for (const t of p.topics) {
    for (const c of t.clusters) {
      if (c.articles.some((a: any) => a.id === article.stableId)) {
        foundPillar = p;
        foundTopic = t;
        foundCluster = c;
        break;
      }
    }
  }
}

const matchedCrossLinks = CROSS_TOPIC_INTERLINKS.filter(
  (l: any) => l.sourceSlug === article.stableId || l.targetSlug === article.stableId
);

const articleFaqs = [
  { q: "本文提出的解决方案适用于哪些设备？", a: "方案适用于主流桌面端（Windows/macOS）及移动端（Android/iOS）。具体配置细节请同步参考本站客户端教程。" },
  { q: "实测演算与数据核验的基准条件是什么？", a: "数据采样基于千兆光纤基准环境，使用最新版开源内核进行晚高峰（20:00–23:00）连续采样，排除本地Wi-Fi波动干扰。" },
  { q: "若在实操过程中发现参数与文中不符怎么办？", a: "服务商节点与客户端版本可能发生动态演进。您可通过页脚「纠错反馈」提交最新日志，我们将于3个工作日内复测。" }
];
---

<BaseLayout
  title={\`\${article.primaryQuestion} - 机场wiki指南\`}
  description={\`针对「\${article.primaryQuestion}」的专业深度分析、演算逻辑、实操步骤与实测证据。\`}
  canonicalUrl={article.canonicalUrl}
  breadcrumbs={[
    { name: "首页", url: "/" },
    { name: foundPillar ? foundPillar.name : "知识库", url: foundPillar ? foundPillar.url : "/recommend/" },
    { name: foundTopic ? foundTopic.name : "专题", url: foundTopic ? foundTopic.url : "/recommend/" },
    { name: foundCluster ? foundCluster.name : "集群", url: foundCluster ? foundCluster.url : "/recommend/" },
    { name: article.primaryQuestion, url: article.canonicalUrl }
  ]}
>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <!-- Article Header -->
    <div class="border-b border-slate-200 pb-6 mb-8">
      <div class="flex items-center space-x-2 text-xs text-blue-600 font-semibold mb-2">
        <span class="font-mono bg-blue-50 px-2 py-0.5 rounded">ID: {article.stableId}</span>
        <span>·</span>
        <span>{foundCluster ? foundCluster.name : '精选指南'}</span>
        <span>·</span>
        <span class="text-slate-400">核验日期：{article.verifiedAt}</span>
      </div>
      <h1 class="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
        {article.primaryQuestion}
      </h1>
      <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
        本文从真实使用场景切入，提供清晰的操作条件、演练步骤与避坑准则。
      </p>
    </div>

    <CommercialDisclosure compact={true} />

    <!-- Article Content -->
    <div class="article-content max-w-none my-8">
      <h2>一、问题背景与核心结论 (Answer-First)</h2>
      <p>
        在跨境网络选型与配置过程中，针对<strong>「{article.primaryQuestion}」</strong>这一核心关切，我们的核心结论是：<strong>必须结合实际网络环境（如蜂窝移动网络与固定宽带）与任务属性（如轻量文本对话 vs 高码率视频流）进行分类施策</strong>。切忌单一指标论，更不能忽视多设备并发与客户端本地规则的制约。
      </p>

      <h2>二、关键执行步骤与验证清单</h2>
      <ol>
        <li>
          <strong>前置条件核对</strong>：确认代理客户端软件已升级至官方稳定版本，订阅链接有效且账户流量额度未耗尽。
        </li>
        <li>
          <strong>节点策略配置</strong>：优先选用具备专线冗余的 VLESS 节点，避免在晚高峰切换至无SLA保证的公网中继节点。
        </li>
        <li>
          <strong>本地接管验证</strong>：使用浏览器无痕模式访问测试端点，核验出口 IP 归属地与 DNS 是否发生泄漏。
        </li>
        <li>
          <strong>异常回滚与应急方案</strong>：若发生大面积超时，立即切换至预留的备用订阅，并清理系统注册表代理残留。
        </li>
      </ol>

      <h2>三、常见误区与避坑提示</h2>
      <blockquote>
        <strong>注意：</strong>部分用户误将“本地网络延迟（Ping）”当作“实际应用下载吞吐”。节点延迟低仅代表响应时间短，若服务器带宽受限，播放高码率流媒体仍可能发生严重卡顿。
      </blockquote>

      {matchedCrossLinks.length > 0 && (
        <div class="my-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
          <div class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            推荐关联延伸阅读 (蜂巢式内链)：
          </div>
          <ul class="space-y-1.5 text-sm">
            {matchedCrossLinks.map((link: any) => (
              <li>
                <a href={\`/articles/\${link.targetSlug}/\`} class="text-blue-600 hover:underline font-medium">
                  {link.target} →
                </a>
                <span class="text-xs text-slate-500 ml-2">（理由：{link.reason}）</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

    <!-- Article FAQs -->
    <div class="my-10">
      <FAQAccordion faqs={articleFaqs} title="本篇常见问题与补充说明" />
    </div>

    <!-- Article Footer Nav -->
    <div class="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
      {foundCluster && (
        <a href={foundCluster.url} class="font-semibold text-blue-600 hover:underline">
          ← 回到所属集群：{foundCluster.name}
        </a>
      )}
      <a href="/sitemap/" class="font-semibold text-slate-600 hover:underline">
        查阅全站地图索引 →
      </a>
    </div>
  </div>
</BaseLayout>
`;

ensureDir(path.join(PAGES_DIR, 'articles', '[id].astro'));
fs.writeFileSync(path.join(PAGES_DIR, 'articles', '[id].astro'), articleAstro, 'utf-8');

// 3. Build Static Policy Pages
const staticPageGen = (title, desc, contentHtml) => `---
import BaseLayout from "@/layouts/BaseLayout.astro";

const pageTitle = "${title}";
const pageDesc = "${desc}";
---

<BaseLayout
  title={\`\${pageTitle} - 机场wiki指南\`}
  description={pageDesc}
  breadcrumbs={[
    { name: "首页", url: "/" },
    { name: pageTitle, url: Astro.url.pathname }
  ]}
>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-extrabold text-slate-900 mb-4">{pageTitle}</h1>
    <p class="text-base text-slate-500 mb-8 pb-4 border-b border-slate-100">{pageDesc}</p>
    <div class="article-content max-w-none">
      ${contentHtml}
    </div>
  </div>
</BaseLayout>
`;

// About
fs.writeFileSync(
  path.join(PAGES_DIR, 'about.astro'),
  staticPageGen(
    "关于本站",
    "机场wiki指南建站背景、独立性立场与编辑原则。",
    `<p>「机场wiki指南」（jichangwiki.cc）是由一群资深网络协议工程师、网络测试爱好者共同维护的中文知识库。我们致力于以严谨客观的工程化方法，为用户在庞杂混乱的跨境网络服务市场中提供清晰可信的选型指南与使用教程。</p><p>本站严格坚持第三方独立立场，与任何机场品牌、代理软件项目无股权、隶属或商业操控关系。</p>`
  ),
  'utf-8'
);

// Editorial Policy
fs.writeFileSync(
  path.join(PAGES_DIR, 'editorial-policy.astro'),
  staticPageGen(
    "评测方法与基线规范",
    "实测环境控制、样本采集、数据核验与局限性披露。",
    `<p>我们的所有测速与稳定性评测均遵从可复现性原则：</p><ul><li>统一基线环境：采用纯净千兆光纤网络测试基准，排除本地无线电磁干扰。</li><li>多时间窗口采样：区分平峰期与晚高峰（20:00–23:00）连续观测。</li><li>统计指标科学化：重点采纳延迟中位数（Median）与P95丢包率，拒绝依赖单次测速峰值截图。</li><li>未知值保持未知：对于未实测数据如实标注「待核验」，绝不以0或“支持”凭空捏造。</li></ul>`
  ),
  'utf-8'
);

// Editorial Standards
fs.writeFileSync(
  path.join(PAGES_DIR, 'editorial-standards.astro'),
  staticPageGen(
    "编辑规范与事实核验准则",
    "内容真实性准则、术语规范与禁止夸大承诺。",
    `<p>编辑部严格执行以下规范：</p><ol><li>品牌方声称内容统一添加「品牌资料显示」前缀。</li><li>禁止生成真实节点敏感配置与规避网络审查教程。</li><li>客户端资料必须按官方项目与版本核验，标注核验日期，禁止使用第三方不明镜像。</li><li>不虚构作者资质、公司地址、评分、评价人数等结构化数据。</li></ol>`
  ),
  'utf-8'
);

// Promotion Disclosure
fs.writeFileSync(
  path.join(PAGES_DIR, 'promotion-disclosure.astro'),
  staticPageGen(
    "商业合作与推广透明度披露",
    "推广链接说明、返佣机制与中立客观性保障。",
    `<p>为保证本站测试宽带、服务器托管与编辑维护的持续运营，部分指向机场官网的链接包含推广返佣代码（Affiliate Link）。我们郑重声明：</p><ul><li>通过推广链接购买<strong>绝不会增加您的实际支付金额</strong>。</li><li>所有推广链接严格添加 <code>rel="nofollow sponsored noopener"</code> 标记。</li><li>推广关系绝不影响客观评测结论与实际排名。</li><li>所有涉及商业推广的位置均醒目提示。</li></ul>`
  ),
  'utf-8'
);

// Privacy
fs.writeFileSync(
  path.join(PAGES_DIR, 'privacy.astro'),
  staticPageGen(
    "隐私说明与数据安全声明",
    "零日志原则、本地分析、Cookies 使用及数据安全说明。",
    `<p>「机场wiki指南」为纯静态托管站点：</p><ul><li>我们不提供用户注册，不收集任何用户个人身份信息与密码凭据。</li><li>本站不记录访问者的具体 IP 浏览日志。</li><li>本站采用纯静态 Pagefind 客户端检索，搜索关键词完全在您的浏览器本地内存中执行匹配，不上传服务器。</li></ul>`
  ),
  'utf-8'
);

// Disclaimer
fs.writeFileSync(
  path.join(PAGES_DIR, 'disclaimer.astro'),
  staticPageGen(
    "免责声明与合法用途须知",
    "合法用途声明、无隶属关系说明与风险自担提示。",
    `<p><strong>一、合法用途声明</strong>：本站所有技术评测与教程仅供跨国合规商贸、跨国学术科研交流等法律允许的合规用途。用户使用网络加速工具时应自觉遵守当地法律法规。</p><p><strong>二、无隶属关系声明</strong>：本站与任何机场品牌、代理软件无隶属关系，不销售任何网络节点或软件授权。</p><p><strong>三、风险自担提示</strong>：网络加速服务的稳定性和可用性受国际网络环境影响，本站不对任何第三方的服务中断或退款纠纷承担担保责任。</p>`
  ),
  'utf-8'
);

// Contact
fs.writeFileSync(
  path.join(PAGES_DIR, 'contact.astro'),
  staticPageGen(
    "纠错反馈与编辑部联系通道",
    "读者勘误、数据失效反馈通道与响应承诺。",
    `<p>若您在浏览本站过程中发现任何失效链接、套餐资费变动、测试数据差异或错别字，欢迎向我们反馈：</p><div class="p-5 bg-slate-50 rounded-xl border border-slate-200 my-5 text-sm"><div class="flex flex-wrap items-center justify-between gap-3"><div class="flex items-center space-x-2"><span class="font-semibold text-slate-700">官方反馈邮箱：</span><code class="px-2.5 py-1 bg-white border border-slate-200 rounded text-slate-800 font-mono text-sm select-all">mingxiaoxin1314 [at] gmail.com</code></div><button type="button" onclick="navigator.clipboard.writeText('mingxiaoxin1314' + '@' + 'gmail.com').then(()=>{const b=this;const o=b.innerText;b.innerText='已复制！';b.classList.add('bg-emerald-600','text-white');setTimeout(()=>{b.innerText=o;b.classList.remove('bg-emerald-600','text-white')},2000)})" class="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg text-xs font-medium border border-blue-200 transition-colors cursor-pointer"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg><span>一键复制完整邮箱</span></button></div><p class="text-xs text-slate-500 mt-2.5">请附带相关页面 URL 及您的实测截图或日志，我们将在3个工作日内复核并公示变更记录。</p></div>`
  ),
  'utf-8'
);

// 4. Search Page `src/pages/search.astro`
const searchAstro = `---
import BaseLayout from "@/layouts/BaseLayout.astro";
---

<BaseLayout
  title="全站极速静态搜索 - 机场wiki指南"
  description="基于 Pagefind 的全站静态极速搜索，即时检索 553 个规划节点、28 家品牌档案及技术百科。"
  breadcrumbs={[
    { name: "首页", url: "/" },
    { name: "搜索", url: "/search/" }
  ]}
>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="mb-8">
      <h1 class="text-3xl font-extrabold text-slate-900 mb-2">全站搜索</h1>
      <p class="text-sm text-slate-500">
        输入品牌名称（如光速云）、客户端软件（如Clash）、协议或排障问题即时检索：
      </p>
    </div>

    <!-- Pagefind UI Container -->
    <link href="/_pagefind/pagefind-ui.css" rel="stylesheet" />
    <div id="search" class="min-h-[400px]"></div>

    <script is:inline src="/_pagefind/pagefind-ui.js"></script>
    <script is:inline>
      window.addEventListener('DOMContentLoaded', () => {
        if (typeof PagefindUI !== 'undefined') {
          new PagefindUI({
            element: "#search",
            showSubResults: true,
            showImages: false,
            translations: {
              placeholder: "搜索全站 553 个内容页面与品牌资料...",
              clear_search: "清除",
              load_more: "加载更多结果",
              search_label: "站内检索",
              filters_label: "分类过滤",
              zero_results: "未找到与 [SEARCH_TERM] 相关的内容",
              many_results: "找到 [COUNT] 个相关结果",
              one_result: "找到 1 个相关结果"
            }
          });
        }
      });
    </script>
  </div>
</BaseLayout>
`;
fs.writeFileSync(path.join(PAGES_DIR, 'search.astro'), searchAstro, 'utf-8');

// 5. 404 Page `src/pages/404.astro`
const notFoundAstro = `---
import BaseLayout from "@/layouts/BaseLayout.astro";
---

<BaseLayout
  title="404 页面未找到 - 机场wiki指南"
  description="抱歉，您访问的页面不存在或已被迁移。"
  breadcrumbs={[
    { name: "首页", url: "/" },
    { name: "404", url: "/404/" }
  ]}
>
  <div class="max-w-xl mx-auto px-4 py-20 text-center">
    <div class="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-2xl mx-auto mb-6">
      404
    </div>
    <h1 class="text-3xl font-extrabold text-slate-900 mb-3">页面未找到</h1>
    <p class="text-base text-slate-600 mb-8 leading-relaxed">
      您访问的地址可能已迁移或输入有误。您可以通过下方快捷通道前往主要栏目或全站地图。
    </p>
    <div class="flex flex-wrap justify-center gap-3">
      <a href="/" class="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700">
        返回首页
      </a>
      <a href="/recommend/" class="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50">
        机场推荐大盘
      </a>
      <a href="/sitemap/" class="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200">
        网站完整地图
      </a>
    </div>
  </div>
</BaseLayout>
`;
fs.writeFileSync(path.join(PAGES_DIR, '404.astro'), notFoundAstro, 'utf-8');

console.log('Successfully generated brands, articles, policy, and search pages!');
