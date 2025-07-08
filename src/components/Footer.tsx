const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigationLinks = [
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Industries", id: "industries" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-gray-950 text-white py-20 relative overflow-hidden border-t border-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Company Info */}
          <div className="animate-fade-in">
            <div className="font-playfair text-3xl font-bold mb-6 text-white">
              Vsiss-Solutions
            </div>
            <p className="font-inter text-gray-400 mb-8 leading-relaxed">
              Building the software that powers critical decisions for the
              world's most important institutions.
            </p>
            <div className="space-y-4">
              <div className="text-sm text-gray-500 font-jetbrains">
                &lt;enterprise&gt;
                <br />
                &nbsp;&nbsp;since 2022
                <br />
                &lt;/enterprise&gt;
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="animate-slide-in-left">
            <h3 className="font-playfair text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="font-inter text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block text-sm cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-in-left">
            <h3 className="font-playfair text-lg font-semibold mb-6 text-white">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="text-sm text-gray-400">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:indu@vsiss-solutions.com"
                    className="text-blue-400 hover:text-blue-600"
                  >
                    indu@vsiss-solutions.com
                  </a>
                </p>
              </div>
              <div className="text-sm text-gray-400">
                <p>Address:</p>
                <p className="text-gray-300">26007 Kimberly Rose Dr</p>
                <p className="text-gray-300">Chantilly, VA 20152</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 animate-fade-in">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 mb-4 lg:mb-0">
              <p className="font-inter text-gray-400 text-sm">
                © {currentYear} Vsiss-Solutions. All rights reserved.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <span className="font-inter text-xs text-gray-500">
                Trusted by
              </span>
              <div className="flex space-x-2 text-xs text-gray-400">
                <span>Government</span>
                <span>•</span>
                <span>Private Organizations</span>
                <span>•</span>
                <span>Businesses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
