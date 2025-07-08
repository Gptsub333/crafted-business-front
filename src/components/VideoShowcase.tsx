
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Volume2 } from "lucide-react";

const VideoShowcase = () => {
  const videos = [
    {
      title: "Company Overview",
      description: "Learn about Vsiss-Solutions and our mission to transform businesses through technology",
      thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      duration: "2:30",
      category: "About Us"
    },
    {
      title: "Development Process",
      description: "Behind the scenes look at our agile development methodology and quality assurance",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      duration: "3:45",
      category: "Process"
    },
    {
      title: "Client Success Stories",
      description: "Real stories from clients who have transformed their business with our solutions",
      thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      duration: "4:20",
      category: "Success Stories"
    },
    {
      title: "Technology Stack",
      description: "Explore the cutting-edge technologies we use to build scalable solutions",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      duration: "3:15",
      category: "Technology"
    }
  ];

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute top-20 left-10 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-20 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-5xl font-bold mb-6">
            See Us In Action
          </h2>
          <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto">
            Watch our videos to understand how we work and the impact we create
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {videos.map((video, index) => (
            <Card 
              key={index}
              className="bg-gray-900 border-gray-700 overflow-hidden group hover:scale-105 transition-all duration-500 animate-scale-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <Button 
                    size="lg" 
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-blue-600 hover:bg-blue-700 rounded-full w-16 h-16 p-0 animate-bounce"
                  >
                    <Play size={24} className="ml-1" />
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-inter font-medium animate-pulse">
                    {video.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-inter">
                    {video.duration}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {video.title}
                </h3>
                <p className="font-inter text-gray-400 leading-relaxed">
                  {video.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center gap-4 bg-gray-900 rounded-full px-8 py-4 hover:bg-gray-800 transition-colors group">
            <Volume2 className="text-blue-400 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="font-inter font-semibold text-white">Subscribe for Updates</div>
              <div className="font-inter text-sm text-gray-400">Get notified when we release new content</div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
