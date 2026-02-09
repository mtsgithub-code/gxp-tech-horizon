import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Header
  "nav.about": { en: "About", zh: "关于我们" },
  "nav.services": { en: "Services", zh: "服务" },
  "nav.contact": { en: "Contact", zh: "联系我们" },
  "nav.getInTouch": { en: "Get in Touch", zh: "联系我们" },
  "nav.brandName": { en: "GXP Investment", zh: "GXP 投资咨询" },

  // Hero
  "hero.badge": { en: "Global Investment Excellence", zh: "全球投资卓越" },
  "hero.title1": { en: "Shaping", zh: "塑造" },
  "hero.title2": { en: "Global Value", zh: "全球价值" },
  "hero.subtitle": {
    en: "Pioneering global technology industry investment and fostering international cooperation to create lasting value across markets.",
    zh: "引领全球科技产业投资，推动国际合作，在全球市场中创造持久价值。",
  },
  "hero.cta1": { en: "Explore Our Services", zh: "探索我们的服务" },
  "hero.cta2": { en: "Learn More", zh: "了解更多" },
  "hero.scroll": { en: "Scroll", zh: "滚动" },

  // About
  "about.label": { en: "About Us", zh: "关于我们" },
  "about.title": { en: "Connecting Worlds, Creating Value", zh: "连接世界，创造价值" },
  "about.description": {
    en: "GXP Investment Consulting is a premier global advisory firm specializing in technology industry investments and cross-border cooperation. We bridge East and West, connecting innovative companies with strategic capital and partnership opportunities.",
    zh: "GXP投资咨询是一家领先的全球咨询公司，专注于科技产业投资和跨境合作。我们连接东西方，将创新企业与战略资本和合作机会对接。",
  },
  "about.stat1.value": { en: "15+", zh: "15+" },
  "about.stat1.label": { en: "Years Experience", zh: "年经验" },
  "about.stat2.value": { en: "$2B+", zh: "20亿+" },
  "about.stat2.label": { en: "Assets Managed", zh: "管理资产" },
  "about.stat3.value": { en: "30+", zh: "30+" },
  "about.stat3.label": { en: "Global Partners", zh: "全球合作伙伴" },
  "about.stat4.value": { en: "100+", zh: "100+" },
  "about.stat4.label": { en: "Successful Deals", zh: "成功案例" },
  "about.value1.title": { en: "Global Reach", zh: "全球覆盖" },
  "about.value1.desc": {
    en: "Connecting opportunities across Asia, Europe, and North America with strategic precision.",
    zh: "以战略精准度连接亚洲、欧洲和北美的投资机会。",
  },
  "about.value2.title": { en: "Strategic Growth", zh: "战略增长" },
  "about.value2.desc": {
    en: "Identifying and nurturing high-potential technology investments for sustainable returns.",
    zh: "识别和培育高潜力科技投资，实现可持续回报。",
  },
  "about.value3.title": { en: "Partnership Focus", zh: "合作至上" },
  "about.value3.desc": {
    en: "Building lasting relationships between enterprises, investors, and innovators worldwide.",
    zh: "在全球范围内建立企业、投资者和创新者之间的持久合作关系。",
  },
  "about.value4.title": { en: "Value Creation", zh: "价值创造" },
  "about.value4.desc": {
    en: "Delivering measurable impact through disciplined investment strategies and execution.",
    zh: "通过严谨的投资策略和执行力创造可衡量的价值。",
  },

  // Services
  "services.label": { en: "Our Services", zh: "我们的服务" },
  "services.title": { en: "Comprehensive Investment Solutions", zh: "全面的投资解决方案" },
  "services.description": {
    en: "From technology investment to international cooperation, we provide end-to-end advisory services that drive growth and create lasting value.",
    zh: "从科技投资到国际合作，我们提供端到端的咨询服务，推动增长并创造持久价值。",
  },
  "services.learnMore": { en: "Learn More", zh: "了解更多" },
  "services.s1.title": { en: "Technology Investment", zh: "科技投资" },
  "services.s1.desc": {
    en: "Strategic investments in cutting-edge technology sectors including AI, semiconductors, clean tech, and digital infrastructure.",
    zh: "在人工智能、半导体、清洁技术和数字基础设施等前沿科技领域的战略投资。",
  },
  "services.s1.f1": { en: "Due Diligence", zh: "尽职调查" },
  "services.s1.f2": { en: "Portfolio Management", zh: "投资组合管理" },
  "services.s1.f3": { en: "Growth Advisory", zh: "增长咨询" },
  "services.s2.title": { en: "International Cooperation", zh: "国际合作" },
  "services.s2.desc": {
    en: "Facilitating cross-border partnerships and joint ventures between technology leaders across global markets.",
    zh: "促进全球科技领军企业之间的跨境合作与合资。",
  },
  "services.s2.f1": { en: "Partnership Structuring", zh: "合作架构" },
  "services.s2.f2": { en: "Market Entry Strategy", zh: "市场进入策略" },
  "services.s2.f3": { en: "Regulatory Navigation", zh: "监管指导" },
  "services.s3.title": { en: "M&A Advisory", zh: "并购咨询" },
  "services.s3.desc": {
    en: "End-to-end mergers and acquisitions support for technology companies seeking strategic growth or exit opportunities.",
    zh: "为寻求战略增长或退出机会的科技公司提供端到端的并购支持。",
  },
  "services.s3.f1": { en: "Valuation Analysis", zh: "估值分析" },
  "services.s3.f2": { en: "Deal Negotiation", zh: "交易谈判" },
  "services.s3.f3": { en: "Integration Planning", zh: "整合规划" },
  "services.s4.title": { en: "Capital Raising", zh: "资本募集" },
  "services.s4.desc": {
    en: "Connecting high-growth technology enterprises with institutional investors, family offices, and strategic partners.",
    zh: "将高增长科技企业与机构投资者、家族办公室和战略合作伙伴对接。",
  },
  "services.s4.f1": { en: "Investor Roadshows", zh: "投资者路演" },
  "services.s4.f2": { en: "Pitch Development", zh: "商业计划书开发" },
  "services.s4.f3": { en: "Term Negotiation", zh: "条款谈判" },

  // Contact
  "contact.label": { en: "Contact Us", zh: "联系我们" },
  "contact.title": { en: "Let's Start a Conversation", zh: "让我们开始对话" },
  "contact.description": {
    en: "Whether you're exploring investment opportunities or seeking strategic partnerships, we're here to help you navigate the global technology landscape.",
    zh: "无论您是在寻找投资机会还是寻求战略合作，我们都将帮助您在全球科技领域中开拓前行。",
  },
  "contact.email": { en: "Email", zh: "电子邮件" },
  "contact.presence": { en: "Global Presence", zh: "全球布局" },
  "contact.locations": { en: "Hong Kong • Shanghai • Singapore", zh: "香港 • 上海 • 新加坡" },
  "contact.hours": { en: "Office Hours", zh: "办公时间" },
  "contact.hoursValue": { en: "Mon - Fri: 9:00 AM - 6:00 PM (HKT)", zh: "周一至周五: 9:00 - 18:00 (HKT)" },
  "contact.formTitle": { en: "Send Us a Message", zh: "给我们留言" },
  "contact.name": { en: "Full Name", zh: "姓名" },
  "contact.namePlaceholder": { en: "Your name", zh: "您的姓名" },
  "contact.emailLabel": { en: "Email", zh: "电子邮件" },
  "contact.emailPlaceholder": { en: "your@email.com", zh: "your@email.com" },
  "contact.company": { en: "Company", zh: "公司" },
  "contact.companyPlaceholder": { en: "Your company", zh: "您的公司" },
  "contact.message": { en: "Message", zh: "留言" },
  "contact.messagePlaceholder": { en: "How can we help you?", zh: "我们如何帮助您？" },
  "contact.send": { en: "Send Message", zh: "发送消息" },

  // Footer
  "footer.description": {
    en: "Shaping Global Value through strategic technology investments and international cooperation. Building bridges between enterprises, investors, and innovators worldwide.",
    zh: "通过战略科技投资和国际合作塑造全球价值。在全球范围内搭建企业、投资者和创新者之间的桥梁。",
  },
  "footer.company": { en: "Company", zh: "公司" },
  "footer.legal": { en: "Legal", zh: "法律" },
  "footer.aboutUs": { en: "About Us", zh: "关于我们" },
  "footer.services": { en: "Services", zh: "服务" },
  "footer.contact": { en: "Contact", zh: "联系" },
  "footer.privacy": { en: "Privacy Policy", zh: "隐私政策" },
  "footer.terms": { en: "Terms of Service", zh: "服务条款" },
  "footer.disclaimer": { en: "Disclaimer", zh: "免责声明" },
  "footer.rights": { en: "GXP Investment Consulting. All rights reserved.", zh: "GXP投资咨询 版权所有。" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[key]?.[language] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
