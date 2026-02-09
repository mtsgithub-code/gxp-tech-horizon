import { Cpu, Handshake, LineChart, Building2, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Cpu,
      title: "Technology Investment",
      description: "Strategic investments in cutting-edge technology sectors including AI, semiconductors, clean tech, and digital infrastructure.",
      features: ["Due Diligence", "Portfolio Management", "Growth Advisory"],
    },
    {
      icon: Handshake,
      title: "International Cooperation",
      description: "Facilitating cross-border partnerships and joint ventures between technology leaders across global markets.",
      features: ["Partnership Structuring", "Market Entry Strategy", "Regulatory Navigation"],
    },
    {
      icon: LineChart,
      title: "M&A Advisory",
      description: "End-to-end mergers and acquisitions support for technology companies seeking strategic growth or exit opportunities.",
      features: ["Valuation Analysis", "Deal Negotiation", "Integration Planning"],
    },
    {
      icon: Building2,
      title: "Capital Raising",
      description: "Connecting high-growth technology enterprises with institutional investors, family offices, and strategic partners.",
      features: ["Investor Roadshows", "Pitch Development", "Term Negotiation"],
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground mb-6">
            Comprehensive Investment Solutions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-body">
            From technology investment to international cooperation, we provide end-to-end advisory services that drive growth and create lasting value.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 lg:p-10 rounded-2xl bg-card border border-border overflow-hidden hover:shadow-card transition-all duration-300"
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-300" />
              
              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-gradient-rose flex items-center justify-center mb-6 shadow-soft">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6 font-body">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground font-body">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all duration-200"
                >
                  Learn More
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
