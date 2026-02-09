import { Globe, TrendingUp, Users, Target } from "lucide-react";

const About = () => {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "$2B+", label: "Assets Managed" },
    { value: "30+", label: "Global Partners" },
    { value: "100+", label: "Successful Deals" },
  ];

  const values = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting opportunities across Asia, Europe, and North America with strategic precision.",
    },
    {
      icon: TrendingUp,
      title: "Strategic Growth",
      description: "Identifying and nurturing high-potential technology investments for sustainable returns.",
    },
    {
      icon: Users,
      title: "Partnership Focus",
      description: "Building lasting relationships between enterprises, investors, and innovators worldwide.",
    },
    {
      icon: Target,
      title: "Value Creation",
      description: "Delivering measurable impact through disciplined investment strategies and execution.",
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
            About Us
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground mb-6">
            Connecting Worlds, Creating Value
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-body">
            GXP Investment Consulting is a premier global advisory firm specializing in technology industry investments and cross-border cooperation. We bridge East and West, connecting innovative companies with strategic capital and partnership opportunities.
          </p>
        </div>

        {/* Stats */}
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
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group p-8 rounded-xl border border-border bg-card hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-body">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
