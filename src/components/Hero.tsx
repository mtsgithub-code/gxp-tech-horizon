import { ArrowDown } from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Key Visual Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] lg:w-[1100px] lg:h-[1100px] opacity-20 animate-float">
          <img
            src={heroVisual}
            alt=""
            className="w-full h-full object-contain"
            aria-hidden="true"
          />
        </div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-8 animate-fade-up opacity-0">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-accent-foreground">
                {t("hero.badge")}
              </span>
            </div>

            {/* Main heading */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up opacity-0 animation-delay-100 tracking-tight">
              {t("hero.title1")}{" "}
              <span className="text-gradient">{t("hero.title2")}</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed animate-fade-up opacity-0 animation-delay-200 font-body">
              {t("hero.subtitle")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up opacity-0 animation-delay-300">
              <a
                href="#services"
                className="px-8 py-4 bg-gradient-rose text-primary-foreground font-medium rounded-md shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                {t("hero.cta1")}
              </a>
              <a
                href="#about"
                className="px-8 py-4 border border-border text-foreground font-medium rounded-md hover:bg-accent transition-colors duration-200"
              >
                {t("hero.cta2")}
              </a>
            </div>
          </div>

          {/* Key Visual */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in opacity-0 animation-delay-200">
            <div className="relative">
              <img
                src={heroVisual}
                alt="Global technology network"
                className="w-[500px] h-auto rounded-2xl shadow-card"
              />
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl -z-10 blur-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 animation-delay-400">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          <span className="text-xs font-medium uppercase tracking-wider">{t("hero.scroll")}</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
