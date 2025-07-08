
const Industries = () => {
  const industries = [
    {
      name: "Government & Defense",
      description: "Secure, mission-critical systems for national security and public sector operations",
      icon: "🛡️",
      solutions: ["Intelligence Platforms", "Secure Communications", "Data Analytics", "Compliance Systems"],
      gradient: "from-red-500/10 to-orange-500/10",
      border: "border-red-500/20"
    },
    {
      name: "Financial Services",
      description: "Risk management and trading platforms for global financial institutions",
      icon: "💹",
      solutions: ["Risk Analytics", "Trading Systems", "Compliance Tools", "Fraud Detection"],
      gradient: "from-green-500/10 to-emerald-500/10",
      border: "border-green-500/20"
    },
    {
      name: "Healthcare & Life Sciences",
      description: "Data-driven solutions advancing medical research and patient outcomes",
      icon: "🧬",
      solutions: ["Clinical Data Management", "Drug Discovery", "Patient Analytics", "Regulatory Compliance"],
      gradient: "from-blue-500/10 to-cyan-500/10",
      border: "border-blue-500/20"
    },
    {
      name: "Energy & Utilities",
      description: "Optimizing operations and sustainability across energy infrastructure",
      icon: "⚡",
      solutions: ["Grid Management", "Predictive Maintenance", "Asset Optimization", "Sustainability Analytics"],
      gradient: "from-yellow-500/10 to-orange-500/10",
      border: "border-yellow-500/20"
    },
    {
      name: "Manufacturing & Supply Chain",
      description: "Industrial IoT and supply chain visibility for operational excellence",
      icon: "🏭",
      solutions: ["Supply Chain Visibility", "Quality Control", "Predictive Maintenance", "IoT Integration"],
      gradient: "from-purple-500/10 to-pink-500/10",
      border: "border-purple-500/20"
    },
    {
      name: "Technology & Media",
      description: "Scalable platforms powering digital transformation and content delivery",
      icon: "💻",
      solutions: ["Content Management", "User Analytics", "Recommendation Engines", "Cloud Infrastructure"],
      gradient: "from-indigo-500/10 to-blue-500/10",
      border: "border-indigo-500/20"
    }
  ];

  return (
    <section id="industries" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-20 animate-fade-in">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-8">
            Industries We
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Transform
            </span>
          </h2>
          <p className="font-inter text-xl text-gray-300 leading-relaxed">
            From government agencies to Fortune 500 enterprises, we deliver specialized solutions 
            that address the unique challenges of mission-critical industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${industry.gradient} border ${industry.border} rounded-2xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl animate-slide-in-left group`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {industry.icon}
              </div>
              
              <h3 className="font-playfair text-2xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
                {industry.name}
              </h3>
              
              <p className="font-inter text-gray-300 mb-6 leading-relaxed">
                {industry.description}
              </p>
              
              <div className="space-y-3">
                {industry.solutions.map((solution, solutionIndex) => (
                  <div key={solutionIndex} className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                    <span className="font-inter text-sm text-gray-400">{solution}</span>
                  </div>
                ))}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 rounded-2xl transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
