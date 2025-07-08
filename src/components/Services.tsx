
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored solutions built from scratch to meet your specific business requirements and objectives.",
      icon: "💻",
      features: ["Full-stack Development", "API Integration", "Database Design", "Performance Optimization"]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to enhance your business agility.",
      icon: "☁️",
      features: ["AWS/Azure Migration", "DevOps Implementation", "Microservices Architecture", "Auto-scaling Solutions"]
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      icon: "📱",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"]
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence and machine learning algorithms.",
      icon: "🤖",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Automation Solutions"]
    },
    {
      title: "Digital Transformation",
      description: "Complete digital overhaul to modernize your business processes and technology stack.",
      icon: "🚀",
      features: ["Process Automation", "Legacy System Modernization", "Digital Strategy", "Change Management"]
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security measures to protect your business from evolving cyber threats.",
      icon: "🔐",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software solutions designed to elevate your business to new heights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-lg animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="font-inter text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="font-inter text-sm text-gray-500 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
