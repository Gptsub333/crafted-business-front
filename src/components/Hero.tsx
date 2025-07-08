
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-gray-900 mb-6 leading-tight">
            Crafting Digital
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Excellence
            </span>
          </h1>
          
          <p className="font-inter text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We transform businesses through innovative software solutions, 
            delivering cutting-edge technology that drives growth and success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={scrollToServices}
              className="bg-blue-600 hover:bg-blue-700 text-white font-inter font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Explore Our Services
            </Button>
            <Button 
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({behavior: "smooth"})}
              className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 font-inter font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown 
              className="mx-auto text-gray-400 cursor-pointer hover:text-blue-600 transition-colors" 
              size={32}
              onClick={scrollToServices}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
