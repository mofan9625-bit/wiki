# 机场wiki指南 — 完整层级与候选 URL 映射规范表

> 遵循原则：
> 1. 面包屑路径完整反映五层层级：首页 → 一级栏目 → 二级专题 → 三级集群 → 独立文章。
> 2. 文章 URL 采用稳定短 ID：`/articles/{stable-article-id}/`，避免层级变更导致外部反向链接断裂。
> 3. Canonical 规范地址严格一对一绑定，绝不滥用通配或将所有专题重定向至推荐页。
> 4. 所有目录型路由末尾带斜杠 `/`，兼容 Apache `.htaccess` 规范。

---

## 一、路由架构映射规则

```text
https://jichangwiki.cc/
├── /                                          (首页)
├── /{pillar}/                                 (一级栏目主入口，共 12 个)
│    └── /{pillar}/{topic}/                    (二级专题页，共 36 个)
│         └── /{pillar}/{topic}/{cluster}/     (三级集群页，共 72 个)
├── /articles/{stable-article-id}/             (独立 SEO 文章页，共 432 篇)
├── /airports/{brand-slug}/                    (品牌唯一档案页，共 28 家)
├── /search/                                   (Pagefind 静态搜索)
└── /{policy-page}/                            (关于、免责、披露等合规页)
```

---

## 二、完整候选 URL 与层级映射总表 (节选核心主干 + 432 篇全量)

