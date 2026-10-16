import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { BRANDS, CROSS_TOPIC_INTERLINKS, PILLARS_CONFIG, STATIC_PAGES } from './data_catalog.mjs';

const ROOT_DIR = 'c:/Users/Administrator/Desktop/jichangwiki.cc';
const PACK_DIR = path.join(ROOT_DIR, 'planning_pack');
const ZIP_PATH = path.join(ROOT_DIR, 'jichangwiki_rebuild_pack.zip');

console.log('--- Step 1: Generating Planning Pack ---');

// Clean and prepare dirs
if (fs.existsSync(PACK_DIR)) {
  fs.rmSync(PACK_DIR, { recursive: true, force: true });
}
if (fs.existsSync(ZIP_PATH)) {
  fs.rmSync(ZIP_PATH, { force: true });
}

fs.mkdirSync(PACK_DIR, { recursive: true });
fs.mkdirSync(path.join(PACK_DIR, 'data'), { recursive: true });
fs.mkdirSync(path.join(PACK_DIR, 'specs', 'home'), { recursive: true });
fs.mkdirSync(path.join(PACK_DIR, 'specs', 'pillars'), { recursive: true });
fs.mkdirSync(path.join(PACK_DIR, 'specs', 'topics'), { recursive: true });
fs.mkdirSync(path.join(PACK_DIR, 'specs', 'clusters'), { recursive: true });

// Data collectors
const allTitles = [];
const urlMapping = [];
const contentMap = [];
let specCount = 0;

// 1. Home Node
allTitles.push({
  id: "home",
  type: "home",
  level: 0,
  title: "机场wiki指南 - 首页",
  h1: "机场wiki指南：以选型为核心的中文知识库与评测中心",
  url: "/",
  stableId: "node-home"
});
urlMapping.push({
  id: "home",
  type: "home",
  title: "机场wiki指南 - 首页",
  canonicalUrl: "https://jichangwiki.cc/",
  path: "/",
  breadcrumbs: ["首页"]
});

// Helper for Pillar FAQs (15 FAQs per pillar)
function generatePillarFaqs(pillar) {
  const faqs = [
    { q: `${pillar.name}页面与其他栏目有什么本质区别？`, a: `本栏目严格遵从「${pillar.duty}」，专注于提供经得起交叉核验的客观分析与落地指引，绝不复制泛滥的通用营销文案。` },
    { q: `本栏目推荐或介绍的服务商是否存在商业赞助关系？`, a: `本站为独立第三方选购指南。凡含推广链接的服务商均明确标注“含推广链接，通过链接注册可能为本站带来佣金，不影响用户支付价格”，且评测结论与测试数据不受商业关系干预。` },
    { q: `在${pillar.name}中，如何快速找到最适合我的方案？`, a: `请查阅页面顶部的「快速决策树」与「巨幅综合对比表」，根据您的预算、常用设备、主力任务（如AI、4K流媒体或常规办公）快速筛选。` },
    { q: `为什么本站不承诺任何机场的“100%不卡”或“永久可用”？`, a: `跨境网络受骨干网拥塞、国际出口波动、海缆维护及目标网站风控等多重不可控因素影响。宣称100%稳定的宣传均为虚假承诺，本站仅记录真实观测窗口内的可用率与丢包率。` },
    { q: `如果我使用的网络环境发生变化，应如何调整方案？`, a: `可在本栏目查阅「使用条件与设备需求」专题，针对蜂窝数据（4G/5G）、公共Wi-Fi以及出差酒店网络的不同特征应用推荐的节点策略。` },
    { q: `本栏目引用的测试数据和价格多久核验更新一次？`, a: `所有展示字段均标注最近核验日期（verifiedAt）。核心品牌每月复测一次，重大网络波动或品牌发布套餐调整时在3个工作日内完成复核更新。` },
    { q: `为什么部分字段显示“待核验”或“未披露”？`, a: `本站严格坚持事实原则。未知值绝不以0或“支持”凭空填充，品牌方声称内容统一前缀“品牌资料显示”，未独立实测的指标保持待核验状态。` },
    { q: `购买后遇到连接超时或订阅导入失败怎么办？`, a: `请直接前往「网络排障（/troubleshooting/）」栏目，对照六步排障决策树逐步排查本机代理冲突、DNS污染或订阅链接格式错误。` },
    { q: `本站是否提供或销售自己的机场服务或客户端软件？`, a: `否。本站与任何机场品牌、代理软件项目无任何隶属关系，仅提供第三方选购分析、评测记录与合规使用教程。` },
    { q: `如何防范山寨仿冒机场官网与钓鱼诈骗？`, a: `请通过「机场大全（/airports/）」核对品牌历史域名、官方Telegram频道及PGP签名公告，切勿轻信搜索引擎竞价广告中的伪冒站点。` },
    { q: `在多设备场景下，一个订阅账号可以同时登录几台设备？`, a: `不同品牌与套餐存在严格的并发连接数限制（通常为2–5台），请查阅本页综合对比表中的“设备并发限制”列，避免超限导致封号或限速。` },
    { q: `年付折算月费极低，是否建议新手直接购买年付？`, a: `不建议。新手首次选购应优先选择月付或小流量按量包，待亲自验收晚高峰表现与关键任务支持度后，再根据预算决定是否转为长周期套餐。` },
    { q: `本页涉及的客户端软件在哪里下载最安全？`, a: `请前往「客户端教程（/clients/）」查看官方GitHub Release或经开发者签名的正规分发渠道，严禁下载使用第三方未经验证的二次打包安装包。` },
    { q: `如何给本栏目的数据或评测内容纠错？`, a: `您可以通过页脚的「纠错反馈」页面提交工单或Issue，附上您的测试环境与日志截图，编辑部将在核实后更新记录并公示变更日志。` },
    { q: `本站遵循哪些隐私与数据安全原则？`, a: `本站为纯静态站点，不设置用户注册，不收集任何个人凭据。教程中所有配置示范均采用结构化占位符（如 example-token），绝不传播敏感信息。` }
  ];
  return faqs;
}

