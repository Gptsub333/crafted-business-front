
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? "bg-black/95 backdrop-blur-xl shadow-2xl border-b border-gray-800/50" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-playfair text-2xl font-bold text-white animate-fade-in hover:text-blue-400 transition-colors cursor-pointer">
            Vsiss-Solutions
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: "Services", id: "services" },
              { label: "Portfolio", id: "portfolio" },
              { label: "Industries", id: "industries" },
              { label: "About", id: "about" },
              { label: "Contact", id: "contact" }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-inter font-medium text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-inter font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
