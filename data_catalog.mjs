// Complete data definitions for jichangwiki.cc 553 Content Nodes & 6 Brands

export const BRANDS = [
  {
    "rank": 1,
    "id": "yunjiexian",
    "name": "云界线",
    "registerUrl": "https://9625mofan01.yunjiexianaff.com/#/?code=OOYhSj0L",
    "promoCode": "yjx888",
    "since": "2024",
    "minPayment": 5.6,
    "entryPlan": "年付约5.6元/月 60GB",
    "lineType": "IEPL",
    "protocols": "VLESS",
    "isPrimaryRecommendation": true,
    "dataStatus": "vendor",
    "vendorClaims": [
      "品牌资料显示：小资首选低门槛加速服务"
    ],
    "highlights": [
      "5.6元/月低预算",
      "年付经济型"
    ]
  },
  {
    "rank": 2,
    "id": "dalaoyun",
    "name": "大佬云",
    "registerUrl": "https://mofanvip01.dalaoyunaff.com/#/?code=QT2rqp5V",
    "promoCode": "dly888",
    "since": "2024",
    "minPayment": 5.6,
    "entryPlan": "年付约5.6元/月 60GB",
    "lineType": "IEPL",
    "protocols": "VLESS",
    "isPrimaryRecommendation": false,
    "dataStatus": "vendor",
    "vendorClaims": [
      "品牌资料显示：超低预算IEPL专线节点"
    ],
    "highlights": [
      "5.6元/月极致低价",
      "60GB轻量月流量",
      "适合备用与轻度用户"
    ]
  },
  {
    "rank": 3,
    "id": "huanqiuti",
    "name": "环球梯",
    "registerUrl": "https://mofanvip01.huanqiutiaff.com/#/?code=l7oLmjVU",
    "promoCode": "HQ66",
    "since": "2024",
    "minPayment": 5.6,
    "entryPlan": "年付约5.6元/月 60GB",
    "lineType": "IEPL",
    "protocols": "VLESS",
    "isPrimaryRecommendation": false,
    "dataStatus": "vendor",
    "vendorClaims": [
      "品牌资料显示：经济型轻度专线服务"
    ],
    "highlights": [
      "5.6元/月极致低门槛",
      "轻度用户方案"
    ]
  },
  {
    "rank": 4,
    "id": "liulianyun",
    "name": "榴莲云",
    "registerUrl": "https://mofan88.liulianyunaff.com/#/?code=ETsQBSuR",
    "promoCode": "ll88",
    "since": "2024",
    "minPayment": 5.6,
    "entryPlan": "年付约5.6元/月 60GB",
    "lineType": "IEPL",
    "protocols": "VLESS",
    "isPrimaryRecommendation": false,
    "dataStatus": "vendor",
    "vendorClaims": [
      "品牌资料显示：超经济专线中继"
    ],
    "highlights": [
      "5.6元/月",
      "超轻量备选"
    ]
  },
  {
    "rank": 5,
    "id": "shandianshu",
    "name": "闪电鼠",
    "registerUrl": "https://mofanvip01.shandianshuaff.com/#/?code=a3GAQAXg",
    "promoCode": "sd88",
    "since": "2024",
    "minPayment": 5.6,
    "entryPlan": "年付约5.6元/月 60GB",
    "lineType": "IEPL",
    "protocols": "VLESS",
    "isPrimaryRecommendation": false,
    "dataStatus": "vendor",
    "vendorClaims": [
      "品牌资料显示：轻量级低资费专线服务"
    ],
    "highlights": [
      "5.6元/月极致入门",
      "60GB轻度适配"
    ]
  },
  {
    "rank": 6,
    "id": "shenxing",
    "name": "神行加速",
    "registerUrl": "https://vipmofan01.shenxingaff.com/#/?code=nn4ohwnK",
    "promoCode": "xs0077",
    "since": "2024",
    "minPayment": 14,
    "entryPlan": "年付约14元/月 120GB",
    "lineType": "IEPL",
    "protocols": "VLESS",
    "isPrimaryRecommendation": false,
    "dataStatus": "vendor",
    "vendorClaims": [
      "品牌资料显示：平价大容量IEPL专线"
    ],
    "highlights": [
      "14元/月折算",
      "120GB容量"
    ]
  }
];

export const CROSS_TOPIC_INTERLINKS = [
  {
    source: "每月预算不超过 10 元怎么选机场",
    sourceSlug: "art-cheap-001",
    target: "月付、季付和年付比较",
    targetSlug: "art-plan-001",
    reason: "统一实际付款周期，避免宣传月均价与实付金额混淆"
  },
  {
    source: "按量付费每 GB 成本计算",
    sourceSlug: "art-plan-008",
    target: "流量倍率说明",
    targetSlug: "art-plan-014",
    reason: "解释公式中的关键倍率参数，防范隐藏计费"
  },
  {
    source: "稳定机场怎么选",
    sourceSlug: "art-rec-025",
    target: "晚高峰测试方法",
    targetSlug: "art-rev-019",
    reason: "查看稳定性结论的测试采样依据与观察窗口"
  },
  {
    source: "AI API 请求超时与限流区别",
    sourceSlug: "art-ai-019",
    target: "AI 工具网络错误排查",
    targetSlug: "art-trb-033",
    reason: "进入特定工具排查流程定位问题层级"
  },
  {
    source: "电视机场接入方式",
    sourceSlug: "art-stm-031",
    target: "路由器使用前准备",
    targetSlug: "art-cli-031",
    reason: "完成家庭大屏与网络网关接入落地方案"
  },
  {
    source: "免费流量不够用",
    sourceSlug: "art-free-029",
    target: "小流量机场选型",
    targetSlug: "art-cheap-007",
    reason: "在确有付费需求时寻找低门槛替代方案"
  },
  {
    source: "AI 对话的数据可见范围",
    sourceSlug: "art-ai-034",
    target: "TLS 保护边界",
    targetSlug: "art-wik-019",
    reason: "从底层加密原理理解网络服务商的数据可见性"
  },
  {
    source: "官网更换域名",
    sourceSlug: "art-air-004",
    target: "订阅地址变更排查",
    targetSlug: "art-trb-001",
    reason: "检查入口域名变更对订阅更新与配置的影响"
  },
  {
    source: "第一次买机场怎么选",
    sourceSlug: "art-rec-001",
    target: "桌面系统客户端使用",
    targetSlug: "art-cli-001",
    reason: "完成新购后快速跳转至客户端下载与导入指南"
  },
  {
    source: "换机场前要确认什么",
    sourceSlug: "art-rec-008",
    target: "客户端配置备份与迁移",
    targetSlug: "art-cli-027",
    reason: "在更换前备份既有节点、自定义规则与路由策略"
  },
  {
    source: "主用加备用机场怎么搭配",
    sourceSlug: "art-rec-009",
    target: "偶尔使用的机场怎么选",
    targetSlug: "art-cheap-013",
    reason: "为备用节点匹配按量计费或低维护成本的轻量套餐"
  },
  {
    source: "机场到期后换一家还是续费",
    sourceSlug: "art-rec-007",
    target: "续费停止与余额处置",
    targetSlug: "art-plan-031",
    reason: "核对服务条款中关于到期未续费的账号保留与处置规则"
  },
  {
    source: "免费机场资源有哪些类型",
    sourceSlug: "art-free-001",
    target: "机场服务是什么：组成与角色",
    targetSlug: "art-wik-001",
    reason: "从节点、订阅与入口架构理解免费资源的成本与限制"
  },
  {
    source: "公开分享的免费订阅安全吗",
    sourceSlug: "art-free-004",
    target: "DNS IP与数据可见性",
    targetSlug: "art-wik-031",
    reason: "评估公开订阅中的证书伪造、DNS污染与流量嗅探风险"
  },
  {
    source: "小流量套餐的适用场景",
    sourceSlug: "art-cheap-008",
    target: "ChatGPT 网页版网络要求",
    targetSlug: "art-ai-002",
    reason: "文字对话类生产力任务与轻量小流量套餐高度契合"
  },
  {
    source: "不限时机场套餐是什么意思",
    sourceSlug: "art-plan-007",
    target: "云界线品牌档案",
    targetSlug: "brand-yunjiexian",
    reason: "查看目前主流支持永久不限时套餐的代表性品牌资料"
  },
  {
    source: "ChatGPT 用什么机场",
    sourceSlug: "art-ai-001",
    target: "原生 IP 与广播 IP",
    targetSlug: "art-wik-034",
    reason: "理解OpenAI对机房广播IP与纯净原生IP的风控差异"
  },
  {
    source: "Claude 用什么机场",
    sourceSlug: "art-ai-003",
    target: "AI 工具地区支持核对方法",
    targetSlug: "art-ai-031",
    reason: "排查因节点出口地区受限导致账号被封禁或拦截的问题"
  },
  {
    source: "Cursor 与 GitHub Copilot 网络配置",
    sourceSlug: "art-ai-014",
    target: "终端与命令行代理",
    targetSlug: "art-cli-033",
    reason: "为IDE底层终端及Git命令配置同步的代理环境变量"
  },
  {
    source: "Netflix 用什么机场",
    sourceSlug: "art-stm-001",
    target: "流媒体机场推荐大盘",
    targetSlug: "pillar-streaming",
    reason: "查看经过实测解锁Netflix全区片库的品牌与套餐汇总"
  },
  {
    source: "YouTube 用什么机场",
    sourceSlug: "art-stm-009",
    target: "吞吐与响应测量指南",
    targetSlug: "art-rev-018",
    reason: "了解4K/8K视频流对单线程突发带宽与缓存的测试指标"
  },
  {
    source: "Clash Verge Rev Windows 使用",
    sourceSlug: "art-cli-001",
    target: "TUN 模式启动失败处理",
    targetSlug: "art-trb-014",
    reason: "处理Windows系统下虚拟网卡驱动未安装或权限受限异常"
  },
  {
    source: "全部节点超时排查",
    sourceSlug: "art-trb-019",
    target: "系统代理残留清理",
    targetSlug: "art-trb-016",
    reason: "排除由于上次客户端异常退出导致的系统注册表代理死锁"
  },
  {
    source: "TCP与UDP在代理连接中有什么区别",
    sourceSlug: "art-wik-013",
    target: "QUIC与UDP是什么关系",
    targetSlug: "art-wik-014",
    reason: "进一步厘清基于UDP的现代传输协议与传统UDP应用的区别"
  }
];

