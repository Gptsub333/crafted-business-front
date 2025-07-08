
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Video } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with advanced analytics and AI-powered recommendations.",
      image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      video: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "AI/ML"],
      category: "Web Development"
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive healthcare platform with patient management and telemedicine features.",
      image: "https://images.unsplash.com/photo-1582560469781-1965b9af903d?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      video: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop",
      tech: ["Vue.js", "Python", "PostgreSQL", "WebRTC"],
      category: "Healthcare"
    },
    {
      title: "Financial Analytics Dashboard",
      description: "Real-time financial data visualization with predictive analytics and reporting tools.",
      image: "https://plus.unsplash.com/premium_photo-1661750032026-bc52bae48094?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      video: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: ["Angular", "Express.js", "MySQL", "D3.js"],
      category: "Finance"
    },
    {
      title: "Mobile Learning App",
      description: "Cross-platform educational app with gamification and progress tracking.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      video: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      tech: ["React Native", "Firebase", "Redux", "WebSocket"],
      category: "Education"
    },
    {
      title: "IoT Manufacturing Suite",
      description: "Industrial IoT platform for smart manufacturing and predictive maintenance.",
      image: "https://plus.unsplash.com/premium_photo-1688678097473-2ce11d23e30c?q=80&w=1340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      video: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "InfluxDB", "MQTT"],
      category: "Manufacturing"
    },
    {
      title: "AI-Powered CRM",
      description: "Customer relationship management system with AI insights and automation.",
      image: "https://plus.unsplash.com/premium_photo-1733306696471-807493ff845b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      video: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=400&fit=crop",
      tech: ["Next.js", "Python", "TensorFlow", "GraphQL"],
      category: "Business"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our expertise through successful projects across various industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg animate-slide-in-left overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-3">
                    <Button size="sm" variant="secondary" className="animate-bounce">
                      <ExternalLink size={16} />
                    </Button>
                    <Button size="sm" variant="secondary" className="animate-bounce" style={{animationDelay: '0.1s'}}>
                      <Video size={16} />
                    </Button>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-inter font-medium animate-pulse">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="font-inter text-gray-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-inter hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-inter font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
