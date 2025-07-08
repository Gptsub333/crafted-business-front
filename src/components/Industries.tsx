
const Industries = () => {
  const industries = [
    {
      name: "Healthcare",
      description: "Revolutionizing patient care with secure, compliant software solutions",
      icon: "🏥",
      solutions: ["Electronic Health Records", "Telemedicine Platforms", "Medical Device Integration", "Healthcare Analytics"]
    },
    {
      name: "Finance & Banking",
      description: "Secure, scalable financial technology solutions for modern banking",
      icon: "🏦",
      solutions: ["Digital Banking", "Payment Processing", "Fraud Detection", "Regulatory Compliance"]
    },
    {
      name: "E-commerce & Retail",
      description: "Driving online sales with powerful e-commerce platforms and tools",
      icon: "🛒",
      solutions: ["Online Marketplaces", "Inventory Management", "Customer Analytics", "Mobile Commerce"]
    },
    {
      name: "Manufacturing",
      description: "Smart manufacturing solutions for Industry 4.0 transformation",
      icon: "🏭",
      solutions: ["IoT Integration", "Supply Chain Management", "Quality Control Systems", "Predictive Maintenance"]
    },
    {
      name: "Education",
      description: "Innovative educational technology to enhance learning experiences",
      icon: "🎓",
      solutions: ["Learning Management Systems", "Virtual Classrooms", "Student Information Systems", "Educational Apps"]
    },
    {
      name: "Real Estate",
      description: "Digital solutions transforming property management and sales",
      icon: "🏢",
      solutions: ["Property Management", "Virtual Tours", "CRM Systems", "Market Analytics"]
    }
  ];

  return (
    <section id="industries" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-5xl font-bold text-gray-900 mb-6">
            Industries We Serve
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering specialized solutions across diverse industries with deep domain expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-in-left"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-5xl mb-4 text-center">
                {industry.icon}
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-4 text-center">
                {industry.name}
              </h3>
              <p className="font-inter text-gray-600 mb-6 text-center leading-relaxed">
                {industry.description}
              </p>
              <div className="space-y-3">
                {industry.solutions.map((solution, solutionIndex) => (
                  <div key={solutionIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="font-inter text-sm text-gray-700">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