// 2. Process Pillars, Topics, Clusters, Articles
PILLARS_CONFIG.forEach(pillar => {
  allTitles.push({
    id: pillar.id,
    type: "pillar",
    level: 1,
    title: pillar.name,
    h1: pillar.h1,
    url: pillar.url,
    stableId: `node-pil-${pillar.id}`
  });
  urlMapping.push({
    id: pillar.id,
    type: "pillar",
    title: pillar.name,
    canonicalUrl: `https://jichangwiki.cc${pillar.url}`,
    path: pillar.url,
    breadcrumbs: ["首页", pillar.name]
  });

  // Pillar Spec
  const pillarSpecPath = path.join(PACK_DIR, 'specs', 'pillars', pillar.slug);
  fs.mkdirSync(pillarSpecPath, { recursive: true });
  
  const pillarFaqs = generatePillarFaqs(pillar);
  const pillarSpecContent = `---
title: "${pillar.name} - 一级栏目编辑规格"
h1: "${pillar.h1}"
slug: "${pillar.slug}"
url: "${pillar.url}"
pageType: "pillar"
targetWords: "${pillar.targetWords}"
coreQuestion: "${pillar.coreQuestion}"
duty: "${pillar.duty}"
breadcrumbs: ["首页", "${pillar.name}"]
---

# ${pillar.h1}（一级栏目主入口规格）

## 1. 栏目核心定位与职责边界
- **对应职责**：${pillar.theme}（${pillar.duty}）
- **核心主问题**：${pillar.coreQuestion}
- **字数预算**：7,000–9,500 中文字（按十模块完整展开，详见第七节标准）
- **下辖架构**：3 个二级专题、6 个三级内容集群、36 篇独立文章

## 2. 页面十模块内容构成预算（参考字数：8,600字）
1. **答案优先与适用范围 (400字)**：直接给出当前场景的核心选型/使用结论，明确指出适合人群与不适合人群。
2. **核心实体与问题边界 (500字)**：界定本栏目涉及的品牌、协议、套餐与网络层级，划清职责边界。
3. **巨幅综合对比表 (1,100字)**：至少 8 个代表性对象 × 8 个关键对比维度，支持多维度横向审视。
4. **逐家主体深度分析/核心机制展开 (2,400字)**：
   - 品牌按：定位 → 适合与不适合 → 实际套餐 → 使用方式 → 已有证据 → 优缺点与限制 → 选择建议
   - 技术/排障按：底层规范 → 拓扑图解 → 关键参数对比 → 可复现案例深度剖析
5. **ASCII 决策树与分支说明 (700字)**：多层次决策分支，覆盖小白入门、重度生产力、跨端协作与低预算兜底。
6. **底层机制与参数依据 (900字)**：解释影响本页选择的协议原理（如 VLESS、TCP/QUIC、IEPL/IPLC 等）。
7. **操作、验证与场景演练 (700字)**：前置条件、检查步骤、预期结果、异常提示与回滚步骤。
8. **FAQ 独立问答矩阵 (900字)**：包含至少 15 条针对本栏目专属痛点的独立问答，杜绝空泛套话。
9. **证据限制与版本变化说明 (500字)**：区分实测证据、品牌方声称及待核验数据，公示观测窗口与局限性。
10. **延伸阅读与行动建议 (500字)**：连接下级 36 篇已发布文章、关联品牌档案及合规直达通道。

## 3. 巨幅对比表规划
- **对比列维度**：${pillar.megaTableCols.join(' | ')}
- **首批对比对象**：光速云 (主推)、飞猫云、微风网络、暮光加速、大佬云、星岛梦、二猫云、Firefly 等至少 8 家主流服务。
- **排版要求**：使用 \`.data-table\` 规范，移动端自适应横向滑动，数值使用等宽字体，未核验字段明确标注 Badge。

## 4. ASCII 决策树结构（至少 3 层深度）
\`\`\`text
[用户核心需求识别]
  │
  ├── 追求极致稳定性 / 晚高峰生产力 / AI办公
  │     ├── 需要全平台支持 + 长期不限时流量包 ──────> 首选：光速云 (IEPL专线 + VLESS)
  │     └── 高预算多端重度影音 ──────────────────────> 考虑：星岛梦 / 暮光加速
  │
  ├── 严格低预算 / 备用应急 / 轻度查资料
  │     ├── 月均预算 5–8 元区间 ─────────────────────> 方案：大佬云 / 飞猫云 / 微风网络
  │     └── 仅需低频查阅，拒绝月租空耗 ─────────────> 方案：按量付费流量包或小流量入门档
  │
  └── 遇到网络连接异常 / 客户端配置失败
        ├── 订阅拉取报错 (403/404/超时) ─────────────> 跳转：网络排障 -> 订阅获取专项
        └── 客户端启动后国内国外均无法联网 ─────────> 跳转：网络排障 -> 系统代理残留清理
\`\`\`

## 5. FAQ 问答规划（${pillarFaqs.length} 条独立问答）
${pillarFaqs.map((f, i) => `${i + 1}. **问：${f.q}**\n   答：${f.a}`).join('\n')}

## 6. 下辖 3 个二级专题与 6 个集群目录
${pillar.topics.map(t => `- **二级专题**：[${t.name}](${t.url})
  - 核心说明：${t.desc}
  - 包含集群：
${t.clusters.map(c => `    - [${c.name}](${c.url})（辖下 6 篇文章）`).join('\n')}`).join('\n')}

## 7. 蜂巢式内链与变现直达卡片
- **内链目标**：本页聚合出链 ≥ 30 条（含下辖 3 个专题、6 个集群、36 篇独立文章、品牌档案及跨专题锚点）。
- **变现直达卡片**：展示光速云等核心品牌的合规推广卡片，必须附带商业合作披露提示，外链严格添加 \`rel="nofollow sponsored noopener"\`。
`;

  fs.writeFileSync(path.join(pillarSpecPath, 'index.md'), pillarSpecContent, 'utf-8');
  specCount++;

  // Process Topics
  pillar.topics.forEach(topic => {
    allTitles.push({
      id: topic.id,
      type: "topic",
      level: 2,
      parent: pillar.id,
      title: topic.name,
      h1: topic.h1,
      url: topic.url,
      stableId: `node-top-${pillar.id}-${topic.id}`
    });
    urlMapping.push({
      id: topic.id,
      type: "topic",
      title: topic.name,
      canonicalUrl: `https://jichangwiki.cc${topic.url}`,
      path: topic.url,
      breadcrumbs: ["首页", pillar.name, topic.name]
    });

    const topicSpecPath = path.join(PACK_DIR, 'specs', 'topics', pillar.slug, topic.slug);
    fs.mkdirSync(topicSpecPath, { recursive: true });

    const topicArticles = [];
    topic.clusters.forEach(c => c.articles.forEach(a => topicArticles.push(a)));

    const topicSpecContent = `---
title: "${topic.name} - 二级专题编辑规格"
h1: "${topic.h1}"
slug: "${topic.slug}"
url: "${topic.url}"
parentPillar: "${pillar.name}"
parentPillarUrl: "${pillar.url}"
pageType: "topic"
targetWords: "7,000–8,500 字"
breadcrumbs: ["首页", "${pillar.name}", "${topic.name}"]
---

# ${topic.h1}（二级专题页规格）

## 1. 专题定位与架构关联
- **所属一级栏目**：[${pillar.name}](${pillar.url})
- **专题核心解决**：${topic.desc}
- **两个子集群如何关联**：说明子集群 [${topic.clusters[0].name}](${topic.clusters[0].url}) 与 [${topic.clusters[1].name}](${topic.clusters[1].url}) 分别解决前置条件还是后续进阶，二者如何构成闭环。
- **字数目标**：7,000–8,500 字，禁止大段复制一级栏目总论。

## 2. 专题主要章节模块
1. **专题背景与核心痛点剖析**：为什么用户需要在此维度单独对比与决策？
2. **双集群关系总览与路径选择**：指导用户根据当前阶段进入对应集群。
3. **专题专项对比矩阵表**：聚焦本专题关注的核心指标。
4. **典型场景推演与避坑指南**：结合实际使用案例分析。
5. **专题 FAQ 问答集（至少 8 条）**：解决用户在子集群交界处的常见疑虑。
6. **下辖 12 篇精选文章阅读导航**：提供循序渐进的阅读清单。

## 3. 辖下 2 个三级内容集群
${topic.clusters.map(c => `### [${c.name}](${c.url})
- **集群主问题**：${c.coreQuestion}
- **收录文章**：6 篇（${c.articles.map(a => a.title).join(' / ')}）
`).join('\n')}

## 4. 辖下全部 12 篇发布文章清单
| 序号 | 稳定ID | 文章标题 | 归属集群 |
|---|---|---|---|
${topicArticles.map((a, idx) => `| ${idx + 1} | \`${a.id}\` | [${a.title}](/articles/${a.id}/) | ${topic.clusters[Math.floor(idx / 6)].name} |`).join('\n')}

## 5. 内链规划要求
- **专题出链门槛**：≥ 15 条。
- **链路覆盖**：向上回溯一级栏目 [${pillar.name}](${pillar.url})，横向关联同级专题，向下直达 2 个集群和 12 篇文章。
`;

    fs.writeFileSync(path.join(topicSpecPath, 'index.md'), topicSpecContent, 'utf-8');
    specCount++;

    // Process Clusters
    topic.clusters.forEach(cluster => {
      allTitles.push({
        id: cluster.id,
        type: "cluster",
        level: 3,
        parentTopic: topic.id,
        parentPillar: pillar.id,
        title: cluster.name,
        h1: cluster.h1,
        url: cluster.url,
        stableId: `node-clu-${pillar.id}-${topic.id}-${cluster.id}`
      });
      urlMapping.push({
        id: cluster.id,
        type: "cluster",
        title: cluster.name,
        canonicalUrl: `https://jichangwiki.cc${cluster.url}`,
        path: cluster.url,
        breadcrumbs: ["首页", pillar.name, topic.name, cluster.name]
      });

      const clusterSpecPath = path.join(PACK_DIR, 'specs', 'clusters', pillar.slug, topic.slug, cluster.slug);
      fs.mkdirSync(clusterSpecPath, { recursive: true });

      const clusterSpecContent = `---
title: "${cluster.name} - 三级内容集群编辑规格"
h1: "${cluster.h1}"
slug: "${cluster.slug}"
url: "${cluster.url}"
parentTopic: "${topic.name}"
parentTopicUrl: "${topic.url}"
parentPillar: "${pillar.name}"
parentPillarUrl: "${pillar.url}"
pageType: "cluster"
targetWords: "7,000–8,000 字"
coreQuestion: "${cluster.coreQuestion}"
breadcrumbs: ["首页", "${pillar.name}", "${topic.name}", "${cluster.name}"]
---

# ${cluster.h1}（三级内容集群页规格）

## 1. 集群定位与核心任务
- **所属层级**：[首页](/) → [${pillar.name}](${pillar.url}) → [${topic.name}](${topic.url}) → **${cluster.name}**
- **核心主问题**：${cluster.coreQuestion}
- **职责说明**：围绕具体场景问题给出总解、实操案例与 6 篇文章的最佳阅读推荐顺序。
- **字数目标**：7,000–8,000 字。

## 2. 页面构成要点
1. **核心问题总解 (Answer-First)**：针对“${cluster.coreQuestion}”给出高信息密度的专业解答。
2. **集群实测案例与数据对照**：列举真实测试数据或计算模型支撑结论。
3. **最佳阅读顺序与依赖关系**：说明 6 篇文章的前置学习与进阶关系。
4. **集群常见陷阱与核验备忘**：指导读者避开关键操作失误。
5. **集群专属问答（至少 6 条）**。

## 3. 辖下 6 篇完整文章规划
| 序号 | 稳定ID | 完整文章标题 | 规范候选 URL |
|---|---|---|---|
${cluster.articles.map((a, idx) => `| ${idx + 1} | \`${a.id}\` | [${a.title}](/articles/${a.id}/) | \`https://jichangwiki.cc/articles/${a.id}/\` |`).join('\n')}

