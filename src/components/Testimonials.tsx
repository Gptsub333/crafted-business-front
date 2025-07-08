
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c04b1faa?w=100&h=100&fit=crop&crop=face",
      content: "Vsiss-Solutions transformed our business with their innovative approach. The team delivered beyond our expectations, and the results speak for themselves - 300% increase in efficiency!",
      rating: 5,
      company: "TechStart Inc."
    },
    {
      name: "Michael Chen",
      position: "CTO, InnovateCorp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "Working with Vsiss-Solutions was a game-changer. Their technical expertise and attention to detail resulted in a platform that exceeded all our requirements. Highly recommended!",
      rating: 5,
      company: "InnovateCorp"
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, HealthTech Solutions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "The healthcare platform developed by Vsiss-Solutions has revolutionized how we manage patient care. The team's understanding of our industry requirements was exceptional.",
      rating: 5,
      company: "HealthTech Solutions"
    },
    {
      name: "David Kim",
      position: "Director of Operations, LogiFlow",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "Vsiss-Solutions delivered a comprehensive logistics management system that streamlined our entire operation. Their post-launch support has been outstanding.",
      rating: 5,
      company: "LogiFlow"
    },
    {
      name: "Lisa Thompson",
      position: "VP Marketing, EduTech Pro",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
      content: "The e-learning platform created by Vsiss-Solutions has transformed our educational delivery. Student engagement increased by 250% since launch!",
      rating: 5,
      company: "EduTech Pro"
    },
    {
      name: "Robert Martinez",
      position: "CFO, FinanceForward",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      content: "The financial analytics dashboard provided insights we never had before. Vsiss-Solutions' expertise in fintech is truly impressive.",
      rating: 5,
      company: "FinanceForward"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped transform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105 animate-slide-in-left group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <h4 className="font-inter font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="font-inter text-sm text-gray-400">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className="text-yellow-400 fill-current animate-pulse" 
                      style={{animationDelay: `${i * 0.1}s`}}
                    />
                  ))}
                </div>
                
                <p className="font-inter text-gray-300 leading-relaxed mb-4">
                  "{testimonial.content}"
                </p>
                
                <div className="text-sm text-blue-400 font-inter font-medium">
                  {testimonial.company}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <div className="inline-flex items-center gap-4 bg-gray-800 rounded-full px-8 py-4">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <img
                  key={index}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-8 h-8 rounded-full border-2 border-gray-700 hover:scale-125 transition-transform duration-300"
                  style={{animationDelay: `${index * 0.1}s`}}
                />
              ))}
            </div>
            <div className="text-sm">
              <span className="font-inter font-semibold text-white">500+ Happy Clients</span>
              <br />
              <span className="font-inter text-gray-400">Across 50+ Countries</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
