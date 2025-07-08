
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
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="font-playfair text-3xl font-bold mb-4">
              TechFlow
            </div>
            <p className="font-inter text-gray-400 mb-6 leading-relaxed">
              Transforming businesses through innovative software solutions and cutting-edge technology.
            </p>
            <div className="font-jetbrains text-sm text-gray-500">
              &lt;innovation&gt;<br/>
              &nbsp;&nbsp;since 2014<br/>
              &lt;/innovation&gt;
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-playfair text-xl font-semibold mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="font-inter text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-inter text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} TechFlow Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="font-inter text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="font-inter text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="font-inter text-gray-400 hover:text-white transition-colors text-sm">
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