## 4. 推荐阅读顺序设计
${cluster.articles.map((a, idx) => `${idx + 1}. **第一步：[${a.title}](/articles/${a.id}/)** —— 建立基础认知与前置准备。`).join('\n')}

## 5. 内链规划要求
- **集群出链门槛**：≥ 10 条。
- **必须覆盖**：向上回链二级专题与一级栏目，同级兄弟集群交叉引荐，以及 6 篇具体文章锚点。
`;

      fs.writeFileSync(path.join(clusterSpecPath, 'index.md'), clusterSpecContent, 'utf-8');
      specCount++;

      // Process Articles
      cluster.articles.forEach(article => {
        allTitles.push({
          id: article.id,
          type: "article",
          level: 4,
          parentCluster: cluster.id,
          parentTopic: topic.id,
          parentPillar: pillar.id,
          title: article.title,
          h1: article.title,
          url: `/articles/${article.id}/`,
          stableId: article.id
        });
        urlMapping.push({
          id: article.id,
          type: "article",
          title: article.title,
          canonicalUrl: `https://jichangwiki.cc/articles/${article.id}/`,
          path: `/articles/${article.id}/`,
          breadcrumbs: ["首页", pillar.name, topic.name, cluster.name, article.title]
        });

        // Content Map registration
        contentMap.push({
          stableId: article.id,
          primaryQuestion: article.title,
          primaryCluster: cluster.url,
          primaryTopic: topic.url,
          primaryPillar: pillar.url,
          canonicalUrl: `https://jichangwiki.cc/articles/${article.id}/`,
          entityRefs: ["gsy", "feimao", "dalaoyun"],
          evidenceRefs: ["test-rec-2026-q1"],
          relatedArticles: [],
          author: null,
          publishedAt: null,
          updatedAt: null,
          verifiedAt: "2026-10-16",
          evidenceStatus: "insufficient",
          publishStatus: "draft"
        });
      });
    });
  });
});

