
const About = () => {
  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "10+", label: "Years Experience" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <h2 className="font-playfair text-5xl font-bold text-gray-900 mb-6">
              About TechFlow Solutions
            </h2>
            <p className="font-inter text-lg text-gray-600 mb-6 leading-relaxed">
              Founded with a vision to transform businesses through technology, TechFlow Solutions 
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
                <div key={index} className="text-center">
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
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">💡</div>
                  <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-4">
                    Innovation Driven
                  </h3>
                  <p className="font-inter text-gray-600">
                    Leveraging cutting-edge technologies to solve complex business challenges
                  </p>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-6 shadow-lg">
                <div className="font-jetbrains text-sm text-gray-500">
                  &lt;code&gt;<br/>
                  &nbsp;&nbsp;innovation = true;<br/>
                  &nbsp;&nbsp;quality = "premium";<br/>
                  &lt;/code&gt;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