export const PILLARS_CONFIG = [
  {
    id: "recommend",
    name: "机场推荐",
    slug: "recommend",
    url: "/recommend/",
    h1: "机场推荐：从使用需求到具体品牌的选购指南",
    coreQuestion: "有哪些具体机场值得考虑，为什么适合我？",
    theme: "选择服务",
    targetWords: "7,000–9,500 字",
    duty: "负责稳定性选型，评测栏目负责测试依据。每家机场展开：定位、适合与不适合、套餐、使用方式、证据、限制与建议。",
    megaTableCols: ["品牌", "定位与首选度", "最低月付", "入门套餐", "线路类型", "主流协议", "适合人群", "核心限制", "直达通道"],
    decisionLevels: 4,
    topics: [
      {
        id: "first-purchase",
        name: "首次选购与服务切换",
        slug: "first-purchase",
        url: "/recommend/first-purchase/",
        h1: "首次选购与服务切换指南：从新手决策到主备搭配",
        desc: "解决新手选购的设备与软件认知，以及老用户换机场与主备搭配的迁移成本核算。",
        clusters: [
          {
            id: "beginner-decision",
            name: "新手选购决策",
            slug: "beginner-decision",
            url: "/recommend/first-purchase/beginner-decision/",
            h1: "新手选购决策：设备匹配、套餐筛选与试用落地",
            coreQuestion: "第一次买机场怎么选？如何从设备、用途到套餐建立完整决策链条？",
            articles: [
              { id: "art-rec-001", title: "第一次买机场怎么选？从设备、用途到套餐的完整决策流程" },
              { id: "art-rec-002", title: "机场推荐榜单怎么看？识别广告排序、测试依据与适用人群" },
              { id: "art-rec-003", title: "只有手机的新手适合哪类机场？自有客户端与通用客户端方案比较" },
              { id: "art-rec-004", title: "已有代理客户端还需要买什么？机场订阅与软件授权的区别" },
              { id: "art-rec-005", title: "机场购买前应该问客服哪些问题？用需求清单筛掉不合适的服务" },
              { id: "art-rec-006", title: "机场试用满意后怎么买正式套餐？从体验结果到付款周期的选择" }
            ]
          },
          {
            id: "switch-and-combo",
            name: "换机场与组合使用",
            slug: "switch-and-combo",
            url: "/recommend/first-purchase/switch-and-combo/",
            h1: "换机场与组合使用：续费决策、迁移清单与主备方案",
            coreQuestion: "机场到期后换一家还是续费？主备双机场如何搭建才能实现故障真正独立？",
            articles: [
              { id: "art-rec-007", title: "机场到期后换一家还是续费？迁移成本、使用记录与费用一起比较" },
              { id: "art-rec-008", title: "更换机场前要确认什么？设备、协议兼容与订阅迁移检查清单" },
              { id: "art-rec-009", title: "主用加备用机场怎么搭配？故障独立性、成本与管理难度比较" },
              { id: "art-rec-010", title: "什么情况下两个机场同时使用更合适？多设备与工作场景分析" },
              { id: "art-rec-011", title: "从便宜机场升级到中端服务怎么选？预算与体验变化评估" },
              { id: "art-rec-012", title: "一个账号多台设备使用时应该注意哪些限制？并发连接与规则检查" }
            ]
          }
        ]
      },
      {
        id: "conditions-and-devices",
        name: "使用条件与设备需求",
        slug: "conditions-and-devices",
        url: "/recommend/conditions-and-devices/",
        h1: "使用条件与设备需求：移动漫游、多端协作与合规核对",
        desc: "覆盖差旅出差、移动热点切换以及多设备家庭、公司与学校网络下的限制与选型。",
        clusters: [
          {
            id: "mobile-and-travel",
            name: "移动网络与外出使用",
            slug: "mobile-and-travel",
            url: "/recommend/conditions-and-devices/mobile-and-travel/",
            h1: "移动网络与外出使用：网络切换、差旅酒店与热点共享",
            coreQuestion: "外出移动办公或差旅场景下，怎样选机场才能保证切网不掉线？",
            articles: [
              { id: "art-rec-013", title: "移动网络环境下机场怎么选？4G、5G 切换与连接稳定性比较" },
              { id: "art-rec-014", title: "经常出差、旅行用什么机场？酒店网络与临时场景选择" },
              { id: "art-rec-015", title: "公共场所 Wi-Fi 使用机场应该注意什么？安全与连接检查" },
              { id: "art-rec-016", title: "手机流量不足时怎样调整机场套餐？流量消耗与备用方案" },
              { id: "art-rec-017", title: "经常切换网络环境时怎样减少掉线？客户端与节点策略" },
              { id: "art-rec-018", title: "手机热点共享给其他设备使用机场，会不会影响体验？" }
            ]
          },
          {
            id: "multi-device-and-sharing",
            name: "多设备与协作约束",
            slug: "multi-device-and-sharing",
            url: "/recommend/conditions-and-devices/multi-device-and-sharing/",
            h1: "多设备与协作约束：家庭共享、多端同用与合规边界",
            coreQuestion: "家庭或个人拥有多台设备时，如何平衡设备连接数限制与管理成本？",
            articles: [
              { id: "art-rec-019", title: "家庭多设备使用机场怎么选？连接限制与管理成本分析" },
              { id: "art-rec-020", title: "手机和电脑一起用机场怎么选？设备规则与跨平台支持" },
              { id: "art-rec-021", title: "学校或公司电脑能否使用个人机场？合规与终端权限核对" },
              { id: "art-rec-022", title: "平板电脑使用机场需要单独订阅吗？设备限制与配置说明" },
              { id: "art-rec-023", title: "电视和投屏使用机场需要额外配置吗？家庭网络方案" },
              { id: "art-rec-024", title: "多设备场景下如何管理订阅与凭据？安全与协作约束" }
            ]
          }
        ]
      },
      {
        id: "reliability-and-support",
        name: "可靠性与服务保障",
        slug: "reliability-and-support",
        url: "/recommend/reliability-and-support/",
        h1: "可靠性与服务保障：晚高峰验证、售后响应与购买约束",
        desc: "聚焦主力服务的连续可用性指标、退款与工单承诺、运营年限与长期信誉核实。",
        clusters: [
          {
            id: "primary-and-stability",
            name: "主力服务与稳定性选择",
            slug: "primary-and-stability",
            url: "/recommend/reliability-and-support/primary-and-stability/",
            h1: "主力服务与稳定性选择：晚高峰表现、工单响应与换用信号",
            coreQuestion: "作为主力工具使用，稳定机场应该看重哪些证据？何时该果断换掉？",
            articles: [
              { id: "art-rec-025", title: "稳定机场怎么选？晚高峰、连续使用与故障恢复证据对比" },
              { id: "art-rec-026", title: "长时间在线使用机场应该注意什么？连接中断与重连取舍" },
              { id: "art-rec-027", title: "机场售后支持怎么比较？工单渠道、响应记录与自助排障能力" },
              { id: "art-rec-028", title: "机场的退款条款应该怎么看？申请条件、例外情况与证据留存" },
              { id: "art-rec-029", title: "如何评估机场的长期可用性？观察方法与判断依据" },
              { id: "art-rec-030", title: "什么情况下应该换掉主力机场？关键信号与决策流程" }
            ]
          },
          {
            id: "support-and-constraints",
            name: "支持能力与购买约束",
            slug: "support-and-constraints",
            url: "/recommend/reliability-and-support/support-and-constraints/",
            h1: "支持能力与购买约束：支付渠道、计费周期与真实运营资历",
            coreQuestion: "下单前如何核验支付渠道安全、周期权衡以及品牌实际运营时间？",
            articles: [
              { id: "art-rec-031", title: "机场的隐私说明怎么看？日志声明、数据范围与无法验证的部分" },
              { id: "art-rec-032", title: "购买机场前如何确认支付方式？支付宝、USDT 与其他方式" },
              { id: "art-rec-033", title: "机场的付款周期应该怎么选？月付、季付与年付权衡" },
              { id: "art-rec-034", title: "机场的流量重置与续费规则应该怎么看？" },
              { id: "art-rec-035", title: "机场的联系渠道与响应方式应该怎么比较？" },
              { id: "art-rec-036", title: "机场的品牌与运营时长应该怎样核实？" }
            ]
          }
        ]
      }
    ]
  },

  {
    id: "free",
    name: "免费机场",
    slug: "free",
    url: "/free/",
    h1: "免费机场与试用指南：资源条件、领取流程和使用边界",
    coreQuestion: "什么确实免费，如何领取，有什么限制？",
    theme: "选择服务",
    targetWords: "7,000–9,500 字",
    duty: "必须区分：软件免费、服务免费、赠送流量、限时试用和低价付费。解决领取资格与试用验收，技术故障归网络排障。",
    megaTableCols: ["项目名称", "资源性质", "领取门槛", "免费额度", "有效周期", "安全性与风险", "适用场景", "替代建议"],
    decisionLevels: 4,
    topics: [
      {
        id: "resource-and-eligibility",
        name: "免费资源与领取条件",
        slug: "resource-and-eligibility",
        url: "/free/resource-and-eligibility/",
        h1: "免费资源与领取条件：公益识别、开源项目与领取资格",
        desc: "梳理非营利公益项目、开源项目及商业免费配额的获取要求与资质门槛。",
        clusters: [
          {
            id: "public-welfare-recognition",
            name: "公益资源识别",
            slug: "public-welfare-recognition",
            url: "/free/resource-and-eligibility/public-welfare-recognition/",
            h1: "公益资源识别：非营利项目、维护状态与安全风险边界",
            coreQuestion: "网络上公开分享的免费节点能长期用吗？其安全与隐私风险在哪？",
            articles: [
              { id: "art-free-001", title: "免费机场资源有哪些类型？公益、开源与商业免费区分" },
              { id: "art-free-002", title: "公益免费机场项目是什么？非营利模式的可持续性判断" },
              { id: "art-free-003", title: "开源项目提供的免费服务能长期用吗？维护状态核对" },
              { id: "art-free-004", title: "公开分享的免费订阅安全吗？来源、隐私与风险边界" },
              { id: "art-free-005", title: "免费资源能不能用于日常使用？轻度使用与正常使用的差距" },
              { id: "art-free-006", title: "免费资源怎么筛选更稳妥？来源、条件与核验清单" }
            ]
          },
          {
            id: "quota-and-eligibility",
            name: "领取资格与免费额度",
            slug: "quota-and-eligibility",
            url: "/free/resource-and-eligibility/quota-and-eligibility/",
            h1: "领取资格与免费额度：注册流程、支付绑定与失败排查",
            coreQuestion: "免费额度领取过程中遇到报错怎么办？是否需要预授权或绑定支付？",
            articles: [
              { id: "art-free-007", title: "免费机场资源怎么领取？常见注册流程与条件说明" },
              { id: "art-free-008", title: "免费资源领取是否需要绑定支付方式？" },
              { id: "art-free-009", title: "免费资源的流量与时长额度说明" },
              { id: "art-free-010", title: "免费资源领取失败的常见原因与处理" },
              { id: "art-free-011", title: "免费资源领取前的准备工作：账号、支付与设备清单" },
              { id: "art-free-012", title: "免费资源的领取频率与账号条件" }
            ]
          }
        ]
      },
      {
        id: "trial-and-verification",
        name: "机场试用与体验验收",
        slug: "trial-and-verification",
        url: "/free/trial-and-verification/",
        h1: "机场试用与体验验收：试用匹配、验收方法与转付费",
        desc: "针对商业机场提供的限时或限量试用，指导如何高效测试关键任务并完成购买决策。",
        clusters: [
          {
            id: "trial-selection",
            name: "试用方案选择",
            slug: "trial-selection",
            url: "/free/trial-and-verification/trial-selection/",
            h1: "试用方案选择：时长配额、扣费风险与功能开放范围",
            coreQuestion: "如何选择具有真实测试价值的试用方案？如何防范隐形续费？",
            articles: [
              { id: "art-free-013", title: "机场免费试用怎么选？时长、流量与任务匹配" },
              { id: "art-free-014", title: "试用是否需要绑定支付方式？预授权、扣费与取消说明" },
              { id: "art-free-015", title: "试用账号的资格限制：新用户、首购与账号条件" },
              { id: "art-free-016", title: "试用期时长与流量说明：不同服务的差异" },
              { id: "art-free-017", title: "试用期间的服务限制与功能开放范围" },
              { id: "art-free-018", title: "试用方案选择完整清单" }
            ]
          },
          {
            id: "trial-acceptance",
            name: "试用结果与购买验收",
            slug: "trial-acceptance",
            url: "/free/trial-and-verification/trial-acceptance/",
            h1: "试用结果与购买验收：测试指标、波动记录与付款转换",
            coreQuestion: "试用期间该测哪些核心指标？何时能确定可以正式付款？",
            articles: [
              { id: "art-free-019", title: "试用期应该测试哪些项目？连接、速度、AI 与视频" },
              { id: "art-free-020", title: "试用期的连接验证方法：从订阅导入到正常使用" },
              { id: "art-free-021", title: "试用期如何观察服务波动：连续记录与对照方法" },
              { id: "art-free-022", title: "试用结束前的决策框架：续用、换用或退出" },
              { id: "art-free-023", title: "试用转付费的注意事项：套餐切换与费用核对" },
              { id: "art-free-024", title: "试用满意后如何正式购买：流程与凭证留存" }
            ]
          }
        ]
      },
      {
        id: "exit-and-alternatives",
        name: "免费服务退出与替代",
        slug: "exit-and-alternatives",
        url: "/free/exit-and-alternatives/",
        h1: "免费服务退出与替代：失效判断、平价替代与凭证清理",
        desc: "指导免费节点失效时的替换方案，以及注销账号、清除残留代理规则的安全操作。",
        clusters: [
          {
            id: "failure-and-alternatives",
            name: "失效判断与替代路径",
            slug: "failure-and-alternatives",
            url: "/free/exit-and-alternatives/failure-and-alternatives/",
            h1: "失效判断与替代路径：节点状态、平价付费与风险规避",
            coreQuestion: "免费服务完全失效时，如何以最低成本过渡到低价稳定的替代方案？",
            articles: [
              { id: "art-free-025", title: "免费资源失效怎么判断？状态核对与更新记录" },
              { id: "art-free-026", title: "免费资源失效后的替代方案：付费、低价与自建" },
              { id: "art-free-027", title: "免费资源与低价付费的差别：成本、服务与责任范围" },
              { id: "art-free-028", title: "什么情况下免费资源完全不可用？风险场景与规避" },
              { id: "art-free-029", title: "从免费过渡到付费的判断节点" },
              { id: "art-free-030", title: "免费资源的退出策略与替代路径完整说明" }
            ]
          },
          {
            id: "privacy-and-cleanup",
            name: "隐私检查与配置清理",
            slug: "privacy-and-cleanup",
            url: "/free/exit-and-alternatives/privacy-and-cleanup/",
            h1: "隐私检查与配置清理：数据可见范围、凭据注销与配置归零",
            coreQuestion: "弃用免费节点后，如何确保客户端配置清理干净、无数据泄露？",
            articles: [
              { id: "art-free-031", title: "免费资源的隐私条款应该怎么读？" },
              { id: "art-free-032", title: "免费资源使用中的数据可见范围说明" },
              { id: "art-free-033", title: "免费资源退出前的数据清理流程" },
              { id: "art-free-034", title: "免费资源账号注销与凭据处理" },
              { id: "art-free-035", title: "免费资源使用的安全边界" },
              { id: "art-free-036", title: "免费资源隐私检查与清理清单" }
            ]
          }
        ]
      }
    ]
  },

  {
    id: "cheap",
    name: "便宜机场",
    slug: "cheap",
    url: "/cheap/",
    h1: "便宜机场推荐：低预算、小流量与长期成本选型指南",
    coreQuestion: "在我的预算和使用频率下，哪些机场更合适？",
    theme: "选择服务",
    targetWords: "7,000–9,500 字",
    duty: "负责筛选候选品牌；套餐对比负责解释计算方法。不批量建立一元、二元等机械重复页。",
    megaTableCols: ["品牌", "档位与最低月付", "月付流量", "折算每GB单价", "线路类型", "倍率机制", "适合场景", "主要风险与限制"],
    decisionLevels: 4,
    topics: [
      {
        id: "fixed-budget",
        name: "固定预算与入门套餐",
        slug: "fixed-budget",
        url: "/cheap/fixed-budget/",
        h1: "固定预算与入门套餐：5元/7元/10元档位与小流量价值",
        desc: "盘点5元档、7元档、10元档的真实月付与年付折算，分析50GB以下轻量套餐性价比。",
        clusters: [
          {
            id: "low-monthly-fee",
            name: "低月付选型",
            slug: "low-monthly-fee",
            url: "/cheap/fixed-budget/low-monthly-fee/",
            h1: "低月付选型：5元/7元/10元各档位实际费用与品质权衡",
            coreQuestion: "月预算在5–10元之间，能买到哪些不跑路的稳定专线机场？",
            articles: [
              { id: "art-cheap-001", title: "5 元档机场有哪些？实际月付金额与流量说明" },
              { id: "art-cheap-002", title: "7 元档机场怎么选？低预算下的服务质量核对" },
              { id: "art-cheap-003", title: "10 元档机场推荐：入门级月付对比" },
              { id: "art-cheap-004", title: "低预算机场的付款周期怎么选？" },
              { id: "art-cheap-005", title: "低预算机场的入门套餐比较" },
              { id: "art-cheap-006", title: "低预算机场选择清单" }
            ]
          },
          {
            id: "low-traffic-value",
            name: "小流量价值判断",
            slug: "low-traffic-value",
            url: "/cheap/fixed-budget/low-traffic-value/",
            h1: "小流量价值判断：50GB以下额度适用场景与计算方法",
            coreQuestion: "每月用量不到50GB，买小流量套餐划算还是按量付费划算？",
            articles: [
              { id: "art-cheap-007", title: "小流量月付机场有哪些？50GB 以下的套餐对比" },
              { id: "art-cheap-008", title: "小流量套餐的适用场景：轻度使用与备用" },
              { id: "art-cheap-009", title: "小流量套餐的流量计算方式" },
              { id: "art-cheap-010", title: "小流量套餐的设备与客户端支持" },
              { id: "art-cheap-011", title: "小流量套餐的续费与升级" },
              { id: "art-cheap-012", title: "小流量套餐价值判断清单" }
            ]
          }
        ]
      },
      {
        id: "low-frequency",
        name: "低频使用与备用预算",
        slug: "low-frequency",
        url: "/cheap/low-frequency/",
        h1: "低频使用与备用预算：间歇使用策略与主备预算分配",
        desc: "解决偶尔查资料、差旅备用等低频场景下的支出控制，规划主力与备用成本组合。",
        clusters: [
          {
            id: "intermittent-use",
            name: "间歇使用选型",
            slug: "intermittent-use",
            url: "/cheap/low-frequency/intermittent-use/",
            h1: "间歇使用选型：按量付费与周期月付的盈亏分界",
            coreQuestion: "一年只用几次或每月仅轻度访问，如何避免为闲置周期买单？",
            articles: [
              { id: "art-cheap-013", title: "偶尔使用的机场怎么选？按量付费与月付对比" },
              { id: "art-cheap-014", title: "流量包与月付哪个更适合低频使用？" },
              { id: "art-cheap-015", title: "备用服务需要多少预算？成本控制方案" },
              { id: "art-cheap-016", title: "低频使用者的流量消耗估算方法" },
              { id: "art-cheap-017", title: "间歇使用场景的付款周期选择" },
              { id: "art-cheap-018", title: "间歇使用选型完整说明" }
            ]
          },
          {
            id: "backup-budget-allocation",
            name: "主备组合的预算分配",
            slug: "backup-budget-allocation",
            url: "/cheap/low-frequency/backup-budget-allocation/",
            h1: "主备组合的预算分配：双机场流量搭配与性价比模型",
            coreQuestion: "如何用总计不到25元的月均预算，配齐一套主力专线加高可用备用方案？",
            articles: [
              { id: "art-cheap-019", title: "主力机场与备用机场的预算怎么分配？" },
              { id: "art-cheap-020", title: "主备组合的流量与套餐配置" },
              { id: "art-cheap-021", title: "主备服务的切换与验证" },
              { id: "art-cheap-022", title: "主备组合的账号与凭据管理" },
              { id: "art-cheap-023", title: "主备组合的成本收益分析" },
              { id: "art-cheap-024", title: "主备组合预算分配完整说明" }
            ]
          }
        ]
      },
      {
        id: "long-term-cost",
        name: "长期成本与性价比",
        slug: "long-term-cost",
        url: "/cheap/long-term-cost/",
        h1: "长期成本与性价比：每GB实付、年付折算与预付风险",
        desc: "拆解倍率计费陷阱，指导年付实际支出核算与价格上涨风险评估。",
        clusters: [
          {
            id: "cost-effectiveness-eval",
            name: "综合性价比评估",
            slug: "cost-effectiveness-eval",
            url: "/cheap/long-term-cost/cost-effectiveness-eval/",
            h1: "综合性价比评估：真实单价核算、倍率陷阱与附加成本",
            coreQuestion: "宣称每GB只要一毛钱的机场，实际跑起来为什么扣费飞快？",
            articles: [
              { id: "art-cheap-025", title: "每 GB 成本怎么算？单位与口径核对" },
              { id: "art-cheap-026", title: "月均费用怎么算？年付折算与实付对比" },
              { id: "art-cheap-027", title: "流量倍率对成本的影响" },
              { id: "art-cheap-028", title: "附加费用与升级成本" },
              { id: "art-cheap-029", title: "续费价格上涨的处理" },
              { id: "art-cheap-030", title: "性价比评估完整方法" }
            ]
          },
          {
            id: "prepaid-budget",
            name: "长期预付与持续预算",
            slug: "prepaid-budget",
            url: "/cheap/long-term-cost/prepaid-budget/",
            h1: "长期预付与持续预算：年付折合、首购续费差价与跑路风险防范",
            coreQuestion: "年付打5折诱惑极大，普通用户在什么条件下才能放心买年付？",
            articles: [
              { id: "art-cheap-031", title: "年付机场有哪些？折合月费的正确算法" },
              { id: "art-cheap-032", title: "年付实际总支出计算：含首购与续费" },
              { id: "art-cheap-033", title: "年付与月付的成本差异" },
              { id: "art-cheap-034", title: "年付折扣的适用条件与限制" },
              { id: "art-cheap-035", title: "年付套餐的风险评估" },
              { id: "art-cheap-036", title: "长期预付与持续预算完整说明" }
            ]
          }
        ]
      }
    ]
  },

  {
    id: "plans",
    name: "套餐对比",
    slug: "plans",
    url: "/plans/",
    h1: "机场套餐对比：付款周期、流量计量与总成本计算",
    coreQuestion: "这些套餐的价格和规则，应该怎样放在同一个口径下比较？",
    theme: "比较购买条件",
    targetWords: "7,000–9,500 字",
    duty: "比较单位是具体套餐，而不是只列品牌最低价。横向打通周期、倍率、有效期与升降级退款规则。",
    megaTableCols: ["套餐全称", "所属品牌", "实际付款金额", "计费周期", "流量额度", "流量重置方式", "倍率区间", "设备并发限制", "核验状态"],
    decisionLevels: 4,
    topics: [
      {
        id: "billing-cycles",
        name: "付款周期与流量包",
        slug: "billing-cycles",
        url: "/plans/billing-cycles/",
        h1: "付款周期与流量包：月付季付年付与不限时按量规则",
        desc: "比较各计费周期的灵活性与实际总额，解析不限时流量包与账户有效期的法律约束。",
        clusters: [
          {
            id: "cycle-comparison",
            name: "月付季付与年付",
            slug: "cycle-comparison",
            url: "/plans/billing-cycles/cycle-comparison/",
            h1: "月付季付与年付：支出模型、周期灵活性与匹配原则",
            coreQuestion: "月付、季付、年付该怎么比？怎样平衡资金占用与折扣力度？",
            articles: [
              { id: "art-plan-001", title: "月付、季付、年付的对比方法" },
              { id: "art-plan-002", title: "不同付款周期的总支出计算" },
              { id: "art-plan-003", title: "付款周期与使用频率匹配" },
              { id: "art-plan-004", title: "付款周期与灵活性的取舍" },
              { id: "art-plan-005", title: "付款周期选择决策框架" },
              { id: "art-plan-006", title: "月付、季付与年付完整对比" }
            ]
          },
          {
            id: "non-expiring-and-metered",
            name: "不限时与按量规则",
            slug: "non-expiring-and-metered",
            url: "/plans/billing-cycles/non-expiring-and-metered/",
            h1: "不限时与按量规则：流量与账户有效期分离、叠加与补购",
            coreQuestion: "所谓不限时流量包真的永远不过期吗？多个流量包叠加后如何扣费？",
            articles: [
              { id: "art-plan-007", title: "不限时机场套餐是什么意思？流量有效期与账户有效期需要分开看" },
              { id: "art-plan-008", title: "按量付费机场怎样计算每GB成本？加入倍率与附加费用的比较方法" },
              { id: "art-plan-009", title: "不限时流量包与月付套餐的盈亏平衡点怎么算？" },
              { id: "art-plan-010", title: "多个不限时流量包叠加后先扣哪一份？购买前核对消耗顺序" },
              { id: "art-plan-011", title: "机场流量包有到期日还算不限时吗？识别宣传名称与实际规则" },
              { id: "art-plan-012", title: "流量包用完后补购还是改月付？根据后续用量重新计算" }
            ]
          }
        ]
      },
      {
        id: "metering-and-limits",
        name: "流量计量与使用限制",
        slug: "metering-and-limits",
        url: "/plans/metering-and-limits/",
        h1: "流量计量与使用限制：倍率机制、重置周期与并发限制",
        desc: "详细核对GB与GiB口径、单向与双向扣费、设备连接上限与限速规则。",
        clusters: [
          {
            id: "rate-multiplier-and-units",
            name: "额度单位与流量倍率",
            slug: "rate-multiplier-and-units",
            url: "/plans/metering-and-limits/rate-multiplier-and-units/",
            h1: "额度单位与流量倍率：上下行计费、重置日与耗尽熔断",
            coreQuestion: "为什么看了一个10GB视频却扣了30GB流量？如何核验节点倍率？",
            articles: [
              { id: "art-plan-013", title: "流量计量口径说明：原始单位与统计方式" },
              { id: "art-plan-014", title: "流量倍率的应用与影响" },
              { id: "art-plan-015", title: "上下行计费的差异" },
              { id: "art-plan-016", title: "流量重置周期的说明" },
              { id: "art-plan-017", title: "流量耗尽后的处理规则" },
              { id: "art-plan-018", title: "额度单位与流量倍率完整对比" }
            ]
          },
          {
            id: "speed-limit-concurrency",
            name: "限速并发与设备规则",
            slug: "speed-limit-concurrency",
            url: "/plans/metering-and-limits/speed-limit-concurrency/",
            h1: "限速并发与设备规则：连接数、带宽峰值与多端限制",
            coreQuestion: "套餐标明不限设备，为什么宿舍多几个人连就频繁断线？",
            articles: [
              { id: "art-plan-019", title: "客户端兼容性对比" },
              { id: "art-plan-020", title: "协议支持对比" },
              { id: "art-plan-021", title: "设备数量限制对比" },
              { id: "art-plan-022", title: "并发连接限制对比" },
              { id: "art-plan-023", title: "附加功能对比" },
              { id: "art-plan-024", title: "限速并发与设备规则完整说明" }
            ]
          }
        ]
      },
      {
        id: "plan-management",
        name: "套餐变更与权益管理",
        slug: "plan-management",
        url: "/plans/plan-management/",
        h1: "套餐变更与权益管理：补差价升级、续费及余额处置",
        desc: "规范升级降级折算方法、未到期退款申请与废弃账号余额处置流程。",
        clusters: [
          {
            id: "upgrade-downgrade-diff",
            name: "升级降级与补差价",
            slug: "upgrade-downgrade-diff",
            url: "/plans/plan-management/upgrade-downgrade-diff/",
            h1: "升级降级与补差价：生效时间、折算规则与流量重置",
            coreQuestion: "月中流量不够用了，补差价升级套餐是立即生效还是下月生效？",
            articles: [
              { id: "art-plan-025", title: "套餐升级方法与注意事项" },
              { id: "art-plan-026", title: "套餐降级方法与限制" },
              { id: "art-plan-027", title: "升级降级的补差价计算" },
              { id: "art-plan-028", title: "套餐变更的生效时间" },
              { id: "art-plan-029", title: "套餐变更的影响范围" },
              { id: "art-plan-030", title: "升级降级完整说明" }
            ]
          },
          {
            id: "renewal-stop-balance",
            name: "续费停止与余额处置",
            slug: "renewal-stop-balance",
            url: "/plans/plan-management/renewal-stop-balance/",
            h1: "续费停止与余额处置：到期停机、退款核验与剩余资产清算",
            coreQuestion: "不再使用该机场后，账户里的充值余额能不能原路提现退款？",
            articles: [
              { id: "art-plan-031", title: "套餐续费方法" },
              { id: "art-plan-032", title: "套餐停止使用流程" },
              { id: "art-plan-033", title: "余额与流量处置规则" },
              { id: "art-plan-034", title: "退款政策核对" },
              { id: "art-plan-035", title: "续费与停止的影响说明" },
              { id: "art-plan-036", title: "续费停止与余额处置完整说明" }
            ]
          }
        ]
      }
    ]
  },

  {
    id: "reviews",
    name: "机场评测",
    slug: "reviews",
    url: "/reviews/",
    h1: "机场评测与测速：测试方法、稳定性证据和场景验收",
    coreQuestion: "推荐结论依据什么，测试结果能说明什么、不能说明什么？",
    theme: "核对品牌与证据",
    targetWords: "7,000–9,500 字",
    duty: "负责测试依据，推荐栏目负责稳定性选型。区分测试环境、端点、单多线程、中位数与P95，不把短期观测外推全年。",
    megaTableCols: ["测试编号", "评测品牌", "测试项目", "实测吞吐", "平均延迟", "丢包率(高峰/平峰)", "测试端点", "测试环境与版本", "证据状态"],
    decisionLevels: 4,
    topics: [
      {
        id: "test-methodology",
        name: "测试环境与方法",
        slug: "test-methodology",
        url: "/reviews/test-methodology/",
        h1: "测试环境与方法：基线控制、测试工具与可复现统计",
        desc: "公开软硬件测试环境、端点配置、采样样本量与定期复测修正准则。",
        clusters: [
          {
            id: "env-control-and-baseline",
            name: "环境控制与基线",
            slug: "env-control-and-baseline",
            url: "/reviews/test-methodology/env-control-and-baseline/",
            h1: "环境控制与基线：测试硬件、本地网络、客户端版本与对齐基准",
            coreQuestion: "为什么不同人在同一家机场测出来的速度天差地别？基线如何控制？",
            articles: [
              { id: "art-rev-001", title: "机场测试环境说明：设备、网络、客户端与端点" },
              { id: "art-rev-002", title: "测试基线与对比说明" },
              { id: "art-rev-003", title: "测试条件的可重复性核对" },
              { id: "art-rev-004", title: "测试工具与版本说明" },
              { id: "art-rev-005", title: "测试环境记录方法" },
              { id: "art-rev-006", title: "环境控制与基线完整说明" }
            ]
          },
          {
            id: "sampling-and-recheck",
            name: "采样统计与结果复核",
            slug: "sampling-and-recheck",
            url: "/reviews/test-methodology/sampling-and-recheck/",
            h1: "采样统计与结果复核：采样频率、中位数与P95指标与复测机制",
            coreQuestion: "为什么测速不能看单次峰值截图？为什么中位数比平均数更有参考价值？",
            articles: [
              { id: "art-rev-007", title: "采样频率与样本量" },
              { id: "art-rev-008", title: "延迟中位数与 P95 的区别" },
              { id: "art-rev-009", title: "测试结果的统计口径" },
              { id: "art-rev-010", title: "复测频率与结论更新" },
              { id: "art-rev-011", title: "复测结果不一致时的处理" },
              { id: "art-rev-012", title: "采样统计与结果复核完整说明" }
            ]
          }
        ]
      },
      {
        id: "speed-and-stability",
        name: "速度延迟与持续稳定",
        slug: "speed-and-stability",
        url: "/reviews/speed-and-stability/",
        h1: "速度延迟与持续稳定：吞吐测量、高峰波动与中断记录",
        desc: "记录单线程与多线程吞吐、晚20:00–23:00高峰丢包与连接中断恢复时长。",
        clusters: [
          {
            id: "throughput-and-latency",
            name: "吞吐与响应测量",
            slug: "throughput-and-latency",
            url: "/reviews/speed-and-stability/throughput-and-latency/",
            h1: "吞吐与响应测量：单线程多线程测速、端点选择与持续速率",
            coreQuestion: "Speedtest跑满千兆，为什么实际看网页依然转圈？怎样科学测量吞吐？",
            articles: [
              { id: "art-rev-013", title: "机场下载速度测试方法：单位与方向" },
              { id: "art-rev-014", title: "单线程与多线程测速的区别" },
              { id: "art-rev-015", title: "测速端点选择与影响" },
              { id: "art-rev-016", title: "峰值速度与持续速度的区别" },
              { id: "art-rev-017", title: "测速结果的解读与局限" },
              { id: "art-rev-018", title: "吞吐与响应测量完整指南" }
            ]
          },
          {
            id: "peak-fluctuation-outage",
            name: "高峰波动与中断记录",
            slug: "peak-fluctuation-outage",
            url: "/reviews/speed-and-stability/peak-fluctuation-outage/",
            h1: "高峰波动与中断记录：晚高峰成功率、断流频率与故障恢复窗口",
            coreQuestion: "平时很好用一到晚上就断流？如何通过连续观测记录量化高峰可用性？",
            articles: [
              { id: "art-rev-019", title: "机场可用性如何测量：成功标准与观察窗口" },
              { id: "art-rev-020", title: "连接成功率与失败次数的统计方法" },
              { id: "art-rev-021", title: "断连与重连的观察记录" },
              { id: "art-rev-022", title: "恢复时间的测量方法" },
              { id: "art-rev-023", title: "短期观测不外推全年：观察范围说明" },
              { id: "art-rev-024", title: "高峰波动与中断记录完整说明" }
            ]
          }
        ]
      },
      {
        id: "real-scenario-verification",
        name: "真实应用场景核验",
        slug: "real-scenario-verification",
        url: "/reviews/real-scenario-verification/",
        h1: "真实应用场景核验：AI生产力、大文件传输与高码率视频播放",
        desc: "超越单纯合成测试，针对ChatGPT、Claude长文本生成及YouTube 4K连续播放实测验收。",
        clusters: [
          {
            id: "ai-verification-method",
            name: "AI能力验证方法",
            slug: "ai-verification-method",
            url: "/reviews/real-scenario-verification/ai-verification-method/",
            h1: "AI能力验证方法：对话流式传输、API长连接与编程插件实测",
            coreQuestion: "怎样检验一个机场节点是否真正稳定支持AI对话、长流式输出与API调用？",
            articles: [
              { id: "art-rev-025", title: "网页浏览任务测试方法" },
              { id: "art-rev-026", title: "文件传输任务测试方法" },
              { id: "art-rev-027", title: "AI 工具任务测试方法" },
              { id: "art-rev-028", title: "AI 编程连接测试方法" },
              { id: "art-rev-029", title: "多任务并行测试方法" },
              { id: "art-rev-030", title: "AI能力验证方法完整说明" }
            ]
          },
          {
            id: "video-verification-method",
            name: "视频播放验证方法",
            slug: "video-verification-method",
            url: "/reviews/real-scenario-verification/video-verification-method/",
            h1: "视频播放验证方法：4K缓冲时间、掉帧率统计与流媒体风控核对",
            coreQuestion: "如何验证机场看4K视频不卡顿？缓冲时间与加载断点如何记录？",
            articles: [
              { id: "art-rev-031", title: "视频播放任务测试方法" },
              { id: "art-rev-032", title: "4K 播放的网络要求" },
              { id: "art-rev-033", title: "视频画质的判断方法" },
              { id: "art-rev-034", title: "卡顿排查方法" },
              { id: "art-rev-035", title: "视频观看体验的验证" },
              { id: "art-rev-036", title: "视频播放验证方法完整说明" }
            ]
          }
        ]
      }
    ]
  },

  {
    id: "coupons",
    name: "机场优惠码",
    slug: "coupons",
    url: "/coupons/",
    h1: "机场优惠码：真实代码、适用条件与折后费用核算",
    coreQuestion: "哪些代码适用，优惠后实际支付多少？",
    theme: "比较购买条件",
    targetWords: "7,000–9,500 字",
    duty: "严格围绕优惠码核销，不扩充为杂乱活动新闻。提供真实代码、适用范围、核销限制与到手实付核算。",
    megaTableCols: ["品牌", "优惠代码", "折扣力度", "适用套餐", "新老用户资格", "最低消费门槛", "有效期状态", "最后核验时间", "直达通道"],
    decisionLevels: 4,
    topics: [
      {
        id: "coupon-verification",
        name: "优惠查找与资格核对",
        slug: "coupon-verification",
        url: "/coupons/coupon-verification/",
        h1: "优惠查找与资格核对：代码来源、真实性核验与用户资格",
        desc: "核查公开促销代码与专属内部码的真伪，明确首购限制与续费使用条件。",
        clusters: [
          {
            id: "code-source-and-trust",
            name: "代码来源与可信核验",
            slug: "code-source-and-trust",
            url: "/coupons/coupon-verification/code-source-and-trust/",
            h1: "代码来源与可信核验：官方公告、合作渠道与防失效筛查",
            coreQuestion: "网络上搜索出来的机场优惠码多数失效？如何高效获取官方可用代码？",
            articles: [
              { id: "art-cpo-001", title: "优惠码来源说明" },
              { id: "art-cpo-002", title: "优惠码真实性判断" },
              { id: "art-cpo-003", title: "优惠码核验方法" },
              { id: "art-cpo-004", title: "优惠码失效记录" },
              { id: "art-cpo-005", title: "优惠码常见问题" },
              { id: "art-cpo-006", title: "代码来源与可信核验完整说明" }
            ]
          },
          {
            id: "eligibility-and-renewal",
            name: "首购续费与套餐资格",
            slug: "eligibility-and-renewal",
            url: "/coupons/coupon-verification/eligibility-and-renewal/",
            h1: "首购续费与套餐资格：新用户专属、老用户续费与年付叠加",
            coreQuestion: "老用户续费能用首购折扣码吗？年付自带的折扣还能叠加优惠码吗？",
            articles: [
              { id: "art-cpo-007", title: "首购优惠码有哪些" },
              { id: "art-cpo-008", title: "试用转首购的优惠叠加" },
              { id: "art-cpo-009", title: "首购与年付折扣的区别" },
              { id: "art-cpo-010", title: "首购优惠码的适用条件" },
              { id: "art-cpo-011", title: "续费优惠码有哪些" },
              { id: "art-cpo-012", title: "首购续费与套餐资格完整说明" }
            ]
          }
        ]
      },
      {
        id: "discount-calculation",
        name: "折后价格与结算使用",
        slug: "discount-calculation",
        url: "/coupons/discount-calculation/",
        h1: "折后价格与结算使用：实际节省核算、订单验证与防填错",
        desc: "计算7折/8折/9折后实付金额，指导结算输入位置与金额核对留存。",
        clusters: [
          {
            id: "discount-and-stacking",
            name: "优惠折算与叠加规则",
            slug: "discount-and-stacking",
            url: "/coupons/discount-calculation/discount-and-stacking/",
            h1: "优惠折算与叠加规则：7折/8折/9折实际抵扣与总额影响",
            coreQuestion: "折扣是按原价打折还是折后价再折？怎样算清结算页面的最终支付金额？",
            articles: [
              { id: "art-cpo-013", title: "9 折优惠的实际节省" },
              { id: "art-cpo-014", title: "8 折优惠的实际节省" },
              { id: "art-cpo-015", title: "7 折优惠的实际节省" },
              { id: "art-cpo-016", title: "优惠码叠加规则" },
              { id: "art-cpo-017", title: "优惠后实际付款金额" },
              { id: "art-cpo-018", title: "优惠折算与叠加规则完整说明" }
            ]
          },
          {
            id: "checkout-and-evidence",
            name: "结算验证与订单证据",
            slug: "checkout-and-evidence",
            url: "/coupons/discount-calculation/checkout-and-evidence/",
            h1: "结算验证与订单证据：填写入口、应用提示与报错处理",
            coreQuestion: "输入优惠码后提示“无效”或“已达上限”怎么处理？如何截图存证？",
            articles: [
              { id: "art-cpo-019", title: "优惠码填写位置说明" },
              { id: "art-cpo-020", title: "优惠码结算确认" },
              { id: "art-cpo-021", title: "优惠码无法使用的原因" },
              { id: "art-cpo-022", title: "优惠码输入错误处理" },
              { id: "art-cpo-023", title: "优惠码生效验证" },
              { id: "art-cpo-024", title: "结算验证与订单证据完整说明" }
            ]
          }
        ]
      },
      {
        id: "change-and-expiration",
        name: "优惠变更与失效处置",
        slug: "change-and-expiration",
        url: "/coupons/change-and-expiration/",
        h1: "优惠变更与失效处置：升降级影响、过期记录与日常维护",
        desc: "说明订单变更对既有折扣的影响，建立过期优惠标记与纠错维护机制。",
        clusters: [
          {
            id: "renewal-order-change",
            name: "续费与订单变更优惠",
            slug: "renewal-order-change",
            url: "/coupons/change-and-expiration/renewal-order-change/",
            h1: "续费与订单变更优惠：套餐变更折扣延续与补差价规则",
            coreQuestion: "使用优惠码购买的套餐，后续升级或降级时还能继续享受原折扣吗？",
            articles: [
              { id: "art-cpo-025", title: "续费优惠与首购优惠的差异" },
              { id: "art-cpo-026", title: "续费优惠使用步骤" },
              { id: "art-cpo-027", title: "续费优惠适用范围" },
              { id: "art-cpo-028", title: "订单变更对优惠的影响" },
              { id: "art-cpo-029", title: "优惠叠加与订单变更组合" },
              { id: "art-cpo-030", title: "续费与订单变更优惠完整说明" }
            ]
          },
          {
            id: "expiration-maintenance",
            name: "失效原因与记录维护",
            slug: "expiration-maintenance",
            url: "/coupons/change-and-expiration/expiration-maintenance/",
            h1: "失效原因与记录维护：到期判定、名额限制与动态状态更新",
            coreQuestion: "站内如何保持优惠码的鲜活性？遇到失效代码如何反馈与纠错？",
            articles: [
              { id: "art-cpo-031", title: "优惠码有效期判断" },
              { id: "art-cpo-032", title: "优惠码失效原因" },
              { id: "art-cpo-033", title: "优惠码状态更新" },
              { id: "art-cpo-034", title: "优惠码失效记录" },
              { id: "art-cpo-035", title: "优惠码维护方法" },
              { id: "art-cpo-036", title: "失效原因与记录维护完整说明" }
            ]
          }
        ]
      }
    ]
  },

  {
    id: "ai",
    name: "AI机场",
    slug: "ai",
    url: "/ai/",
    h1: "AI机场推荐：对话、多模态与AI编程的网络选型指南",
    coreQuestion: "针对我的 AI 工具和任务，应该怎样选择机场及使用方式？",
    theme: "按用途选择",
    targetWords: "7,000–9,500 字",
    duty: "每条记录注明工具、功能、网页/API、账号前提、地区条件和测试时间。不简化为单个支持AI标签。",
    megaTableCols: ["品牌", "ChatGPT支持度", "Claude支持度", "API直连/流式支持", "Cursor/Copilot支持", "节点纯净度/原生IP", "最低月付", "直达通道"],
    decisionLevels: 4,
    topics: [
      {
        id: "chat-and-multimodal",
        name: "AI对话与多模态需求",
        slug: "chat-and-multimodal",
        url: "/ai/chat-and-multimodal/",
        h1: "AI对话与多模态需求：ChatGPT、Claude、Gemini选型与音视频多模态",
        desc: "覆盖Web对话界面风控、地区要求、超大文件上传及实时语音低延迟连接需求。",
        clusters: [
          {
            id: "web-chat-selection",
            name: "网页对话服务选型",
            slug: "web-chat-selection",
            url: "/ai/chat-and-multimodal/web-chat-selection/",
            h1: "网页对话服务选型：ChatGPT/Claude/Gemini节点要求与地区限制",
            coreQuestion: "访问ChatGPT频繁出现Access Denied或Cloudflare死循环验证，该怎么选节点？",
            articles: [
              { id: "art-ai-001", title: "ChatGPT 用什么机场？网页访问与任务核验" },
              { id: "art-ai-002", title: "ChatGPT 网页版网络要求：延迟与稳定性" },
              { id: "art-ai-003", title: "Claude 用什么机场？地区与账号条件" },
              { id: "art-ai-004", title: "Gemini 使用条件与地区限制" },
              { id: "art-ai-005", title: "Claude 与 Gemini 的网络差异" },
              { id: "art-ai-006", title: "网页对话服务选型完整说明" }
            ]
          },
          {
            id: "file-voice-multimodal",
            name: "文件语音与多模态",
            slug: "file-voice-multimodal",
            url: "/ai/chat-and-multimodal/file-voice-multimodal/",
            h1: "文件语音与多模态：文档分析上传、语音对话与多模态持续输出",
            coreQuestion: "上传几百页PDF给AI分析或使用语音模式实时通话，需要机场具备哪些条件？",
            articles: [
              { id: "art-ai-007", title: "AI 文件上传的网络要求" },
              { id: "art-ai-008", title: "AI 语音功能的网络要求" },
              { id: "art-ai-009", title: "AI 多模态任务的网络要求" },
              { id: "art-ai-010", title: "AI 多模态任务的稳定性要求" },
              { id: "art-ai-011", title: "AI 多模态场景的机场选择" },
              { id: "art-ai-012", title: "文件语音与多模态完整说明" }
            ]
          }
        ]
      },
      {
        id: "coding-and-dev",
        name: "AI编程与开发连接",
        slug: "coding-and-dev",
        url: "/ai/coding-and-dev/",
        h1: "AI编程与开发连接：Cursor、Copilot、API调用与长流式传输",
        desc: "解决开发者在IDE内使用AI补全、代码生成及商业API高频调用时的断流难题。",
        clusters: [
          {
            id: "ai-coding-tools",
            name: "AI编程工具方案",
            slug: "ai-coding-tools",
            url: "/ai/coding-and-dev/ai-coding-tools/",
            h1: "AI编程工具方案：Cursor、GitHub Copilot连接配置与断连优化",
            coreQuestion: "写代码时Cursor突然无法联机或生成中断，如何排查并挑选适合编程的节点？",
            articles: [
              { id: "art-ai-013", title: "AI 编程工具网络要求" },
              { id: "art-ai-014", title: "Cursor 与 GitHub Copilot 网络配置" },
              { id: "art-ai-015", title: "AI 编程连接异常排查" },
              { id: "art-ai-016", title: "AI 编程延迟与稳定性" },
              { id: "art-ai-017", title: "AI 编程工具的机场选择" },
              { id: "art-ai-018", title: "AI编程工具方案完整说明" }
            ]
          },
          {
            id: "api-and-streaming-requests",
            name: "API与流式请求",
            slug: "api-and-streaming-requests",
            url: "/ai/coding-and-dev/api-and-streaming-requests/",
            h1: "API与流式请求：OpenAI/Anthropic API长连接、频次限制与吞吐保障",
            coreQuestion: "开发调试API时如何避免代理端关闭长连接（SSE流式）导致响应截断？",
            articles: [
              { id: "art-ai-019", title: "AI API 网络要求" },
              { id: "art-ai-020", title: "API 与网页版网络差异" },
              { id: "art-ai-021", title: "API 调用频率与带宽" },
              { id: "art-ai-022", title: "流式请求的网络要求" },
              { id: "art-ai-023", title: "API 场景的机场选择" },
              { id: "art-ai-024", title: "API与流式请求完整说明" }
            ]
          }
        ]
      },
      {
        id: "continuity-and-privacy",
        name: "持续办公与数据边界",
        slug: "continuity-and-privacy",
        url: "/ai/continuity-and-privacy/",
        h1: "持续办公与数据边界：全天候办公备用方案、风控规避与隐私合规",
        desc: "保障全天高强度AI辅助工作的可用性，解析IP风控封号机制与企业数据安全边界。",
        clusters: [
          {
            id: "continuity-and-backup",
            name: "工作连续性与备用",
            slug: "continuity-and-backup",
            url: "/ai/continuity-and-privacy/continuity-and-backup/",
            h1: "工作连续性与备用：多工具共用、长期办公专线与自动容灾切换",
            coreQuestion: "重度依赖AI工作的日常中，如何构建两家互不影响的容灾节点方案？",
            articles: [
              { id: "art-ai-025", title: "多 AI 工具共用的网络环境" },
              { id: "art-ai-026", title: "AI 长期办公的网络要求" },
              { id: "art-ai-027", title: "AI 多工具切换的稳定性" },
              { id: "art-ai-028", title: "AI 长期办公的机场选择" },
              { id: "art-ai-029", title: "备用方案设计" },
              { id: "art-ai-030", title: "工作连续性与备用完整说明" }
            ]
          },
          {
            id: "collaboration-privacy-constraints",
            name: "协作与隐私约束",
            slug: "collaboration-privacy-constraints",
            url: "/ai/continuity-and-privacy/collaboration-privacy-constraints/",
            h1: "协作与隐私约束：账号风控核查、数据传输可见性与合规建议",
            coreQuestion: "多人共用节点或机场是否会导致AI账号被连带封禁？数据隐私如何确保？",
            articles: [
              { id: "art-ai-031", title: "AI 工具地区支持核对方法" },
              { id: "art-ai-032", title: "AI 账号资格判断" },
              { id: "art-ai-033", title: "网络可达与功能可用的区别" },
              { id: "art-ai-034", title: "AI 数据的可见边界" },
              { id: "art-ai-035", title: "账号关联与安全提示" },
              { id: "art-ai-036", title: "协作与隐私约束完整说明" }
            ]
          }
        ]
      }
    ]
  },

  {
    id: "streaming",
    name: "流媒体机场",
    slug: "streaming",
    url: "/streaming/",
    h1: "流媒体机场推荐：平台条件、视频画质与设备选型指南",
    coreQuestion: "在我的平台、账号和设备条件下，怎样选择观看方案？",
    theme: "按用途选择",
    targetWords: "7,000–9,500 字",
    duty: "严禁把首页能开等同于全片库播放，拒绝少量样本夸大为全平台保证。详细拆解平台、画质、时段与终端方案。",
    megaTableCols: ["品牌", "Netflix解锁", "Disney+解锁", "YouTube 4K支持", "原生机房/广播IP", "晚高峰测速吞吐", "电视端配置", "直达通道"],
    decisionLevels: 4,
    topics: [
      {
        id: "platform-requirements",
        name: "平台需求与观看条件",
        slug: "platform-requirements",
        url: "/streaming/platform-requirements/",
        h1: "平台需求与观看条件：Netflix非自制剧解锁、Disney+与多平台共用",
        desc: "解决各主流平台IP风控机制，区分自制剧与非自制版权剧片库解锁的真实差异。",
        clusters: [
          {
            id: "netflix-selection",
            name: "Netflix观看选型",
            slug: "netflix-selection",
            url: "/streaming/platform-requirements/netflix-selection/",
            h1: "Netflix观看选型：地区限制、版权片库解锁与画质判定",
            coreQuestion: "为什么连上节点只能看Netflix自制剧（如怪奇物语）却搜不到地区限定版权剧？",
            articles: [
              { id: "art-stm-001", title: "Netflix 用什么机场？地区与账号条件" },
              { id: "art-stm-002", title: "Netflix 播放条件与画质" },
              { id: "art-stm-003", title: "Netflix 地区与片库" },
              { id: "art-stm-004", title: "Netflix 播放质量判断" },
              { id: "art-stm-005", title: "Netflix 观看记录方法" },
              { id: "art-stm-006", title: "Netflix观看选型完整说明" }
            ]
          },
          {
            id: "multi-platform-combo",
            name: "多平台需求组合",
            slug: "multi-platform-combo",
            url: "/streaming/platform-requirements/multi-platform-combo/",
            h1: "多平台需求组合：Disney+、HBO Max与YouTube 4K高码率",
            coreQuestion: "想要一个节点同时畅快观看Disney+、HBO Max与YouTube 4K，如何挑选？",
            articles: [
              { id: "art-stm-007", title: "Disney+ 使用条件" },
              { id: "art-stm-008", title: "HBO Max 使用条件" },
              { id: "art-stm-009", title: "YouTube 用什么机场？4K 与直播区分" },
              { id: "art-stm-010", title: "多平台共用的机场选择" },
              { id: "art-stm-011", title: "多平台组合的网络方案" },
              { id: "art-stm-012", title: "多平台需求组合完整说明" }
            ]
          }
        ]
      },
      {
        id: "quality-traffic-playback",
        name: "清晰度流量与连续播放",
        slug: "quality-traffic-playback",
        url: "/streaming/quality-traffic-playback/",
        h1: "清晰度流量与连续播放：4K码率预算、流量消耗与晚高峰缓冲排查",
        desc: "核算高码率HDR/杜比视界下的流量消耗速率，解决晚高峰追剧频繁卡顿转圈问题。",
        clusters: [
          {
            id: "quality-and-budget",
            name: "画质与流量预算",
            slug: "quality-and-budget",
            url: "/streaming/quality-traffic-playback/quality-and-budget/",
            h1: "画质与流量预算：码率要求、4K带宽门槛与每月流量预算模型",
            coreQuestion: "每天看2小时4K视频，一个月需要多少流量？百兆宽带够不够用？",
            articles: [
              { id: "art-stm-013", title: "视频码率与清晰度" },
              { id: "art-stm-014", title: "4K 播放的网络要求" },
              { id: "art-stm-015", title: "清晰度与带宽的关系" },
              { id: "art-stm-016", title: "视频观看的流量消耗" },
              { id: "art-stm-017", title: "不同清晰度的流量差异" },
              { id: "art-stm-018", title: "画质与流量预算完整说明" }
            ]
          },
          {
            id: "peak-and-long-playback",
            name: "晚间与长时间观看",
            slug: "peak-and-long-playback",
            url: "/streaming/quality-traffic-playback/peak-and-long-playback/",
            h1: "晚间与长时间观看：高峰丢包分析、缓冲日志观察与抗卡顿方案",
            coreQuestion: "为什么白天看视频秒开，一到晚上八九点就降画质或者卡顿？",
            articles: [
              { id: "art-stm-019", title: "视频卡顿的原因分析" },
              { id: "art-stm-020", title: "缓冲与加载时间的观察" },
              { id: "art-stm-021", title: "连续观看的稳定性要求" },
              { id: "art-stm-022", title: "晚高峰的视频表现" },
              { id: "art-stm-023", title: "视频观看体验的验证" },
              { id: "art-stm-024", title: "晚间与长时间观看完整说明" }
            ]
          }
        ]
      },
      {
        id: "devices-and-home",
        name: "观看设备与家庭使用",
        slug: "devices-and-home",
        url: "/streaming/devices-and-home/",
        h1: "观看设备与家庭使用：手机电脑、AirPlay投屏与智能电视/软路由",
        desc: "从移动手持设备扩展到Apple TV、Android TV电视盒子与全屋旁路由配置。",
        clusters: [
          {
            id: "mobile-pc-casting",
            name: "手机电脑与投屏",
            slug: "mobile-pc-casting",
            url: "/streaming/devices-and-home/mobile-pc-casting/",
            h1: "手机电脑与投屏：移动网络播放、投屏协议与局域网代理穿透",
            coreQuestion: "手机上看正常，投屏到电视上却提示“地区受限”或黑屏怎么解决？",
            articles: [
              { id: "art-stm-025", title: "手机端观看的机场选择" },
              { id: "art-stm-026", title: "电脑端观看的机场选择" },
              { id: "art-stm-027", title: "投屏场景的机场选择" },
              { id: "art-stm-028", title: "多设备同时观看" },
              { id: "art-stm-029", title: "移动网络下的观看" },
              { id: "art-stm-030", title: "手机电脑与投屏完整说明" }
            ]
          },
          {
            id: "tv-and-home-network",
            name: "电视与家庭网络方案",
            slug: "tv-and-home-network",
            url: "/streaming/devices-and-home/tv-and-home-network/",
            h1: "电视与家庭网络方案：Apple TV、Android TV与主旁路由网络设计",
            coreQuestion: "客厅大屏看原生4K流媒体，是用电视客户端好还是旁路由接管好？",
            articles: [
              { id: "art-stm-031", title: "电视端使用机场的方式" },
              { id: "art-stm-032", title: "智能电视客户端配置" },
              { id: "art-stm-033", title: "电视与手机同时使用" },
              { id: "art-stm-034", title: "家庭网络的路由器配置" },
              { id: "art-stm-035", title: "家庭多设备视频方案" },
              { id: "art-stm-036", title: "电视与家庭网络方案完整说明" }
            ]
          }
        ]
      }
    ]
  },

  {
    id: "clients",
    name: "客户端教程",
    slug: "clients",
    url: "/clients/",
    h1: "代理客户端下载与机场教程：设备选择、订阅导入和配置维护",
    coreQuestion: "下载什么软件，怎么配置，后续如何维护？",
    theme: "完成使用",
    targetWords: "7,000–9,500 字",
    duty: "承接软件下载与正常配置维护。不单独建上网教程。严禁虚构版本与第三方镜像，按项目核验来源。",
    megaTableCols: ["客户端名称", "适用系统", "官方下载渠道", "支持协议", "TUN虚拟网卡", "规则分流能力", "推荐程度", "教程直达"],
    decisionLevels: 4,
    topics: [
      {
        id: "selection-and-download",
        name: "客户端选择与下载",
        slug: "selection-and-download",
        url: "/clients/selection-and-download/",
        h1: "客户端选择与下载：Windows/macOS/Linux/Android/iOS官方正版来源",
        desc: "盘点Clash Verge Rev、v2rayN、FlClash、Shadowrocket等软件真实发布渠道与避坑。",
        clusters: [
          {
            id: "desktop-clients",
            name: "桌面系统客户端",
            slug: "desktop-clients",
            url: "/clients/selection-and-download/desktop-clients/",
            h1: "桌面系统客户端：Clash Verge Rev、v2rayN与macOS/Linux适配指南",
            coreQuestion: "电脑上该装哪个客户端？如何避开带病毒或加料的第三方二次打包版本？",
            articles: [
              { id: "art-cli-001", title: "Clash Verge Rev Windows 使用" },
              { id: "art-cli-002", title: "v2rayN 使用说明" },
              { id: "art-cli-003", title: "Windows 客户端下载来源" },
              { id: "art-cli-004", title: "Clash Verge Rev macOS 使用" },
              { id: "art-cli-005", title: "Linux 客户端说明" },
              { id: "art-cli-006", title: "桌面系统客户端完整指南" }
            ]
          },
          {
            id: "mobile-clients",
            name: "手机与平板客户端",
            slug: "mobile-clients",
            url: "/clients/selection-and-download/mobile-clients/",
            h1: "手机与平板客户端：Android主流工具、iPhone小火箭与跨移动平台选择",
            coreQuestion: "安卓和苹果手机上各推荐什么客户端？iOS小火箭如何安全下载？",
            articles: [
              { id: "art-cli-007", title: "Android 客户端有哪些" },
              { id: "art-cli-008", title: "FlClash Android 使用" },
              { id: "art-cli-009", title: "v2rayNG 使用说明" },
              { id: "art-cli-010", title: "iPhone 客户端有哪些" },
              { id: "art-cli-011", title: "Shadowrocket 使用说明" },
              { id: "art-cli-012", title: "手机与平板客户端完整指南" }
            ]
          }
        ]
      },
      {
        id: "import-and-rules",
        name: "首次导入与规则配置",
        slug: "import-and-rules",
        url: "/clients/import-and-rules/",
        h1: "首次导入与规则配置：订阅链接格式、分流模式、DNS与TUN接管",
        desc: "从URL一键导入订阅，详解规则、全局与直连模式差异，配置系统接管与抗污染DNS。",
        clusters: [
          {
            id: "subscription-and-connection",
            name: "订阅与首次连接",
            slug: "subscription-and-connection",
            url: "/clients/import-and-rules/subscription-and-connection/",
            h1: "订阅与首次连接：订阅链接结构、YAML配置解析与一键导入",
            coreQuestion: "拿到订阅链接后怎么放进软件？为什么复制进去提示格式不支持？",
            articles: [
              { id: "art-cli-013", title: "订阅格式说明" },
              { id: "art-cli-014", title: "YAML 配置结构" },
              { id: "art-cli-015", title: "订阅链接与配置文件关系" },
              { id: "art-cli-016", title: "订阅导入方法" },
              { id: "art-cli-017", title: "首次连接步骤" },
              { id: "art-cli-018", title: "订阅与首次连接完整说明" }
            ]
          },
          {
            id: "rules-dns-tun",
            name: "规则DNS与接管设置",
            slug: "rules-dns-tun",
            url: "/clients/import-and-rules/rules-dns-tun/",
            h1: "规则DNS与接管设置：分流规则、TUN全局模式与防DNS泄露",
            coreQuestion: "规则模式和全局模式有什么区别？国内网站如何保持直连不耗流量？",
            articles: [
              { id: "art-cli-019", title: "规则模式说明" },
              { id: "art-cli-020", title: "全局模式说明" },
              { id: "art-cli-021", title: "直连模式说明" },
              { id: "art-cli-022", title: "DNS 设置说明" },
              { id: "art-cli-023", title: "TUN 模式说明" },
              { id: "art-cli-024", title: "规则DNS与接管设置完整说明" }
            ]
          }
        ]
      },
      {
        id: "maintenance-and-advanced",
        name: "配置维护与进阶接入",
        slug: "maintenance-and-advanced",
        url: "/clients/maintenance-and-advanced/",
        h1: "配置维护与进阶接入：版本平滑升级、规则备份、终端及Git代理",
        desc: "规范客户端数据备份迁移，为开发环境、终端命令行及软路由提供进阶接管方案。",
        clusters: [
          {
            id: "update-backup-migration",
            name: "更新备份与迁移",
            slug: "update-backup-migration",
            url: "/clients/maintenance-and-advanced/update-backup-migration/",
            h1: "更新备份与迁移：客户端版本升级、自定义分流规则备份与跨设备同步",
            coreQuestion: "软件升级后自定义规则被冲掉怎么办？换新电脑如何一键迁移配置？",
            articles: [
              { id: "art-cli-025", title: "客户端升级方法" },
              { id: "art-cli-026", title: "客户端降级方法" },
              { id: "art-cli-027", title: "客户端配置备份" },
              { id: "art-cli-028", title: "客户端配置恢复" },
              { id: "art-cli-029", title: "客户端配置迁移" },
              { id: "art-cli-030", title: "更新备份与迁移完整说明" }
            ]
          },
          {
            id: "router-and-dev-env",
            name: "路由与开发环境接入",
            slug: "router-and-dev-env",
            url: "/clients/maintenance-and-advanced/router-and-dev-env/",
            h1: "路由与开发环境接入：OpenWrt接入、终端Bash/Git/Pip代理配置",
            coreQuestion: "如何在VS Code终端、Git Clone及Python Pip安装时正确走上代理？",
            articles: [
              { id: "art-cli-031", title: "路由器接入说明" },
              { id: "art-cli-032", title: "开发环境代理配置" },
              { id: "art-cli-033", title: "终端与命令行代理" },
              { id: "art-cli-034", title: "包管理器代理配置" },
              { id: "art-cli-035", title: "Git 代理配置" },
              { id: "art-cli-036", title: "路由与开发环境接入完整说明" }
            ]
          }
        ]
      }
    ]
  },

  {
    id: "troubleshooting",
    name: "网络排障",
    slug: "troubleshooting",
    url: "/troubleshooting/",
    h1: "机场网络排障：订阅失败、连接超时与应用异常处理指南",
    coreQuestion: "问题发生在哪一层，接下来应该检查什么？",
    theme: "完成使用",
    targetWords: "7,000–9,500 字",
    duty: "严禁把所有问题归结为换一家机场。操作包含条件、步骤、预期结果、异常解释与回滚。定位从订阅、解析、系统、链路到具体应用。",
    megaTableCols: ["故障现象", "可能原因层级", "首要排查步骤", "验证与恢复标准", "常见错误代码", "回滚操作", "关联排障文档"],
    decisionLevels: 4,
    topics: [
      {
        id: "subscription-issues",
        name: "订阅获取与格式错误",
        slug: "subscription-issues",
        url: "/troubleshooting/subscription-issues/",
        h1: "订阅获取与格式错误：HTTP 403/404报错、更新超时与YAML解析失败",
        desc: "解决订阅下载中断、证书报错、配置格式不符合Clash标准及节点列表为空故障。",
        clusters: [
          {
            id: "sub-url-access-failure",
            name: "订阅地址访问失败",
            slug: "sub-url-access-failure",
            url: "/troubleshooting/subscription-issues/sub-url-access-failure/",
            h1: "订阅地址访问失败：更新超时、403 Forbidden、404 Not Found排查",
            coreQuestion: "订阅更新报错403或连接超时，为什么浏览器能打开而客户端却不行？",
            articles: [
              { id: "art-trb-001", title: "订阅更新失败怎么办" },
              { id: "art-trb-002", title: "订阅返回 403 处理" },
              { id: "art-trb-003", title: "订阅返回 404 处理" },
              { id: "art-trb-004", title: "订阅下载超时处理" },
              { id: "art-trb-005", title: "浏览器能打开但客户端失败" },
              { id: "art-trb-006", title: "订阅地址访问失败完整说明" }
            ]
          },
          {
            id: "sub-parse-and-auth",
            name: "格式解析与配置认证",
            slug: "sub-parse-and-auth",
            url: "/troubleshooting/subscription-issues/sub-parse-and-auth/",
            h1: "格式解析与配置认证：YAML语法错误、协议不支持与节点过滤异常",
            coreQuestion: "订阅成功拉取但节点列表空空如也，或者提示YAML invalid怎么办？",
            articles: [
              { id: "art-trb-007", title: "YAML 语法错误处理" },
              { id: "art-trb-008", title: "订阅解析失败处理" },
              { id: "art-trb-009", title: "协议不支持处理" },
              { id: "art-trb-010", title: "节点被过滤处理" },
              { id: "art-trb-011", title: "配置被覆盖处理" },
              { id: "art-trb-012", title: "格式解析与配置认证完整说明" }
            ]
          }
        ]
      },
      {
        id: "connection-failure",
        name: "连接失败与本地接管",
        slug: "connection-failure",
        url: "/troubleshooting/connection-failure/",
        h1: "连接失败与本地接管：系统代理残留、TUN启动崩溃与节点握手超时",
        desc: "排查Windows/macOS注册表代理死锁、权限不足、端口占用及节点无法握手重置。",
        clusters: [
          {
            id: "system-proxy-conflicts",
            name: "系统代理与本机冲突",
            slug: "system-proxy-conflicts",
            url: "/troubleshooting/connection-failure/system-proxy-conflicts/",
            h1: "系统代理与本机冲突：系统代理不生效、TUN启动失败与清理死锁残留",
            coreQuestion: "软件关了之后电脑彻底打不开任何网页了，怎么彻底清理残留代理？",
            articles: [
              { id: "art-trb-013", title: "系统代理不生效排查" },
              { id: "art-trb-014", title: "TUN 模式启动失败处理" },
              { id: "art-trb-015", title: "系统网络异常处理" },
              { id: "art-trb-016", title: "系统代理残留清理" },
              { id: "art-trb-017", title: "权限问题处理" },
              { id: "art-trb-018", title: "系统代理与本机冲突完整说明" }
            ]
          },
          {
            id: "node-link-and-handshake",
            name: "节点链路与握手异常",
            slug: "node-link-and-handshake",
            url: "/troubleshooting/connection-failure/node-link-and-handshake/",
            h1: "节点链路与握手异常：全部节点超时、认证失败与TCP握手重置排查",
            coreQuestion: "点测试延迟全部显示Timeout超时，到底是本地网络问题还是机场挂了？",
            articles: [
              { id: "art-trb-019", title: "全部节点超时排查" },
              { id: "art-trb-020", title: "部分节点不可用排查" },
              { id: "art-trb-021", title: "节点握手失败处理" },
              { id: "art-trb-022", title: "连接被重置处理" },
              { id: "art-trb-023", title: "节点认证失败处理" },
              { id: "art-trb-024", title: "节点链路与握手异常完整说明" }
            ]
          }
        ]
      },
      {
        id: "speed-and-app-issues",
        name: "速度下降与应用异常",
        slug: "speed-and-app-issues",
        url: "/troubleshooting/speed-and-app-issues/",
        h1: "速度下降与应用异常：严重卡顿、特定网页打不开与特定软件连不上",
        desc: "诊断浏览器能上网但其他应用连不上、特定流媒体/AI工具提示受限的深度排障。",
        clusters: [
          {
            id: "speed-and-buffering",
            name: "速度与缓冲问题",
            slug: "speed-and-buffering",
            url: "/troubleshooting/speed-and-app-issues/speed-and-buffering/",
            h1: "速度与缓冲问题：连接速度断崖式下跌、下载慢与视频转圈卡顿",
            coreQuestion: "以前看视频飞快最近突然几百KB卡死，如何定位是节点被限速还是本地瓶颈？",
            articles: [
              { id: "art-trb-025", title: "连接速度慢的原因分析" },
              { id: "art-trb-026", title: "速度波动观察方法" },
              { id: "art-trb-027", title: "视频卡顿排查" },
              { id: "art-trb-028", title: "下载速度慢排查" },
              { id: "art-trb-029", title: "速度优化的合理做法" },
              { id: "art-trb-030", title: "速度与缓冲问题完整说明" }
            ]
          },
          {
            id: "browser-and-app-anomaly",
            name: "浏览器与特定程序异常",
            slug: "browser-and-app-anomaly",
            url: "/troubleshooting/speed-and-app-issues/browser-and-app-anomaly/",
            h1: "浏览器与特定程序异常：浏览器可达但软件不走代理、AI与视频专线报错",
            coreQuestion: "Chrome浏览器正常翻墙，为什么Telegram、Steam或Discord客户端死活连不上？",
            articles: [
              { id: "art-trb-031", title: "特定网站无法访问" },
              { id: "art-trb-032", title: "特定应用无法连接" },
              { id: "art-trb-033", title: "AI 工具连接异常" },
              { id: "art-trb-034", title: "视频平台连接异常" },
              { id: "art-trb-035", title: "浏览器能上网但其他软件不能" },
              { id: "art-trb-036", title: "浏览器与特定程序异常完整说明" }
            ]
          }
        ]
      }
    ]
  },

  {
    id: "wiki",
    name: "机场百科",
    slug: "wiki",
    url: "/wiki/",
    h1: "机场百科：线路、协议、网络指标与隐私边界知识体系",
    coreQuestion: "哪些概念和技术机制，会真正影响机场选择与使用？",
    theme: "理解技术",
    targetWords: "7,000–9,500 字",
    duty: "引用标准和技术规范，拒绝粗暴宣传语。严谨解释IPLC/IEPL、TCP/UDP/QUIC、TLS、分片MTU及数据边界。",
    megaTableCols: ["技术术语/协议", "层级分类", "工作机制", "相比传统优势", "核心局限/风险", "对日常体验影响", "规范文档引用", "相关条目"],
    decisionLevels: 4,
    topics: [
      {
        id: "service-and-lines",
        name: "服务结构与线路实体",
        slug: "service-and-lines",
        url: "/wiki/service-and-lines/",
        h1: "服务结构与线路实体：入口出口拓扑、IPLC/IEPL专线与中转直连",
        desc: "建立机场通信拓扑模型，界定客户端、订阅中心、中继入口、出口机房等实体关系。",
        clusters: [
          {
            id: "nodes-and-clients-relation",
            name: "订阅节点与客户端",
            slug: "nodes-and-clients-relation",
            url: "/wiki/service-and-lines/nodes-and-clients-relation/",
            h1: "订阅节点与客户端：服务拓扑、订阅下发通信流程与角色定义",
            coreQuestion: "从点击网页链接到数据包跨洋到达目标服务器，中间经历了哪些实体？",
            articles: [
              { id: "art-wik-001", title: "机场服务是什么：组成与角色" },
              { id: "art-wik-002", title: "客户端、订阅与节点的关系" },
              { id: "art-wik-003", title: "服务组成概念图" },
              { id: "art-wik-004", title: "服务实体的角色说明" },
              { id: "art-wik-005", title: "订阅与节点的通信流程" },
              { id: "art-wik-006", title: "订阅节点与客户端完整说明" }
            ]
          },
          {
            id: "entry-exit-and-line-tags",
            name: "入口出口与线路标签",
            slug: "entry-exit-and-line-tags",
            url: "/wiki/service-and-lines/entry-exit-and-line-tags/",
            h1: "入口出口与线路标签：IEPL内网专线、IPLC物理专线与普通BGP中转",
            coreQuestion: "商家宣传的IPLC与IEPL专线到底有什么区别？专线为什么不怕晚高峰？",
            articles: [
              { id: "art-wik-007", title: "IEPL 专线说明" },
              { id: "art-wik-008", title: "IPLC 专线说明" },
              { id: "art-wik-009", title: "中转与直连的区别" },
              { id: "art-wik-010", title: "线路类型的实际影响" },
              { id: "art-wik-011", title: "线路标签与实际观测的区别" },
              { id: "art-wik-012", title: "入口出口与线路标签完整说明" }
            ]
          }
        ]
      },
      {
        id: "protocols-and-security",
        name: "传输协议与安全机制",
        slug: "protocols-and-security",
        url: "/wiki/protocols-and-security/",
        h1: "传输协议与安全机制：TCP/UDP/QUIC、TLS握手与VLESS/Trojan协议分层",
        desc: "依据IETF RFC深入解析网络丢包重传、QUIC多路复用以及现代轻量协议加密机制。",
        clusters: [
          {
            id: "tcp-udp-and-quic",
            name: "TCP UDP与QUIC",
            slug: "tcp-udp-and-quic",
            url: "/wiki/protocols-and-security/tcp-udp-and-quic/",
            h1: "TCP UDP与QUIC：可靠传输、重传拥塞控制、多路复用与MTU分片",
            coreQuestion: "QUIC是基于UDP的，为什么不能把UDP协议都当成同一种体验？丢包时TCP怎样工作？",
            articles: [
              { id: "art-wik-013", title: "TCP与UDP在代理连接中有什么区别？可靠传输、时延与应用需求解析" },
              { id: "art-wik-014", title: "QUIC与UDP是什么关系？为什么不能把UDP协议都当作同一种体验" },
              { id: "art-wik-015", title: "网络丢包时TCP连接会怎样变化？理解重传、拥塞控制与吞吐下降" },
              { id: "art-wik-016", title: "QUIC的多路复用如何工作？与连接切换和应用传输有什么关系" },
              { id: "art-wik-017", title: "长连接与短连接有什么区别？为什么网页浏览和持续输出需要不同观察指标" },
              { id: "art-wik-018", title: "MTU与分片会怎样影响代理连接？从数据包大小理解异常与性能边界" }
            ]
          },
          {
            id: "tls-and-proxy-layers",
            name: "TLS与代理协议层次",
            slug: "tls-and-proxy-layers",
            url: "/wiki/protocols-and-security/tls-and-proxy-layers/",
            h1: "TLS与代理协议层次：TLS加密握手、VLESS、Trojan与Shadowsocks演进",
            coreQuestion: "VLESS协议为什么比传统VMess更轻快？Trojan的伪装原理是什么？",
            articles: [
              { id: "art-wik-019", title: "TLS 加密基础" },
              { id: "art-wik-020", title: "TLS 与代理协议的关系" },
              { id: "art-wik-021", title: "VLESS 协议说明" },
              { id: "art-wik-022", title: "Trojan 协议说明" },
              { id: "art-wik-023", title: "Shadowsocks 协议说明" },
              { id: "art-wik-024", title: "TLS与代理协议层次完整说明" }
            ]
          }
        ]
      },
      {
        id: "performance-and-privacy",
        name: "网络性能与隐私边界",
        slug: "performance-and-privacy",
        url: "/wiki/performance-and-privacy/",
        h1: "网络性能与隐私边界：延迟丢包抖动测量、DoH/DoT与原生/广播IP区别",
        desc: "厘清网络指标真实物理含义，建立fake-ip分流与服务商数据可见边界的科学认知。",
        clusters: [
          {
            id: "metrics-and-meanings",
            name: "性能指标与测量含义",
            slug: "metrics-and-meanings",
            url: "/wiki/performance-and-privacy/metrics-and-meanings/",
            h1: "性能指标与测量含义：RTT延迟、抖动Jitter、丢包率与带宽吞吐差异",
            coreQuestion: "平时说的Ping值到底代表什么？带宽1000M为什么实际吞吐只有10M？",
            articles: [
              { id: "art-wik-025", title: "延迟、抖动、丢包指标" },
              { id: "art-wik-026", title: "带宽与吞吐的区别" },
              { id: "art-wik-027", title: "峰值速度与持续速度" },
              { id: "art-wik-028", title: "性能指标的测量方法" },
              { id: "art-wik-029", title: "性能指标的解读" },
              { id: "art-wik-030", title: "性能指标与测量含义完整说明" }
            ]
          },
          {
            id: "dns-ip-visibility",
            name: "DNS IP与数据可见性",
            slug: "dns-ip-visibility",
            url: "/wiki/performance-and-privacy/dns-ip-visibility/",
            h1: "DNS IP与数据可见性：DoH加密解析、fake-ip机制与原生/广播IP风控",
            coreQuestion: "机场老板能看到我浏览的网页内容和密码吗？原生IP和机房IP到底差在哪？",
            articles: [
              { id: "art-wik-031", title: "DNS 解析流程" },
              { id: "art-wik-032", title: "DNS over HTTPS 与 DNS over TLS" },
              { id: "art-wik-033", title: "fake-ip 与 redir-host" },
              { id: "art-wik-034", title: "原生 IP 与广播 IP" },
              { id: "art-wik-035", title: "共享 IP 与独立 IP" },
              { id: "art-wik-036", title: "DNS IP与数据可见性完整说明" }
            ]
          }
        ]
      }
    ]
  },

  {
    id: "airports",
    name: "机场大全",
    slug: "airports",
    url: "/airports/",
    h1: "机场大全：品牌查询、官方资料与服务变更核验指南",
    coreQuestion: "我找的是哪一家机场，相关资料和入口是否对应同一个服务？",
    theme: "核对品牌与证据",
    targetWords: "7,000–9,500 字",
    duty: "每家真实品牌只建立一个完整档案 `/airports/[brand-slug]/`。聚合品牌公告、官网入口、域名历史、变更时间线与纠错渠道。",
    megaTableCols: ["品牌名称", "别名/曾用名", "创办年份", "最低门槛月付", "专线/线路特征", "协议支持", "运营状态", "档案入口", "官网核验入口"],
    decisionLevels: 4,
    topics: [
      {
        id: "brand-lookup",
        name: "品牌查找与档案阅读",
        slug: "brand-lookup",
        url: "/airports/brand-lookup/",
        h1: "品牌查找与档案阅读：名称别名对照、防仿冒镜像与字段定义",
        desc: "解决同名机场混淆、仿冒钓鱼站辨识，以及档案各项技术字段的统一解读指南。",
        clusters: [
          {
            id: "names-aliases-and-portals",
            name: "名称别名与正确入口",
            slug: "names-aliases-and-portals",
            url: "/airports/brand-lookup/names-aliases-and-portals/",
            h1: "名称别名与正确入口：官网辨认、域名变更历史与仿冒钓鱼防范",
            coreQuestion: "网上同名的机场好几个，怎么辨别哪个才是正牌官网？",
            articles: [
              { id: "art-air-001", title: "机场官网怎么辨认：品牌公告、域名关联与推广入口核验" },
              { id: "art-air-002", title: "同名机场是不是同一家：品牌别名、域名与服务资料如何对照" },
              { id: "art-air-003", title: "品牌官网入口核验方法" },
              { id: "art-air-004", title: "品牌域名变更记录" },
              { id: "art-air-005", title: "仿冒网站防范" },
              { id: "art-air-006", title: "名称别名与正确入口完整说明" }
            ]
          },
          {
            id: "brand-profiles-and-data",
            name: "品牌档案与资料解释",
            slug: "brand-profiles-and-data",
            url: "/airports/brand-lookup/brand-profiles-and-data/",
            h1: "品牌档案与资料解释：档案字段结构、服务范围与支持度判定",
            coreQuestion: "如何看懂本站的品牌档案？未核验字段与品牌方声称如何区分？",
            articles: [
              { id: "art-air-007", title: "品牌档案包含哪些字段" },
              { id: "art-air-008", title: "品牌档案资料解释方法" },
              { id: "art-air-009", title: "品牌服务范围说明" },
              { id: "art-air-010", title: "品牌客户端支持说明" },
              { id: "art-air-011", title: "品牌协议支持说明" },
              { id: "art-air-012", title: "品牌档案与资料解释完整说明" }
            ]
          }
        ]
      },
      {
        id: "public-info-and-tos",
        name: "公开资料与服务条款",
        slug: "public-info-and-tos",
        url: "/airports/public-info-and-tos/",
        h1: "公开资料与服务条款：官方公告核对、TOS条款解读与套餐交叉验证",
        desc: "核实品牌公告发布通道、服务协议中的免责限制、退款与数据保管条款。",
        clusters: [
          {
            id: "announcements-and-tos",
            name: "公告支持与条款核查",
            slug: "announcements-and-tos",
            url: "/airports/public-info-and-tos/announcements-and-tos/",
            h1: "公告支持与条款核查：官方群组、服务条款TOS暗坑与客服响应核实",
            coreQuestion: "商家的服务条款（TOS）里藏有哪些不平等的免责或封号条款？",
            articles: [
              { id: "art-air-013", title: "品牌公告渠道说明" },
              { id: "art-air-014", title: "品牌服务状态判断" },
              { id: "art-air-015", title: "品牌服务条款核查" },
              { id: "art-air-016", title: "品牌客服支持渠道" },
              { id: "art-air-017", title: "品牌服务承诺与限制" },
              { id: "art-air-018", title: "公告支持与条款核查完整说明" }
            ]
          },
          {
            id: "plan-data-cross-check",
            name: "套餐信息与来源交叉核对",
            slug: "plan-data-cross-check",
            url: "/airports/public-info-and-tos/plan-data-cross-check/",
            h1: "套餐信息与来源交叉核对：历史价格变动、核验时间与第三方核实",
            coreQuestion: "如何核实机场套餐是否悄悄涨价或缩水？数据来源如何实现多方对照？",
            articles: [
              { id: "art-air-019", title: "品牌套餐数据说明" },
              { id: "art-air-020", title: "套餐核验日期说明" },
              { id: "art-air-021", title: "套餐更新记录" },
              { id: "art-air-022", title: "套餐资料交叉核对" },
              { id: "art-air-023", title: "套餐来源说明" },
              { id: "art-air-024", title: "套餐信息与来源交叉核对完整说明" }
            ]
          }
        ]
      },
      {
        id: "brand-changes-and-status",
        name: "品牌变更与服务状态",
        slug: "brand-changes-and-status",
        url: "/airports/brand-changes-and-status/",
        h1: "品牌变更与服务状态：更名迁移事件、服务停更退出与纠错反馈",
        desc: "跟踪品牌并购、主体变更历史，记录突发异常停服事件并开放纠错通道。",
        clusters: [
          {
            id: "rename-migration-adjust",
            name: "改名迁移与服务调整",
            slug: "rename-migration-adjust",
            url: "/airports/brand-changes-and-status/rename-migration-adjust/",
            h1: "改名迁移与服务调整：机场品牌改名历史、主体迁移与节点架构升级",
            coreQuestion: "老牌机场突然改名或者换网址，背后有哪些原因？如何确认不是被盗？",
            articles: [
              { id: "art-air-025", title: "品牌改名记录" },
              { id: "art-air-026", title: "品牌服务迁移说明" },
              { id: "art-air-027", title: "品牌服务调整记录" },
              { id: "art-air-028", title: "品牌入口更新" },
              { id: "art-air-029", title: "品牌服务变更影响" },
              { id: "art-air-030", title: "改名迁移与服务调整完整说明" }
            ]
          },
          {
            id: "outages-and-exit-records",
            name: "异常公告与退出信息",
            slug: "outages-and-exit-records",
            url: "/airports/brand-changes-and-status/outages-and-exit-records/",
            h1: "异常公告与退出信息：突发故障停机记录、跑路退出预警与读者纠错",
            coreQuestion: "某机场打不开了是日常维护还是跑路？本站如何客观记录并核实退出事件？",
            articles: [
              { id: "art-air-031", title: "品牌故障公告" },
              { id: "art-air-032", title: "品牌服务停止说明" },
              { id: "art-air-033", title: "品牌退出记录" },
              { id: "art-air-034", title: "品牌资料纠错" },
              { id: "art-air-035", title: "品牌资料反馈" },
              { id: "art-air-036", title: "异常公告与退出信息完整说明" }
            ]
          }
        ]
      }
    ]
  }
];

export const STATIC_PAGES = [
  { id: "about", title: "关于本站", url: "/about/", desc: "机场wiki指南建站背景、独立性立场与编辑原则" },
  { id: "editorial-policy", title: "评测方法", url: "/editorial-policy/", desc: "实测环境控制、样本采集、数据核验与局限性披露" },
  { id: "editorial-standards", title: "编辑规范", url: "/editorial-standards/", desc: "内容真实性准则、术语规范与禁止夸大承诺" },
  { id: "promotion-disclosure", title: "商业合作披露", url: "/promotion-disclosure/", desc: "推广链接说明、返佣机制与中立客观性保障" },
  { id: "privacy", title: "隐私说明", url: "/privacy/", desc: "零日志原则、本地分析、Cookies 使用及数据安全说明" },
  { id: "disclaimer", title: "免责声明", url: "/disclaimer/", desc: "合法用途声明、无隶属关系说明与风险自担提示" },
  { id: "contact", title: "纠错反馈", url: "/contact/", desc: "读者勘误、数据失效反馈通道与响应承诺" },
  { id: "search", title: "搜索中心", url: "/search/", desc: "基于 Pagefind 的全站静态极速搜索" }
];
