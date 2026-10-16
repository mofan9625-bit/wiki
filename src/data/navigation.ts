export interface NavItem {
  name: string;
  url: string;
}

export interface NavGroup {
  groupName: string;
  items: NavItem[];
}

export const MAIN_NAV: NavItem[] = [
  { name: "首页", url: "/" },
  { name: "机场推荐", url: "/recommend/" },
  { name: "免费机场", url: "/free/" },
  { name: "便宜机场", url: "/cheap/" },
  { name: "机场评测", url: "/reviews/" },
  { name: "机场优惠码", url: "/coupons/" },
  { name: "网站地图", url: "/sitemap/" },
];

export const TOPICS_DROPDOWN: NavGroup[] = [
  {
    groupName: "预算与用途",
    items: [
      { name: "套餐对比", url: "/plans/" },
      { name: "AI机场", url: "/ai/" },
      { name: "流媒体机场", url: "/streaming/" },
    ],
  },
  {
    groupName: "下载与技术",
    items: [
      { name: "客户端教程", url: "/clients/" },
      { name: "网络排障", url: "/troubleshooting/" },
      { name: "机场百科", url: "/wiki/" },
    ],
  },
  {
    groupName: "品牌查询与导览",
    items: [
      { name: "机场大全", url: "/airports/" },
      { name: "网站地图", url: "/sitemap/" },
    ],
  },
];

export const FOOTER_POLICY_LINKS: NavItem[] = [
  { name: "关于本站", url: "/about/" },
  { name: "评测方法", url: "/editorial-policy/" },
  { name: "编辑规范", url: "/editorial-standards/" },
  { name: "商业合作披露", url: "/promotion-disclosure/" },
  { name: "隐私说明", url: "/privacy/" },
  { name: "免责声明", url: "/disclaimer/" },
  { name: "纠错反馈", url: "/contact/" },
  { name: "网站地图", url: "/sitemap/" },
];
