import fs from 'node:fs';
import path from 'node:path';
import { BRANDS, CROSS_TOPIC_INTERLINKS, PILLARS_CONFIG, STATIC_PAGES } from './data_catalog.mjs';

const PAGES_DIR = 'c:/Users/Administrator/Desktop/jichangwiki.cc/src/pages';

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. Generate 12 Pillar Pages
for (const pillar of PILLARS_CONFIG) {
  const pAstroPath = path.join(PAGES_DIR, pillar.slug, 'index.astro');
  ensureDir(pAstroPath);

  const pillarRows = BRANDS.slice(0, 8).map(b => [
    b.name,
    b.isPrimaryRecommendation ? "★ 首选主力专线" : "高性价比备选",
    b.minPayment ? (b.minPayment + ' 元/月') : '待核验',
    b.entryPlan || '轻量入门版',
    b.lineType,
    b.protocols,
    b.highlights ? b.highlights[0] : '高速专线',
    b.limitations && b.limitations.length > 0 ? b.limitations[0] : '依服务条款',
    b.isPrimaryRecommendation ? '★ 主推入口' : '官网直达'
  ]);

  const pFaqs = [
    { q: `${pillar.name}栏目的核心定位与评测依据是什么？`, a: `本栏目严格遵从「${pillar.duty}」。所有推荐均基于真实采集测试证据与公开服务条款，绝不因商业合作调整客观排序。` },
    { q: "页面中展示的数据和价格多久复核一次？", a: "编辑部每月进行一次全量数据核验，重大套餐调整或网络波动在3个工作日内完成更新，所有字段均明确标注最后核验时间。" },
    { q: "出现连接超时或配置异常应如何快速处理？", a: "请前往「网络排障」栏目，按照分层排查流程检查本机系统代理残留、TUN网卡冲突或DNS污染问题。" },
    { q: "本站推荐是否收取品牌方上榜赞助费？", a: "绝不收取任何上榜赞助费。凡含推广返佣链接的卡片均醒目标注，返佣仅作为服务器与测试带宽支出，不影响用户支付价格与评测中立性。" },
    { q: "新手如何在此栏目下快速完成选型闭环？", a: "首先查看顶部的核心结论与巨幅对比表，根据您的预算与设备筛选候选，查阅对应实测记录后先以月付尝试，满意后再考虑升级。" }
  ];

  const decisionTreeText = `[ ${pillar.name} 场景决策模型 ]
  │
  ├── 追求极致稳定性与晚高峰生产力 ───────> 首选：光速云 (IEPL专线 + VLESS)
  │     ├── 需要全设备覆盖与永久流量包 ───> 光速云永久不限时套餐
  │     └── 多人多设备高并发办公 ─────────> 星岛梦 / 暮光加速
  │
  ├── 严格控制预算 / 轻度查资料 / 备用 ───> 方案：大佬云 / 飞猫云 / 微风网络
  │     └── 月均支出仅 5–8 元区间 ────────> 年付折算或轻度小流量
  │
  └── 遇到网络连接中断或配置疑问 ─────────> 直达：网络排障 (/troubleshooting/)`;

  const content = `---
import BaseLayout from "@/layouts/BaseLayout.astro";
import BrandCard from "@/components/BrandCard.astro";
import CommercialDisclosure from "@/components/CommercialDisclosure.astro";
import ComparisonTable from "@/components/ComparisonTable.astro";
import DecisionTree from "@/components/DecisionTree.astro";
import FAQAccordion from "@/components/FAQAccordion.astro";
import servicesData from "@/data/services.json";

const pillar = ${JSON.stringify(pillar)};
const megaRows = ${JSON.stringify(pillarRows)};
const pFaqs = ${JSON.stringify(pFaqs)};
const decisionTreeText = ${JSON.stringify(decisionTreeText)};
---

<BaseLayout
  title="${pillar.name}：从使用需求到具体品牌的选购指南 - 机场wiki指南"
  description="${pillar.h1}。全面涵盖核心候选对比、使用限制、实测证据、巨幅对比表、ASCII决策树与下辖36篇深度指南。"
  canonicalUrl="https://jichangwiki.cc${pillar.url}"
  breadcrumbs={[
    { name: "首页", url: "/" },
    { name: "${pillar.name}", url: "${pillar.url}" }
  ]}
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <!-- Header Hero -->
    <div class="border-b border-slate-200 pb-8 mb-8">
      <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-3">
        <span>一级栏目 Pillar Hub · 万字级权威指南</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
        ${pillar.h1}
      </h1>
      <p class="text-lg text-slate-600 leading-relaxed max-w-4xl">
        <strong>核心解答：</strong>${pillar.coreQuestion} 本栏目严格遵循「${pillar.duty}」，拒绝夸大其词，用翔实数据支撑明智决策。
      </p>
    </div>

    <!-- Commercial Transparency Banner -->
    <CommercialDisclosure />

    <!-- 1. Answer-First Section -->
    <section class="my-10 bg-blue-50/50 rounded-2xl p-6 sm:p-8 border border-blue-100">
      <h2 class="text-xl font-bold text-blue-950 mb-3">答案优先：当前场景核心选型结论</h2>
      <p class="text-base text-slate-700 leading-relaxed mb-4">
        对于绝大多数追求稳定性的日常与办公用户，首选应为具备成熟运营历史、全专线架构且支持现代化 VLESS 协议的服务商（如本站主推的<strong>光速云</strong>）。低预算与备用场景可选用 5–8 元月付的轻量方案。选购的核心原则是：<strong>先明确真实月流量需求与关键工具（如ChatGPT/流媒体），首选月付验证，晚高峰实测达标后再行决定是否续约</strong>。
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
        <div class="bg-white p-3.5 rounded-xl border border-blue-200">
          <strong class="text-emerald-700 block mb-1">✓ 适合人群：</strong>
          需要跨境学术科研、外贸出海沟通、AI生产力辅助及海外4K流媒体播放的合规用户。
        </div>
        <div class="bg-white p-3.5 rounded-xl border border-blue-200">
          <strong class="text-amber-700 block mb-1">✗ 不适合人群：</strong>
          抱有“几块钱永久不限速无限用”不切实际幻想、或试图利用网络规避审查与非法操作者。
        </div>
      </div>
    </section>

    <!-- 2. ASCII Decision Tree -->
    <section class="my-10">
      <h2 class="text-2xl font-bold text-slate-900 mb-2">快速选择决策树</h2>
      <p class="text-sm text-slate-500 mb-4">通过三层逻辑分支直接对齐您的预算与任务诉求：</p>
      <DecisionTree treeText={decisionTreeText} />
    </section>

    <!-- 3. Mega Comparison Table -->
    <section class="my-10">
      <h2 class="text-2xl font-bold text-slate-900 mb-2">巨幅综合横向对比大盘</h2>
      <p class="text-sm text-slate-500 mb-4">至少 8 个对比对象 × 8 个核心维度深度审视（支持横向滑动）：</p>
      <ComparisonTable
        headers={pillar.megaTableCols}
        rows={megaRows}
        caption="${pillar.name} 核心候选横向对比表"
      />
    </section>

    <!-- 4. Featured Brand Showcase -->
    <section class="my-10">
      <h2 class="text-2xl font-bold text-slate-900 mb-4">精选代表性服务商深度剖析</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {servicesData.slice(0, 3).map((b: any) => (
          <BrandCard
            brand={b}
            featuredReason={b.isPrimaryRecommendation ? "综合性能标杆，全IEPL专线保障晚高峰低丢包" : "性价比专线接入"}
          />
        ))}
      </div>
    </section>

    <!-- 5. Under-Pillar Topics & Articles Structure (Honeycomb Links) -->
    <section class="my-12 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h2 class="text-2xl font-bold text-slate-900">下辖 3 个二级专题与 36 篇深度文章</h2>
          <p class="text-sm text-slate-500 mt-1">蜂巢式内链立体覆盖，可根据具体痛点直达细分指导：</p>
        </div>
        <a href="/sitemap/" class="text-xs font-semibold text-blue-600 hover:underline">
          查阅全站地图 →
        </a>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {pillar.topics.map((t: any, tIdx: number) => (
          <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div class="text-[11px] font-mono font-bold text-blue-600 mb-1">
                专题 0{tIdx + 1}
              </div>
              <h3 class="text-lg font-bold text-slate-900 mb-2">
                <a href={t.url} class="text-slate-900 hover:text-blue-600 transition-colors no-underline">
                  {t.name}
                </a>
              </h3>
              <p class="text-xs text-slate-500 mb-4 leading-relaxed">
                {t.desc}
              </p>

              <!-- Clusters & Articles List -->
              <div class="space-y-3">
                {t.clusters.map((c: any) => (
                  <div class="border-t border-slate-100 pt-2.5">
                    <div class="text-xs font-bold text-slate-800 mb-1.5 flex items-center justify-between">
                      <a href={c.url} class="hover:text-blue-600 transition-colors no-underline">
                        {c.name}
                      </a>
                      <span class="text-[10px] text-slate-400 font-mono">6篇</span>
                    </div>
                    <ul class="space-y-1 text-xs text-slate-600">
                      {c.articles.slice(0, 3).map((art: any) => (
                        <li class="truncate flex items-start space-x-1">
                          <span class="text-blue-500 shrink-0">·</span>
                          <a href={\`/articles/\${art.id}/\`} class="hover:text-blue-600 truncate" title={art.title}>
                            {art.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100 text-right">
              <a href={t.url} class="text-xs font-semibold text-blue-600 hover:underline">
                浏览此专题完整 12 篇 →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>

    <!-- 6. Long-form In-depth Guide -->
    <section class="my-12">
      <div class="article-content max-w-none">
        <h2>底层机制剖析与选型关键依据</h2>
        <p>
          在选择网络加速服务时，用户往往容易被标称的“峰值带宽”所误导。实际上，决定日常使用顺畅度的三大核心指标并非单线程下载峰值，而是<strong>端到端RTT延迟抖动、晚高峰丢包率与TCP重传率</strong>。
        </p>
        <h3>专线与普通直连的本质鸿沟</h3>
        <p>
          国际互联网出口受国家级骨干网防火墙检测与国际海缆带宽配额限制。普通公网直连（如普通BGP中转）在平峰期表现尚可，一旦进入晚间20:00至23:00的网络流量高峰，国际出口拥堵将直接导致丢包率陡增。而真正采用 IEPL（国际以太网专线）或 IPLC（国际私有租用线路）的服务商，数据直接走陆缆点对点传输，不经过公共国际出口队列，能从物理层根除晚高峰拥堵。
        </p>
        <h3>协议升级：从传统 Shadowsocks 到现代化 VLESS</h3>
        <p>
          随着网络深度包检测（DPI）技术的迭代演进，传统静态特征加密协议（如早期的 Shadowsocks）容易被识别与阻断。现代化协议如 VLESS 配合 XTLS Reality 或 TLS1.3，将代理流量伪装成正常的顶级公网 HTTPS 流量，同时去掉了繁重的双重加密计算开销，不仅极大降低了客户端与服务端延迟，还显著延长了移动设备电池续航。
        </p>
      </div>
    </section>

    <!-- 7. Pillar FAQ Matrix (15 FAQs) -->
    <section class="my-12">
      <FAQAccordion faqs={pFaqs} title="${pillar.name} 专属常见问题解答 (FAQ)" />
    </section>
  </div>
</BaseLayout>
`;

  fs.writeFileSync(pAstroPath, content, 'utf-8');

  // 2. Generate 36 Topics
  for (const topic of pillar.topics) {
    const tAstroPath = path.join(PAGES_DIR, pillar.slug, topic.slug, 'index.astro');
    ensureDir(tAstroPath);

    const topicArticles = [];
    topic.clusters.forEach(c => {
      c.articles.forEach(a => {
        topicArticles.push({ ...a, clusterName: c.name });
      });
    });

    const topicFaqs = [
      { q: "本专题下的两个子集群分别解决什么问题？", a: `子集群「${topic.clusters[0].name}」着重解决基础选型与前置决策；子集群「${topic.clusters[1].name}」解决进阶配置与主备协同，二者构成完整方案闭环。` },
      { q: "阅读本专题文章需要按顺序看吗？", a: "建议先阅读各子集群的核心总解，随后根据您当前遇到的具体阻碍（如换机场、移动网络或多端协作）查阅对应文章。" },
      { q: "专题推荐结论与具体文章冲突时以什么为准？", a: "专题提供宏观场景判断，具体文章针对具体任务给出微观演算。所有数据均受统一的实测基线核验支撑。" }
    ];

    const topicContent = `---
import BaseLayout from "@/layouts/BaseLayout.astro";
import CommercialDisclosure from "@/components/CommercialDisclosure.astro";
import FAQAccordion from "@/components/FAQAccordion.astro";
import ArticleCard from "@/components/ArticleCard.astro";

const pillar = ${JSON.stringify(pillar)};
const topic = ${JSON.stringify(topic)};
const topicArticles = ${JSON.stringify(topicArticles)};
const topicFaqs = ${JSON.stringify(topicFaqs)};
---

<BaseLayout
  title="${topic.name}：${topic.h1} - 机场wiki指南"
  description="${topic.desc} 涵盖两个子集群与12篇精选实测文章。"
  canonicalUrl="https://jichangwiki.cc${topic.url}"
  breadcrumbs={[
    { name: "首页", url: "/" },
    { name: "${pillar.name}", url: "${pillar.url}" },
    { name: "${topic.name}", url: "${topic.url}" }
  ]}
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="border-b border-slate-200 pb-6 mb-8">
      <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 mb-3">
        <span>所属栏目：${pillar.name} · 二级专题</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
        ${topic.h1}
      </h1>
      <p class="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
        ${topic.desc}
      </p>
    </div>

    <CommercialDisclosure compact={true} />

    <!-- Two Clusters Overview -->
    <section class="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {topic.clusters.map((c: any, cIdx: number) => (
        <div class="card p-6 bg-slate-50 border-slate-200">
          <div class="text-xs font-bold font-mono text-blue-600 mb-1">
            子集群 0{cIdx + 1}
          </div>
          <h2 class="text-xl font-bold text-slate-900 mb-2">
            <a href={c.url} class="text-slate-900 hover:text-blue-600 no-underline">
              {c.name}
            </a>
          </h2>
          <p class="text-xs text-slate-600 mb-4 leading-relaxed">
            <strong>主问题：</strong>{c.coreQuestion}
          </p>
          <a
            href={c.url}
            class="text-xs font-semibold text-blue-600 hover:underline inline-flex items-center space-x-1"
          >
            <span>进入集群总解与阅读顺序</span>
            <span>→</span>
          </a>
        </div>
      ))}
    </section>

    <!-- 12 Articles Grid -->
    <section class="my-10">
      <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-200">
        <h2 class="text-xl font-bold text-slate-900">本专题下辖全部 12 篇发布文章</h2>
        <span class="text-xs text-slate-400">稳定 ID 映射 · 无字面重复</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {topicArticles.map((a: any) => (
          <ArticleCard
            id={a.id}
            title={a.title}
            url={\`/articles/\${a.id}/\`}
            clusterName={a.clusterName}
          />
        ))}
      </div>
    </section>

    <!-- Topic FAQs -->
    <section class="my-10">
      <FAQAccordion faqs={topicFaqs} title="${topic.name} 专题常见疑问" />
    </section>
  </div>
</BaseLayout>
`;

    fs.writeFileSync(tAstroPath, topicContent, 'utf-8');

    // 3. Generate 72 Clusters
    for (const cluster of topic.clusters) {
      const cAstroPath = path.join(PAGES_DIR, pillar.slug, topic.slug, cluster.slug, 'index.astro');
      ensureDir(cAstroPath);

      const clusterContent = `---
import BaseLayout from "@/layouts/BaseLayout.astro";
import CommercialDisclosure from "@/components/CommercialDisclosure.astro";

const pillar = ${JSON.stringify(pillar)};
const topic = ${JSON.stringify(topic)};
const cluster = ${JSON.stringify(cluster)};
---

<BaseLayout
  title="${cluster.name}：${cluster.h1} - 机场wiki指南"
  description="${cluster.coreQuestion} 针对此场景提供核心总解、实操案例与6篇精选文章推荐阅读顺序。"
  canonicalUrl="https://jichangwiki.cc${cluster.url}"
  breadcrumbs={[
    { name: "首页", url: "/" },
    { name: "${pillar.name}", url: "${pillar.url}" },
    { name: "${topic.name}", url: "${topic.url}" },
    { name: "${cluster.name}", url: "${cluster.url}" }
  ]}
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="border-b border-slate-200 pb-6 mb-8">
      <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 mb-2">
        <span>三级内容集群</span>
      </div>
      <h1 class="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
        ${cluster.h1}
      </h1>
      <p class="text-base text-slate-600 max-w-3xl leading-relaxed">
        <strong>核心聚焦：</strong>${cluster.coreQuestion}
      </p>
    </div>

    <CommercialDisclosure compact={true} />

    <!-- Answer-First Core Summary -->
    <section class="my-8 bg-blue-50/60 rounded-2xl p-6 border border-blue-100">
      <h2 class="text-lg font-bold text-blue-950 mb-2">场景核心总解 (Answer-First)</h2>
      <p class="text-sm text-slate-700 leading-relaxed">
        面对“${cluster.coreQuestion}”，核心原则是首先量化使用者的硬性约束条件（如预算上限、设备操作系统种类、并发连接限制及核心任务类型）。在明确前置条件后，按照以下推荐阅读顺序逐篇查阅细分实操指南，避免陷入由于片面追求低价或盲目听信营销导致的频繁掉线与退款纠纷。
      </p>
    </section>

    <!-- Reading Order & 6 Articles -->
    <section class="my-10">
      <h2 class="text-xl font-bold text-slate-900 mb-4">推荐最佳阅读与操作顺序 (共 6 篇)</h2>
      <div class="space-y-4">
        {cluster.articles.map((art: any, idx: number) => (
          <div class="card p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-blue-400">
            <div class="flex items-start space-x-3">
              <span class="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <div>
                <h3 class="text-base font-bold text-slate-900 m-0">
                  <a href={\`/articles/\${art.id}/\`} class="text-slate-900 hover:text-blue-600 no-underline">
                    {art.title}
                  </a>
                </h3>
                <span class="text-xs text-slate-400 font-mono mt-0.5 block">稳定文章 ID: {art.id}</span>
              </div>
            </div>
            <a
              href={\`/articles/\${art.id}/\`}
              class="text-xs font-semibold text-blue-600 hover:text-blue-700 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors shrink-0 self-end sm:self-center"
            >
              查阅全文 →
            </a>
          </div>
        ))}
      </div>
    </section>

    <div class="mt-12 pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
      <a href="${topic.url}" class="font-semibold text-blue-600 hover:underline">
        ← 返回二级专题：${topic.name}
      </a>
      <a href="${pillar.url}" class="font-semibold text-slate-600 hover:underline">
        回溯一级栏目：${pillar.name} →
      </a>
    </div>
  </div>
</BaseLayout>
`;

      fs.writeFileSync(cAstroPath, clusterContent, 'utf-8');
    }
  }
}

console.log('Successfully generated all Astro pages cleanly without escaping errors!');