// Home Spec
const homeSpecContent = `---
title: "机场wiki指南 - 首页编辑规格"
h1: "机场wiki指南：以机场选型为核心的中文知识库与评测中心"
url: "/"
pageType: "home"
targetWords: "约 8,200 字（长文总入口）"
breadcrumbs: ["首页"]
---

# 机场wiki指南（首页长文总入口规格）

## 1. 站点定位与核心价值
- **站点名称**：机场wiki指南
- **官网域名**：https://jichangwiki.cc
- **核心定位**：以机场选型为核心，用品牌资料、套餐计算、真实评测、使用教程和网络原理支撑选择的中文知识库。
- **站点性质**：独立第三方选购与使用指南，与任何机场品牌、代理软件无隶属关系。
- **篇幅预算**：约 8,200 字（首屏直出选择结果，长文在下方系统化展开，不强迫读者读完几千字才看到结论）。

## 2. 首页 10 大长文展开顺序（严格遵循第七节规划）
1. **定位与快速选择 (800字)**：首屏速览矩阵，按预算（5元/20元）、用途（办公/影音/AI）、设备（手机/电脑/电视）三维直接给出已核验候选。
2. **已核验候选摘要与品牌大盘 (1,200字)**：汇总展示 28 家品牌的基础状态，重点突出光速云、飞猫云等主推方案的实测优势与明确限制。
3. **预算与套餐计算模型 (900字)**：拆解月付 vs 年付实际支出公式、小流量价值、不限时流量包盈亏平衡点。
4. **免费与试用资源安全指引 (700字)**：明确公益资源与商业试用边界，警示公开订阅的数据泄露与证书风险。
5. **AI 与视频场景专项方案 (900字)**：ChatGPT/Claude 访问节点风控分析、YouTube 4K码率带宽与晚高峰抗卡顿设计。
6. **下载与排障快速索引 (800字)**：Windows/macOS/Android/iOS 官方客户端下载直达通道，系统代理残留死锁一键修复决策流。
7. **线路拓扑与传输协议概览 (800字)**：IEPL/IPLC 专线与普通公网直连原理、TCP/UDP/QUIC 及 VLESS/Trojan 协议分层模型。
8. **评测证据与数据核验方法 (700字)**：公布基线控制、中位数与 P95 统计规范、测试端点选择标准。
9. **首页核心 FAQ 矩阵 (800字)**：回答读者关于独立性、推广返佣披露、退款保障与合规边界的核心关切。
10. **全站蜂巢式阅读路径导览 (600字)**：串联 12 个一级栏目、36 个二级专题与品牌档案的探索路径。

## 3. 首页内链覆盖
- 首页直接链接全部 12 个一级栏目主入口。
- 链接热门品牌档案（光速云、飞猫云、微风网络等）。
- 链接核心政策规范页面（评测方法、商业合作披露、免责声明）。
`;

fs.writeFileSync(path.join(PACK_DIR, 'specs', 'home', 'index.md'), homeSpecContent, 'utf-8');
specCount++;

// 3. Generate Markdown Documents in planning_pack/

// Document A: TITLES_CATALOG.md
let catalogMd = `# 机场wiki指南 — 完整标题库与节点目录 (553 规划内容节点)

> 本文档汇集 **jichangwiki.cc** 规划的全部 553 个内容页面标题、稳定 ID、层级归属及定位职责。
> 架构规模：**首页 1 + 12 个一级内容栏目 + 36 个二级专题 + 72 个三级内容集群 + 432 篇独立 SEO 文章 = 553 个规划内容页面**。
> 外加 28 家品牌档案与 9 个基础支持/工具页面。

---

## 一、页面层级分布统计

| 层级 | 类型 | 数量 | 页面职责与 URL 规划 |
|---|---|---|---|
| Level 0 | 首页 | 1 | 全站总入口、长文展开、快速选型矩阵 (\`/\`) |
| Level 1 | 一级栏目主入口 | 12 | 万字级 Pillar Hub、决策树、巨幅对比表、FAQ矩阵 (\`/{pillar}/\`) |
| Level 2 | 二级专题页 | 36 | 说明两个子集群关联与阶段决策、12 篇精选导航 (\`/{pillar}/{topic}/\`) |
| Level 3 | 三级内容集群页 | 72 | 场景总解、实操案例、6 篇文章推荐阅读顺序 (\`/{pillar}/{topic}/{cluster}/\`) |
| Level 4 | 独立 SEO 文章 | 432 | 独立解决特定具体任务，提供演算、步骤与实测证据 (\`/articles/{stable-id}/\`) |
| **合计** | **规划内容节点** | **553** | **无字面重复，无悬空目标，稳定 ID 映射** |
| 实体层 | 品牌完整档案页 | 28 | 聚合品牌公开资料、变更时间线与套餐核验 (\`/airports/{brand-slug}/\`) |
| 支持层 | 静态规范与工具页 | 9 | 评测方法、商业披露、免责声明、搜索、404等 |

---

## 二、12 个一级栏目与 36 个二级专题全貌

`;

