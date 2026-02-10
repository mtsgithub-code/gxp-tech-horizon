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
  "hero.badge": { en: "Digital Technology Cooperation Across Nations", zh: "国家间数字科技合作" },
  "hero.title1": { en: "Bridging", zh: "连接" },
  "hero.title2": { en: "Digital Nations", zh: "数字世界" },
  "hero.subtitle": {
    en: "Pioneering inter-governmental digital technology cooperation and industrial investment — connecting Chinese tech enterprises to global markets, and international partners to Digital China.",
    zh: "引领国家间数字科技合作与产业投资——助力中国科技企业全球化，连接海外政府与企业融入数字中国成长。",
  },
  "hero.cta1": { en: "Explore Our Services", zh: "探索我们的服务" },
  "hero.cta2": { en: "Learn More", zh: "了解更多" },
  "hero.scroll": { en: "Scroll", zh: "滚动" },

  // About
  "about.label": { en: "About Us", zh: "关于我们" },
  "about.title": { en: "Inter-Governmental Digital Cooperation", zh: "国家间数字科技合作" },
  "about.description": {
    en: "GXP specializes in inter-governmental digital technology cooperation and industrial investment. Our unique strength lies in facilitating high-level international exchanges in economy, trade, technology, culture, and education — driving cross-border cooperation projects that shape the global digital landscape.",
    zh: "GXP专注于国家间数字科技合作与产业投资。我们的独特优势在于促进国际国内高级别经贸、科技、文化、教育交流与国际合作项目，构建全球数字化发展的合作桥梁。",
  },
  "about.stat1.value": { en: "$1B+", zh: "10亿+" },
  "about.stat1.label": { en: "Outbound Investment Facilitated", zh: "美元对外投资促成" },
  "about.stat2.value": { en: "100+", zh: "100+" },
  "about.stat2.label": { en: "Countries & Regions Covered", zh: "国家地区深入合作" },
  "about.stat3.value": { en: "4", zh: "4" },
  "about.stat3.label": { en: "Continents Active", zh: "大洲深度布局" },
  "about.stat4.value": { en: "50+", zh: "50+" },
  "about.stat4.label": { en: "Government Partnerships", zh: "政府级合作伙伴" },
  "about.value1.title": { en: "High-Level Exchanges", zh: "高级别交流" },
  "about.value1.desc": {
    en: "Facilitating top-tier international exchanges in economy, trade, technology, culture, and education between governments and enterprises.",
    zh: "促进政府与企业间在经贸、科技、文化、教育领域的高级别国际交流。",
  },
  "about.value2.title": { en: "China Tech Globalization", zh: "中国科技出海" },
  "about.value2.desc": {
    en: "Empowering Chinese technology enterprises to expand globally with strategic market entry and partnership support.",
    zh: "助力中国科技企业全球化拓展，提供战略性市场进入与合作支持。",
  },
  "about.value3.title": { en: "Gateway to Digital China", zh: "数字中国入口" },
  "about.value3.desc": {
    en: "Connecting overseas governments and enterprises to the rapidly growing Digital China ecosystem for mutual growth.",
    zh: "连接海外政府与企业进入高速成长的数字中国生态，实现互利共赢。",
  },
  "about.value4.title": { en: "Global Digital Infrastructure", zh: "全球数字基建" },
  "about.value4.desc": {
    en: "Building a global digital infrastructure ecosystem centered on e-wallets, spanning cross-border e-commerce, smart ports, cities, healthcare, and cultural tourism.",
    zh: "构建以电子钱包为核心的全球数字基建体系，覆盖跨境电商、智慧港口、智慧城市、智慧医疗、智慧文旅。",
  },

  // Services
  "services.label": { en: "Investment Sectors", zh: "投资领域" },
  "services.title": { en: "Global Digital Infrastructure Ecosystem", zh: "全球数字基建生态体系" },
  "services.description": {
    en: "Centered on e-wallet-driven global digital infrastructure, we invest across key sectors that power the future of international digital connectivity.",
    zh: "以电子钱包为核心的全球数字基建体系，投资布局驱动国际数字互联互通未来的关键领域。",
  },
  "services.learnMore": { en: "Learn More", zh: "了解更多" },
  "services.s1.title": { en: "E-Wallet & Digital Payments", zh: "电子钱包与数字支付" },
  "services.s1.desc": {
    en: "Core digital infrastructure enabling seamless cross-border financial connectivity and inclusive digital economies across emerging markets.",
    zh: "核心数字基础设施，实现跨境金融无缝连接，构建新兴市场包容性数字经济。",
  },
  "services.s1.f1": { en: "Cross-Border Payment Systems", zh: "跨境支付系统" },
  "services.s1.f2": { en: "Digital Financial Inclusion", zh: "数字普惠金融" },
  "services.s1.f3": { en: "Mobile Payment Infrastructure", zh: "移动支付基础设施" },
  "services.s2.title": { en: "Cross-Border E-Commerce", zh: "跨境电商" },
  "services.s2.desc": {
    en: "Enabling global trade through digital platforms that connect manufacturers, merchants, and consumers across borders.",
    zh: "通过数字平台连接跨境制造商、商户与消费者，赋能全球贸易。",
  },
  "services.s2.f1": { en: "Platform Development", zh: "平台建设" },
  "services.s2.f2": { en: "Supply Chain Digitization", zh: "供应链数字化" },
  "services.s2.f3": { en: "Trade Facilitation", zh: "贸易便利化" },
  "services.s3.title": { en: "Smart Infrastructure", zh: "智慧基础设施" },
  "services.s3.desc": {
    en: "Investing in smart ports, smart cities, and intelligent transportation systems that form the backbone of modern digital economies.",
    zh: "投资智慧港口、智慧城市和智能交通系统，构建现代数字经济的基础骨干。",
  },
  "services.s3.f1": { en: "Smart Ports", zh: "智慧港口" },
  "services.s3.f2": { en: "Smart Cities", zh: "智慧城市" },
  "services.s3.f3": { en: "Intelligent Transportation", zh: "智慧交通" },
  "services.s4.title": { en: "Digital Services", zh: "数字服务" },
  "services.s4.desc": {
    en: "Advancing healthcare digitization and cultural tourism through technology, creating connected and accessible services worldwide.",
    zh: "通过科技推动医疗数字化和文化旅游升级，打造互联互通的全球化服务体系。",
  },
  "services.s4.f1": { en: "Smart Healthcare", zh: "智慧医疗" },
  "services.s4.f2": { en: "Smart Cultural Tourism", zh: "智慧文旅" },
  "services.s4.f3": { en: "Digital Public Services", zh: "数字公共服务" },

  // Contact
  "contact.label": { en: "Contact Us", zh: "联系我们" },
  "contact.title": { en: "Let's Start a Conversation", zh: "让我们开始对话" },
  "contact.description": {
    en: "Whether you're a Chinese tech enterprise seeking global expansion or an international partner looking to enter Digital China, we're here to bridge the way.",
    zh: "无论您是寻求全球化的中国科技企业，还是希望进入数字中国的国际合作伙伴，我们都将为您搭建合作桥梁。",
  },
  "contact.email": { en: "Email", zh: "电子邮件" },
  "contact.presence": { en: "Key Regions", zh: "重点区域" },
  "contact.locations": { en: "Asia • Europe • Africa • Oceania", zh: "亚洲 • 欧洲 • 非洲 • 大洋洲" },
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
    en: "Bridging Digital Nations through inter-governmental technology cooperation and industrial investment. Facilitating high-level international exchanges across 100+ countries and regions.",
    zh: "通过国家间数字科技合作与产业投资连接数字世界。促进覆盖100多个国家和地区的高级别国际交流与合作。",
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
