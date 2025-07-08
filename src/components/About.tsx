
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    { number: "500+", label: "Projects Delivered", icon: "🚀" },
    { number: "50+", label: "Enterprise Clients", icon: "🏢" },
    { number: "10+", label: "Years Experience", icon: "⭐" },
    { number: "99%", label: "Client Satisfaction", icon: "❤️" }
  ];

  const team = [
    {
      name: "Alex Thompson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "10+ years in software development and business strategy"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "https://plus.unsplash.com/premium_photo-1661918391309-7ddd44addee6?w=300&h=300&fit=crop&crop=face",
      bio: "Expert in cloud architecture and emerging technologies"
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Full-stack developer with expertise in modern frameworks"
    },
    {
      name: "Emily Johnson",
      role: "Design Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "UX/UI specialist focused on user-centered design"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-in-left">
            <h2 className="font-playfair text-5xl font-bold text-gray-900 mb-6">
              About Vsiss-Solutions
            </h2>
            <p className="font-inter text-lg text-gray-600 mb-6 leading-relaxed">
              Founded with a vision to transform businesses through technology, Vsiss-Solutions 
              has been at the forefront of digital innovation for over a decade. We combine 
              technical expertise with deep industry knowledge to deliver solutions that drive real results.
            </p>
            <p className="font-inter text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of experienced developers, designers, and strategists work collaboratively 
              to understand your unique challenges and create tailored solutions that exceed expectations. 
              We believe in building long-term partnerships with our clients, supporting their growth 
              every step of the way.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="text-4xl mb-2 group-hover:animate-bounce">
                    {stat.icon}
                  </div>
                  <div className="font-playfair text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="font-inter text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-scale-in">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                alt="Vsiss-Solutions Team"
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-6 shadow-lg animate-float">
                <div className="font-jetbrains text-sm text-gray-500">
                  &lt;code&gt;<br/>
                  &nbsp;&nbsp;innovation = true;<br/>
                  &nbsp;&nbsp;quality = "premium";<br/>
                  &nbsp;&nbsp;client_success = 100%;<br/>
                  &lt;/code&gt;
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="animate-fade-in">
          <h3 className="font-playfair text-4xl font-bold text-gray-900 text-center mb-12">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-in-left group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <h4 className="font-playfair text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h4>
                  <p className="font-inter text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="font-inter text-sm text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
