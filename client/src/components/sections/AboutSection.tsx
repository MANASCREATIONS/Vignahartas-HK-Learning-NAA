import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "@/lib/gsapPlugins";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            About <span className="text-[#0d732d]">Us</span>
          </h2>
          <div className="w-20 h-1 bg-[#0d732d] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Discover what makes Vighnahartas HK Learning & NAA your trusted partner in financial education and consultancy.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0 animate-on-scroll"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our team providing financial education" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 animate-on-scroll"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-4"
              variants={itemVariants}
            >
              Our <span className="text-[#0d732d]">Mission</span>
            </motion.h3>
            <motion.p 
              className="text-gray-700 mb-6"
              variants={itemVariants}
            >
              At Vighnahartas HK Learning & NAA, we are dedicated to empowering individuals through comprehensive financial education and expert consultancy services. Our mission is to demystify the complexities of finance and the stock market, making knowledge accessible to everyone regardless of their background or experience level.
            </motion.p>
            
            <motion.h3 
              className="text-2xl font-semibold mb-4"
              variants={itemVariants}
            >
              Our <span className="text-[#0d732d]">Values</span>
            </motion.h3>
            <motion.div 
              className="grid grid-cols-2 gap-4 mb-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="flex items-start" variants={itemVariants}>
                <div className="text-[#0d732d] mr-3 mt-1">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Integrity</h4>
                  <p className="text-sm text-gray-600">Honesty in every interaction and advice.</p>
                </div>
              </motion.div>
              
              <motion.div className="flex items-start" variants={itemVariants}>
                <div className="text-[#0d732d] mr-3 mt-1">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Excellence</h4>
                  <p className="text-sm text-gray-600">Striving for the highest quality in education.</p>
                </div>
              </motion.div>
              
              <motion.div className="flex items-start" variants={itemVariants}>
                <div className="text-[#0d732d] mr-3 mt-1">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Empowerment</h4>
                  <p className="text-sm text-gray-600">Enabling clients to make informed decisions.</p>
                </div>
              </motion.div>
              
              <motion.div className="flex items-start" variants={itemVariants}>
                <div className="text-[#0d732d] mr-3 mt-1">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Innovation</h4>
                  <p className="text-sm text-gray-600">Adopting modern approaches to learning.</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-8"
            >
              <div className="relative group">
                <Button 
                  className="relative flex items-center gap-2 px-7 py-5 bg-gradient-to-r from-[#2f10f9] to-[#2f10f9]/90 hover:to-[#2a0edb] text-white font-semibold rounded-lg transition-all duration-500 shadow-xl hover:shadow-[0_15px_35px_-12px_rgba(47,16,249,0.5)] transform hover:-translate-y-1 overflow-hidden group"
                  size="lg"
                  onClick={() => {
                    const servicesSection = document.getElementById('services');
                    if (servicesSection) {
                      gsap.to(window, {
                        duration: 1,
                        scrollTo: {
                          y: servicesSection,
                          offsetY: 80
                        },
                        ease: "power3.inOut"
                      });
                      
                      gsap.to(".services-button-arrow", {
                        x: 10,
                        duration: 0.3,
                        repeat: 1,
                        yoyo: true,
                        ease: "power1.inOut"
                      });
                    }
                  }}
                >
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-30 animate-ping-slow"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-white rounded-full opacity-20 animate-float"></div>
                    <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse-slow"></div>
                  </div>
                  
                  <div className="absolute -left-20 top-0 w-20 h-full transform rotate-12 bg-white opacity-20 transition-transform duration-1000 group-hover:translate-x-96"></div>
                  
                  <span className="text-base font-semibold relative z-10">Explore Our Services</span>
                  <div className="services-button-arrow relative bg-white bg-opacity-20 w-8 h-8 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform relative z-10" />
                  </div>
                  
                  <div className="absolute right-0 bottom-0 w-10 h-10 rounded-tl-2xl bg-white opacity-10 transition-all duration-300 group-hover:opacity-20 group-hover:w-12 group-hover:h-12"></div>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
