
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Enterprise Data Platforms",
      description: "Build scalable data infrastructure that transforms raw information into actionable business intelligence.",
      icon: "🔗",
      features: ["Real-time Analytics", "Data Integration", "Machine Learning Pipelines", "Compliance & Security"],
      gradient: "from-blue-500/10 to-cyan-500/10",
      border: "border-blue-500/20"
    },
    {
      title: "Cloud-Native Applications",
      description: "Develop resilient, scalable applications built for modern cloud infrastructure and global deployment.",
      icon: "☁️",
      features: ["Microservices Architecture", "Container Orchestration", "Auto-scaling", "Global CDN"],
      gradient: "from-purple-500/10 to-pink-500/10",
      border: "border-purple-500/20"
    },
    {
      title: "AI & Decision Intelligence",
      description: "Leverage artificial intelligence to automate decisions and unlock insights from complex datasets.",
      icon: "🧠",
      features: ["Predictive Modeling", "Natural Language Processing", "Computer Vision", "Automated Insights"],
      gradient: "from-green-500/10 to-emerald-500/10",
      border: "border-green-500/20"
    },
    {
      title: "Digital Transformation",
      description: "Modernize legacy systems and processes with cutting-edge technology and strategic implementation.",
      icon: "⚡",
      features: ["Legacy Modernization", "Process Automation", "Integration Strategy", "Change Management"],
      gradient: "from-orange-500/10 to-red-500/10",
      border: "border-orange-500/20"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Protect critical assets with enterprise-grade security frameworks and threat intelligence.",
      icon: "🛡️",
      features: ["Zero Trust Architecture", "Threat Detection", "Compliance Management", "Security Operations"],
      gradient: "from-indigo-500/10 to-blue-500/10",
      border: "border-indigo-500/20"
    },
    {
      title: "Custom Software Development",
      description: "Engineer bespoke solutions tailored to unique business requirements and operational workflows.",
      icon: "⚙️",
      features: ["Full-stack Development", "API Design", "Database Architecture", "Performance Optimization"],
      gradient: "from-teal-500/10 to-cyan-500/10",
      border: "border-teal-500/20"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-950 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20 animate-fade-in">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-8">
            Capabilities That
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Define Excellence
            </span>
          </h2>
          <p className="font-inter text-xl text-gray-300 leading-relaxed">
            We architect and deploy mission-critical software solutions that scale with your ambitions. 
            Every system we build is designed for performance, security, and long-term value creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group bg-gradient-to-br ${service.gradient} border ${service.border} hover:scale-105 transition-all duration-500 hover:shadow-2xl animate-scale-in`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8 h-full flex flex-col">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="font-playfair text-2xl font-semibold text-black mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="font-inter text-black-300 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                      <span className="font-inter text-sm text-black-400">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-blue-500 font-inter text-sm font-medium group-hover:text-blue-300 transition-colors cursor-pointer">
                  Learn More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