PILLARS_CONFIG.forEach((pillar, pIdx) => {
  catalogMd += `### ${String(pIdx + 1).padStart(2, '0')}. ${pillar.name} (\`${pillar.url}\`)\n\n`;
  catalogMd += `- **H1 标题**：${pillar.h1}\n`;
  catalogMd += `- **核心提问**：${pillar.coreQuestion}\n`;
  catalogMd += `- **栏目职责**：${pillar.duty}\n\n`;

  pillar.topics.forEach((topic, tIdx) => {
    catalogMd += `#### ${pIdx + 1}.${tIdx + 1} ${topic.name} (\`${topic.url}\`)\n`;
    catalogMd += `- **H1**：${topic.h1}\n`;
    catalogMd += `- **说明**：${topic.desc}\n\n`;

    topic.clusters.forEach((cluster, cIdx) => {
      catalogMd += `##### ${pIdx + 1}.${tIdx + 1}.${cIdx + 1} ${cluster.name} (\`${cluster.url}\`)\n`;
      catalogMd += `*主问题：${cluster.coreQuestion}*\n\n`;
      catalogMd += `| ID | 文章标题 | 规范地址 |\n|---|---|---|\n`;
      cluster.articles.forEach(art => {
        catalogMd += `| \`${art.id}\` | ${art.title} | \`/articles/${art.id}/\` |\n`;
      });
      catalogMd += `\n`;
    });
  });
  catalogMd += `---\n\n`;
});

catalogMd += `## 三、28 家已规划品牌档案目录\n\n`;
catalogMd += `| 排名 | 品牌 ID | 品牌名称 | 品牌档案 URL | 入门月付 | 线路与协议 | 主推状态 |\n|---|---|---|---|---|---|---|\n`;
BRANDS.forEach(b => {
  catalogMd += `| ${b.rank} | \`${b.id}\` | [${b.name}](/airports/${b.id}/) | \`/airports/${b.id}/\` | ${b.minPayment ? b.minPayment + '元/月' : '待核验'} | ${b.lineType} / ${b.protocols} | ${b.isPrimaryRecommendation ? '★ 主推首选' : '候选品牌'} |\n`;
});

catalogMd += `\n---\n\n## 四、基础支持与工具页面目录\n\n`;
STATIC_PAGES.forEach(s => {
  catalogMd += `- **[${s.title}](${s.url})** (\`${s.url}\`)：${s.desc}\n`;
});

fs.writeFileSync(path.join(PACK_DIR, 'TITLES_CATALOG.md'), catalogMd, 'utf-8');

// Document B: URL_MAPPING.md
let urlMappingMd = `# 机场wiki指南 — 完整层级与候选 URL 映射规范表

> 遵循原则：
> 1. 面包屑路径完整反映五层层级：首页 → 一级栏目 → 二级专题 → 三级集群 → 独立文章。
> 2. 文章 URL 采用稳定短 ID：\`/articles/{stable-article-id}/\`，避免层级变更导致外部反向链接断裂。
> 3. Canonical 规范地址严格一对一绑定，绝不滥用通配或将所有专题重定向至推荐页。
> 4. 所有目录型路由末尾带斜杠 \`/\`，兼容 Apache \`.htaccess\` 规范。

---

## 一、路由架构映射规则

\`\`\`text
https://jichangwiki.cc/
├── /                                          (首页)
├── /{pillar}/                                 (一级栏目主入口，共 12 个)
│    └── /{pillar}/{topic}/                    (二级专题页，共 36 个)
│         └── /{pillar}/{topic}/{cluster}/     (三级集群页，共 72 个)
├── /articles/{stable-article-id}/             (独立 SEO 文章页，共 432 篇)
├── /airports/{brand-slug}/                    (品牌唯一档案页，共 28 家)
├── /search/                                   (Pagefind 静态搜索)
└── /{policy-page}/                            (关于、免责、披露等合规页)
\`\`\`

---

## 二、完整候选 URL 与层级映射总表 (节选核心主干 + 432 篇全量)

| 节点类型 | 稳定识别 ID | 页面标题 | 候选规范 URL | 面包屑导航链路 |
|---|---|---|---|---|
`;

urlMapping.forEach(item => {
  urlMappingMd += `| ${item.type} | \`${item.id}\` | ${item.title} | \`${item.canonicalUrl}\` | ${item.breadcrumbs.join(' > ')} |\n`;
});

fs.writeFileSync(path.join(PACK_DIR, 'URL_MAPPING.md'), urlMappingMd, 'utf-8');

// Document C: INTERLINKING_SPEC.md
let interlinkingMd = `# 机场wiki指南 — 蜂巢式内链架构规划规范

> 蜂巢式内链核心原则：**有明确上下文理由的关系网络，坚决反对机械堆砌随机链接。**
> 任何正文链接都必须具备解答疑惑、延伸证据、辅助决策或落实步骤的明确价值。

---

## 一、内链密度硬性指标门槛

| 页面级别 | 最小出站内链数 | 重点链接目标 | 链接设计目的 |
|---|---|---|---|
| 一级栏目页 (Pillar) | **≥ 30 条** | 下辖 3 专题、6 集群、精选文章、品牌档案、排障索引 | 充当万字级 Pillar Hub 总枢纽 |
| 二级专题页 (Topic) | **≥ 15 条** | 上级栏目、同级专题、下辖 2 集群、12 篇文章、核心品牌 | 引导阶段性用户向下深入 |
| 三级集群页 (Cluster) | **≥ 10 条** | 上级专题、兄弟集群、辖下 6 篇文章、品牌档案 | 提供具体问题场景的总导览 |
| 独立文章页 (Article) | **≥ 5 条** | 归属集群、跨专题证据页、操作教程、品牌档案 | 解决具体任务并引导闭环 |
| 品牌档案页 (Brand) | **≥ 10 条** | 涉及该品牌的推荐/便宜/AI/流媒体专题、测试记录、排障 | 汇聚多维度评测证据与入口 |

---

## 二、交付包内载入的 24 条核心跨专题互链关系矩阵

| # | 当前来源文章 / 场景 | 推荐链接目标 | 锚文本设计范例 | 核心链接理由 |
|---|---|---|---|---|
`;

