
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, Users } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      info: "indu@vsiss-solutions.com",
      description: "Send us your project requirements"
    },
    
    {
      icon: <Users className="w-6 h-6" />,
      title: "Meet Our Team",
      info: "Schedule a Consultation",
      description: "Free strategy session available"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-5xl font-bold text-gray-900 mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Get in touch with our experts to discuss your project
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {contactInfo.map((item, index) => (
            <Card key={index} className="animate-scale-in border-0 shadow-lg hover:shadow-xl transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-8 text-center">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <a
                  className="font-inter font-semibold text-blue-600 mb-2 cursor-pointer hover:underline"
                  href={`mailto:${item.info}`}
                >
                  {item.info}
                </a>
                <p className="font-inter text-gray-600 text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <Card className="max-w-4xl mx-auto animate-fade-in border-0 shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-inter font-semibold text-gray-700 mb-2 block">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="font-inter"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="font-inter font-semibold text-gray-700 mb-2 block">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="font-inter"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="font-inter font-semibold text-gray-700 mb-2 block">
                  Company Name
                </label>
                <Input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="font-inter"
                  placeholder="Your Company Ltd."
                />
              </div>
              
              <div>
                <label className="font-inter font-semibold text-gray-700 mb-2 block">
                  Project Details *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="font-inter"
                  placeholder="Tell us about your project requirements, goals, and timeline..."
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-inter font-semibold py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending Message...
                  </div>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </CardContent>
        </Card> */}
      </div>
    </section>
  );
};

export default Contact;
