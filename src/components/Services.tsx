import { Cpu, Handshake, LineChart, Building2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Cpu,
      title: t("services.s1.title"),
      description: t("services.s1.desc"),
      features: [t("services.s1.f1"), t("services.s1.f2"), t("services.s1.f3")],
    },
    {
      icon: Handshake,
      title: t("services.s2.title"),
      description: t("services.s2.desc"),
      features: [t("services.s2.f1"), t("services.s2.f2"), t("services.s2.f3")],
    },
    {
      icon: LineChart,
      title: t("services.s3.title"),
      description: t("services.s3.desc"),
      features: [t("services.s3.f1"), t("services.s3.f2"), t("services.s3.f3")],
    },
    {
      icon: Building2,
      title: t("services.s4.title"),
      description: t("services.s4.desc"),
      features: [t("services.s4.f1"), t("services.s4.f2"), t("services.s4.f3")],
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
            {t("services.label")}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground mb-6">
            {t("services.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-body">
            {t("services.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative p-8 lg:p-10 rounded-2xl bg-card border border-border overflow-hidden hover:shadow-card transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-300" />
              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-gradient-rose flex items-center justify-center mb-6 shadow-soft">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 font-body">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground font-body">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all duration-200">
                  {t("services.learnMore")}
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
