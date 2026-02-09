import { Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/gxp-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Disclaimer", href: "#" },
    ],
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="GXP Investment Consulting"
                className="h-12 w-auto rounded-lg bg-white p-1"
              />
              <span className="font-display text-xl font-semibold">
                GXP Investment
              </span>
            </div>
            <p className="text-background/70 max-w-md mb-6 font-body leading-relaxed">
              Shaping Global Value through strategic technology investments and international cooperation. Building bridges between enterprises, investors, and innovators worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/10 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/10 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors duration-200 font-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors duration-200 font-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm font-body">
            © {currentYear} GXP Investment Consulting. All rights reserved.
          </p>
          <a
            href="mailto:info@gxpin.com"
            className="text-background/70 hover:text-background text-sm transition-colors duration-200 font-body"
          >
            info@gxpin.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