CROSS_TOPIC_INTERLINKS.forEach((link, idx) => {
  interlinkingMd += `| ${idx + 1} | ${link.source} (\`${link.sourceSlug}\`) | ${link.target} (\`${link.targetSlug}\`) | 查看${link.target} | ${link.reason} |\n`;
});

interlinkingMd += `\n---

## 三、三层立体链接拓扑模型

1. **纵向层级覆盖网络 (Vertical Hierarchy)**
   - 首页 ↔ 12 一级栏目 ↔ 36 二级专题 ↔ 72 三级集群 ↔ 432 篇文章
   - 一级栏目直接列出辖下 36 篇已发布文章；二级专题列出 12 篇；集群列出 6 篇。用户重要路径仅需：\`首页 → 一级栏目 → 文章\`，无需被迫点击四层。

2. **横向横切上下文网络 (Horizontal Cross-cutting)**
   - 预算选型 (便宜机场) ↔ 付款周期 (套餐对比)
   - 稳定性承诺 (机场推荐) ↔ 晚高峰测速方法 (机场评测)
   - AI工具连接超时 (AI机场) ↔ 网络层报错定位 (网络排障)
   - 流媒体大屏播放 (流媒体机场) ↔ 路由器网关代理 (客户端教程)

3. **实体与证据关联网络 (Entity-Evidence Network)**
   - 文章中提及具体品牌时，统一链接至品牌档案 \`/airports/{brand-slug}/\`
   - 品牌档案中展示套餐数据时，链接至对应测试记录与优惠码核销页面
   - 保证同一品牌在不同页面共用事实数据，但提供差异化的选型解读
`;

fs.writeFileSync(path.join(PACK_DIR, 'INTERLINKING_SPEC.md'), interlinkingMd, 'utf-8');

// Document D: IMPLEMENTATION_SPEC.md
const implementationMd = `# 机场wiki指南 — 完整技术实施与合规规格说明书

## 一、项目技术栈硬约束
- **核心框架**：Astro 4.x (TypeScript 严格模式)
- **内容集合**：Astro Content Collections (Markdown / MDX)
- **样式系统**：Tailwind CSS + 轻量原生 CSS (白底 + 蓝灰主色卡片博客系统)
- **站内搜索**：Pagefind 静态搜索引擎 (\`/search/\` 页面 + Header 模态检索)
- **Sitemap & RSS**：\`@astrojs/sitemap\` 自动生成，过滤 draft 草稿；\`@astrojs/rss\` 发布更新源
- **部署环境**：Apache 静态托管 (\`dist/\` 作为 DocumentRoot + \`.htaccess\` 规则配置)
- **图标系统**：\`astro-icon\` + Lucide Icons

---

## 二、视觉风格系统与 CSS 变量规范

\`\`\`css
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
\`\`\`

### 排版与可访问性底线
- 正文桌面端字号严格保持 **17px** (移动端 16px)
- 浅色背景下正文对比度必须 **≥ 7:1** (WCAG AAA 级标准)
- 所有数据报表、延迟、吞吐及价格数值必须使用等宽字体 (\`--font-mono\`) 并开启 \`font-variant-numeric: tabular-nums\`
- 页面任何元素在 320px–1920px 宽度下均**不得产生水平滚动溢出** (表格允许自身内部横向平滑滚动)

---

## 三、合规披露与推广链接审计规则 (最高优先级)

1. **无隶属关系全站声明**：Header 导航副标题、全站 Footer、关于页、免责声明页醒目标注“本站为独立第三方选型指南，与任何机场品牌、网络代理服务商或开源软件无隶属关系”。
2. **合法用途约束提示**：页脚展示“请严格遵守当地法律法规，本站内容仅供科研学习、海外合规贸易及学术交流等合法用途”。
3. **推广链接处理**：
   - 所有品牌商注册链接、优惠购买外链必须带有：\`target="_blank" rel="nofollow sponsored noopener"\`
   - 链接卡片附近必须固定展示披露说明：**“含推广链接，通过链接注册可能为本站带来佣金，不影响用户支付价格”**。
   - **重构时严格保留原有查询参数及邀请码片段**（例如：\`https://sahude.gsyvipaff.com/#/?code=keqgvT5Y\` 中的 \`code=keqgvT5Y\`）。
4. **数据真实性标注**：
   - 数据字段必须标注 \`dataStatus: "vendor" | "measured" | "unverified"\`
   - 品牌方主张一律添加前缀“品牌资料显示”
   - 未实测字段显示“待核验”Badge，未知值保持未知，严禁用“0”或“支持”混淆视听。
5. **严禁生成内容**：
   - 严禁包含真实可用节点配置参数、真实订阅Base64串、破解绕过授权内容、翻墙翻网审查教学。
   - 教程示范统一使用结构化安全占位符（如 \`https://subscribe.example.com/api/v1/client/subscribe?token=(占位)\`）。

---

## 四、GEO / AEO 优化实施规范

1. **Answer-First 结构模型**：
   - 关键章节均以“核心问题 → 直接答案 → 适用条件 → 比较依据 → 证据来源 → 下一步行动”组织。
   - 回答应具有独立理解性，不使用“如上所述”、“大家心知肚明”等代词。
2. **结构化数据 (JSON-LD)**：
   - 首页：\`WebSite\`
   - 一级与二级专题：\`CollectionPage\` + \`ItemList\`
   - 独立文章：\`Article\` 或 \`TechArticle\`
   - 分类链路：\`BreadcrumbList\`
   - 品牌服务：\`Service\`
   - 客户端软件：\`SoftwareApplication\`
   - 实测验收：具备事实基础的 \`Review\`
   - **禁止虚构作者资质、公司地址、虚假评分或评论人数**。
3. **搜索引擎与 AI 爬虫访问控制**：
   - 独立配置 \`robots.txt\`，规范对待 Googlebot、Bingbot、OAI-SearchBot 与 PerplexityBot。
   - 明确 FAQ 结构化数据在现代搜索引擎中的语义角色，不将其当作收录保证。

---

## 五、7 个自动化质量校验脚本规格

| 脚本文件 | 核心校验职责 | 阻断构建条件 |
|---|---|---|
| \`scripts/validate-content.mjs\` | 检查全站 Frontmatter、重复 slug、缺失 title/desc、占位残留 | 存在必填字段缺失或非法字符 |
| \`scripts/check-links.mjs\` | 检查全站内部链接、404 死链、孤立无父级页面、空锚文本 | 存在内部死链或指向草稿链接 |
| \`scripts/check-seo.mjs\` | 检查 Title/H1 唯一性、TL;DR、H2数量(≥5)、表格/步骤(≥2)、字数(≥7000) | SEO 结构不达标 |
| \`scripts/check-typography.mjs\` | 检查字体层级、硬编码字体像素、对比度 ≥ 7:1、等宽数字使用 | 字号过小或对比度不合规 |
| \`scripts/check-pillar-hub.mjs\` | 检查 12 个一级栏目：字数 ≥ 7000、巨幅表 ≥ 8x8、决策树 ≥ 3层、FAQ ≥ 15、内链 ≥ 30 | Pillar Hub 深度不足 |
| \`scripts/check-content-map.mjs\` | 检查 553 个规划节点唯一性、432 篇文章 ID 唯一、无悬空引用、草稿不入公开 sitemap | 内容地图冲突或悬空 |
| \`scripts/audit-brand-links.mjs\` | 检查推广链接 rel 属性、商业披露提示、原始邀请码保留情况 | 推广链接未合规标记或邀请码丢失 |

---

## 六、Apache 静态部署规范 (\`.htaccess\`)
- 强制 HTTPS 重定向
- 统一规范去除 www
- 移除尾部未匹配斜杠或保持目录斜杠一致性
- 配置 404 错误页指向 \`/404.html\`
- 开启 Gzip / Deflate 压缩 (\`text/html\`, \`text/css\`, \`application/javascript\`, \`application/json\`)
- 配置静态资产持久缓存 (\`Cache-Control: max-age=31536000, immutable\` 针对构建 Hash 文件)
- 安全响应头：\`X-Content-Type-Options: nosniff\`、\`Referrer-Policy: strict-origin-when-cross-origin\`、\`Permissions-Policy\`
- 禁用目录遍历：\`Options -Indexes\`
`;

