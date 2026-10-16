# 机场wiki指南 — 内容地图状态与字典规范 (Content Map)

> 核心准则：**553 个规划节点是结构设计蓝图，绝不一次性批量发布 553 个无实质内容的空壳页面。**
> 未完成实测、未编写详实正文的文章保持 `publishStatus: "draft"` 状态，坚决不进入公开目录、Sitemap 站点地图与推荐卡片。

---

## 一、文章状态生命周期

```text
[ 规划状态 draft ] ──(完成初稿与实操测试)──> [ 审核状态 review ] ──(通过7个脚本校验)──> [ 正式发布 published ]
```

- **draft**：已在内容字典登记稳定 ID、归属关系与核心提问，正文未就绪。不参与构建输出，不计入 sitemap。
- **review**：正文已撰写完成，正在执行链接、实测证据、字数与排版校验。
- **published**：已完全符合 7,000 字以上标准，拥有独立测试证据或演算，正式上线。

---

## 二、432 篇 SEO 独立文章元数据全量结构定义

本规划包在 `planning_pack/data/content-map.json` 中已全量初始化全部 432 篇文章的元数据结构，每条记录严格具备如下字段：

```typescript
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
```

---

## 三、文章发布批次建议（按证据成熟度推进）

1. **第一批次（核心闭环）**：完成一级栏目推荐与评测主入口 + 首次选购专题 (12篇) + 客户端 Windows/Android 核心教程 (12篇)
2. **第二批次（预算与购买）**：便宜机场专题 (12篇) + 套餐对比专题 (12篇) + 优惠码核验 (12篇)
3. **第三批次（特定用途）**：AI 办公专题 (12篇) + Netflix 4K 流媒体专题 (12篇)
4. **第四批次（技术与排障）**：网络排障 (24篇) + 机场百科原理 (24篇)
5. **后续滚动批次**：逐步扩写剩余三级集群直至全量 432 篇高质量发布。
