# 机场wiki指南 — 规划规格文件包说明 (Package Readme)

欢迎查阅 **jichangwiki.cc（机场wiki指南）** 完整建站规划文件包。

本文件包为本项目第一阶段产出物，包含全站信息架构蓝图、全量 553 个规划内容页面规格、121 份编辑规格文档、28 家品牌真实资料、蜂巢式内链矩阵与技术部署标准。

---

## 一、文件包目录索引

```text
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
```

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