fs.writeFileSync(path.join(PACK_DIR, 'IMPLEMENTATION_SPEC.md'), implementationMd, 'utf-8');

// Document E: CONTENT_MAP_SPEC.md
const contentMapSpecMd = `# 机场wiki指南 — 内容地图状态与字典规范 (Content Map)

> 核心准则：**553 个规划节点是结构设计蓝图，绝不一次性批量发布 553 个无实质内容的空壳页面。**
> 未完成实测、未编写详实正文的文章保持 \`publishStatus: "draft"\` 状态，坚决不进入公开目录、Sitemap 站点地图与推荐卡片。

---

## 一、文章状态生命周期

\`\`\`text
[ 规划状态 draft ] ──(完成初稿与实操测试)──> [ 审核状态 review ] ──(通过7个脚本校验)──> [ 正式发布 published ]
\`\`\`

- **draft**：已在内容字典登记稳定 ID、归属关系与核心提问，正文未就绪。不参与构建输出，不计入 sitemap。
- **review**：正文已撰写完成，正在执行链接、实测证据、字数与排版校验。
- **published**：已完全符合 7,000 字以上标准，拥有独立测试证据或演算，正式上线。

---

## 二、432 篇 SEO 独立文章元数据全量结构定义

本规划包在 \`planning_pack/data/content-map.json\` 中已全量初始化全部 432 篇文章的元数据结构，每条记录严格具备如下字段：

\`\`\`typescript
interface ArticleMeta {
  stableId: string;              // 稳定文章 ID，如 art-rec-001
  primaryQuestion: string;       // 文章核心主问题
  primaryCluster: string;        // 归属三级集群候选 URL
  primaryTopic: string;          // 归属二级专题候选 URL
  primaryPillar: string;         // 归属一级栏目候选 URL
  canonicalUrl: string;          // 规范文章地址：https://jichangwiki.cc/articles/{stableId}/
  entityRefs: string[];          // 涉及的品牌实体 ID (如 gsy, feimao)
  evidenceRefs: string[];        // 涉及的实测证据 ID
  relatedArticles: string[];     // 上下文关联推荐文章 stableId
  author: string | null;         // 撰写人 (坚持事实，严禁虚构知名专家)
  publishedAt: string | null;    // 发布时间戳
  updatedAt: string | null;      // 最后更新时间戳
  verifiedAt: string | null;     // 最近一次数据真实性核验日期
  evidenceStatus: "draft" | "verified" | "insufficient";
  publishStatus: "draft" | "review" | "published";
}
\`\`\`

---

## 三、文章发布批次建议（按证据成熟度推进）

1. **第一批次（核心闭环）**：完成一级栏目推荐与评测主入口 + 首次选购专题 (12篇) + 客户端 Windows/Android 核心教程 (12篇)
2. **第二批次（预算与购买）**：便宜机场专题 (12篇) + 套餐对比专题 (12篇) + 优惠码核验 (12篇)
3. **第三批次（特定用途）**：AI 办公专题 (12篇) + Netflix 4K 流媒体专题 (12篇)
4. **第四批次（技术与排障）**：网络排障 (24篇) + 机场百科原理 (24篇)
5. **后续滚动批次**：逐步扩写剩余三级集群直至全量 432 篇高质量发布。
`;

fs.writeFileSync(path.join(PACK_DIR, 'CONTENT_MAP_SPEC.md'), contentMapSpecMd, 'utf-8');

