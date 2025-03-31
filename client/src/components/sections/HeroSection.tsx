import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import gsap from "@/lib/gsapPlugins";

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const statsSectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Text animation with GSAP
    if (headingRef.current) {
      const text = headingRef.current;
      gsap.fromTo(
        text.querySelectorAll("span"),
        { 
          opacity: 0, 
          y: 20,
          rotateX: -90 
        },
        { 
          opacity: 1, 
          y: 0,
          rotateX: 0,
          stagger: 0.1,
          duration: 1.2,
          ease: "power3.out"
        }
      );
    }

    // Stats counter animation with better visual effect
    if (statsSectionRef.current) {
      const counterElements = statsSectionRef.current.querySelectorAll('.counter-value');
      
      counterElements.forEach((element, index) => {
        const target = parseInt(element.textContent || '0', 10);
        
        gsap.fromTo(
          element, 
          { innerText: 0 },
          {
            innerText: target,
            duration: 2.5,
            ease: "power2.out",
            snap: { innerText: 1 },
            delay: 0.8 + (index * 0.2),
            onUpdate: function() {
              // Add a subtle scale effect during counting
              const progress = this.progress();
              if (progress < 1) {
                gsap.to(element.parentElement, {
                  scale: 1 + (0.05 * Math.sin(progress * Math.PI)),
                  duration: 0.1
                });
              }
            },
            onComplete: function() {
              // Return to normal scale with a little bounce
              gsap.to(element.parentElement, {
                scale: 1,
                duration: 0.4,
                ease: "elastic.out(1, 0.3)"
              });
            }
          }
        );
      });
    }
  }, []);

  return (
    <section id="home" className="pt-24 md:pt-28 pb-16 md:pb-24 relative overflow-hidden bg-gradient-to-br from-[#e7e5e0]/90 to-white">
      {/* Modern decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#0d732d]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-10 left-0 w-64 h-64 bg-[#f14836]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#2f10f9]/5 rounded-full blur-3xl"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute top-20 right-1/3 w-8 h-8 border-2 border-[#0d732d]/20 rounded-lg animate-spin-slow"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 border-2 border-[#2f10f9]/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 border-2 border-[#f14836]/20 rotate-45 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mb-10 lg:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 bg-[#0d732d]/10 rounded-full mb-4">
              <span className="text-[#0d732d] font-medium text-sm">Fund Management & Financial Education</span>
            </div>
            
            <h1 
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 perspective-1000"
            >
              Your Partner in{" "}
              <span className="text-[#0d732d] inline-block transform">Financial Growth</span>
              {" & "}
              <span className="text-[#2f10f9] inline-block transform">Education</span>
            </h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Empowering individuals through expert Fund Management, Financial Literacy, and Professional Consultancy services.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                asChild
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-[#0d732d] to-[#0a5f25] text-white font-semibold px-6 py-5 rounded-lg shadow-lg hover:shadow-[0_8px_25px_-5px_rgba(13,115,45,0.6)] transform hover:-translate-y-1 border-none transition-all duration-300 btn-hover-effect"
              >
                <a href="https://wa.me/918149347309" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <div className="absolute -left-10 top-0 bottom-0 w-20 h-full bg-white opacity-10 transform rotate-12 transition-transform duration-700 group-hover:translate-x-96"></div>
                  <span className="mr-2 text-base">Get Started</span>
                  <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white bg-opacity-20 transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                  </div>
                  <div className="absolute right-0 bottom-0 w-2 h-2 bg-white rounded-full opacity-40 group-hover:h-3 group-hover:w-3 transition-all"></div>
                </a>
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="relative overflow-hidden border-2 border-[#2f10f9] text-[#2f10f9] bg-white hover:bg-[#2f10f9]/5 transition-all flex items-center gap-2 px-6 py-5 rounded-lg group"
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
                    
                    // Add a fun animation
                    gsap.fromTo(
                      ".explore-icon-circle",
                      { scale: 1 },
                      { scale: 1.5, duration: 0.4, ease: "back.out(1.7)", yoyo: true, repeat: 1 }
                    );
                  }
                }}
              >
                <span className="text-base font-medium">Explore Services</span>
                <div className="explore-icon-circle relative w-7 h-7 bg-[#2f10f9]/10 rounded-full flex items-center justify-center transform transition-transform group-hover:scale-125 duration-300">
                  <ChevronDown className="h-4 w-4 text-[#2f10f9] transform transition-transform group-hover:translate-y-1 duration-300" />
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#2f10f9] opacity-80 group-hover:w-full transition-all duration-300"></div>
              </Button>
            </motion.div>
          </motion.div>
          
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Clean, modern stat cards with visual effects */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 lg:mt-0 max-w-4xl mx-auto lg:mx-0" ref={statsSectionRef}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="stat-card relative overflow-hidden rounded-xl shadow-lg group bg-white border border-gray-100"
                >
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#0d732d]/10 rounded-full blur-xl group-hover:w-24 group-hover:h-24 transition-all duration-500"></div>
                  <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-[#0d732d]/5 rounded-full blur-lg group-hover:w-20 group-hover:h-20 transition-all duration-500"></div>
                  <div className="text-center p-6 relative z-10 flex flex-col items-center">
                    <div className="w-12 h-12 mb-3 rounded-full flex items-center justify-center bg-[#0d732d]/10 text-[#0d732d]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-[#0d732d] font-bold text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300 ease-out flex items-center">
                      <span className="counter-value">10</span>+
                    </div>
                    <p className="text-gray-600 font-medium mt-1">Years Experience</p>
                    <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#0d732d]/30 to-[#0d732d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="stat-card relative overflow-hidden rounded-xl shadow-lg group bg-white border border-gray-100"
                >
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#2f10f9]/10 rounded-full blur-xl group-hover:w-24 group-hover:h-24 transition-all duration-500"></div>
                  <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-[#2f10f9]/5 rounded-full blur-lg group-hover:w-20 group-hover:h-20 transition-all duration-500"></div>
                  <div className="text-center p-6 relative z-10 flex flex-col items-center">
                    <div className="w-12 h-12 mb-3 rounded-full flex items-center justify-center bg-[#2f10f9]/10 text-[#2f10f9]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="text-[#2f10f9] font-bold text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300 ease-out flex items-center">
                      <span className="counter-value">500</span>+
                    </div>
                    <p className="text-gray-600 font-medium mt-1">Satisfied Clients</p>
                    <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#2f10f9]/30 to-[#2f10f9] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="stat-card relative overflow-hidden rounded-xl shadow-lg group bg-white border border-gray-100"
                >
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#f14836]/10 rounded-full blur-xl group-hover:w-24 group-hover:h-24 transition-all duration-500"></div>
                  <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-[#f14836]/5 rounded-full blur-lg group-hover:w-20 group-hover:h-20 transition-all duration-500"></div>
                  <div className="text-center p-6 relative z-10 flex flex-col items-center">
                    <div className="w-12 h-12 mb-3 rounded-full flex items-center justify-center bg-[#f14836]/10 text-[#f14836]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="text-[#f14836] font-bold text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300 ease-out flex items-center">
                      <span className="counter-value">6</span>
                    </div>
                    <p className="text-gray-600 font-medium mt-1">Expert Services</p>
                    <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#f14836]/30 to-[#f14836] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
