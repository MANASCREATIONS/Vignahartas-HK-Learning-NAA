import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle blog category navigation
  const navigateToBlogCategory = (category: string) => {
    setMobileMenuOpen(false);
    // First navigate to blog section
    const blogElement = document.getElementById('blog');
    if (blogElement) {
      blogElement.scrollIntoView({ behavior: "smooth" });
      
      // Update URL hash to trigger category change in BlogSection
      setTimeout(() => {
        window.history.pushState(null, '', `#blog-${category}`);
        
        // Dispatch hash change event to trigger category change
        window.dispatchEvent(new HashChangeEvent('hashchange'));
      }, 600); // Small delay to ensure scrolling completes first
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white shadow-lg py-2" 
          : "bg-gradient-to-r from-white to-white/95 backdrop-blur-md py-4"
      }`}
    >
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-3 group">
          {/* Logo with animation effects */}
          <div className={`relative flex items-center justify-center transition-transform duration-500 ${isScrolled ? "scale-90" : ""}`}>
            <div className="absolute inset-0 bg-[#0d732d]/20 rounded-full blur-sm transform group-hover:scale-110 transition-transform duration-300"></div>
            <div className="h-10 w-10 bg-[url(assets/logo.jpg)] bg-cover rounded-full flex items-center justify-center text-white font-bold shadow-md relative overflow-hidden group-hover:shadow-[#0d732d]/30 group-hover:shadow-lg transition-all duration-300"></div>
          </div>
          
          <h1 className="text-lg md:text-xl font-bold text-[#121111] relative group-hover:text-[#0d732d] transition-colors duration-300">
            <span className="hidden md:inline">Vighnahartas</span> 
            <span>HK Learning & NAA</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0d732d]/40 group-hover:w-full transition-all duration-500"></div>
          </h1>
        </div>
        
        {/* Desktop Navigation - Enhanced with animations */}
        <div className="hidden md:flex space-x-2 font-medium">
          {[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Contact", id: "contact" }
          ].map((item, index) => (
            <div key={item.id} className="relative px-1">
              <button 
                onClick={() => handleScrollTo(item.id)} 
                className="nav-item relative px-3 py-2 rounded-md hover:bg-[#f8f8f8] transition-all duration-300 hover:text-[#0d732d] overflow-hidden group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0d732d]/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          ))}
          
          {/* Blog dropdown with enhanced styling */}
          <div className="relative group/blog px-1">
            <button 
              onClick={() => handleScrollTo("blog")} 
              className="nav-item relative px-3 py-2 rounded-md hover:bg-[#f8f8f8] transition-colors duration-300 hover:text-[#0d732d] flex items-center group"
            >
              <span className="relative z-10">Blog</span>
              <ChevronDown size={16} className="ml-1 transform group-hover/blog:rotate-180 transition-transform duration-300" />
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0d732d]/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            
            <div className="absolute right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden w-64 opacity-0 invisible translate-y-2 group-hover/blog:opacity-100 group-hover/blog:visible group-hover/blog:translate-y-0 transition-all duration-300 z-10">
              {[
                { id: "stock-market", name: "Stock Market", color: "#0d732d" },
                { id: "spirituality", name: "Spirituality", color: "#2f10f9" },
                { id: "health", name: "Health & Communication", color: "#f14836" },
                { id: "nature", name: "Nature & Entertainment", color: "#0d732d" }
              ].map((category, idx) => (
                <button 
                  key={category.id}
                  onClick={() => navigateToBlogCategory(category.id)} 
                  className="block w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-200 group/item border-b border-gray-50 last:border-0"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-[${category.color}]`}></div>
                    <span className="group-hover/item:translate-x-1 transition-transform duration-200">{category.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Button with animation */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors duration-300 focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-6 flex flex-col items-center">
            <span className={`w-full h-0.5 bg-[#121111] block transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1.5'}`}></span>
            <span className={`w-full h-0.5 bg-[#121111] block transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'mb-1.5'}`}></span>
            <span className={`w-full h-0.5 bg-[#121111] block transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </nav>
      
      {/* Mobile Navigation - Enhanced with animations and styling */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white px-4 pb-4 border-t overflow-hidden shadow-lg"
          >
            <div className="py-2 space-y-2">
              {/* Main navigation items with animations */}
              {[
                { name: "Home", id: "home", icon: "🏠" },
                { name: "About", id: "about", icon: "ℹ️" },
                { name: "Services", id: "services", icon: "🛠️" },
                { name: "Contact", id: "contact", icon: "📞" }
              ].map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <button 
                    onClick={() => handleScrollTo(item.id)} 
                    className="mobile-nav-item flex items-center w-full rounded-lg py-2.5 px-3 hover:bg-[#f8f8f8] transition-colors duration-300 group"
                  >
                    <span className="w-6 text-center opacity-70 mr-2">{item.icon}</span>
                    <span className="font-medium group-hover:text-[#0d732d] transition-colors duration-200">{item.name}</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0d732d]">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </button>
                </motion.div>
              ))}
              
              {/* Blog section with dropdown */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="relative"
              >
                <button 
                  onClick={() => handleScrollTo("blog")} 
                  className="mobile-nav-item flex items-center w-full rounded-lg py-2.5 px-3 hover:bg-[#f8f8f8] transition-colors duration-300 group"
                >
                  <span className="w-6 text-center opacity-70 mr-2">📝</span>
                  <span className="font-medium group-hover:text-[#0d732d] transition-colors duration-200">Blog</span>
                  <div className="ml-auto">
                    <ChevronDown size={16} className="text-gray-400" />
                  </div>
                </button>
                
                {/* Blog categories */}
                <div className="mt-1 ml-8 pl-2 border-l-2 border-gray-100 space-y-1">
                  {[
                    { id: "stock-market", name: "Stock Market", color: "#0d732d", emoji: "📈" },
                    { id: "spirituality", name: "Spirituality", color: "#2f10f9", emoji: "🧘" },
                    { id: "health", name: "Health & Communication", color: "#f14836", emoji: "💬" },
                    { id: "nature", name: "Nature & Entertainment", color: "#0d732d", emoji: "🌿" }
                  ].map((category, idx) => (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (idx * 0.1), duration: 0.3 }}
                    >
                      <button 
                        onClick={() => navigateToBlogCategory(category.id)} 
                        className="flex items-center w-full py-2 px-3 rounded-md hover:bg-gray-50 transition-all duration-200 group"
                      >
                        <span className="w-5 text-sm mr-2">{category.emoji}</span>
                        <span className="text-sm text-gray-600 group-hover:text-[#0d732d] group-hover:translate-x-1 transition-all duration-200">{category.name}</span>
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Quick contact button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.4 }}
              className="mt-4 px-2"
            >
              <button 
                onClick={() => window.open("https://wa.me/918149347309", "_blank")}
                className="w-full py-2.5 px-4 bg-gradient-to-r from-[#0d732d] to-[#0a5520] text-white font-medium rounded-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Get Started Now</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