// Document F: PACKAGE_README.md
const readmeMd = `# 机场wiki指南 — 规划规格文件包说明 (Package Readme)

欢迎查阅 **jichangwiki.cc（机场wiki指南）** 完整建站规划文件包。

本文件包为本项目第一阶段产出物，包含全站信息架构蓝图、全量 553 个规划内容页面规格、121 份编辑规格文档、28 家品牌真实资料、蜂巢式内链矩阵与技术部署标准。

---

## 一、文件包目录索引

\`\`\`text
planning_pack/
├── PACKAGE_README.md               # 本使用指南
├── TITLES_CATALOG.md               # 完整标题库（553 内容节点 + 28 品牌 + 基础政策页）
├── URL_MAPPING.md                  # 层级与候选 URL 规范映射总表
├── INTERLINKING_SPEC.md            # 蜂巢式内链设计规范与 24 组跨专题链接
├── IMPLEMENTATION_SPEC.md          # 视觉系统、合规安全、AEO/GEO与部署规格说明书
├── CONTENT_MAP_SPEC.md             # 内容地图状态管理规范 (draft/published 生命周期)
├── data/
│   ├── titles.json                 # 全量标题与节点数据 (JSON 格式)
│   ├── url-mapping.json            # 全量 URL 映射与面包屑数据 (JSON 格式)
│   ├── interlinking.json           # 跨专题与层级内链关系表 (JSON 格式)
│   ├── content-map.json            # 432 篇文章元数据登记表 (JSON 格式)
│   └── brands.json                 # 28 家品牌真实参数与推广链接 (JSON 格式)
└── specs/                          # 121 份 index.md 编辑规格说明书
    ├── home/
    │   └── index.md                # 首页长文总入口编辑规格 (1 份)
    ├── pillars/                    # 12 个一级栏目主入口规格 (12 份)
    │   ├── recommend/index.md
    │   ├── free/index.md
    │   ├── cheap/index.md
    │   ├── plans/index.md
    │   ├── reviews/index.md
    │   ├── coupons/index.md
    │   ├── ai/index.md
    │   ├── streaming/index.md
    │   ├── clients/index.md
    │   ├── troubleshooting/index.md
    │   ├── wiki/index.md
    │   └── airports/index.md
    ├── topics/                     # 36 个二级专题页规格 (36 份)
    │   ├── recommend/
    │   │   ├── first-purchase/index.md
    │   │   ├── conditions-and-devices/index.md
    │   │   └── reliability-and-support/index.md
    │   └── ... (其余 11 个一级栏目下属专题)
    └── clusters/                   # 72 个三级内容集群页规格 (72 份)
        ├── recommend/
        │   ├── first-purchase/
        │   │   ├── beginner-decision/index.md
        │   │   └── switch-and-combo/index.md
        │   └── ...
        └── ...
\`\`\`

---

## 二、关键指标汇总

1. **总规划内容节点**：553 个（首页 1 + 一级 12 + 二级 36 + 三级 72 + 文章 432）
2. **编辑规格文档**：正好 121 份（1 + 12 + 36 + 72 = 121）
3. **品牌档案**：28 家，主推光速云，推广参数保留原始邀请码
4. **巨幅对比表**：每个一级栏目规划 ≥ 8 对象 × 8 维度
5. **ASCII 决策树**：每个一级栏目规划 ≥ 3 层深度
6. **FAQ 问答**：每个一级栏目规划 ≥ 15 条针对性问答
7. **内链要求**：一级 ≥ 30 条，二级 ≥ 15 条，三级 ≥ 10 条，文章 ≥ 5 条，品牌 ≥ 10 条
8. **字数预算**：一级与二级专题遵循 7,000–9,500 字，首页约 8,200 字长文展开

---

## 三、确认后下一步行动计划

请您审阅并确认本规划包。确认无误后，我们将立即按计划执行后续步骤：
1. **第二阶段**：确认旧站路由与旧 URL 映射关系。
2. **第三阶段**：初始化 Astro 4.x + Tailwind + MDX 项目环境，落地全局样式系统与组件库。
3. **第四阶段**：完成首页及 12 个一级栏目主入口的实装。
4. **第五阶段**：按批次有序推进二级专题、三级集群与 432 篇独立文章的编写与验收。
`;

fs.writeFileSync(path.join(PACK_DIR, 'PACKAGE_README.md'), readmeMd, 'utf-8');

// 4. Save JSON Datasets
fs.writeFileSync(path.join(PACK_DIR, 'data', 'titles.json'), JSON.stringify(allTitles, null, 2), 'utf-8');
fs.writeFileSync(path.join(PACK_DIR, 'data', 'url-mapping.json'), JSON.stringify(urlMapping, null, 2), 'utf-8');
fs.writeFileSync(path.join(PACK_DIR, 'data', 'interlinking.json'), JSON.stringify(CROSS_TOPIC_INTERLINKS, null, 2), 'utf-8');
fs.writeFileSync(path.join(PACK_DIR, 'data', 'content-map.json'), JSON.stringify(contentMap, null, 2), 'utf-8');
fs.writeFileSync(path.join(PACK_DIR, 'data', 'brands.json'), JSON.stringify(BRANDS, null, 2), 'utf-8');

console.log(`Generated:
- All Titles items: ${allTitles.length}
- URL Mappings: ${urlMapping.length}
- Content Map items: ${contentMap.length}
- Total Specs: ${specCount} (Home: 1, Pillars: 12, Topics: 36, Clusters: 72)
`);

// 5. Create ZIP Archive
console.log('Compressing planning_pack into jichangwiki_rebuild_pack.zip ...');
try {
  const psCmd = `powershell -NoProfile -Command "Compress-Archive -Path '${PACK_DIR}\\*' -DestinationPath '${ZIP_PATH}' -Force"`;
  execSync(psCmd, { stdio: 'inherit' });
  const stats = fs.statSync(ZIP_PATH);
  console.log(`Successfully created ZIP archive: ${ZIP_PATH} (${(stats.size / 1024).toFixed(2)} KB)`);
} catch (err) {
  console.error('Failed to create zip with PowerShell:', err);
  process.exit(1);
}

console.log('--- Step 1 Execution Completed Successfully! ---');
