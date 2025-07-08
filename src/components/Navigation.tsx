
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-playfair text-2xl font-bold text-gray-900 animate-fade-in">
            Vsiss-Solutions
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("services")}
              className="font-inter font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("portfolio")}
              className="font-inter font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection("industries")}
              className="font-inter font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              Industries
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")}
              className="font-inter font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="font-inter font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="font-inter font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              Contact
            </button>
          </div>

          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-inter font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 animate-pulse"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
