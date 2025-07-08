
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      {/* Dark Background with Subtle Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"></div>
          <div className="absolute top-1/3 right-1/3 w-px h-24 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"></div>
          <div className="absolute bottom-1/4 left-1/2 w-px h-28 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 mt-[4rem]">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          
          {/* Main Headline */}
          <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-8 leading-tight animate-slide-in-left" style={{animationDelay: '0.4s'}}>
            <span className="block">Data-Driven</span>
            <span className="block pb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              Digital Solutions
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="font-inter text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.6s'}}>
            Vsiss-Solutions transforms complex business challenges into scalable, intelligent software solutions. 
            We build the critical systems that power tomorrow's enterprises.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-scale-in" style={{animationDelay: '0.8s'}}>
            <Button 
              onClick={scrollToServices}
              className="bg-blue-600 hover:bg-blue-700 text-white font-inter font-semibold px-8 py-7 cursor-pointer text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2 group"
            >
              Explore Our Capabilities
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({behavior: "smooth"})}
              className="border-2 border-gray-600 text-gray-300 cursor-pointer border-blue-500 text-blue-400 bg-blue-500/5 font-inter font-semibold px-8 py-7 text-lg rounded-lg transition-all duration-300 hover:scale-105"
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in" style={{animationDelay: '1s'}}>
            <div className="text-center">
              <div className="font-playfair text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="font-inter text-gray-400">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="font-playfair text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="font-inter text-gray-400">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="font-playfair text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="font-inter text-gray-400">Global Support</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown 
              className="mx-auto text-gray-500 cursor-pointer hover:text-blue-400 transition-colors" 
              size={32}
              onClick={scrollToServices}
            />
          </div>
        </div>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
    </section>
  );
};

export default Hero;
