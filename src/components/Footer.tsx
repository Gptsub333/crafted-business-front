
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Services": [
      "Custom Development",
      "Cloud Solutions",
      "Mobile Apps",
      "AI & ML",
      "Digital Transformation",
      "Cybersecurity"
    ],
    "Industries": [
      "Healthcare",
      "Finance",
      "E-commerce",
      "Manufacturing",
      "Education",
      "Real Estate"
    ],
    "Company": [
      "About Us",
      "Our Team",
      "Careers",
      "Case Studies",
      "Blog",
      "Contact"
    ]
  };

  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-600 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-600 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1 animate-fade-in">
            <div className="font-playfair text-3xl font-bold mb-4 hover:text-blue-400 transition-colors">
              Vsiss-Solutions
            </div>
            <p className="font-inter text-gray-400 mb-6 leading-relaxed">
              Transforming businesses through innovative software solutions and cutting-edge technology.
            </p>
            <div className="font-jetbrains text-sm text-gray-500 animate-pulse">
              &lt;innovation&gt;<br/>
              &nbsp;&nbsp;since 2014<br/>
              &lt;/innovation&gt;
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <div key={category} className="animate-slide-in-left" style={{animationDelay: `${categoryIndex * 0.1}s`}}>
              <h3 className="font-playfair text-xl font-semibold mb-4 hover:text-blue-400 transition-colors">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="font-inter text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 animate-fade-in">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-inter text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Vsiss-Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="font-inter text-gray-400 hover:text-white transition-all duration-300 text-sm hover:scale-105">
                Privacy Policy
              </a>
              <a href="#" className="font-inter text-gray-400 hover:text-white transition-all duration-300 text-sm hover:scale-105">
                Terms of Service
              </a>
              <a href="#" className="font-inter text-gray-400 hover:text-white transition-all duration-300 text-sm hover:scale-105">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
