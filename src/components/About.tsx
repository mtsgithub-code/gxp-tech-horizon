import { Globe, TrendingUp, Users, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { value: t("about.stat1.value"), label: t("about.stat1.label") },
    { value: t("about.stat2.value"), label: t("about.stat2.label") },
    { value: t("about.stat3.value"), label: t("about.stat3.label") },
    { value: t("about.stat4.value"), label: t("about.stat4.label") },
  ];

  const values = [
    { icon: Globe, title: t("about.value1.title"), description: t("about.value1.desc") },
    { icon: TrendingUp, title: t("about.value2.title"), description: t("about.value2.desc") },
    { icon: Users, title: t("about.value3.title"), description: t("about.value3.desc") },
    { icon: Target, title: t("about.value4.title"), description: t("about.value4.desc") },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
            {t("about.label")}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground mb-6">
            {t("about.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-body">
            {t("about.description")}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-lg bg-gradient-subtle border border-border/50 hover:shadow-card transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="font-display text-4xl sm:text-5xl font-semibold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl border border-border bg-card hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-body">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
