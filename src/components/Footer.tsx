
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    "Platform": [
      "Data Integration",
      "Analytics Engine",
      "Security Framework",
      "API Documentation",
      "Developer Tools",
      "System Status"
    ],
    "Solutions": [
      "Enterprise Data",
      "Government Intelligence",
      "Financial Risk",
      "Healthcare Analytics",
      "Energy Optimization",
      "Supply Chain Visibility"
    ],
    "Resources": [
      "Case Studies",
      "White Papers",
      "Technical Docs",
      "Training Center",
      "Community Forum",
      "Support Portal"
    ],
    "Company": [
      "About Vsiss",
      "Leadership Team",
      "Careers",
      "Press Center",
      "Investor Relations",
      "Contact Us"
    ]
  };

  return (
    <footer className="bg-gray-950 text-white py-20 relative overflow-hidden border-t border-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1 animate-fade-in">
            <div className="font-playfair text-3xl font-bold mb-6 text-white">
              Vsiss-Solutions
            </div>
            <p className="font-inter text-gray-400 mb-8 leading-relaxed">
              Building the software that powers critical decisions for the world's most important institutions.
            </p>
            <div className="space-y-4">
              <div className="text-sm text-gray-500 font-jetbrains">
                &lt;enterprise&gt;<br/>
                &nbsp;&nbsp;since 2014<br/>
                &lt;/enterprise&gt;
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([category, links], categoryIndex) => (
            <div key={category} className="animate-slide-in-left" style={{animationDelay: `${categoryIndex * 0.1}s`}}>
              <h3 className="font-playfair text-lg font-semibold mb-6 text-white">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="font-inter text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 animate-fade-in">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 mb-4 lg:mb-0">
              <p className="font-inter text-gray-400 text-sm">
                © {currentYear} Vsiss-Solutions. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="font-inter text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="font-inter text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </a>
                <a href="#" className="font-inter text-gray-400 hover:text-white transition-colors text-sm">
                  Security
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="font-inter text-xs text-gray-500">Trusted by</span>
              <div className="flex space-x-2 text-xs text-gray-400">
                <span>Government</span>
                <span>•</span>
                <span>Fortune 500</span>
                <span>•</span>
                <span>Enterprises</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
