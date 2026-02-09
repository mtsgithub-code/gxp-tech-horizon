import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:info@gxpin.com?subject=Inquiry from ${formData.name}&body=${formData.message}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
              {t("contact.label")}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground mb-6">
              {t("contact.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-body">
              {t("contact.description")}
            </p>

            <div className="space-y-6">
              <a href="mailto:info@gxpin.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact.email")}</p>
                  <p className="text-foreground font-medium">info@gxpin.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact.presence")}</p>
                  <p className="text-foreground font-medium">{t("contact.locations")}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact.hours")}</p>
                  <p className="text-foreground font-medium">{t("contact.hoursValue")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-card">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              {t("contact.formTitle")}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.name")}
                  </label>
                  <input
                    type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                    placeholder={t("contact.namePlaceholder")}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.emailLabel")}
                  </label>
                  <input
                    type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                    placeholder={t("contact.emailPlaceholder")}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.company")}
                </label>
                <input
                  type="text" id="company" name="company" value={formData.company} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                  placeholder={t("contact.companyPlaceholder")}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.message")}
                </label>
                <textarea
                  id="message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200 resize-none"
                  placeholder={t("contact.messagePlaceholder")}
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-rose text-primary-foreground font-medium rounded-lg shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                {t("contact.send")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