| 节点类型 | 稳定识别 ID | 页面标题 | 候选规范 URL | 面包屑导航链路 |
|---|---|---|---|---|
| home | `home` | 机场wiki指南 - 首页 | `https://jichangwiki.cc/` | 首页 |
| pillar | `recommend` | 机场推荐 | `https://jichangwiki.cc/recommend/` | 首页 > 机场推荐 |
| topic | `first-purchase` | 首次选购与服务切换 | `https://jichangwiki.cc/recommend/first-purchase/` | 首页 > 机场推荐 > 首次选购与服务切换 |
| cluster | `beginner-decision` | 新手选购决策 | `https://jichangwiki.cc/recommend/first-purchase/beginner-decision/` | 首页 > 机场推荐 > 首次选购与服务切换 > 新手选购决策 |
| article | `art-rec-001` | 第一次买机场怎么选？从设备、用途到套餐的完整决策流程 | `https://jichangwiki.cc/articles/art-rec-001/` | 首页 > 机场推荐 > 首次选购与服务切换 > 新手选购决策 > 第一次买机场怎么选？从设备、用途到套餐的完整决策流程 |
| article | `art-rec-002` | 机场推荐榜单怎么看？识别广告排序、测试依据与适用人群 | `https://jichangwiki.cc/articles/art-rec-002/` | 首页 > 机场推荐 > 首次选购与服务切换 > 新手选购决策 > 机场推荐榜单怎么看？识别广告排序、测试依据与适用人群 |
| article | `art-rec-003` | 只有手机的新手适合哪类机场？自有客户端与通用客户端方案比较 | `https://jichangwiki.cc/articles/art-rec-003/` | 首页 > 机场推荐 > 首次选购与服务切换 > 新手选购决策 > 只有手机的新手适合哪类机场？自有客户端与通用客户端方案比较 |
| article | `art-rec-004` | 已有代理客户端还需要买什么？机场订阅与软件授权的区别 | `https://jichangwiki.cc/articles/art-rec-004/` | 首页 > 机场推荐 > 首次选购与服务切换 > 新手选购决策 > 已有代理客户端还需要买什么？机场订阅与软件授权的区别 |
| article | `art-rec-005` | 机场购买前应该问客服哪些问题？用需求清单筛掉不合适的服务 | `https://jichangwiki.cc/articles/art-rec-005/` | 首页 > 机场推荐 > 首次选购与服务切换 > 新手选购决策 > 机场购买前应该问客服哪些问题？用需求清单筛掉不合适的服务 |
| article | `art-rec-006` | 机场试用满意后怎么买正式套餐？从体验结果到付款周期的选择 | `https://jichangwiki.cc/articles/art-rec-006/` | 首页 > 机场推荐 > 首次选购与服务切换 > 新手选购决策 > 机场试用满意后怎么买正式套餐？从体验结果到付款周期的选择 |
| cluster | `switch-and-combo` | 换机场与组合使用 | `https://jichangwiki.cc/recommend/first-purchase/switch-and-combo/` | 首页 > 机场推荐 > 首次选购与服务切换 > 换机场与组合使用 |
| article | `art-rec-007` | 机场到期后换一家还是续费？迁移成本、使用记录与费用一起比较 | `https://jichangwiki.cc/articles/art-rec-007/` | 首页 > 机场推荐 > 首次选购与服务切换 > 换机场与组合使用 > 机场到期后换一家还是续费？迁移成本、使用记录与费用一起比较 |
| article | `art-rec-008` | 更换机场前要确认什么？设备、协议兼容与订阅迁移检查清单 | `https://jichangwiki.cc/articles/art-rec-008/` | 首页 > 机场推荐 > 首次选购与服务切换 > 换机场与组合使用 > 更换机场前要确认什么？设备、协议兼容与订阅迁移检查清单 |
| article | `art-rec-009` | 主用加备用机场怎么搭配？故障独立性、成本与管理难度比较 | `https://jichangwiki.cc/articles/art-rec-009/` | 首页 > 机场推荐 > 首次选购与服务切换 > 换机场与组合使用 > 主用加备用机场怎么搭配？故障独立性、成本与管理难度比较 |
| article | `art-rec-010` | 什么情况下两个机场同时使用更合适？多设备与工作场景分析 | `https://jichangwiki.cc/articles/art-rec-010/` | 首页 > 机场推荐 > 首次选购与服务切换 > 换机场与组合使用 > 什么情况下两个机场同时使用更合适？多设备与工作场景分析 |
| article | `art-rec-011` | 从便宜机场升级到中端服务怎么选？预算与体验变化评估 | `https://jichangwiki.cc/articles/art-rec-011/` | 首页 > 机场推荐 > 首次选购与服务切换 > 换机场与组合使用 > 从便宜机场升级到中端服务怎么选？预算与体验变化评估 |
| article | `art-rec-012` | 一个账号多台设备使用时应该注意哪些限制？并发连接与规则检查 | `https://jichangwiki.cc/articles/art-rec-012/` | 首页 > 机场推荐 > 首次选购与服务切换 > 换机场与组合使用 > 一个账号多台设备使用时应该注意哪些限制？并发连接与规则检查 |
| topic | `conditions-and-devices` | 使用条件与设备需求 | `https://jichangwiki.cc/recommend/conditions-and-devices/` | 首页 > 机场推荐 > 使用条件与设备需求 |
| cluster | `mobile-and-travel` | 移动网络与外出使用 | `https://jichangwiki.cc/recommend/conditions-and-devices/mobile-and-travel/` | 首页 > 机场推荐 > 使用条件与设备需求 > 移动网络与外出使用 |
| article | `art-rec-013` | 移动网络环境下机场怎么选？4G、5G 切换与连接稳定性比较 | `https://jichangwiki.cc/articles/art-rec-013/` | 首页 > 机场推荐 > 使用条件与设备需求 > 移动网络与外出使用 > 移动网络环境下机场怎么选？4G、5G 切换与连接稳定性比较 |
| article | `art-rec-014` | 经常出差、旅行用什么机场？酒店网络与临时场景选择 | `https://jichangwiki.cc/articles/art-rec-014/` | 首页 > 机场推荐 > 使用条件与设备需求 > 移动网络与外出使用 > 经常出差、旅行用什么机场？酒店网络与临时场景选择 |
| article | `art-rec-015` | 公共场所 Wi-Fi 使用机场应该注意什么？安全与连接检查 | `https://jichangwiki.cc/articles/art-rec-015/` | 首页 > 机场推荐 > 使用条件与设备需求 > 移动网络与外出使用 > 公共场所 Wi-Fi 使用机场应该注意什么？安全与连接检查 |
| article | `art-rec-016` | 手机流量不足时怎样调整机场套餐？流量消耗与备用方案 | `https://jichangwiki.cc/articles/art-rec-016/` | 首页 > 机场推荐 > 使用条件与设备需求 > 移动网络与外出使用 > 手机流量不足时怎样调整机场套餐？流量消耗与备用方案 |
| article | `art-rec-017` | 经常切换网络环境时怎样减少掉线？客户端与节点策略 | `https://jichangwiki.cc/articles/art-rec-017/` | 首页 > 机场推荐 > 使用条件与设备需求 > 移动网络与外出使用 > 经常切换网络环境时怎样减少掉线？客户端与节点策略 |
| article | `art-rec-018` | 手机热点共享给其他设备使用机场，会不会影响体验？ | `https://jichangwiki.cc/articles/art-rec-018/` | 首页 > 机场推荐 > 使用条件与设备需求 > 移动网络与外出使用 > 手机热点共享给其他设备使用机场，会不会影响体验？ |
| cluster | `multi-device-and-sharing` | 多设备与协作约束 | `https://jichangwiki.cc/recommend/conditions-and-devices/multi-device-and-sharing/` | 首页 > 机场推荐 > 使用条件与设备需求 > 多设备与协作约束 |
| article | `art-rec-019` | 家庭多设备使用机场怎么选？连接限制与管理成本分析 | `https://jichangwiki.cc/articles/art-rec-019/` | 首页 > 机场推荐 > 使用条件与设备需求 > 多设备与协作约束 > 家庭多设备使用机场怎么选？连接限制与管理成本分析 |
| article | `art-rec-020` | 手机和电脑一起用机场怎么选？设备规则与跨平台支持 | `https://jichangwiki.cc/articles/art-rec-020/` | 首页 > 机场推荐 > 使用条件与设备需求 > 多设备与协作约束 > 手机和电脑一起用机场怎么选？设备规则与跨平台支持 |
| article | `art-rec-021` | 学校或公司电脑能否使用个人机场？合规与终端权限核对 | `https://jichangwiki.cc/articles/art-rec-021/` | 首页 > 机场推荐 > 使用条件与设备需求 > 多设备与协作约束 > 学校或公司电脑能否使用个人机场？合规与终端权限核对 |
| article | `art-rec-022` | 平板电脑使用机场需要单独订阅吗？设备限制与配置说明 | `https://jichangwiki.cc/articles/art-rec-022/` | 首页 > 机场推荐 > 使用条件与设备需求 > 多设备与协作约束 > 平板电脑使用机场需要单独订阅吗？设备限制与配置说明 |
| article | `art-rec-023` | 电视和投屏使用机场需要额外配置吗？家庭网络方案 | `https://jichangwiki.cc/articles/art-rec-023/` | 首页 > 机场推荐 > 使用条件与设备需求 > 多设备与协作约束 > 电视和投屏使用机场需要额外配置吗？家庭网络方案 |
| article | `art-rec-024` | 多设备场景下如何管理订阅与凭据？安全与协作约束 | `https://jichangwiki.cc/articles/art-rec-024/` | 首页 > 机场推荐 > 使用条件与设备需求 > 多设备与协作约束 > 多设备场景下如何管理订阅与凭据？安全与协作约束 |
| topic | `reliability-and-support` | 可靠性与服务保障 | `https://jichangwiki.cc/recommend/reliability-and-support/` | 首页 > 机场推荐 > 可靠性与服务保障 |
| cluster | `primary-and-stability` | 主力服务与稳定性选择 | `https://jichangwiki.cc/recommend/reliability-and-support/primary-and-stability/` | 首页 > 机场推荐 > 可靠性与服务保障 > 主力服务与稳定性选择 |
| article | `art-rec-025` | 稳定机场怎么选？晚高峰、连续使用与故障恢复证据对比 | `https://jichangwiki.cc/articles/art-rec-025/` | 首页 > 机场推荐 > 可靠性与服务保障 > 主力服务与稳定性选择 > 稳定机场怎么选？晚高峰、连续使用与故障恢复证据对比 |
| article | `art-rec-026` | 长时间在线使用机场应该注意什么？连接中断与重连取舍 | `https://jichangwiki.cc/articles/art-rec-026/` | 首页 > 机场推荐 > 可靠性与服务保障 > 主力服务与稳定性选择 > 长时间在线使用机场应该注意什么？连接中断与重连取舍 |
| article | `art-rec-027` | 机场售后支持怎么比较？工单渠道、响应记录与自助排障能力 | `https://jichangwiki.cc/articles/art-rec-027/` | 首页 > 机场推荐 > 可靠性与服务保障 > 主力服务与稳定性选择 > 机场售后支持怎么比较？工单渠道、响应记录与自助排障能力 |
| article | `art-rec-028` | 机场的退款条款应该怎么看？申请条件、例外情况与证据留存 | `https://jichangwiki.cc/articles/art-rec-028/` | 首页 > 机场推荐 > 可靠性与服务保障 > 主力服务与稳定性选择 > 机场的退款条款应该怎么看？申请条件、例外情况与证据留存 |
| article | `art-rec-029` | 如何评估机场的长期可用性？观察方法与判断依据 | `https://jichangwiki.cc/articles/art-rec-029/` | 首页 > 机场推荐 > 可靠性与服务保障 > 主力服务与稳定性选择 > 如何评估机场的长期可用性？观察方法与判断依据 |
| article | `art-rec-030` | 什么情况下应该换掉主力机场？关键信号与决策流程 | `https://jichangwiki.cc/articles/art-rec-030/` | 首页 > 机场推荐 > 可靠性与服务保障 > 主力服务与稳定性选择 > 什么情况下应该换掉主力机场？关键信号与决策流程 |
| cluster | `support-and-constraints` | 支持能力与购买约束 | `https://jichangwiki.cc/recommend/reliability-and-support/support-and-constraints/` | 首页 > 机场推荐 > 可靠性与服务保障 > 支持能力与购买约束 |
| article | `art-rec-031` | 机场的隐私说明怎么看？日志声明、数据范围与无法验证的部分 | `https://jichangwiki.cc/articles/art-rec-031/` | 首页 > 机场推荐 > 可靠性与服务保障 > 支持能力与购买约束 > 机场的隐私说明怎么看？日志声明、数据范围与无法验证的部分 |
| article | `art-rec-032` | 购买机场前如何确认支付方式？支付宝、USDT 与其他方式 | `https://jichangwiki.cc/articles/art-rec-032/` | 首页 > 机场推荐 > 可靠性与服务保障 > 支持能力与购买约束 > 购买机场前如何确认支付方式？支付宝、USDT 与其他方式 |
| article | `art-rec-033` | 机场的付款周期应该怎么选？月付、季付与年付权衡 | `https://jichangwiki.cc/articles/art-rec-033/` | 首页 > 机场推荐 > 可靠性与服务保障 > 支持能力与购买约束 > 机场的付款周期应该怎么选？月付、季付与年付权衡 |
| article | `art-rec-034` | 机场的流量重置与续费规则应该怎么看？ | `https://jichangwiki.cc/articles/art-rec-034/` | 首页 > 机场推荐 > 可靠性与服务保障 > 支持能力与购买约束 > 机场的流量重置与续费规则应该怎么看？ |
| article | `art-rec-035` | 机场的联系渠道与响应方式应该怎么比较？ | `https://jichangwiki.cc/articles/art-rec-035/` | 首页 > 机场推荐 > 可靠性与服务保障 > 支持能力与购买约束 > 机场的联系渠道与响应方式应该怎么比较？ |
| article | `art-rec-036` | 机场的品牌与运营时长应该怎样核实？ | `https://jichangwiki.cc/articles/art-rec-036/` | 首页 > 机场推荐 > 可靠性与服务保障 > 支持能力与购买约束 > 机场的品牌与运营时长应该怎样核实？ |
| pillar | `free` | 免费机场 | `https://jichangwiki.cc/free/` | 首页 > 免费机场 |
| topic | `resource-and-eligibility` | 免费资源与领取条件 | `https://jichangwiki.cc/free/resource-and-eligibility/` | 首页 > 免费机场 > 免费资源与领取条件 |
| cluster | `public-welfare-recognition` | 公益资源识别 | `https://jichangwiki.cc/free/resource-and-eligibility/public-welfare-recognition/` | 首页 > 免费机场 > 免费资源与领取条件 > 公益资源识别 |
| article | `art-free-001` | 免费机场资源有哪些类型？公益、开源与商业免费区分 | `https://jichangwiki.cc/articles/art-free-001/` | 首页 > 免费机场 > 免费资源与领取条件 > 公益资源识别 > 免费机场资源有哪些类型？公益、开源与商业免费区分 |
| article | `art-free-002` | 公益免费机场项目是什么？非营利模式的可持续性判断 | `https://jichangwiki.cc/articles/art-free-002/` | 首页 > 免费机场 > 免费资源与领取条件 > 公益资源识别 > 公益免费机场项目是什么？非营利模式的可持续性判断 |
| article | `art-free-003` | 开源项目提供的免费服务能长期用吗？维护状态核对 | `https://jichangwiki.cc/articles/art-free-003/` | 首页 > 免费机场 > 免费资源与领取条件 > 公益资源识别 > 开源项目提供的免费服务能长期用吗？维护状态核对 |
| article | `art-free-004` | 公开分享的免费订阅安全吗？来源、隐私与风险边界 | `https://jichangwiki.cc/articles/art-free-004/` | 首页 > 免费机场 > 免费资源与领取条件 > 公益资源识别 > 公开分享的免费订阅安全吗？来源、隐私与风险边界 |
| article | `art-free-005` | 免费资源能不能用于日常使用？轻度使用与正常使用的差距 | `https://jichangwiki.cc/articles/art-free-005/` | 首页 > 免费机场 > 免费资源与领取条件 > 公益资源识别 > 免费资源能不能用于日常使用？轻度使用与正常使用的差距 |
| article | `art-free-006` | 免费资源怎么筛选更稳妥？来源、条件与核验清单 | `https://jichangwiki.cc/articles/art-free-006/` | 首页 > 免费机场 > 免费资源与领取条件 > 公益资源识别 > 免费资源怎么筛选更稳妥？来源、条件与核验清单 |
| cluster | `quota-and-eligibility` | 领取资格与免费额度 | `https://jichangwiki.cc/free/resource-and-eligibility/quota-and-eligibility/` | 首页 > 免费机场 > 免费资源与领取条件 > 领取资格与免费额度 |
| article | `art-free-007` | 免费机场资源怎么领取？常见注册流程与条件说明 | `https://jichangwiki.cc/articles/art-free-007/` | 首页 > 免费机场 > 免费资源与领取条件 > 领取资格与免费额度 > 免费机场资源怎么领取？常见注册流程与条件说明 |
| article | `art-free-008` | 免费资源领取是否需要绑定支付方式？ | `https://jichangwiki.cc/articles/art-free-008/` | 首页 > 免费机场 > 免费资源与领取条件 > 领取资格与免费额度 > 免费资源领取是否需要绑定支付方式？ |
| article | `art-free-009` | 免费资源的流量与时长额度说明 | `https://jichangwiki.cc/articles/art-free-009/` | 首页 > 免费机场 > 免费资源与领取条件 > 领取资格与免费额度 > 免费资源的流量与时长额度说明 |
| article | `art-free-010` | 免费资源领取失败的常见原因与处理 | `https://jichangwiki.cc/articles/art-free-010/` | 首页 > 免费机场 > 免费资源与领取条件 > 领取资格与免费额度 > 免费资源领取失败的常见原因与处理 |
| article | `art-free-011` | 免费资源领取前的准备工作：账号、支付与设备清单 | `https://jichangwiki.cc/articles/art-free-011/` | 首页 > 免费机场 > 免费资源与领取条件 > 领取资格与免费额度 > 免费资源领取前的准备工作：账号、支付与设备清单 |
| article | `art-free-012` | 免费资源的领取频率与账号条件 | `https://jichangwiki.cc/articles/art-free-012/` | 首页 > 免费机场 > 免费资源与领取条件 > 领取资格与免费额度 > 免费资源的领取频率与账号条件 |
| topic | `trial-and-verification` | 机场试用与体验验收 | `https://jichangwiki.cc/free/trial-and-verification/` | 首页 > 免费机场 > 机场试用与体验验收 |
| cluster | `trial-selection` | 试用方案选择 | `https://jichangwiki.cc/free/trial-and-verification/trial-selection/` | 首页 > 免费机场 > 机场试用与体验验收 > 试用方案选择 |
| article | `art-free-013` | 机场免费试用怎么选？时长、流量与任务匹配 | `https://jichangwiki.cc/articles/art-free-013/` | 首页 > 免费机场 > 机场试用与体验验收 > 试用方案选择 > 机场免费试用怎么选？时长、流量与任务匹配 |
| article | `art-free-014` | 试用是否需要绑定支付方式？预授权、扣费与取消说明 | `https://jichangwiki.cc/articles/art-free-014/` | 首页 > 免费机场 > 机场试用与体验验收 > 试用方案选择 > 试用是否需要绑定支付方式？预授权、扣费与取消说明 |
| article | `art-free-015` | 试用账号的资格限制：新用户、首购与账号条件 | `https://jichangwiki.cc/articles/art-free-015/` | 首页 > 免费机场 > 机场试用与体验验收 > 试用方案选择 > 试用账号的资格限制：新用户、首购与账号条件 |
| article | `art-free-016` | 试用期时长与流量说明：不同服务的差异 | `https://jichangwiki.cc/articles/art-free-016/` | 首页 > 免费机场 > 机场试用与体验验收 > 试用方案选择 > 试用期时长与流量说明：不同服务的差异 |
| article | `art-free-017` | 试用期间的服务限制与功能开放范围 | `https://jichangwiki.cc/articles/art-free-017/` | 首页 > 免费机场 > 机场试用与体验验收 > 试用方案选择 > 试用期间的服务限制与功能开放范围 |
| article | `art-free-018` | 试用方案选择完整清单 | `https://jichangwiki.cc/articles/art-free-018/` | 首页 > 免费机场 > 机场试用与体验验收 > 试用方案选择 > 试用方案选择完整清单 |
| cluster | `trial-acceptance` | 试用结果与购买验收 | `https://jichangwiki.cc/free/trial-and-verification/trial-acceptance/` | 首页 > 免费机场 > 机场试用与体验验收 > 试用结果与购买验收 |
| article | `art-free-019` | 试用期应该测试哪些项目？连接、速度、AI 与视频 | `https://jichangwiki.cc/articles/art-free-019/` | 首页 > 免费机场 > 机场试用与体验验收 > 试用结果与购买验收 > 试用期应该测试哪些项目？连接、速度、AI 与视频 |
| article | `art-free-020` | 试用期的连接验证方法：从订阅导入到正常使用 | `https://jichangwiki.cc/articles/art-free-020/` | 首页 > 免费机场 > 机场试用与体验验收 > 试用结果与购买验收 > 试用期的连接验证方法：从订阅导入到正常使用 |
| article | `art-free-021` | 试用期如何观察服务波动：连续记录与对照方法 | `https://jichangwiki.cc/articles/art-free-021/` | 首页 > 免费机场 > 机场试用与体验验收 > 试用结果与购买验收 > 试用期如何观察服务波动：连续记录与对照方法 |
| article | `art-free-022` | 试用结束前的决策框架：续用、换用或退出 | `https://jichangwiki.cc/articles/art-free-022/` | 首页 > 免费机场 > 机场试用与体验验收 > 试用结果与购买验收 > 试用结束前的决策框架：续用、换用或退出 |
| article | `art-free-023` | 试用转付费的注意事项：套餐切换与费用核对 | `https://jichangwiki.cc/articles/art-free-023/` | 首页 > 免费机场 > 机场试用与体验验收 > 试用结果与购买验收 > 试用转付费的注意事项：套餐切换与费用核对 |
| article | `art-free-024` | 试用满意后如何正式购买：流程与凭证留存 | `https://jichangwiki.cc/articles/art-free-024/` | 首页 > 免费机场 > 机场试用与体验验收 > 试用结果与购买验收 > 试用满意后如何正式购买：流程与凭证留存 |
| topic | `exit-and-alternatives` | 免费服务退出与替代 | `https://jichangwiki.cc/free/exit-and-alternatives/` | 首页 > 免费机场 > 免费服务退出与替代 |
| cluster | `failure-and-alternatives` | 失效判断与替代路径 | `https://jichangwiki.cc/free/exit-and-alternatives/failure-and-alternatives/` | 首页 > 免费机场 > 免费服务退出与替代 > 失效判断与替代路径 |
| article | `art-free-025` | 免费资源失效怎么判断？状态核对与更新记录 | `https://jichangwiki.cc/articles/art-free-025/` | 首页 > 免费机场 > 免费服务退出与替代 > 失效判断与替代路径 > 免费资源失效怎么判断？状态核对与更新记录 |
| article | `art-free-026` | 免费资源失效后的替代方案：付费、低价与自建 | `https://jichangwiki.cc/articles/art-free-026/` | 首页 > 免费机场 > 免费服务退出与替代 > 失效判断与替代路径 > 免费资源失效后的替代方案：付费、低价与自建 |
| article | `art-free-027` | 免费资源与低价付费的差别：成本、服务与责任范围 | `https://jichangwiki.cc/articles/art-free-027/` | 首页 > 免费机场 > 免费服务退出与替代 > 失效判断与替代路径 > 免费资源与低价付费的差别：成本、服务与责任范围 |
| article | `art-free-028` | 什么情况下免费资源完全不可用？风险场景与规避 | `https://jichangwiki.cc/articles/art-free-028/` | 首页 > 免费机场 > 免费服务退出与替代 > 失效判断与替代路径 > 什么情况下免费资源完全不可用？风险场景与规避 |
| article | `art-free-029` | 从免费过渡到付费的判断节点 | `https://jichangwiki.cc/articles/art-free-029/` | 首页 > 免费机场 > 免费服务退出与替代 > 失效判断与替代路径 > 从免费过渡到付费的判断节点 |
| article | `art-free-030` | 免费资源的退出策略与替代路径完整说明 | `https://jichangwiki.cc/articles/art-free-030/` | 首页 > 免费机场 > 免费服务退出与替代 > 失效判断与替代路径 > 免费资源的退出策略与替代路径完整说明 |
| cluster | `privacy-and-cleanup` | 隐私检查与配置清理 | `https://jichangwiki.cc/free/exit-and-alternatives/privacy-and-cleanup/` | 首页 > 免费机场 > 免费服务退出与替代 > 隐私检查与配置清理 |
| article | `art-free-031` | 免费资源的隐私条款应该怎么读？ | `https://jichangwiki.cc/articles/art-free-031/` | 首页 > 免费机场 > 免费服务退出与替代 > 隐私检查与配置清理 > 免费资源的隐私条款应该怎么读？ |
| article | `art-free-032` | 免费资源使用中的数据可见范围说明 | `https://jichangwiki.cc/articles/art-free-032/` | 首页 > 免费机场 > 免费服务退出与替代 > 隐私检查与配置清理 > 免费资源使用中的数据可见范围说明 |
| article | `art-free-033` | 免费资源退出前的数据清理流程 | `https://jichangwiki.cc/articles/art-free-033/` | 首页 > 免费机场 > 免费服务退出与替代 > 隐私检查与配置清理 > 免费资源退出前的数据清理流程 |
| article | `art-free-034` | 免费资源账号注销与凭据处理 | `https://jichangwiki.cc/articles/art-free-034/` | 首页 > 免费机场 > 免费服务退出与替代 > 隐私检查与配置清理 > 免费资源账号注销与凭据处理 |
| article | `art-free-035` | 免费资源使用的安全边界 | `https://jichangwiki.cc/articles/art-free-035/` | 首页 > 免费机场 > 免费服务退出与替代 > 隐私检查与配置清理 > 免费资源使用的安全边界 |
| article | `art-free-036` | 免费资源隐私检查与清理清单 | `https://jichangwiki.cc/articles/art-free-036/` | 首页 > 免费机场 > 免费服务退出与替代 > 隐私检查与配置清理 > 免费资源隐私检查与清理清单 |
| pillar | `cheap` | 便宜机场 | `https://jichangwiki.cc/cheap/` | 首页 > 便宜机场 |
| topic | `fixed-budget` | 固定预算与入门套餐 | `https://jichangwiki.cc/cheap/fixed-budget/` | 首页 > 便宜机场 > 固定预算与入门套餐 |
| cluster | `low-monthly-fee` | 低月付选型 | `https://jichangwiki.cc/cheap/fixed-budget/low-monthly-fee/` | 首页 > 便宜机场 > 固定预算与入门套餐 > 低月付选型 |
| article | `art-cheap-001` | 5 元档机场有哪些？实际月付金额与流量说明 | `https://jichangwiki.cc/articles/art-cheap-001/` | 首页 > 便宜机场 > 固定预算与入门套餐 > 低月付选型 > 5 元档机场有哪些？实际月付金额与流量说明 |
| article | `art-cheap-002` | 7 元档机场怎么选？低预算下的服务质量核对 | `https://jichangwiki.cc/articles/art-cheap-002/` | 首页 > 便宜机场 > 固定预算与入门套餐 > 低月付选型 > 7 元档机场怎么选？低预算下的服务质量核对 |
| article | `art-cheap-003` | 10 元档机场推荐：入门级月付对比 | `https://jichangwiki.cc/articles/art-cheap-003/` | 首页 > 便宜机场 > 固定预算与入门套餐 > 低月付选型 > 10 元档机场推荐：入门级月付对比 |
| article | `art-cheap-004` | 低预算机场的付款周期怎么选？ | `https://jichangwiki.cc/articles/art-cheap-004/` | 首页 > 便宜机场 > 固定预算与入门套餐 > 低月付选型 > 低预算机场的付款周期怎么选？ |
| article | `art-cheap-005` | 低预算机场的入门套餐比较 | `https://jichangwiki.cc/articles/art-cheap-005/` | 首页 > 便宜机场 > 固定预算与入门套餐 > 低月付选型 > 低预算机场的入门套餐比较 |
| article | `art-cheap-006` | 低预算机场选择清单 | `https://jichangwiki.cc/articles/art-cheap-006/` | 首页 > 便宜机场 > 固定预算与入门套餐 > 低月付选型 > 低预算机场选择清单 |
| cluster | `low-traffic-value` | 小流量价值判断 | `https://jichangwiki.cc/cheap/fixed-budget/low-traffic-value/` | 首页 > 便宜机场 > 固定预算与入门套餐 > 小流量价值判断 |
| article | `art-cheap-007` | 小流量月付机场有哪些？50GB 以下的套餐对比 | `https://jichangwiki.cc/articles/art-cheap-007/` | 首页 > 便宜机场 > 固定预算与入门套餐 > 小流量价值判断 > 小流量月付机场有哪些？50GB 以下的套餐对比 |
| article | `art-cheap-008` | 小流量套餐的适用场景：轻度使用与备用 | `https://jichangwiki.cc/articles/art-cheap-008/` | 首页 > 便宜机场 > 固定预算与入门套餐 > 小流量价值判断 > 小流量套餐的适用场景：轻度使用与备用 |
| article | `art-cheap-009` | 小流量套餐的流量计算方式 | `https://jichangwiki.cc/articles/art-cheap-009/` | 首页 > 便宜机场 > 固定预算与入门套餐 > 小流量价值判断 > 小流量套餐的流量计算方式 |
| article | `art-cheap-010` | 小流量套餐的设备与客户端支持 | `https://jichangwiki.cc/articles/art-cheap-010/` | 首页 > 便宜机场 > 固定预算与入门套餐 > 小流量价值判断 > 小流量套餐的设备与客户端支持 |
| article | `art-cheap-011` | 小流量套餐的续费与升级 | `https://jichangwiki.cc/articles/art-cheap-011/` | 首页 > 便宜机场 > 固定预算与入门套餐 > 小流量价值判断 > 小流量套餐的续费与升级 |
| article | `art-cheap-012` | 小流量套餐价值判断清单 | `https://jichangwiki.cc/articles/art-cheap-012/` | 首页 > 便宜机场 > 固定预算与入门套餐 > 小流量价值判断 > 小流量套餐价值判断清单 |
| topic | `low-frequency` | 低频使用与备用预算 | `https://jichangwiki.cc/cheap/low-frequency/` | 首页 > 便宜机场 > 低频使用与备用预算 |
| cluster | `intermittent-use` | 间歇使用选型 | `https://jichangwiki.cc/cheap/low-frequency/intermittent-use/` | 首页 > 便宜机场 > 低频使用与备用预算 > 间歇使用选型 |
| article | `art-cheap-013` | 偶尔使用的机场怎么选？按量付费与月付对比 | `https://jichangwiki.cc/articles/art-cheap-013/` | 首页 > 便宜机场 > 低频使用与备用预算 > 间歇使用选型 > 偶尔使用的机场怎么选？按量付费与月付对比 |
| article | `art-cheap-014` | 流量包与月付哪个更适合低频使用？ | `https://jichangwiki.cc/articles/art-cheap-014/` | 首页 > 便宜机场 > 低频使用与备用预算 > 间歇使用选型 > 流量包与月付哪个更适合低频使用？ |
| article | `art-cheap-015` | 备用服务需要多少预算？成本控制方案 | `https://jichangwiki.cc/articles/art-cheap-015/` | 首页 > 便宜机场 > 低频使用与备用预算 > 间歇使用选型 > 备用服务需要多少预算？成本控制方案 |
| article | `art-cheap-016` | 低频使用者的流量消耗估算方法 | `https://jichangwiki.cc/articles/art-cheap-016/` | 首页 > 便宜机场 > 低频使用与备用预算 > 间歇使用选型 > 低频使用者的流量消耗估算方法 |
| article | `art-cheap-017` | 间歇使用场景的付款周期选择 | `https://jichangwiki.cc/articles/art-cheap-017/` | 首页 > 便宜机场 > 低频使用与备用预算 > 间歇使用选型 > 间歇使用场景的付款周期选择 |
| article | `art-cheap-018` | 间歇使用选型完整说明 | `https://jichangwiki.cc/articles/art-cheap-018/` | 首页 > 便宜机场 > 低频使用与备用预算 > 间歇使用选型 > 间歇使用选型完整说明 |
| cluster | `backup-budget-allocation` | 主备组合的预算分配 | `https://jichangwiki.cc/cheap/low-frequency/backup-budget-allocation/` | 首页 > 便宜机场 > 低频使用与备用预算 > 主备组合的预算分配 |
| article | `art-cheap-019` | 主力机场与备用机场的预算怎么分配？ | `https://jichangwiki.cc/articles/art-cheap-019/` | 首页 > 便宜机场 > 低频使用与备用预算 > 主备组合的预算分配 > 主力机场与备用机场的预算怎么分配？ |
| article | `art-cheap-020` | 主备组合的流量与套餐配置 | `https://jichangwiki.cc/articles/art-cheap-020/` | 首页 > 便宜机场 > 低频使用与备用预算 > 主备组合的预算分配 > 主备组合的流量与套餐配置 |
| article | `art-cheap-021` | 主备服务的切换与验证 | `https://jichangwiki.cc/articles/art-cheap-021/` | 首页 > 便宜机场 > 低频使用与备用预算 > 主备组合的预算分配 > 主备服务的切换与验证 |
| article | `art-cheap-022` | 主备组合的账号与凭据管理 | `https://jichangwiki.cc/articles/art-cheap-022/` | 首页 > 便宜机场 > 低频使用与备用预算 > 主备组合的预算分配 > 主备组合的账号与凭据管理 |
| article | `art-cheap-023` | 主备组合的成本收益分析 | `https://jichangwiki.cc/articles/art-cheap-023/` | 首页 > 便宜机场 > 低频使用与备用预算 > 主备组合的预算分配 > 主备组合的成本收益分析 |
| article | `art-cheap-024` | 主备组合预算分配完整说明 | `https://jichangwiki.cc/articles/art-cheap-024/` | 首页 > 便宜机场 > 低频使用与备用预算 > 主备组合的预算分配 > 主备组合预算分配完整说明 |
| topic | `long-term-cost` | 长期成本与性价比 | `https://jichangwiki.cc/cheap/long-term-cost/` | 首页 > 便宜机场 > 长期成本与性价比 |
| cluster | `cost-effectiveness-eval` | 综合性价比评估 | `https://jichangwiki.cc/cheap/long-term-cost/cost-effectiveness-eval/` | 首页 > 便宜机场 > 长期成本与性价比 > 综合性价比评估 |
| article | `art-cheap-025` | 每 GB 成本怎么算？单位与口径核对 | `https://jichangwiki.cc/articles/art-cheap-025/` | 首页 > 便宜机场 > 长期成本与性价比 > 综合性价比评估 > 每 GB 成本怎么算？单位与口径核对 |
| article | `art-cheap-026` | 月均费用怎么算？年付折算与实付对比 | `https://jichangwiki.cc/articles/art-cheap-026/` | 首页 > 便宜机场 > 长期成本与性价比 > 综合性价比评估 > 月均费用怎么算？年付折算与实付对比 |
| article | `art-cheap-027` | 流量倍率对成本的影响 | `https://jichangwiki.cc/articles/art-cheap-027/` | 首页 > 便宜机场 > 长期成本与性价比 > 综合性价比评估 > 流量倍率对成本的影响 |
| article | `art-cheap-028` | 附加费用与升级成本 | `https://jichangwiki.cc/articles/art-cheap-028/` | 首页 > 便宜机场 > 长期成本与性价比 > 综合性价比评估 > 附加费用与升级成本 |
| article | `art-cheap-029` | 续费价格上涨的处理 | `https://jichangwiki.cc/articles/art-cheap-029/` | 首页 > 便宜机场 > 长期成本与性价比 > 综合性价比评估 > 续费价格上涨的处理 |
| article | `art-cheap-030` | 性价比评估完整方法 | `https://jichangwiki.cc/articles/art-cheap-030/` | 首页 > 便宜机场 > 长期成本与性价比 > 综合性价比评估 > 性价比评估完整方法 |
| cluster | `prepaid-budget` | 长期预付与持续预算 | `https://jichangwiki.cc/cheap/long-term-cost/prepaid-budget/` | 首页 > 便宜机场 > 长期成本与性价比 > 长期预付与持续预算 |
| article | `art-cheap-031` | 年付机场有哪些？折合月费的正确算法 | `https://jichangwiki.cc/articles/art-cheap-031/` | 首页 > 便宜机场 > 长期成本与性价比 > 长期预付与持续预算 > 年付机场有哪些？折合月费的正确算法 |
| article | `art-cheap-032` | 年付实际总支出计算：含首购与续费 | `https://jichangwiki.cc/articles/art-cheap-032/` | 首页 > 便宜机场 > 长期成本与性价比 > 长期预付与持续预算 > 年付实际总支出计算：含首购与续费 |
| article | `art-cheap-033` | 年付与月付的成本差异 | `https://jichangwiki.cc/articles/art-cheap-033/` | 首页 > 便宜机场 > 长期成本与性价比 > 长期预付与持续预算 > 年付与月付的成本差异 |
| article | `art-cheap-034` | 年付折扣的适用条件与限制 | `https://jichangwiki.cc/articles/art-cheap-034/` | 首页 > 便宜机场 > 长期成本与性价比 > 长期预付与持续预算 > 年付折扣的适用条件与限制 |
| article | `art-cheap-035` | 年付套餐的风险评估 | `https://jichangwiki.cc/articles/art-cheap-035/` | 首页 > 便宜机场 > 长期成本与性价比 > 长期预付与持续预算 > 年付套餐的风险评估 |
| article | `art-cheap-036` | 长期预付与持续预算完整说明 | `https://jichangwiki.cc/articles/art-cheap-036/` | 首页 > 便宜机场 > 长期成本与性价比 > 长期预付与持续预算 > 长期预付与持续预算完整说明 |
| pillar | `plans` | 套餐对比 | `https://jichangwiki.cc/plans/` | 首页 > 套餐对比 |
| topic | `billing-cycles` | 付款周期与流量包 | `https://jichangwiki.cc/plans/billing-cycles/` | 首页 > 套餐对比 > 付款周期与流量包 |
| cluster | `cycle-comparison` | 月付季付与年付 | `https://jichangwiki.cc/plans/billing-cycles/cycle-comparison/` | 首页 > 套餐对比 > 付款周期与流量包 > 月付季付与年付 |
| article | `art-plan-001` | 月付、季付、年付的对比方法 | `https://jichangwiki.cc/articles/art-plan-001/` | 首页 > 套餐对比 > 付款周期与流量包 > 月付季付与年付 > 月付、季付、年付的对比方法 |
| article | `art-plan-002` | 不同付款周期的总支出计算 | `https://jichangwiki.cc/articles/art-plan-002/` | 首页 > 套餐对比 > 付款周期与流量包 > 月付季付与年付 > 不同付款周期的总支出计算 |
| article | `art-plan-003` | 付款周期与使用频率匹配 | `https://jichangwiki.cc/articles/art-plan-003/` | 首页 > 套餐对比 > 付款周期与流量包 > 月付季付与年付 > 付款周期与使用频率匹配 |
| article | `art-plan-004` | 付款周期与灵活性的取舍 | `https://jichangwiki.cc/articles/art-plan-004/` | 首页 > 套餐对比 > 付款周期与流量包 > 月付季付与年付 > 付款周期与灵活性的取舍 |
| article | `art-plan-005` | 付款周期选择决策框架 | `https://jichangwiki.cc/articles/art-plan-005/` | 首页 > 套餐对比 > 付款周期与流量包 > 月付季付与年付 > 付款周期选择决策框架 |
| article | `art-plan-006` | 月付、季付与年付完整对比 | `https://jichangwiki.cc/articles/art-plan-006/` | 首页 > 套餐对比 > 付款周期与流量包 > 月付季付与年付 > 月付、季付与年付完整对比 |
| cluster | `non-expiring-and-metered` | 不限时与按量规则 | `https://jichangwiki.cc/plans/billing-cycles/non-expiring-and-metered/` | 首页 > 套餐对比 > 付款周期与流量包 > 不限时与按量规则 |
| article | `art-plan-007` | 不限时机场套餐是什么意思？流量有效期与账户有效期需要分开看 | `https://jichangwiki.cc/articles/art-plan-007/` | 首页 > 套餐对比 > 付款周期与流量包 > 不限时与按量规则 > 不限时机场套餐是什么意思？流量有效期与账户有效期需要分开看 |
| article | `art-plan-008` | 按量付费机场怎样计算每GB成本？加入倍率与附加费用的比较方法 | `https://jichangwiki.cc/articles/art-plan-008/` | 首页 > 套餐对比 > 付款周期与流量包 > 不限时与按量规则 > 按量付费机场怎样计算每GB成本？加入倍率与附加费用的比较方法 |
| article | `art-plan-009` | 不限时流量包与月付套餐的盈亏平衡点怎么算？ | `https://jichangwiki.cc/articles/art-plan-009/` | 首页 > 套餐对比 > 付款周期与流量包 > 不限时与按量规则 > 不限时流量包与月付套餐的盈亏平衡点怎么算？ |
| article | `art-plan-010` | 多个不限时流量包叠加后先扣哪一份？购买前核对消耗顺序 | `https://jichangwiki.cc/articles/art-plan-010/` | 首页 > 套餐对比 > 付款周期与流量包 > 不限时与按量规则 > 多个不限时流量包叠加后先扣哪一份？购买前核对消耗顺序 |
| article | `art-plan-011` | 机场流量包有到期日还算不限时吗？识别宣传名称与实际规则 | `https://jichangwiki.cc/articles/art-plan-011/` | 首页 > 套餐对比 > 付款周期与流量包 > 不限时与按量规则 > 机场流量包有到期日还算不限时吗？识别宣传名称与实际规则 |
| article | `art-plan-012` | 流量包用完后补购还是改月付？根据后续用量重新计算 | `https://jichangwiki.cc/articles/art-plan-012/` | 首页 > 套餐对比 > 付款周期与流量包 > 不限时与按量规则 > 流量包用完后补购还是改月付？根据后续用量重新计算 |
| topic | `metering-and-limits` | 流量计量与使用限制 | `https://jichangwiki.cc/plans/metering-and-limits/` | 首页 > 套餐对比 > 流量计量与使用限制 |
| cluster | `rate-multiplier-and-units` | 额度单位与流量倍率 | `https://jichangwiki.cc/plans/metering-and-limits/rate-multiplier-and-units/` | 首页 > 套餐对比 > 流量计量与使用限制 > 额度单位与流量倍率 |
| article | `art-plan-013` | 流量计量口径说明：原始单位与统计方式 | `https://jichangwiki.cc/articles/art-plan-013/` | 首页 > 套餐对比 > 流量计量与使用限制 > 额度单位与流量倍率 > 流量计量口径说明：原始单位与统计方式 |
| article | `art-plan-014` | 流量倍率的应用与影响 | `https://jichangwiki.cc/articles/art-plan-014/` | 首页 > 套餐对比 > 流量计量与使用限制 > 额度单位与流量倍率 > 流量倍率的应用与影响 |
| article | `art-plan-015` | 上下行计费的差异 | `https://jichangwiki.cc/articles/art-plan-015/` | 首页 > 套餐对比 > 流量计量与使用限制 > 额度单位与流量倍率 > 上下行计费的差异 |
| article | `art-plan-016` | 流量重置周期的说明 | `https://jichangwiki.cc/articles/art-plan-016/` | 首页 > 套餐对比 > 流量计量与使用限制 > 额度单位与流量倍率 > 流量重置周期的说明 |
| article | `art-plan-017` | 流量耗尽后的处理规则 | `https://jichangwiki.cc/articles/art-plan-017/` | 首页 > 套餐对比 > 流量计量与使用限制 > 额度单位与流量倍率 > 流量耗尽后的处理规则 |
| article | `art-plan-018` | 额度单位与流量倍率完整对比 | `https://jichangwiki.cc/articles/art-plan-018/` | 首页 > 套餐对比 > 流量计量与使用限制 > 额度单位与流量倍率 > 额度单位与流量倍率完整对比 |
| cluster | `speed-limit-concurrency` | 限速并发与设备规则 | `https://jichangwiki.cc/plans/metering-and-limits/speed-limit-concurrency/` | 首页 > 套餐对比 > 流量计量与使用限制 > 限速并发与设备规则 |
| article | `art-plan-019` | 客户端兼容性对比 | `https://jichangwiki.cc/articles/art-plan-019/` | 首页 > 套餐对比 > 流量计量与使用限制 > 限速并发与设备规则 > 客户端兼容性对比 |
| article | `art-plan-020` | 协议支持对比 | `https://jichangwiki.cc/articles/art-plan-020/` | 首页 > 套餐对比 > 流量计量与使用限制 > 限速并发与设备规则 > 协议支持对比 |
| article | `art-plan-021` | 设备数量限制对比 | `https://jichangwiki.cc/articles/art-plan-021/` | 首页 > 套餐对比 > 流量计量与使用限制 > 限速并发与设备规则 > 设备数量限制对比 |
| article | `art-plan-022` | 并发连接限制对比 | `https://jichangwiki.cc/articles/art-plan-022/` | 首页 > 套餐对比 > 流量计量与使用限制 > 限速并发与设备规则 > 并发连接限制对比 |
| article | `art-plan-023` | 附加功能对比 | `https://jichangwiki.cc/articles/art-plan-023/` | 首页 > 套餐对比 > 流量计量与使用限制 > 限速并发与设备规则 > 附加功能对比 |
| article | `art-plan-024` | 限速并发与设备规则完整说明 | `https://jichangwiki.cc/articles/art-plan-024/` | 首页 > 套餐对比 > 流量计量与使用限制 > 限速并发与设备规则 > 限速并发与设备规则完整说明 |
| topic | `plan-management` | 套餐变更与权益管理 | `https://jichangwiki.cc/plans/plan-management/` | 首页 > 套餐对比 > 套餐变更与权益管理 |
| cluster | `upgrade-downgrade-diff` | 升级降级与补差价 | `https://jichangwiki.cc/plans/plan-management/upgrade-downgrade-diff/` | 首页 > 套餐对比 > 套餐变更与权益管理 > 升级降级与补差价 |
| article | `art-plan-025` | 套餐升级方法与注意事项 | `https://jichangwiki.cc/articles/art-plan-025/` | 首页 > 套餐对比 > 套餐变更与权益管理 > 升级降级与补差价 > 套餐升级方法与注意事项 |
| article | `art-plan-026` | 套餐降级方法与限制 | `https://jichangwiki.cc/articles/art-plan-026/` | 首页 > 套餐对比 > 套餐变更与权益管理 > 升级降级与补差价 > 套餐降级方法与限制 |
| article | `art-plan-027` | 升级降级的补差价计算 | `https://jichangwiki.cc/articles/art-plan-027/` | 首页 > 套餐对比 > 套餐变更与权益管理 > 升级降级与补差价 > 升级降级的补差价计算 |
| article | `art-plan-028` | 套餐变更的生效时间 | `https://jichangwiki.cc/articles/art-plan-028/` | 首页 > 套餐对比 > 套餐变更与权益管理 > 升级降级与补差价 > 套餐变更的生效时间 |
| article | `art-plan-029` | 套餐变更的影响范围 | `https://jichangwiki.cc/articles/art-plan-029/` | 首页 > 套餐对比 > 套餐变更与权益管理 > 升级降级与补差价 > 套餐变更的影响范围 |
| article | `art-plan-030` | 升级降级完整说明 | `https://jichangwiki.cc/articles/art-plan-030/` | 首页 > 套餐对比 > 套餐变更与权益管理 > 升级降级与补差价 > 升级降级完整说明 |
| cluster | `renewal-stop-balance` | 续费停止与余额处置 | `https://jichangwiki.cc/plans/plan-management/renewal-stop-balance/` | 首页 > 套餐对比 > 套餐变更与权益管理 > 续费停止与余额处置 |
| article | `art-plan-031` | 套餐续费方法 | `https://jichangwiki.cc/articles/art-plan-031/` | 首页 > 套餐对比 > 套餐变更与权益管理 > 续费停止与余额处置 > 套餐续费方法 |
| article | `art-plan-032` | 套餐停止使用流程 | `https://jichangwiki.cc/articles/art-plan-032/` | 首页 > 套餐对比 > 套餐变更与权益管理 > 续费停止与余额处置 > 套餐停止使用流程 |
| article | `art-plan-033` | 余额与流量处置规则 | `https://jichangwiki.cc/articles/art-plan-033/` | 首页 > 套餐对比 > 套餐变更与权益管理 > 续费停止与余额处置 > 余额与流量处置规则 |
| article | `art-plan-034` | 退款政策核对 | `https://jichangwiki.cc/articles/art-plan-034/` | 首页 > 套餐对比 > 套餐变更与权益管理 > 续费停止与余额处置 > 退款政策核对 |
| article | `art-plan-035` | 续费与停止的影响说明 | `https://jichangwiki.cc/articles/art-plan-035/` | 首页 > 套餐对比 > 套餐变更与权益管理 > 续费停止与余额处置 > 续费与停止的影响说明 |
| article | `art-plan-036` | 续费停止与余额处置完整说明 | `https://jichangwiki.cc/articles/art-plan-036/` | 首页 > 套餐对比 > 套餐变更与权益管理 > 续费停止与余额处置 > 续费停止与余额处置完整说明 |
| pillar | `reviews` | 机场评测 | `https://jichangwiki.cc/reviews/` | 首页 > 机场评测 |
| topic | `test-methodology` | 测试环境与方法 | `https://jichangwiki.cc/reviews/test-methodology/` | 首页 > 机场评测 > 测试环境与方法 |
| cluster | `env-control-and-baseline` | 环境控制与基线 | `https://jichangwiki.cc/reviews/test-methodology/env-control-and-baseline/` | 首页 > 机场评测 > 测试环境与方法 > 环境控制与基线 |
| article | `art-rev-001` | 机场测试环境说明：设备、网络、客户端与端点 | `https://jichangwiki.cc/articles/art-rev-001/` | 首页 > 机场评测 > 测试环境与方法 > 环境控制与基线 > 机场测试环境说明：设备、网络、客户端与端点 |
| article | `art-rev-002` | 测试基线与对比说明 | `https://jichangwiki.cc/articles/art-rev-002/` | 首页 > 机场评测 > 测试环境与方法 > 环境控制与基线 > 测试基线与对比说明 |
| article | `art-rev-003` | 测试条件的可重复性核对 | `https://jichangwiki.cc/articles/art-rev-003/` | 首页 > 机场评测 > 测试环境与方法 > 环境控制与基线 > 测试条件的可重复性核对 |
| article | `art-rev-004` | 测试工具与版本说明 | `https://jichangwiki.cc/articles/art-rev-004/` | 首页 > 机场评测 > 测试环境与方法 > 环境控制与基线 > 测试工具与版本说明 |
| article | `art-rev-005` | 测试环境记录方法 | `https://jichangwiki.cc/articles/art-rev-005/` | 首页 > 机场评测 > 测试环境与方法 > 环境控制与基线 > 测试环境记录方法 |
| article | `art-rev-006` | 环境控制与基线完整说明 | `https://jichangwiki.cc/articles/art-rev-006/` | 首页 > 机场评测 > 测试环境与方法 > 环境控制与基线 > 环境控制与基线完整说明 |
| cluster | `sampling-and-recheck` | 采样统计与结果复核 | `https://jichangwiki.cc/reviews/test-methodology/sampling-and-recheck/` | 首页 > 机场评测 > 测试环境与方法 > 采样统计与结果复核 |
| article | `art-rev-007` | 采样频率与样本量 | `https://jichangwiki.cc/articles/art-rev-007/` | 首页 > 机场评测 > 测试环境与方法 > 采样统计与结果复核 > 采样频率与样本量 |
| article | `art-rev-008` | 延迟中位数与 P95 的区别 | `https://jichangwiki.cc/articles/art-rev-008/` | 首页 > 机场评测 > 测试环境与方法 > 采样统计与结果复核 > 延迟中位数与 P95 的区别 |
| article | `art-rev-009` | 测试结果的统计口径 | `https://jichangwiki.cc/articles/art-rev-009/` | 首页 > 机场评测 > 测试环境与方法 > 采样统计与结果复核 > 测试结果的统计口径 |
| article | `art-rev-010` | 复测频率与结论更新 | `https://jichangwiki.cc/articles/art-rev-010/` | 首页 > 机场评测 > 测试环境与方法 > 采样统计与结果复核 > 复测频率与结论更新 |
| article | `art-rev-011` | 复测结果不一致时的处理 | `https://jichangwiki.cc/articles/art-rev-011/` | 首页 > 机场评测 > 测试环境与方法 > 采样统计与结果复核 > 复测结果不一致时的处理 |
| article | `art-rev-012` | 采样统计与结果复核完整说明 | `https://jichangwiki.cc/articles/art-rev-012/` | 首页 > 机场评测 > 测试环境与方法 > 采样统计与结果复核 > 采样统计与结果复核完整说明 |
| topic | `speed-and-stability` | 速度延迟与持续稳定 | `https://jichangwiki.cc/reviews/speed-and-stability/` | 首页 > 机场评测 > 速度延迟与持续稳定 |
| cluster | `throughput-and-latency` | 吞吐与响应测量 | `https://jichangwiki.cc/reviews/speed-and-stability/throughput-and-latency/` | 首页 > 机场评测 > 速度延迟与持续稳定 > 吞吐与响应测量 |
| article | `art-rev-013` | 机场下载速度测试方法：单位与方向 | `https://jichangwiki.cc/articles/art-rev-013/` | 首页 > 机场评测 > 速度延迟与持续稳定 > 吞吐与响应测量 > 机场下载速度测试方法：单位与方向 |
| article | `art-rev-014` | 单线程与多线程测速的区别 | `https://jichangwiki.cc/articles/art-rev-014/` | 首页 > 机场评测 > 速度延迟与持续稳定 > 吞吐与响应测量 > 单线程与多线程测速的区别 |
| article | `art-rev-015` | 测速端点选择与影响 | `https://jichangwiki.cc/articles/art-rev-015/` | 首页 > 机场评测 > 速度延迟与持续稳定 > 吞吐与响应测量 > 测速端点选择与影响 |
| article | `art-rev-016` | 峰值速度与持续速度的区别 | `https://jichangwiki.cc/articles/art-rev-016/` | 首页 > 机场评测 > 速度延迟与持续稳定 > 吞吐与响应测量 > 峰值速度与持续速度的区别 |
| article | `art-rev-017` | 测速结果的解读与局限 | `https://jichangwiki.cc/articles/art-rev-017/` | 首页 > 机场评测 > 速度延迟与持续稳定 > 吞吐与响应测量 > 测速结果的解读与局限 |
| article | `art-rev-018` | 吞吐与响应测量完整指南 | `https://jichangwiki.cc/articles/art-rev-018/` | 首页 > 机场评测 > 速度延迟与持续稳定 > 吞吐与响应测量 > 吞吐与响应测量完整指南 |
| cluster | `peak-fluctuation-outage` | 高峰波动与中断记录 | `https://jichangwiki.cc/reviews/speed-and-stability/peak-fluctuation-outage/` | 首页 > 机场评测 > 速度延迟与持续稳定 > 高峰波动与中断记录 |
| article | `art-rev-019` | 机场可用性如何测量：成功标准与观察窗口 | `https://jichangwiki.cc/articles/art-rev-019/` | 首页 > 机场评测 > 速度延迟与持续稳定 > 高峰波动与中断记录 > 机场可用性如何测量：成功标准与观察窗口 |
| article | `art-rev-020` | 连接成功率与失败次数的统计方法 | `https://jichangwiki.cc/articles/art-rev-020/` | 首页 > 机场评测 > 速度延迟与持续稳定 > 高峰波动与中断记录 > 连接成功率与失败次数的统计方法 |
| article | `art-rev-021` | 断连与重连的观察记录 | `https://jichangwiki.cc/articles/art-rev-021/` | 首页 > 机场评测 > 速度延迟与持续稳定 > 高峰波动与中断记录 > 断连与重连的观察记录 |
| article | `art-rev-022` | 恢复时间的测量方法 | `https://jichangwiki.cc/articles/art-rev-022/` | 首页 > 机场评测 > 速度延迟与持续稳定 > 高峰波动与中断记录 > 恢复时间的测量方法 |
| article | `art-rev-023` | 短期观测不外推全年：观察范围说明 | `https://jichangwiki.cc/articles/art-rev-023/` | 首页 > 机场评测 > 速度延迟与持续稳定 > 高峰波动与中断记录 > 短期观测不外推全年：观察范围说明 |
| article | `art-rev-024` | 高峰波动与中断记录完整说明 | `https://jichangwiki.cc/articles/art-rev-024/` | 首页 > 机场评测 > 速度延迟与持续稳定 > 高峰波动与中断记录 > 高峰波动与中断记录完整说明 |
| topic | `real-scenario-verification` | 真实应用场景核验 | `https://jichangwiki.cc/reviews/real-scenario-verification/` | 首页 > 机场评测 > 真实应用场景核验 |
| cluster | `ai-verification-method` | AI能力验证方法 | `https://jichangwiki.cc/reviews/real-scenario-verification/ai-verification-method/` | 首页 > 机场评测 > 真实应用场景核验 > AI能力验证方法 |
| article | `art-rev-025` | 网页浏览任务测试方法 | `https://jichangwiki.cc/articles/art-rev-025/` | 首页 > 机场评测 > 真实应用场景核验 > AI能力验证方法 > 网页浏览任务测试方法 |
| article | `art-rev-026` | 文件传输任务测试方法 | `https://jichangwiki.cc/articles/art-rev-026/` | 首页 > 机场评测 > 真实应用场景核验 > AI能力验证方法 > 文件传输任务测试方法 |
| article | `art-rev-027` | AI 工具任务测试方法 | `https://jichangwiki.cc/articles/art-rev-027/` | 首页 > 机场评测 > 真实应用场景核验 > AI能力验证方法 > AI 工具任务测试方法 |
| article | `art-rev-028` | AI 编程连接测试方法 | `https://jichangwiki.cc/articles/art-rev-028/` | 首页 > 机场评测 > 真实应用场景核验 > AI能力验证方法 > AI 编程连接测试方法 |
| article | `art-rev-029` | 多任务并行测试方法 | `https://jichangwiki.cc/articles/art-rev-029/` | 首页 > 机场评测 > 真实应用场景核验 > AI能力验证方法 > 多任务并行测试方法 |
| article | `art-rev-030` | AI能力验证方法完整说明 | `https://jichangwiki.cc/articles/art-rev-030/` | 首页 > 机场评测 > 真实应用场景核验 > AI能力验证方法 > AI能力验证方法完整说明 |
| cluster | `video-verification-method` | 视频播放验证方法 | `https://jichangwiki.cc/reviews/real-scenario-verification/video-verification-method/` | 首页 > 机场评测 > 真实应用场景核验 > 视频播放验证方法 |
| article | `art-rev-031` | 视频播放任务测试方法 | `https://jichangwiki.cc/articles/art-rev-031/` | 首页 > 机场评测 > 真实应用场景核验 > 视频播放验证方法 > 视频播放任务测试方法 |
| article | `art-rev-032` | 4K 播放的网络要求 | `https://jichangwiki.cc/articles/art-rev-032/` | 首页 > 机场评测 > 真实应用场景核验 > 视频播放验证方法 > 4K 播放的网络要求 |
| article | `art-rev-033` | 视频画质的判断方法 | `https://jichangwiki.cc/articles/art-rev-033/` | 首页 > 机场评测 > 真实应用场景核验 > 视频播放验证方法 > 视频画质的判断方法 |
| article | `art-rev-034` | 卡顿排查方法 | `https://jichangwiki.cc/articles/art-rev-034/` | 首页 > 机场评测 > 真实应用场景核验 > 视频播放验证方法 > 卡顿排查方法 |
| article | `art-rev-035` | 视频观看体验的验证 | `https://jichangwiki.cc/articles/art-rev-035/` | 首页 > 机场评测 > 真实应用场景核验 > 视频播放验证方法 > 视频观看体验的验证 |
| article | `art-rev-036` | 视频播放验证方法完整说明 | `https://jichangwiki.cc/articles/art-rev-036/` | 首页 > 机场评测 > 真实应用场景核验 > 视频播放验证方法 > 视频播放验证方法完整说明 |
| pillar | `coupons` | 机场优惠码 | `https://jichangwiki.cc/coupons/` | 首页 > 机场优惠码 |
| topic | `coupon-verification` | 优惠查找与资格核对 | `https://jichangwiki.cc/coupons/coupon-verification/` | 首页 > 机场优惠码 > 优惠查找与资格核对 |
| cluster | `code-source-and-trust` | 代码来源与可信核验 | `https://jichangwiki.cc/coupons/coupon-verification/code-source-and-trust/` | 首页 > 机场优惠码 > 优惠查找与资格核对 > 代码来源与可信核验 |
| article | `art-cpo-001` | 优惠码来源说明 | `https://jichangwiki.cc/articles/art-cpo-001/` | 首页 > 机场优惠码 > 优惠查找与资格核对 > 代码来源与可信核验 > 优惠码来源说明 |
| article | `art-cpo-002` | 优惠码真实性判断 | `https://jichangwiki.cc/articles/art-cpo-002/` | 首页 > 机场优惠码 > 优惠查找与资格核对 > 代码来源与可信核验 > 优惠码真实性判断 |
| article | `art-cpo-003` | 优惠码核验方法 | `https://jichangwiki.cc/articles/art-cpo-003/` | 首页 > 机场优惠码 > 优惠查找与资格核对 > 代码来源与可信核验 > 优惠码核验方法 |
| article | `art-cpo-004` | 优惠码失效记录 | `https://jichangwiki.cc/articles/art-cpo-004/` | 首页 > 机场优惠码 > 优惠查找与资格核对 > 代码来源与可信核验 > 优惠码失效记录 |
| article | `art-cpo-005` | 优惠码常见问题 | `https://jichangwiki.cc/articles/art-cpo-005/` | 首页 > 机场优惠码 > 优惠查找与资格核对 > 代码来源与可信核验 > 优惠码常见问题 |
| article | `art-cpo-006` | 代码来源与可信核验完整说明 | `https://jichangwiki.cc/articles/art-cpo-006/` | 首页 > 机场优惠码 > 优惠查找与资格核对 > 代码来源与可信核验 > 代码来源与可信核验完整说明 |
| cluster | `eligibility-and-renewal` | 首购续费与套餐资格 | `https://jichangwiki.cc/coupons/coupon-verification/eligibility-and-renewal/` | 首页 > 机场优惠码 > 优惠查找与资格核对 > 首购续费与套餐资格 |
| article | `art-cpo-007` | 首购优惠码有哪些 | `https://jichangwiki.cc/articles/art-cpo-007/` | 首页 > 机场优惠码 > 优惠查找与资格核对 > 首购续费与套餐资格 > 首购优惠码有哪些 |
| article | `art-cpo-008` | 试用转首购的优惠叠加 | `https://jichangwiki.cc/articles/art-cpo-008/` | 首页 > 机场优惠码 > 优惠查找与资格核对 > 首购续费与套餐资格 > 试用转首购的优惠叠加 |
| article | `art-cpo-009` | 首购与年付折扣的区别 | `https://jichangwiki.cc/articles/art-cpo-009/` | 首页 > 机场优惠码 > 优惠查找与资格核对 > 首购续费与套餐资格 > 首购与年付折扣的区别 |
| article | `art-cpo-010` | 首购优惠码的适用条件 | `https://jichangwiki.cc/articles/art-cpo-010/` | 首页 > 机场优惠码 > 优惠查找与资格核对 > 首购续费与套餐资格 > 首购优惠码的适用条件 |
| article | `art-cpo-011` | 续费优惠码有哪些 | `https://jichangwiki.cc/articles/art-cpo-011/` | 首页 > 机场优惠码 > 优惠查找与资格核对 > 首购续费与套餐资格 > 续费优惠码有哪些 |
| article | `art-cpo-012` | 首购续费与套餐资格完整说明 | `https://jichangwiki.cc/articles/art-cpo-012/` | 首页 > 机场优惠码 > 优惠查找与资格核对 > 首购续费与套餐资格 > 首购续费与套餐资格完整说明 |
| topic | `discount-calculation` | 折后价格与结算使用 | `https://jichangwiki.cc/coupons/discount-calculation/` | 首页 > 机场优惠码 > 折后价格与结算使用 |
| cluster | `discount-and-stacking` | 优惠折算与叠加规则 | `https://jichangwiki.cc/coupons/discount-calculation/discount-and-stacking/` | 首页 > 机场优惠码 > 折后价格与结算使用 > 优惠折算与叠加规则 |
| article | `art-cpo-013` | 9 折优惠的实际节省 | `https://jichangwiki.cc/articles/art-cpo-013/` | 首页 > 机场优惠码 > 折后价格与结算使用 > 优惠折算与叠加规则 > 9 折优惠的实际节省 |
| article | `art-cpo-014` | 8 折优惠的实际节省 | `https://jichangwiki.cc/articles/art-cpo-014/` | 首页 > 机场优惠码 > 折后价格与结算使用 > 优惠折算与叠加规则 > 8 折优惠的实际节省 |
| article | `art-cpo-015` | 7 折优惠的实际节省 | `https://jichangwiki.cc/articles/art-cpo-015/` | 首页 > 机场优惠码 > 折后价格与结算使用 > 优惠折算与叠加规则 > 7 折优惠的实际节省 |
| article | `art-cpo-016` | 优惠码叠加规则 | `https://jichangwiki.cc/articles/art-cpo-016/` | 首页 > 机场优惠码 > 折后价格与结算使用 > 优惠折算与叠加规则 > 优惠码叠加规则 |
| article | `art-cpo-017` | 优惠后实际付款金额 | `https://jichangwiki.cc/articles/art-cpo-017/` | 首页 > 机场优惠码 > 折后价格与结算使用 > 优惠折算与叠加规则 > 优惠后实际付款金额 |
| article | `art-cpo-018` | 优惠折算与叠加规则完整说明 | `https://jichangwiki.cc/articles/art-cpo-018/` | 首页 > 机场优惠码 > 折后价格与结算使用 > 优惠折算与叠加规则 > 优惠折算与叠加规则完整说明 |
| cluster | `checkout-and-evidence` | 结算验证与订单证据 | `https://jichangwiki.cc/coupons/discount-calculation/checkout-and-evidence/` | 首页 > 机场优惠码 > 折后价格与结算使用 > 结算验证与订单证据 |
| article | `art-cpo-019` | 优惠码填写位置说明 | `https://jichangwiki.cc/articles/art-cpo-019/` | 首页 > 机场优惠码 > 折后价格与结算使用 > 结算验证与订单证据 > 优惠码填写位置说明 |
| article | `art-cpo-020` | 优惠码结算确认 | `https://jichangwiki.cc/articles/art-cpo-020/` | 首页 > 机场优惠码 > 折后价格与结算使用 > 结算验证与订单证据 > 优惠码结算确认 |
| article | `art-cpo-021` | 优惠码无法使用的原因 | `https://jichangwiki.cc/articles/art-cpo-021/` | 首页 > 机场优惠码 > 折后价格与结算使用 > 结算验证与订单证据 > 优惠码无法使用的原因 |
| article | `art-cpo-022` | 优惠码输入错误处理 | `https://jichangwiki.cc/articles/art-cpo-022/` | 首页 > 机场优惠码 > 折后价格与结算使用 > 结算验证与订单证据 > 优惠码输入错误处理 |
| article | `art-cpo-023` | 优惠码生效验证 | `https://jichangwiki.cc/articles/art-cpo-023/` | 首页 > 机场优惠码 > 折后价格与结算使用 > 结算验证与订单证据 > 优惠码生效验证 |
| article | `art-cpo-024` | 结算验证与订单证据完整说明 | `https://jichangwiki.cc/articles/art-cpo-024/` | 首页 > 机场优惠码 > 折后价格与结算使用 > 结算验证与订单证据 > 结算验证与订单证据完整说明 |
| topic | `change-and-expiration` | 优惠变更与失效处置 | `https://jichangwiki.cc/coupons/change-and-expiration/` | 首页 > 机场优惠码 > 优惠变更与失效处置 |
| cluster | `renewal-order-change` | 续费与订单变更优惠 | `https://jichangwiki.cc/coupons/change-and-expiration/renewal-order-change/` | 首页 > 机场优惠码 > 优惠变更与失效处置 > 续费与订单变更优惠 |
| article | `art-cpo-025` | 续费优惠与首购优惠的差异 | `https://jichangwiki.cc/articles/art-cpo-025/` | 首页 > 机场优惠码 > 优惠变更与失效处置 > 续费与订单变更优惠 > 续费优惠与首购优惠的差异 |
| article | `art-cpo-026` | 续费优惠使用步骤 | `https://jichangwiki.cc/articles/art-cpo-026/` | 首页 > 机场优惠码 > 优惠变更与失效处置 > 续费与订单变更优惠 > 续费优惠使用步骤 |
| article | `art-cpo-027` | 续费优惠适用范围 | `https://jichangwiki.cc/articles/art-cpo-027/` | 首页 > 机场优惠码 > 优惠变更与失效处置 > 续费与订单变更优惠 > 续费优惠适用范围 |
| article | `art-cpo-028` | 订单变更对优惠的影响 | `https://jichangwiki.cc/articles/art-cpo-028/` | 首页 > 机场优惠码 > 优惠变更与失效处置 > 续费与订单变更优惠 > 订单变更对优惠的影响 |
| article | `art-cpo-029` | 优惠叠加与订单变更组合 | `https://jichangwiki.cc/articles/art-cpo-029/` | 首页 > 机场优惠码 > 优惠变更与失效处置 > 续费与订单变更优惠 > 优惠叠加与订单变更组合 |
| article | `art-cpo-030` | 续费与订单变更优惠完整说明 | `https://jichangwiki.cc/articles/art-cpo-030/` | 首页 > 机场优惠码 > 优惠变更与失效处置 > 续费与订单变更优惠 > 续费与订单变更优惠完整说明 |
| cluster | `expiration-maintenance` | 失效原因与记录维护 | `https://jichangwiki.cc/coupons/change-and-expiration/expiration-maintenance/` | 首页 > 机场优惠码 > 优惠变更与失效处置 > 失效原因与记录维护 |
| article | `art-cpo-031` | 优惠码有效期判断 | `https://jichangwiki.cc/articles/art-cpo-031/` | 首页 > 机场优惠码 > 优惠变更与失效处置 > 失效原因与记录维护 > 优惠码有效期判断 |
| article | `art-cpo-032` | 优惠码失效原因 | `https://jichangwiki.cc/articles/art-cpo-032/` | 首页 > 机场优惠码 > 优惠变更与失效处置 > 失效原因与记录维护 > 优惠码失效原因 |
| article | `art-cpo-033` | 优惠码状态更新 | `https://jichangwiki.cc/articles/art-cpo-033/` | 首页 > 机场优惠码 > 优惠变更与失效处置 > 失效原因与记录维护 > 优惠码状态更新 |
| article | `art-cpo-034` | 优惠码失效记录 | `https://jichangwiki.cc/articles/art-cpo-034/` | 首页 > 机场优惠码 > 优惠变更与失效处置 > 失效原因与记录维护 > 优惠码失效记录 |
| article | `art-cpo-035` | 优惠码维护方法 | `https://jichangwiki.cc/articles/art-cpo-035/` | 首页 > 机场优惠码 > 优惠变更与失效处置 > 失效原因与记录维护 > 优惠码维护方法 |
| article | `art-cpo-036` | 失效原因与记录维护完整说明 | `https://jichangwiki.cc/articles/art-cpo-036/` | 首页 > 机场优惠码 > 优惠变更与失效处置 > 失效原因与记录维护 > 失效原因与记录维护完整说明 |
| pillar | `ai` | AI机场 | `https://jichangwiki.cc/ai/` | 首页 > AI机场 |
| topic | `chat-and-multimodal` | AI对话与多模态需求 | `https://jichangwiki.cc/ai/chat-and-multimodal/` | 首页 > AI机场 > AI对话与多模态需求 |
| cluster | `web-chat-selection` | 网页对话服务选型 | `https://jichangwiki.cc/ai/chat-and-multimodal/web-chat-selection/` | 首页 > AI机场 > AI对话与多模态需求 > 网页对话服务选型 |
| article | `art-ai-001` | ChatGPT 用什么机场？网页访问与任务核验 | `https://jichangwiki.cc/articles/art-ai-001/` | 首页 > AI机场 > AI对话与多模态需求 > 网页对话服务选型 > ChatGPT 用什么机场？网页访问与任务核验 |
| article | `art-ai-002` | ChatGPT 网页版网络要求：延迟与稳定性 | `https://jichangwiki.cc/articles/art-ai-002/` | 首页 > AI机场 > AI对话与多模态需求 > 网页对话服务选型 > ChatGPT 网页版网络要求：延迟与稳定性 |
| article | `art-ai-003` | Claude 用什么机场？地区与账号条件 | `https://jichangwiki.cc/articles/art-ai-003/` | 首页 > AI机场 > AI对话与多模态需求 > 网页对话服务选型 > Claude 用什么机场？地区与账号条件 |
| article | `art-ai-004` | Gemini 使用条件与地区限制 | `https://jichangwiki.cc/articles/art-ai-004/` | 首页 > AI机场 > AI对话与多模态需求 > 网页对话服务选型 > Gemini 使用条件与地区限制 |
| article | `art-ai-005` | Claude 与 Gemini 的网络差异 | `https://jichangwiki.cc/articles/art-ai-005/` | 首页 > AI机场 > AI对话与多模态需求 > 网页对话服务选型 > Claude 与 Gemini 的网络差异 |
| article | `art-ai-006` | 网页对话服务选型完整说明 | `https://jichangwiki.cc/articles/art-ai-006/` | 首页 > AI机场 > AI对话与多模态需求 > 网页对话服务选型 > 网页对话服务选型完整说明 |
| cluster | `file-voice-multimodal` | 文件语音与多模态 | `https://jichangwiki.cc/ai/chat-and-multimodal/file-voice-multimodal/` | 首页 > AI机场 > AI对话与多模态需求 > 文件语音与多模态 |
| article | `art-ai-007` | AI 文件上传的网络要求 | `https://jichangwiki.cc/articles/art-ai-007/` | 首页 > AI机场 > AI对话与多模态需求 > 文件语音与多模态 > AI 文件上传的网络要求 |
| article | `art-ai-008` | AI 语音功能的网络要求 | `https://jichangwiki.cc/articles/art-ai-008/` | 首页 > AI机场 > AI对话与多模态需求 > 文件语音与多模态 > AI 语音功能的网络要求 |
| article | `art-ai-009` | AI 多模态任务的网络要求 | `https://jichangwiki.cc/articles/art-ai-009/` | 首页 > AI机场 > AI对话与多模态需求 > 文件语音与多模态 > AI 多模态任务的网络要求 |
| article | `art-ai-010` | AI 多模态任务的稳定性要求 | `https://jichangwiki.cc/articles/art-ai-010/` | 首页 > AI机场 > AI对话与多模态需求 > 文件语音与多模态 > AI 多模态任务的稳定性要求 |
| article | `art-ai-011` | AI 多模态场景的机场选择 | `https://jichangwiki.cc/articles/art-ai-011/` | 首页 > AI机场 > AI对话与多模态需求 > 文件语音与多模态 > AI 多模态场景的机场选择 |
| article | `art-ai-012` | 文件语音与多模态完整说明 | `https://jichangwiki.cc/articles/art-ai-012/` | 首页 > AI机场 > AI对话与多模态需求 > 文件语音与多模态 > 文件语音与多模态完整说明 |
| topic | `coding-and-dev` | AI编程与开发连接 | `https://jichangwiki.cc/ai/coding-and-dev/` | 首页 > AI机场 > AI编程与开发连接 |
| cluster | `ai-coding-tools` | AI编程工具方案 | `https://jichangwiki.cc/ai/coding-and-dev/ai-coding-tools/` | 首页 > AI机场 > AI编程与开发连接 > AI编程工具方案 |
| article | `art-ai-013` | AI 编程工具网络要求 | `https://jichangwiki.cc/articles/art-ai-013/` | 首页 > AI机场 > AI编程与开发连接 > AI编程工具方案 > AI 编程工具网络要求 |
| article | `art-ai-014` | Cursor 与 GitHub Copilot 网络配置 | `https://jichangwiki.cc/articles/art-ai-014/` | 首页 > AI机场 > AI编程与开发连接 > AI编程工具方案 > Cursor 与 GitHub Copilot 网络配置 |
| article | `art-ai-015` | AI 编程连接异常排查 | `https://jichangwiki.cc/articles/art-ai-015/` | 首页 > AI机场 > AI编程与开发连接 > AI编程工具方案 > AI 编程连接异常排查 |
| article | `art-ai-016` | AI 编程延迟与稳定性 | `https://jichangwiki.cc/articles/art-ai-016/` | 首页 > AI机场 > AI编程与开发连接 > AI编程工具方案 > AI 编程延迟与稳定性 |
| article | `art-ai-017` | AI 编程工具的机场选择 | `https://jichangwiki.cc/articles/art-ai-017/` | 首页 > AI机场 > AI编程与开发连接 > AI编程工具方案 > AI 编程工具的机场选择 |
| article | `art-ai-018` | AI编程工具方案完整说明 | `https://jichangwiki.cc/articles/art-ai-018/` | 首页 > AI机场 > AI编程与开发连接 > AI编程工具方案 > AI编程工具方案完整说明 |
| cluster | `api-and-streaming-requests` | API与流式请求 | `https://jichangwiki.cc/ai/coding-and-dev/api-and-streaming-requests/` | 首页 > AI机场 > AI编程与开发连接 > API与流式请求 |
| article | `art-ai-019` | AI API 网络要求 | `https://jichangwiki.cc/articles/art-ai-019/` | 首页 > AI机场 > AI编程与开发连接 > API与流式请求 > AI API 网络要求 |
| article | `art-ai-020` | API 与网页版网络差异 | `https://jichangwiki.cc/articles/art-ai-020/` | 首页 > AI机场 > AI编程与开发连接 > API与流式请求 > API 与网页版网络差异 |
| article | `art-ai-021` | API 调用频率与带宽 | `https://jichangwiki.cc/articles/art-ai-021/` | 首页 > AI机场 > AI编程与开发连接 > API与流式请求 > API 调用频率与带宽 |
| article | `art-ai-022` | 流式请求的网络要求 | `https://jichangwiki.cc/articles/art-ai-022/` | 首页 > AI机场 > AI编程与开发连接 > API与流式请求 > 流式请求的网络要求 |
| article | `art-ai-023` | API 场景的机场选择 | `https://jichangwiki.cc/articles/art-ai-023/` | 首页 > AI机场 > AI编程与开发连接 > API与流式请求 > API 场景的机场选择 |
| article | `art-ai-024` | API与流式请求完整说明 | `https://jichangwiki.cc/articles/art-ai-024/` | 首页 > AI机场 > AI编程与开发连接 > API与流式请求 > API与流式请求完整说明 |
| topic | `continuity-and-privacy` | 持续办公与数据边界 | `https://jichangwiki.cc/ai/continuity-and-privacy/` | 首页 > AI机场 > 持续办公与数据边界 |
| cluster | `continuity-and-backup` | 工作连续性与备用 | `https://jichangwiki.cc/ai/continuity-and-privacy/continuity-and-backup/` | 首页 > AI机场 > 持续办公与数据边界 > 工作连续性与备用 |
| article | `art-ai-025` | 多 AI 工具共用的网络环境 | `https://jichangwiki.cc/articles/art-ai-025/` | 首页 > AI机场 > 持续办公与数据边界 > 工作连续性与备用 > 多 AI 工具共用的网络环境 |
| article | `art-ai-026` | AI 长期办公的网络要求 | `https://jichangwiki.cc/articles/art-ai-026/` | 首页 > AI机场 > 持续办公与数据边界 > 工作连续性与备用 > AI 长期办公的网络要求 |
| article | `art-ai-027` | AI 多工具切换的稳定性 | `https://jichangwiki.cc/articles/art-ai-027/` | 首页 > AI机场 > 持续办公与数据边界 > 工作连续性与备用 > AI 多工具切换的稳定性 |
| article | `art-ai-028` | AI 长期办公的机场选择 | `https://jichangwiki.cc/articles/art-ai-028/` | 首页 > AI机场 > 持续办公与数据边界 > 工作连续性与备用 > AI 长期办公的机场选择 |
| article | `art-ai-029` | 备用方案设计 | `https://jichangwiki.cc/articles/art-ai-029/` | 首页 > AI机场 > 持续办公与数据边界 > 工作连续性与备用 > 备用方案设计 |
| article | `art-ai-030` | 工作连续性与备用完整说明 | `https://jichangwiki.cc/articles/art-ai-030/` | 首页 > AI机场 > 持续办公与数据边界 > 工作连续性与备用 > 工作连续性与备用完整说明 |
| cluster | `collaboration-privacy-constraints` | 协作与隐私约束 | `https://jichangwiki.cc/ai/continuity-and-privacy/collaboration-privacy-constraints/` | 首页 > AI机场 > 持续办公与数据边界 > 协作与隐私约束 |
| article | `art-ai-031` | AI 工具地区支持核对方法 | `https://jichangwiki.cc/articles/art-ai-031/` | 首页 > AI机场 > 持续办公与数据边界 > 协作与隐私约束 > AI 工具地区支持核对方法 |
| article | `art-ai-032` | AI 账号资格判断 | `https://jichangwiki.cc/articles/art-ai-032/` | 首页 > AI机场 > 持续办公与数据边界 > 协作与隐私约束 > AI 账号资格判断 |
| article | `art-ai-033` | 网络可达与功能可用的区别 | `https://jichangwiki.cc/articles/art-ai-033/` | 首页 > AI机场 > 持续办公与数据边界 > 协作与隐私约束 > 网络可达与功能可用的区别 |
| article | `art-ai-034` | AI 数据的可见边界 | `https://jichangwiki.cc/articles/art-ai-034/` | 首页 > AI机场 > 持续办公与数据边界 > 协作与隐私约束 > AI 数据的可见边界 |
| article | `art-ai-035` | 账号关联与安全提示 | `https://jichangwiki.cc/articles/art-ai-035/` | 首页 > AI机场 > 持续办公与数据边界 > 协作与隐私约束 > 账号关联与安全提示 |
| article | `art-ai-036` | 协作与隐私约束完整说明 | `https://jichangwiki.cc/articles/art-ai-036/` | 首页 > AI机场 > 持续办公与数据边界 > 协作与隐私约束 > 协作与隐私约束完整说明 |
| pillar | `streaming` | 流媒体机场 | `https://jichangwiki.cc/streaming/` | 首页 > 流媒体机场 |
| topic | `platform-requirements` | 平台需求与观看条件 | `https://jichangwiki.cc/streaming/platform-requirements/` | 首页 > 流媒体机场 > 平台需求与观看条件 |
| cluster | `netflix-selection` | Netflix观看选型 | `https://jichangwiki.cc/streaming/platform-requirements/netflix-selection/` | 首页 > 流媒体机场 > 平台需求与观看条件 > Netflix观看选型 |
| article | `art-stm-001` | Netflix 用什么机场？地区与账号条件 | `https://jichangwiki.cc/articles/art-stm-001/` | 首页 > 流媒体机场 > 平台需求与观看条件 > Netflix观看选型 > Netflix 用什么机场？地区与账号条件 |
| article | `art-stm-002` | Netflix 播放条件与画质 | `https://jichangwiki.cc/articles/art-stm-002/` | 首页 > 流媒体机场 > 平台需求与观看条件 > Netflix观看选型 > Netflix 播放条件与画质 |
| article | `art-stm-003` | Netflix 地区与片库 | `https://jichangwiki.cc/articles/art-stm-003/` | 首页 > 流媒体机场 > 平台需求与观看条件 > Netflix观看选型 > Netflix 地区与片库 |
| article | `art-stm-004` | Netflix 播放质量判断 | `https://jichangwiki.cc/articles/art-stm-004/` | 首页 > 流媒体机场 > 平台需求与观看条件 > Netflix观看选型 > Netflix 播放质量判断 |
| article | `art-stm-005` | Netflix 观看记录方法 | `https://jichangwiki.cc/articles/art-stm-005/` | 首页 > 流媒体机场 > 平台需求与观看条件 > Netflix观看选型 > Netflix 观看记录方法 |
| article | `art-stm-006` | Netflix观看选型完整说明 | `https://jichangwiki.cc/articles/art-stm-006/` | 首页 > 流媒体机场 > 平台需求与观看条件 > Netflix观看选型 > Netflix观看选型完整说明 |
| cluster | `multi-platform-combo` | 多平台需求组合 | `https://jichangwiki.cc/streaming/platform-requirements/multi-platform-combo/` | 首页 > 流媒体机场 > 平台需求与观看条件 > 多平台需求组合 |
| article | `art-stm-007` | Disney+ 使用条件 | `https://jichangwiki.cc/articles/art-stm-007/` | 首页 > 流媒体机场 > 平台需求与观看条件 > 多平台需求组合 > Disney+ 使用条件 |
| article | `art-stm-008` | HBO Max 使用条件 | `https://jichangwiki.cc/articles/art-stm-008/` | 首页 > 流媒体机场 > 平台需求与观看条件 > 多平台需求组合 > HBO Max 使用条件 |
| article | `art-stm-009` | YouTube 用什么机场？4K 与直播区分 | `https://jichangwiki.cc/articles/art-stm-009/` | 首页 > 流媒体机场 > 平台需求与观看条件 > 多平台需求组合 > YouTube 用什么机场？4K 与直播区分 |
| article | `art-stm-010` | 多平台共用的机场选择 | `https://jichangwiki.cc/articles/art-stm-010/` | 首页 > 流媒体机场 > 平台需求与观看条件 > 多平台需求组合 > 多平台共用的机场选择 |
| article | `art-stm-011` | 多平台组合的网络方案 | `https://jichangwiki.cc/articles/art-stm-011/` | 首页 > 流媒体机场 > 平台需求与观看条件 > 多平台需求组合 > 多平台组合的网络方案 |
| article | `art-stm-012` | 多平台需求组合完整说明 | `https://jichangwiki.cc/articles/art-stm-012/` | 首页 > 流媒体机场 > 平台需求与观看条件 > 多平台需求组合 > 多平台需求组合完整说明 |
| topic | `quality-traffic-playback` | 清晰度流量与连续播放 | `https://jichangwiki.cc/streaming/quality-traffic-playback/` | 首页 > 流媒体机场 > 清晰度流量与连续播放 |
| cluster | `quality-and-budget` | 画质与流量预算 | `https://jichangwiki.cc/streaming/quality-traffic-playback/quality-and-budget/` | 首页 > 流媒体机场 > 清晰度流量与连续播放 > 画质与流量预算 |
| article | `art-stm-013` | 视频码率与清晰度 | `https://jichangwiki.cc/articles/art-stm-013/` | 首页 > 流媒体机场 > 清晰度流量与连续播放 > 画质与流量预算 > 视频码率与清晰度 |
| article | `art-stm-014` | 4K 播放的网络要求 | `https://jichangwiki.cc/articles/art-stm-014/` | 首页 > 流媒体机场 > 清晰度流量与连续播放 > 画质与流量预算 > 4K 播放的网络要求 |
| article | `art-stm-015` | 清晰度与带宽的关系 | `https://jichangwiki.cc/articles/art-stm-015/` | 首页 > 流媒体机场 > 清晰度流量与连续播放 > 画质与流量预算 > 清晰度与带宽的关系 |
| article | `art-stm-016` | 视频观看的流量消耗 | `https://jichangwiki.cc/articles/art-stm-016/` | 首页 > 流媒体机场 > 清晰度流量与连续播放 > 画质与流量预算 > 视频观看的流量消耗 |
| article | `art-stm-017` | 不同清晰度的流量差异 | `https://jichangwiki.cc/articles/art-stm-017/` | 首页 > 流媒体机场 > 清晰度流量与连续播放 > 画质与流量预算 > 不同清晰度的流量差异 |
| article | `art-stm-018` | 画质与流量预算完整说明 | `https://jichangwiki.cc/articles/art-stm-018/` | 首页 > 流媒体机场 > 清晰度流量与连续播放 > 画质与流量预算 > 画质与流量预算完整说明 |
| cluster | `peak-and-long-playback` | 晚间与长时间观看 | `https://jichangwiki.cc/streaming/quality-traffic-playback/peak-and-long-playback/` | 首页 > 流媒体机场 > 清晰度流量与连续播放 > 晚间与长时间观看 |
| article | `art-stm-019` | 视频卡顿的原因分析 | `https://jichangwiki.cc/articles/art-stm-019/` | 首页 > 流媒体机场 > 清晰度流量与连续播放 > 晚间与长时间观看 > 视频卡顿的原因分析 |
| article | `art-stm-020` | 缓冲与加载时间的观察 | `https://jichangwiki.cc/articles/art-stm-020/` | 首页 > 流媒体机场 > 清晰度流量与连续播放 > 晚间与长时间观看 > 缓冲与加载时间的观察 |
| article | `art-stm-021` | 连续观看的稳定性要求 | `https://jichangwiki.cc/articles/art-stm-021/` | 首页 > 流媒体机场 > 清晰度流量与连续播放 > 晚间与长时间观看 > 连续观看的稳定性要求 |
| article | `art-stm-022` | 晚高峰的视频表现 | `https://jichangwiki.cc/articles/art-stm-022/` | 首页 > 流媒体机场 > 清晰度流量与连续播放 > 晚间与长时间观看 > 晚高峰的视频表现 |
| article | `art-stm-023` | 视频观看体验的验证 | `https://jichangwiki.cc/articles/art-stm-023/` | 首页 > 流媒体机场 > 清晰度流量与连续播放 > 晚间与长时间观看 > 视频观看体验的验证 |
| article | `art-stm-024` | 晚间与长时间观看完整说明 | `https://jichangwiki.cc/articles/art-stm-024/` | 首页 > 流媒体机场 > 清晰度流量与连续播放 > 晚间与长时间观看 > 晚间与长时间观看完整说明 |
| topic | `devices-and-home` | 观看设备与家庭使用 | `https://jichangwiki.cc/streaming/devices-and-home/` | 首页 > 流媒体机场 > 观看设备与家庭使用 |
| cluster | `mobile-pc-casting` | 手机电脑与投屏 | `https://jichangwiki.cc/streaming/devices-and-home/mobile-pc-casting/` | 首页 > 流媒体机场 > 观看设备与家庭使用 > 手机电脑与投屏 |
| article | `art-stm-025` | 手机端观看的机场选择 | `https://jichangwiki.cc/articles/art-stm-025/` | 首页 > 流媒体机场 > 观看设备与家庭使用 > 手机电脑与投屏 > 手机端观看的机场选择 |
| article | `art-stm-026` | 电脑端观看的机场选择 | `https://jichangwiki.cc/articles/art-stm-026/` | 首页 > 流媒体机场 > 观看设备与家庭使用 > 手机电脑与投屏 > 电脑端观看的机场选择 |
| article | `art-stm-027` | 投屏场景的机场选择 | `https://jichangwiki.cc/articles/art-stm-027/` | 首页 > 流媒体机场 > 观看设备与家庭使用 > 手机电脑与投屏 > 投屏场景的机场选择 |
| article | `art-stm-028` | 多设备同时观看 | `https://jichangwiki.cc/articles/art-stm-028/` | 首页 > 流媒体机场 > 观看设备与家庭使用 > 手机电脑与投屏 > 多设备同时观看 |
| article | `art-stm-029` | 移动网络下的观看 | `https://jichangwiki.cc/articles/art-stm-029/` | 首页 > 流媒体机场 > 观看设备与家庭使用 > 手机电脑与投屏 > 移动网络下的观看 |
| article | `art-stm-030` | 手机电脑与投屏完整说明 | `https://jichangwiki.cc/articles/art-stm-030/` | 首页 > 流媒体机场 > 观看设备与家庭使用 > 手机电脑与投屏 > 手机电脑与投屏完整说明 |
| cluster | `tv-and-home-network` | 电视与家庭网络方案 | `https://jichangwiki.cc/streaming/devices-and-home/tv-and-home-network/` | 首页 > 流媒体机场 > 观看设备与家庭使用 > 电视与家庭网络方案 |
| article | `art-stm-031` | 电视端使用机场的方式 | `https://jichangwiki.cc/articles/art-stm-031/` | 首页 > 流媒体机场 > 观看设备与家庭使用 > 电视与家庭网络方案 > 电视端使用机场的方式 |
| article | `art-stm-032` | 智能电视客户端配置 | `https://jichangwiki.cc/articles/art-stm-032/` | 首页 > 流媒体机场 > 观看设备与家庭使用 > 电视与家庭网络方案 > 智能电视客户端配置 |
| article | `art-stm-033` | 电视与手机同时使用 | `https://jichangwiki.cc/articles/art-stm-033/` | 首页 > 流媒体机场 > 观看设备与家庭使用 > 电视与家庭网络方案 > 电视与手机同时使用 |
| article | `art-stm-034` | 家庭网络的路由器配置 | `https://jichangwiki.cc/articles/art-stm-034/` | 首页 > 流媒体机场 > 观看设备与家庭使用 > 电视与家庭网络方案 > 家庭网络的路由器配置 |
| article | `art-stm-035` | 家庭多设备视频方案 | `https://jichangwiki.cc/articles/art-stm-035/` | 首页 > 流媒体机场 > 观看设备与家庭使用 > 电视与家庭网络方案 > 家庭多设备视频方案 |
| article | `art-stm-036` | 电视与家庭网络方案完整说明 | `https://jichangwiki.cc/articles/art-stm-036/` | 首页 > 流媒体机场 > 观看设备与家庭使用 > 电视与家庭网络方案 > 电视与家庭网络方案完整说明 |
| pillar | `clients` | 客户端教程 | `https://jichangwiki.cc/clients/` | 首页 > 客户端教程 |
| topic | `selection-and-download` | 客户端选择与下载 | `https://jichangwiki.cc/clients/selection-and-download/` | 首页 > 客户端教程 > 客户端选择与下载 |
| cluster | `desktop-clients` | 桌面系统客户端 | `https://jichangwiki.cc/clients/selection-and-download/desktop-clients/` | 首页 > 客户端教程 > 客户端选择与下载 > 桌面系统客户端 |
| article | `art-cli-001` | Clash Verge Rev Windows 使用 | `https://jichangwiki.cc/articles/art-cli-001/` | 首页 > 客户端教程 > 客户端选择与下载 > 桌面系统客户端 > Clash Verge Rev Windows 使用 |
| article | `art-cli-002` | v2rayN 使用说明 | `https://jichangwiki.cc/articles/art-cli-002/` | 首页 > 客户端教程 > 客户端选择与下载 > 桌面系统客户端 > v2rayN 使用说明 |
| article | `art-cli-003` | Windows 客户端下载来源 | `https://jichangwiki.cc/articles/art-cli-003/` | 首页 > 客户端教程 > 客户端选择与下载 > 桌面系统客户端 > Windows 客户端下载来源 |
| article | `art-cli-004` | Clash Verge Rev macOS 使用 | `https://jichangwiki.cc/articles/art-cli-004/` | 首页 > 客户端教程 > 客户端选择与下载 > 桌面系统客户端 > Clash Verge Rev macOS 使用 |
| article | `art-cli-005` | Linux 客户端说明 | `https://jichangwiki.cc/articles/art-cli-005/` | 首页 > 客户端教程 > 客户端选择与下载 > 桌面系统客户端 > Linux 客户端说明 |
| article | `art-cli-006` | 桌面系统客户端完整指南 | `https://jichangwiki.cc/articles/art-cli-006/` | 首页 > 客户端教程 > 客户端选择与下载 > 桌面系统客户端 > 桌面系统客户端完整指南 |
| cluster | `mobile-clients` | 手机与平板客户端 | `https://jichangwiki.cc/clients/selection-and-download/mobile-clients/` | 首页 > 客户端教程 > 客户端选择与下载 > 手机与平板客户端 |
| article | `art-cli-007` | Android 客户端有哪些 | `https://jichangwiki.cc/articles/art-cli-007/` | 首页 > 客户端教程 > 客户端选择与下载 > 手机与平板客户端 > Android 客户端有哪些 |
| article | `art-cli-008` | FlClash Android 使用 | `https://jichangwiki.cc/articles/art-cli-008/` | 首页 > 客户端教程 > 客户端选择与下载 > 手机与平板客户端 > FlClash Android 使用 |
| article | `art-cli-009` | v2rayNG 使用说明 | `https://jichangwiki.cc/articles/art-cli-009/` | 首页 > 客户端教程 > 客户端选择与下载 > 手机与平板客户端 > v2rayNG 使用说明 |
| article | `art-cli-010` | iPhone 客户端有哪些 | `https://jichangwiki.cc/articles/art-cli-010/` | 首页 > 客户端教程 > 客户端选择与下载 > 手机与平板客户端 > iPhone 客户端有哪些 |
| article | `art-cli-011` | Shadowrocket 使用说明 | `https://jichangwiki.cc/articles/art-cli-011/` | 首页 > 客户端教程 > 客户端选择与下载 > 手机与平板客户端 > Shadowrocket 使用说明 |
| article | `art-cli-012` | 手机与平板客户端完整指南 | `https://jichangwiki.cc/articles/art-cli-012/` | 首页 > 客户端教程 > 客户端选择与下载 > 手机与平板客户端 > 手机与平板客户端完整指南 |
| topic | `import-and-rules` | 首次导入与规则配置 | `https://jichangwiki.cc/clients/import-and-rules/` | 首页 > 客户端教程 > 首次导入与规则配置 |
| cluster | `subscription-and-connection` | 订阅与首次连接 | `https://jichangwiki.cc/clients/import-and-rules/subscription-and-connection/` | 首页 > 客户端教程 > 首次导入与规则配置 > 订阅与首次连接 |
| article | `art-cli-013` | 订阅格式说明 | `https://jichangwiki.cc/articles/art-cli-013/` | 首页 > 客户端教程 > 首次导入与规则配置 > 订阅与首次连接 > 订阅格式说明 |
| article | `art-cli-014` | YAML 配置结构 | `https://jichangwiki.cc/articles/art-cli-014/` | 首页 > 客户端教程 > 首次导入与规则配置 > 订阅与首次连接 > YAML 配置结构 |
| article | `art-cli-015` | 订阅链接与配置文件关系 | `https://jichangwiki.cc/articles/art-cli-015/` | 首页 > 客户端教程 > 首次导入与规则配置 > 订阅与首次连接 > 订阅链接与配置文件关系 |
| article | `art-cli-016` | 订阅导入方法 | `https://jichangwiki.cc/articles/art-cli-016/` | 首页 > 客户端教程 > 首次导入与规则配置 > 订阅与首次连接 > 订阅导入方法 |
| article | `art-cli-017` | 首次连接步骤 | `https://jichangwiki.cc/articles/art-cli-017/` | 首页 > 客户端教程 > 首次导入与规则配置 > 订阅与首次连接 > 首次连接步骤 |
| article | `art-cli-018` | 订阅与首次连接完整说明 | `https://jichangwiki.cc/articles/art-cli-018/` | 首页 > 客户端教程 > 首次导入与规则配置 > 订阅与首次连接 > 订阅与首次连接完整说明 |
| cluster | `rules-dns-tun` | 规则DNS与接管设置 | `https://jichangwiki.cc/clients/import-and-rules/rules-dns-tun/` | 首页 > 客户端教程 > 首次导入与规则配置 > 规则DNS与接管设置 |
| article | `art-cli-019` | 规则模式说明 | `https://jichangwiki.cc/articles/art-cli-019/` | 首页 > 客户端教程 > 首次导入与规则配置 > 规则DNS与接管设置 > 规则模式说明 |
| article | `art-cli-020` | 全局模式说明 | `https://jichangwiki.cc/articles/art-cli-020/` | 首页 > 客户端教程 > 首次导入与规则配置 > 规则DNS与接管设置 > 全局模式说明 |
| article | `art-cli-021` | 直连模式说明 | `https://jichangwiki.cc/articles/art-cli-021/` | 首页 > 客户端教程 > 首次导入与规则配置 > 规则DNS与接管设置 > 直连模式说明 |
| article | `art-cli-022` | DNS 设置说明 | `https://jichangwiki.cc/articles/art-cli-022/` | 首页 > 客户端教程 > 首次导入与规则配置 > 规则DNS与接管设置 > DNS 设置说明 |
| article | `art-cli-023` | TUN 模式说明 | `https://jichangwiki.cc/articles/art-cli-023/` | 首页 > 客户端教程 > 首次导入与规则配置 > 规则DNS与接管设置 > TUN 模式说明 |
| article | `art-cli-024` | 规则DNS与接管设置完整说明 | `https://jichangwiki.cc/articles/art-cli-024/` | 首页 > 客户端教程 > 首次导入与规则配置 > 规则DNS与接管设置 > 规则DNS与接管设置完整说明 |
| topic | `maintenance-and-advanced` | 配置维护与进阶接入 | `https://jichangwiki.cc/clients/maintenance-and-advanced/` | 首页 > 客户端教程 > 配置维护与进阶接入 |
| cluster | `update-backup-migration` | 更新备份与迁移 | `https://jichangwiki.cc/clients/maintenance-and-advanced/update-backup-migration/` | 首页 > 客户端教程 > 配置维护与进阶接入 > 更新备份与迁移 |
| article | `art-cli-025` | 客户端升级方法 | `https://jichangwiki.cc/articles/art-cli-025/` | 首页 > 客户端教程 > 配置维护与进阶接入 > 更新备份与迁移 > 客户端升级方法 |
| article | `art-cli-026` | 客户端降级方法 | `https://jichangwiki.cc/articles/art-cli-026/` | 首页 > 客户端教程 > 配置维护与进阶接入 > 更新备份与迁移 > 客户端降级方法 |
| article | `art-cli-027` | 客户端配置备份 | `https://jichangwiki.cc/articles/art-cli-027/` | 首页 > 客户端教程 > 配置维护与进阶接入 > 更新备份与迁移 > 客户端配置备份 |
| article | `art-cli-028` | 客户端配置恢复 | `https://jichangwiki.cc/articles/art-cli-028/` | 首页 > 客户端教程 > 配置维护与进阶接入 > 更新备份与迁移 > 客户端配置恢复 |
| article | `art-cli-029` | 客户端配置迁移 | `https://jichangwiki.cc/articles/art-cli-029/` | 首页 > 客户端教程 > 配置维护与进阶接入 > 更新备份与迁移 > 客户端配置迁移 |
| article | `art-cli-030` | 更新备份与迁移完整说明 | `https://jichangwiki.cc/articles/art-cli-030/` | 首页 > 客户端教程 > 配置维护与进阶接入 > 更新备份与迁移 > 更新备份与迁移完整说明 |
| cluster | `router-and-dev-env` | 路由与开发环境接入 | `https://jichangwiki.cc/clients/maintenance-and-advanced/router-and-dev-env/` | 首页 > 客户端教程 > 配置维护与进阶接入 > 路由与开发环境接入 |
| article | `art-cli-031` | 路由器接入说明 | `https://jichangwiki.cc/articles/art-cli-031/` | 首页 > 客户端教程 > 配置维护与进阶接入 > 路由与开发环境接入 > 路由器接入说明 |
| article | `art-cli-032` | 开发环境代理配置 | `https://jichangwiki.cc/articles/art-cli-032/` | 首页 > 客户端教程 > 配置维护与进阶接入 > 路由与开发环境接入 > 开发环境代理配置 |
| article | `art-cli-033` | 终端与命令行代理 | `https://jichangwiki.cc/articles/art-cli-033/` | 首页 > 客户端教程 > 配置维护与进阶接入 > 路由与开发环境接入 > 终端与命令行代理 |
| article | `art-cli-034` | 包管理器代理配置 | `https://jichangwiki.cc/articles/art-cli-034/` | 首页 > 客户端教程 > 配置维护与进阶接入 > 路由与开发环境接入 > 包管理器代理配置 |
| article | `art-cli-035` | Git 代理配置 | `https://jichangwiki.cc/articles/art-cli-035/` | 首页 > 客户端教程 > 配置维护与进阶接入 > 路由与开发环境接入 > Git 代理配置 |
| article | `art-cli-036` | 路由与开发环境接入完整说明 | `https://jichangwiki.cc/articles/art-cli-036/` | 首页 > 客户端教程 > 配置维护与进阶接入 > 路由与开发环境接入 > 路由与开发环境接入完整说明 |
| pillar | `troubleshooting` | 网络排障 | `https://jichangwiki.cc/troubleshooting/` | 首页 > 网络排障 |
| topic | `subscription-issues` | 订阅获取与格式错误 | `https://jichangwiki.cc/troubleshooting/subscription-issues/` | 首页 > 网络排障 > 订阅获取与格式错误 |
| cluster | `sub-url-access-failure` | 订阅地址访问失败 | `https://jichangwiki.cc/troubleshooting/subscription-issues/sub-url-access-failure/` | 首页 > 网络排障 > 订阅获取与格式错误 > 订阅地址访问失败 |
| article | `art-trb-001` | 订阅更新失败怎么办 | `https://jichangwiki.cc/articles/art-trb-001/` | 首页 > 网络排障 > 订阅获取与格式错误 > 订阅地址访问失败 > 订阅更新失败怎么办 |
| article | `art-trb-002` | 订阅返回 403 处理 | `https://jichangwiki.cc/articles/art-trb-002/` | 首页 > 网络排障 > 订阅获取与格式错误 > 订阅地址访问失败 > 订阅返回 403 处理 |
| article | `art-trb-003` | 订阅返回 404 处理 | `https://jichangwiki.cc/articles/art-trb-003/` | 首页 > 网络排障 > 订阅获取与格式错误 > 订阅地址访问失败 > 订阅返回 404 处理 |
| article | `art-trb-004` | 订阅下载超时处理 | `https://jichangwiki.cc/articles/art-trb-004/` | 首页 > 网络排障 > 订阅获取与格式错误 > 订阅地址访问失败 > 订阅下载超时处理 |
| article | `art-trb-005` | 浏览器能打开但客户端失败 | `https://jichangwiki.cc/articles/art-trb-005/` | 首页 > 网络排障 > 订阅获取与格式错误 > 订阅地址访问失败 > 浏览器能打开但客户端失败 |
| article | `art-trb-006` | 订阅地址访问失败完整说明 | `https://jichangwiki.cc/articles/art-trb-006/` | 首页 > 网络排障 > 订阅获取与格式错误 > 订阅地址访问失败 > 订阅地址访问失败完整说明 |
| cluster | `sub-parse-and-auth` | 格式解析与配置认证 | `https://jichangwiki.cc/troubleshooting/subscription-issues/sub-parse-and-auth/` | 首页 > 网络排障 > 订阅获取与格式错误 > 格式解析与配置认证 |
| article | `art-trb-007` | YAML 语法错误处理 | `https://jichangwiki.cc/articles/art-trb-007/` | 首页 > 网络排障 > 订阅获取与格式错误 > 格式解析与配置认证 > YAML 语法错误处理 |
| article | `art-trb-008` | 订阅解析失败处理 | `https://jichangwiki.cc/articles/art-trb-008/` | 首页 > 网络排障 > 订阅获取与格式错误 > 格式解析与配置认证 > 订阅解析失败处理 |
| article | `art-trb-009` | 协议不支持处理 | `https://jichangwiki.cc/articles/art-trb-009/` | 首页 > 网络排障 > 订阅获取与格式错误 > 格式解析与配置认证 > 协议不支持处理 |
| article | `art-trb-010` | 节点被过滤处理 | `https://jichangwiki.cc/articles/art-trb-010/` | 首页 > 网络排障 > 订阅获取与格式错误 > 格式解析与配置认证 > 节点被过滤处理 |
| article | `art-trb-011` | 配置被覆盖处理 | `https://jichangwiki.cc/articles/art-trb-011/` | 首页 > 网络排障 > 订阅获取与格式错误 > 格式解析与配置认证 > 配置被覆盖处理 |
| article | `art-trb-012` | 格式解析与配置认证完整说明 | `https://jichangwiki.cc/articles/art-trb-012/` | 首页 > 网络排障 > 订阅获取与格式错误 > 格式解析与配置认证 > 格式解析与配置认证完整说明 |
| topic | `connection-failure` | 连接失败与本地接管 | `https://jichangwiki.cc/troubleshooting/connection-failure/` | 首页 > 网络排障 > 连接失败与本地接管 |
| cluster | `system-proxy-conflicts` | 系统代理与本机冲突 | `https://jichangwiki.cc/troubleshooting/connection-failure/system-proxy-conflicts/` | 首页 > 网络排障 > 连接失败与本地接管 > 系统代理与本机冲突 |
| article | `art-trb-013` | 系统代理不生效排查 | `https://jichangwiki.cc/articles/art-trb-013/` | 首页 > 网络排障 > 连接失败与本地接管 > 系统代理与本机冲突 > 系统代理不生效排查 |
| article | `art-trb-014` | TUN 模式启动失败处理 | `https://jichangwiki.cc/articles/art-trb-014/` | 首页 > 网络排障 > 连接失败与本地接管 > 系统代理与本机冲突 > TUN 模式启动失败处理 |
| article | `art-trb-015` | 系统网络异常处理 | `https://jichangwiki.cc/articles/art-trb-015/` | 首页 > 网络排障 > 连接失败与本地接管 > 系统代理与本机冲突 > 系统网络异常处理 |
| article | `art-trb-016` | 系统代理残留清理 | `https://jichangwiki.cc/articles/art-trb-016/` | 首页 > 网络排障 > 连接失败与本地接管 > 系统代理与本机冲突 > 系统代理残留清理 |
| article | `art-trb-017` | 权限问题处理 | `https://jichangwiki.cc/articles/art-trb-017/` | 首页 > 网络排障 > 连接失败与本地接管 > 系统代理与本机冲突 > 权限问题处理 |
| article | `art-trb-018` | 系统代理与本机冲突完整说明 | `https://jichangwiki.cc/articles/art-trb-018/` | 首页 > 网络排障 > 连接失败与本地接管 > 系统代理与本机冲突 > 系统代理与本机冲突完整说明 |
| cluster | `node-link-and-handshake` | 节点链路与握手异常 | `https://jichangwiki.cc/troubleshooting/connection-failure/node-link-and-handshake/` | 首页 > 网络排障 > 连接失败与本地接管 > 节点链路与握手异常 |
| article | `art-trb-019` | 全部节点超时排查 | `https://jichangwiki.cc/articles/art-trb-019/` | 首页 > 网络排障 > 连接失败与本地接管 > 节点链路与握手异常 > 全部节点超时排查 |
| article | `art-trb-020` | 部分节点不可用排查 | `https://jichangwiki.cc/articles/art-trb-020/` | 首页 > 网络排障 > 连接失败与本地接管 > 节点链路与握手异常 > 部分节点不可用排查 |
| article | `art-trb-021` | 节点握手失败处理 | `https://jichangwiki.cc/articles/art-trb-021/` | 首页 > 网络排障 > 连接失败与本地接管 > 节点链路与握手异常 > 节点握手失败处理 |
| article | `art-trb-022` | 连接被重置处理 | `https://jichangwiki.cc/articles/art-trb-022/` | 首页 > 网络排障 > 连接失败与本地接管 > 节点链路与握手异常 > 连接被重置处理 |
| article | `art-trb-023` | 节点认证失败处理 | `https://jichangwiki.cc/articles/art-trb-023/` | 首页 > 网络排障 > 连接失败与本地接管 > 节点链路与握手异常 > 节点认证失败处理 |
| article | `art-trb-024` | 节点链路与握手异常完整说明 | `https://jichangwiki.cc/articles/art-trb-024/` | 首页 > 网络排障 > 连接失败与本地接管 > 节点链路与握手异常 > 节点链路与握手异常完整说明 |
| topic | `speed-and-app-issues` | 速度下降与应用异常 | `https://jichangwiki.cc/troubleshooting/speed-and-app-issues/` | 首页 > 网络排障 > 速度下降与应用异常 |
| cluster | `speed-and-buffering` | 速度与缓冲问题 | `https://jichangwiki.cc/troubleshooting/speed-and-app-issues/speed-and-buffering/` | 首页 > 网络排障 > 速度下降与应用异常 > 速度与缓冲问题 |
| article | `art-trb-025` | 连接速度慢的原因分析 | `https://jichangwiki.cc/articles/art-trb-025/` | 首页 > 网络排障 > 速度下降与应用异常 > 速度与缓冲问题 > 连接速度慢的原因分析 |
| article | `art-trb-026` | 速度波动观察方法 | `https://jichangwiki.cc/articles/art-trb-026/` | 首页 > 网络排障 > 速度下降与应用异常 > 速度与缓冲问题 > 速度波动观察方法 |
| article | `art-trb-027` | 视频卡顿排查 | `https://jichangwiki.cc/articles/art-trb-027/` | 首页 > 网络排障 > 速度下降与应用异常 > 速度与缓冲问题 > 视频卡顿排查 |
| article | `art-trb-028` | 下载速度慢排查 | `https://jichangwiki.cc/articles/art-trb-028/` | 首页 > 网络排障 > 速度下降与应用异常 > 速度与缓冲问题 > 下载速度慢排查 |
| article | `art-trb-029` | 速度优化的合理做法 | `https://jichangwiki.cc/articles/art-trb-029/` | 首页 > 网络排障 > 速度下降与应用异常 > 速度与缓冲问题 > 速度优化的合理做法 |
| article | `art-trb-030` | 速度与缓冲问题完整说明 | `https://jichangwiki.cc/articles/art-trb-030/` | 首页 > 网络排障 > 速度下降与应用异常 > 速度与缓冲问题 > 速度与缓冲问题完整说明 |
| cluster | `browser-and-app-anomaly` | 浏览器与特定程序异常 | `https://jichangwiki.cc/troubleshooting/speed-and-app-issues/browser-and-app-anomaly/` | 首页 > 网络排障 > 速度下降与应用异常 > 浏览器与特定程序异常 |
| article | `art-trb-031` | 特定网站无法访问 | `https://jichangwiki.cc/articles/art-trb-031/` | 首页 > 网络排障 > 速度下降与应用异常 > 浏览器与特定程序异常 > 特定网站无法访问 |
| article | `art-trb-032` | 特定应用无法连接 | `https://jichangwiki.cc/articles/art-trb-032/` | 首页 > 网络排障 > 速度下降与应用异常 > 浏览器与特定程序异常 > 特定应用无法连接 |
| article | `art-trb-033` | AI 工具连接异常 | `https://jichangwiki.cc/articles/art-trb-033/` | 首页 > 网络排障 > 速度下降与应用异常 > 浏览器与特定程序异常 > AI 工具连接异常 |
| article | `art-trb-034` | 视频平台连接异常 | `https://jichangwiki.cc/articles/art-trb-034/` | 首页 > 网络排障 > 速度下降与应用异常 > 浏览器与特定程序异常 > 视频平台连接异常 |
| article | `art-trb-035` | 浏览器能上网但其他软件不能 | `https://jichangwiki.cc/articles/art-trb-035/` | 首页 > 网络排障 > 速度下降与应用异常 > 浏览器与特定程序异常 > 浏览器能上网但其他软件不能 |
| article | `art-trb-036` | 浏览器与特定程序异常完整说明 | `https://jichangwiki.cc/articles/art-trb-036/` | 首页 > 网络排障 > 速度下降与应用异常 > 浏览器与特定程序异常 > 浏览器与特定程序异常完整说明 |
| pillar | `wiki` | 机场百科 | `https://jichangwiki.cc/wiki/` | 首页 > 机场百科 |
| topic | `service-and-lines` | 服务结构与线路实体 | `https://jichangwiki.cc/wiki/service-and-lines/` | 首页 > 机场百科 > 服务结构与线路实体 |
| cluster | `nodes-and-clients-relation` | 订阅节点与客户端 | `https://jichangwiki.cc/wiki/service-and-lines/nodes-and-clients-relation/` | 首页 > 机场百科 > 服务结构与线路实体 > 订阅节点与客户端 |
| article | `art-wik-001` | 机场服务是什么：组成与角色 | `https://jichangwiki.cc/articles/art-wik-001/` | 首页 > 机场百科 > 服务结构与线路实体 > 订阅节点与客户端 > 机场服务是什么：组成与角色 |
| article | `art-wik-002` | 客户端、订阅与节点的关系 | `https://jichangwiki.cc/articles/art-wik-002/` | 首页 > 机场百科 > 服务结构与线路实体 > 订阅节点与客户端 > 客户端、订阅与节点的关系 |
| article | `art-wik-003` | 服务组成概念图 | `https://jichangwiki.cc/articles/art-wik-003/` | 首页 > 机场百科 > 服务结构与线路实体 > 订阅节点与客户端 > 服务组成概念图 |
| article | `art-wik-004` | 服务实体的角色说明 | `https://jichangwiki.cc/articles/art-wik-004/` | 首页 > 机场百科 > 服务结构与线路实体 > 订阅节点与客户端 > 服务实体的角色说明 |
| article | `art-wik-005` | 订阅与节点的通信流程 | `https://jichangwiki.cc/articles/art-wik-005/` | 首页 > 机场百科 > 服务结构与线路实体 > 订阅节点与客户端 > 订阅与节点的通信流程 |
| article | `art-wik-006` | 订阅节点与客户端完整说明 | `https://jichangwiki.cc/articles/art-wik-006/` | 首页 > 机场百科 > 服务结构与线路实体 > 订阅节点与客户端 > 订阅节点与客户端完整说明 |
| cluster | `entry-exit-and-line-tags` | 入口出口与线路标签 | `https://jichangwiki.cc/wiki/service-and-lines/entry-exit-and-line-tags/` | 首页 > 机场百科 > 服务结构与线路实体 > 入口出口与线路标签 |
| article | `art-wik-007` | IEPL 专线说明 | `https://jichangwiki.cc/articles/art-wik-007/` | 首页 > 机场百科 > 服务结构与线路实体 > 入口出口与线路标签 > IEPL 专线说明 |
| article | `art-wik-008` | IPLC 专线说明 | `https://jichangwiki.cc/articles/art-wik-008/` | 首页 > 机场百科 > 服务结构与线路实体 > 入口出口与线路标签 > IPLC 专线说明 |
| article | `art-wik-009` | 中转与直连的区别 | `https://jichangwiki.cc/articles/art-wik-009/` | 首页 > 机场百科 > 服务结构与线路实体 > 入口出口与线路标签 > 中转与直连的区别 |
| article | `art-wik-010` | 线路类型的实际影响 | `https://jichangwiki.cc/articles/art-wik-010/` | 首页 > 机场百科 > 服务结构与线路实体 > 入口出口与线路标签 > 线路类型的实际影响 |
| article | `art-wik-011` | 线路标签与实际观测的区别 | `https://jichangwiki.cc/articles/art-wik-011/` | 首页 > 机场百科 > 服务结构与线路实体 > 入口出口与线路标签 > 线路标签与实际观测的区别 |
| article | `art-wik-012` | 入口出口与线路标签完整说明 | `https://jichangwiki.cc/articles/art-wik-012/` | 首页 > 机场百科 > 服务结构与线路实体 > 入口出口与线路标签 > 入口出口与线路标签完整说明 |
| topic | `protocols-and-security` | 传输协议与安全机制 | `https://jichangwiki.cc/wiki/protocols-and-security/` | 首页 > 机场百科 > 传输协议与安全机制 |
| cluster | `tcp-udp-and-quic` | TCP UDP与QUIC | `https://jichangwiki.cc/wiki/protocols-and-security/tcp-udp-and-quic/` | 首页 > 机场百科 > 传输协议与安全机制 > TCP UDP与QUIC |
| article | `art-wik-013` | TCP与UDP在代理连接中有什么区别？可靠传输、时延与应用需求解析 | `https://jichangwiki.cc/articles/art-wik-013/` | 首页 > 机场百科 > 传输协议与安全机制 > TCP UDP与QUIC > TCP与UDP在代理连接中有什么区别？可靠传输、时延与应用需求解析 |
| article | `art-wik-014` | QUIC与UDP是什么关系？为什么不能把UDP协议都当作同一种体验 | `https://jichangwiki.cc/articles/art-wik-014/` | 首页 > 机场百科 > 传输协议与安全机制 > TCP UDP与QUIC > QUIC与UDP是什么关系？为什么不能把UDP协议都当作同一种体验 |
| article | `art-wik-015` | 网络丢包时TCP连接会怎样变化？理解重传、拥塞控制与吞吐下降 | `https://jichangwiki.cc/articles/art-wik-015/` | 首页 > 机场百科 > 传输协议与安全机制 > TCP UDP与QUIC > 网络丢包时TCP连接会怎样变化？理解重传、拥塞控制与吞吐下降 |
| article | `art-wik-016` | QUIC的多路复用如何工作？与连接切换和应用传输有什么关系 | `https://jichangwiki.cc/articles/art-wik-016/` | 首页 > 机场百科 > 传输协议与安全机制 > TCP UDP与QUIC > QUIC的多路复用如何工作？与连接切换和应用传输有什么关系 |
| article | `art-wik-017` | 长连接与短连接有什么区别？为什么网页浏览和持续输出需要不同观察指标 | `https://jichangwiki.cc/articles/art-wik-017/` | 首页 > 机场百科 > 传输协议与安全机制 > TCP UDP与QUIC > 长连接与短连接有什么区别？为什么网页浏览和持续输出需要不同观察指标 |
| article | `art-wik-018` | MTU与分片会怎样影响代理连接？从数据包大小理解异常与性能边界 | `https://jichangwiki.cc/articles/art-wik-018/` | 首页 > 机场百科 > 传输协议与安全机制 > TCP UDP与QUIC > MTU与分片会怎样影响代理连接？从数据包大小理解异常与性能边界 |
| cluster | `tls-and-proxy-layers` | TLS与代理协议层次 | `https://jichangwiki.cc/wiki/protocols-and-security/tls-and-proxy-layers/` | 首页 > 机场百科 > 传输协议与安全机制 > TLS与代理协议层次 |
| article | `art-wik-019` | TLS 加密基础 | `https://jichangwiki.cc/articles/art-wik-019/` | 首页 > 机场百科 > 传输协议与安全机制 > TLS与代理协议层次 > TLS 加密基础 |
| article | `art-wik-020` | TLS 与代理协议的关系 | `https://jichangwiki.cc/articles/art-wik-020/` | 首页 > 机场百科 > 传输协议与安全机制 > TLS与代理协议层次 > TLS 与代理协议的关系 |
| article | `art-wik-021` | VLESS 协议说明 | `https://jichangwiki.cc/articles/art-wik-021/` | 首页 > 机场百科 > 传输协议与安全机制 > TLS与代理协议层次 > VLESS 协议说明 |
| article | `art-wik-022` | Trojan 协议说明 | `https://jichangwiki.cc/articles/art-wik-022/` | 首页 > 机场百科 > 传输协议与安全机制 > TLS与代理协议层次 > Trojan 协议说明 |
| article | `art-wik-023` | Shadowsocks 协议说明 | `https://jichangwiki.cc/articles/art-wik-023/` | 首页 > 机场百科 > 传输协议与安全机制 > TLS与代理协议层次 > Shadowsocks 协议说明 |
| article | `art-wik-024` | TLS与代理协议层次完整说明 | `https://jichangwiki.cc/articles/art-wik-024/` | 首页 > 机场百科 > 传输协议与安全机制 > TLS与代理协议层次 > TLS与代理协议层次完整说明 |
| topic | `performance-and-privacy` | 网络性能与隐私边界 | `https://jichangwiki.cc/wiki/performance-and-privacy/` | 首页 > 机场百科 > 网络性能与隐私边界 |
| cluster | `metrics-and-meanings` | 性能指标与测量含义 | `https://jichangwiki.cc/wiki/performance-and-privacy/metrics-and-meanings/` | 首页 > 机场百科 > 网络性能与隐私边界 > 性能指标与测量含义 |
| article | `art-wik-025` | 延迟、抖动、丢包指标 | `https://jichangwiki.cc/articles/art-wik-025/` | 首页 > 机场百科 > 网络性能与隐私边界 > 性能指标与测量含义 > 延迟、抖动、丢包指标 |
| article | `art-wik-026` | 带宽与吞吐的区别 | `https://jichangwiki.cc/articles/art-wik-026/` | 首页 > 机场百科 > 网络性能与隐私边界 > 性能指标与测量含义 > 带宽与吞吐的区别 |
| article | `art-wik-027` | 峰值速度与持续速度 | `https://jichangwiki.cc/articles/art-wik-027/` | 首页 > 机场百科 > 网络性能与隐私边界 > 性能指标与测量含义 > 峰值速度与持续速度 |
| article | `art-wik-028` | 性能指标的测量方法 | `https://jichangwiki.cc/articles/art-wik-028/` | 首页 > 机场百科 > 网络性能与隐私边界 > 性能指标与测量含义 > 性能指标的测量方法 |
| article | `art-wik-029` | 性能指标的解读 | `https://jichangwiki.cc/articles/art-wik-029/` | 首页 > 机场百科 > 网络性能与隐私边界 > 性能指标与测量含义 > 性能指标的解读 |
| article | `art-wik-030` | 性能指标与测量含义完整说明 | `https://jichangwiki.cc/articles/art-wik-030/` | 首页 > 机场百科 > 网络性能与隐私边界 > 性能指标与测量含义 > 性能指标与测量含义完整说明 |
| cluster | `dns-ip-visibility` | DNS IP与数据可见性 | `https://jichangwiki.cc/wiki/performance-and-privacy/dns-ip-visibility/` | 首页 > 机场百科 > 网络性能与隐私边界 > DNS IP与数据可见性 |
| article | `art-wik-031` | DNS 解析流程 | `https://jichangwiki.cc/articles/art-wik-031/` | 首页 > 机场百科 > 网络性能与隐私边界 > DNS IP与数据可见性 > DNS 解析流程 |
| article | `art-wik-032` | DNS over HTTPS 与 DNS over TLS | `https://jichangwiki.cc/articles/art-wik-032/` | 首页 > 机场百科 > 网络性能与隐私边界 > DNS IP与数据可见性 > DNS over HTTPS 与 DNS over TLS |
| article | `art-wik-033` | fake-ip 与 redir-host | `https://jichangwiki.cc/articles/art-wik-033/` | 首页 > 机场百科 > 网络性能与隐私边界 > DNS IP与数据可见性 > fake-ip 与 redir-host |
| article | `art-wik-034` | 原生 IP 与广播 IP | `https://jichangwiki.cc/articles/art-wik-034/` | 首页 > 机场百科 > 网络性能与隐私边界 > DNS IP与数据可见性 > 原生 IP 与广播 IP |
| article | `art-wik-035` | 共享 IP 与独立 IP | `https://jichangwiki.cc/articles/art-wik-035/` | 首页 > 机场百科 > 网络性能与隐私边界 > DNS IP与数据可见性 > 共享 IP 与独立 IP |
| article | `art-wik-036` | DNS IP与数据可见性完整说明 | `https://jichangwiki.cc/articles/art-wik-036/` | 首页 > 机场百科 > 网络性能与隐私边界 > DNS IP与数据可见性 > DNS IP与数据可见性完整说明 |
| pillar | `airports` | 机场大全 | `https://jichangwiki.cc/airports/` | 首页 > 机场大全 |
| topic | `brand-lookup` | 品牌查找与档案阅读 | `https://jichangwiki.cc/airports/brand-lookup/` | 首页 > 机场大全 > 品牌查找与档案阅读 |
| cluster | `names-aliases-and-portals` | 名称别名与正确入口 | `https://jichangwiki.cc/airports/brand-lookup/names-aliases-and-portals/` | 首页 > 机场大全 > 品牌查找与档案阅读 > 名称别名与正确入口 |
| article | `art-air-001` | 机场官网怎么辨认：品牌公告、域名关联与推广入口核验 | `https://jichangwiki.cc/articles/art-air-001/` | 首页 > 机场大全 > 品牌查找与档案阅读 > 名称别名与正确入口 > 机场官网怎么辨认：品牌公告、域名关联与推广入口核验 |
| article | `art-air-002` | 同名机场是不是同一家：品牌别名、域名与服务资料如何对照 | `https://jichangwiki.cc/articles/art-air-002/` | 首页 > 机场大全 > 品牌查找与档案阅读 > 名称别名与正确入口 > 同名机场是不是同一家：品牌别名、域名与服务资料如何对照 |
| article | `art-air-003` | 品牌官网入口核验方法 | `https://jichangwiki.cc/articles/art-air-003/` | 首页 > 机场大全 > 品牌查找与档案阅读 > 名称别名与正确入口 > 品牌官网入口核验方法 |
| article | `art-air-004` | 品牌域名变更记录 | `https://jichangwiki.cc/articles/art-air-004/` | 首页 > 机场大全 > 品牌查找与档案阅读 > 名称别名与正确入口 > 品牌域名变更记录 |
| article | `art-air-005` | 仿冒网站防范 | `https://jichangwiki.cc/articles/art-air-005/` | 首页 > 机场大全 > 品牌查找与档案阅读 > 名称别名与正确入口 > 仿冒网站防范 |
| article | `art-air-006` | 名称别名与正确入口完整说明 | `https://jichangwiki.cc/articles/art-air-006/` | 首页 > 机场大全 > 品牌查找与档案阅读 > 名称别名与正确入口 > 名称别名与正确入口完整说明 |
| cluster | `brand-profiles-and-data` | 品牌档案与资料解释 | `https://jichangwiki.cc/airports/brand-lookup/brand-profiles-and-data/` | 首页 > 机场大全 > 品牌查找与档案阅读 > 品牌档案与资料解释 |
| article | `art-air-007` | 品牌档案包含哪些字段 | `https://jichangwiki.cc/articles/art-air-007/` | 首页 > 机场大全 > 品牌查找与档案阅读 > 品牌档案与资料解释 > 品牌档案包含哪些字段 |
| article | `art-air-008` | 品牌档案资料解释方法 | `https://jichangwiki.cc/articles/art-air-008/` | 首页 > 机场大全 > 品牌查找与档案阅读 > 品牌档案与资料解释 > 品牌档案资料解释方法 |
| article | `art-air-009` | 品牌服务范围说明 | `https://jichangwiki.cc/articles/art-air-009/` | 首页 > 机场大全 > 品牌查找与档案阅读 > 品牌档案与资料解释 > 品牌服务范围说明 |
| article | `art-air-010` | 品牌客户端支持说明 | `https://jichangwiki.cc/articles/art-air-010/` | 首页 > 机场大全 > 品牌查找与档案阅读 > 品牌档案与资料解释 > 品牌客户端支持说明 |
| article | `art-air-011` | 品牌协议支持说明 | `https://jichangwiki.cc/articles/art-air-011/` | 首页 > 机场大全 > 品牌查找与档案阅读 > 品牌档案与资料解释 > 品牌协议支持说明 |
| article | `art-air-012` | 品牌档案与资料解释完整说明 | `https://jichangwiki.cc/articles/art-air-012/` | 首页 > 机场大全 > 品牌查找与档案阅读 > 品牌档案与资料解释 > 品牌档案与资料解释完整说明 |
| topic | `public-info-and-tos` | 公开资料与服务条款 | `https://jichangwiki.cc/airports/public-info-and-tos/` | 首页 > 机场大全 > 公开资料与服务条款 |
| cluster | `announcements-and-tos` | 公告支持与条款核查 | `https://jichangwiki.cc/airports/public-info-and-tos/announcements-and-tos/` | 首页 > 机场大全 > 公开资料与服务条款 > 公告支持与条款核查 |
| article | `art-air-013` | 品牌公告渠道说明 | `https://jichangwiki.cc/articles/art-air-013/` | 首页 > 机场大全 > 公开资料与服务条款 > 公告支持与条款核查 > 品牌公告渠道说明 |
| article | `art-air-014` | 品牌服务状态判断 | `https://jichangwiki.cc/articles/art-air-014/` | 首页 > 机场大全 > 公开资料与服务条款 > 公告支持与条款核查 > 品牌服务状态判断 |
| article | `art-air-015` | 品牌服务条款核查 | `https://jichangwiki.cc/articles/art-air-015/` | 首页 > 机场大全 > 公开资料与服务条款 > 公告支持与条款核查 > 品牌服务条款核查 |
| article | `art-air-016` | 品牌客服支持渠道 | `https://jichangwiki.cc/articles/art-air-016/` | 首页 > 机场大全 > 公开资料与服务条款 > 公告支持与条款核查 > 品牌客服支持渠道 |
| article | `art-air-017` | 品牌服务承诺与限制 | `https://jichangwiki.cc/articles/art-air-017/` | 首页 > 机场大全 > 公开资料与服务条款 > 公告支持与条款核查 > 品牌服务承诺与限制 |
| article | `art-air-018` | 公告支持与条款核查完整说明 | `https://jichangwiki.cc/articles/art-air-018/` | 首页 > 机场大全 > 公开资料与服务条款 > 公告支持与条款核查 > 公告支持与条款核查完整说明 |
| cluster | `plan-data-cross-check` | 套餐信息与来源交叉核对 | `https://jichangwiki.cc/airports/public-info-and-tos/plan-data-cross-check/` | 首页 > 机场大全 > 公开资料与服务条款 > 套餐信息与来源交叉核对 |
| article | `art-air-019` | 品牌套餐数据说明 | `https://jichangwiki.cc/articles/art-air-019/` | 首页 > 机场大全 > 公开资料与服务条款 > 套餐信息与来源交叉核对 > 品牌套餐数据说明 |
| article | `art-air-020` | 套餐核验日期说明 | `https://jichangwiki.cc/articles/art-air-020/` | 首页 > 机场大全 > 公开资料与服务条款 > 套餐信息与来源交叉核对 > 套餐核验日期说明 |
| article | `art-air-021` | 套餐更新记录 | `https://jichangwiki.cc/articles/art-air-021/` | 首页 > 机场大全 > 公开资料与服务条款 > 套餐信息与来源交叉核对 > 套餐更新记录 |
| article | `art-air-022` | 套餐资料交叉核对 | `https://jichangwiki.cc/articles/art-air-022/` | 首页 > 机场大全 > 公开资料与服务条款 > 套餐信息与来源交叉核对 > 套餐资料交叉核对 |
| article | `art-air-023` | 套餐来源说明 | `https://jichangwiki.cc/articles/art-air-023/` | 首页 > 机场大全 > 公开资料与服务条款 > 套餐信息与来源交叉核对 > 套餐来源说明 |
| article | `art-air-024` | 套餐信息与来源交叉核对完整说明 | `https://jichangwiki.cc/articles/art-air-024/` | 首页 > 机场大全 > 公开资料与服务条款 > 套餐信息与来源交叉核对 > 套餐信息与来源交叉核对完整说明 |
| topic | `brand-changes-and-status` | 品牌变更与服务状态 | `https://jichangwiki.cc/airports/brand-changes-and-status/` | 首页 > 机场大全 > 品牌变更与服务状态 |
| cluster | `rename-migration-adjust` | 改名迁移与服务调整 | `https://jichangwiki.cc/airports/brand-changes-and-status/rename-migration-adjust/` | 首页 > 机场大全 > 品牌变更与服务状态 > 改名迁移与服务调整 |
| article | `art-air-025` | 品牌改名记录 | `https://jichangwiki.cc/articles/art-air-025/` | 首页 > 机场大全 > 品牌变更与服务状态 > 改名迁移与服务调整 > 品牌改名记录 |
| article | `art-air-026` | 品牌服务迁移说明 | `https://jichangwiki.cc/articles/art-air-026/` | 首页 > 机场大全 > 品牌变更与服务状态 > 改名迁移与服务调整 > 品牌服务迁移说明 |
| article | `art-air-027` | 品牌服务调整记录 | `https://jichangwiki.cc/articles/art-air-027/` | 首页 > 机场大全 > 品牌变更与服务状态 > 改名迁移与服务调整 > 品牌服务调整记录 |
| article | `art-air-028` | 品牌入口更新 | `https://jichangwiki.cc/articles/art-air-028/` | 首页 > 机场大全 > 品牌变更与服务状态 > 改名迁移与服务调整 > 品牌入口更新 |
| article | `art-air-029` | 品牌服务变更影响 | `https://jichangwiki.cc/articles/art-air-029/` | 首页 > 机场大全 > 品牌变更与服务状态 > 改名迁移与服务调整 > 品牌服务变更影响 |
| article | `art-air-030` | 改名迁移与服务调整完整说明 | `https://jichangwiki.cc/articles/art-air-030/` | 首页 > 机场大全 > 品牌变更与服务状态 > 改名迁移与服务调整 > 改名迁移与服务调整完整说明 |
| cluster | `outages-and-exit-records` | 异常公告与退出信息 | `https://jichangwiki.cc/airports/brand-changes-and-status/outages-and-exit-records/` | 首页 > 机场大全 > 品牌变更与服务状态 > 异常公告与退出信息 |
| article | `art-air-031` | 品牌故障公告 | `https://jichangwiki.cc/articles/art-air-031/` | 首页 > 机场大全 > 品牌变更与服务状态 > 异常公告与退出信息 > 品牌故障公告 |
| article | `art-air-032` | 品牌服务停止说明 | `https://jichangwiki.cc/articles/art-air-032/` | 首页 > 机场大全 > 品牌变更与服务状态 > 异常公告与退出信息 > 品牌服务停止说明 |
| article | `art-air-033` | 品牌退出记录 | `https://jichangwiki.cc/articles/art-air-033/` | 首页 > 机场大全 > 品牌变更与服务状态 > 异常公告与退出信息 > 品牌退出记录 |
| article | `art-air-034` | 品牌资料纠错 | `https://jichangwiki.cc/articles/art-air-034/` | 首页 > 机场大全 > 品牌变更与服务状态 > 异常公告与退出信息 > 品牌资料纠错 |
| article | `art-air-035` | 品牌资料反馈 | `https://jichangwiki.cc/articles/art-air-035/` | 首页 > 机场大全 > 品牌变更与服务状态 > 异常公告与退出信息 > 品牌资料反馈 |
| article | `art-air-036` | 异常公告与退出信息完整说明 | `https://jichangwiki.cc/articles/art-air-036/` | 首页 > 机场大全 > 品牌变更与服务状态 > 异常公告与退出信息 > 异常公告与退出信息完整说明 |
