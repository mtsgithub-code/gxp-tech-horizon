import logo from "@/assets/gxp-logo.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { label: t("footer.aboutUs"), href: "#about" },
      { label: t("footer.services"), href: "#services" },
      { label: t("footer.contact"), href: "#contact" },
    ],
    legal: [
      { label: t("footer.privacy"), href: "#" },
      { label: t("footer.terms"), href: "#" },
      { label: t("footer.disclaimer"), href: "#" },
    ],
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="GXP Investment Consulting" className="h-12 w-auto rounded-lg bg-white p-1" />
              <span className="font-display text-xl font-semibold">{t("nav.brandName")}</span>
            </div>
            <p className="text-background/70 max-w-md mb-6 font-body leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-6">{t("footer.company")}</h4>
            <ul className="space-y-4">
              {links.company.map((link) => (
                <li key={link.href + link.label}>
                  <a href={link.href} className="text-background/70 hover:text-background transition-colors duration-200 font-body">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-6">{t("footer.legal")}</h4>
            <ul className="space-y-4">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-background/70 hover:text-background transition-colors duration-200 font-body">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm font-body">
            © {currentYear} {t("footer.rights")}
          </p>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-background/50 hover:text-background text-sm transition-colors duration-200 font-body"
          >
            ICP备案许可证：京ICP备2026020867号-1
          </a>
          <a href="mailto:info@gxpin.com" className="text-background/70 hover:text-background text-sm transition-colors duration-200 font-body">
            info@gxpin.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
