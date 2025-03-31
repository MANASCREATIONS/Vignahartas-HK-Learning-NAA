import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";

// Blog post types
interface BlogPost {
  id: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  link: string;
}

// Blog categories with IDs
const categories = [
  { id: "stock-market", label: "Stock Market" },
  { id: "spirituality", label: "Spirituality" },
  { id: "health", label: "Health & Communication" },
  { id: "nature", label: "Nature & Entertainment" }
];

// Blog post data for each category
const blogData: Record<string, BlogPost[]> = {
  "stock-market": [
    {
      id: "sm1",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Investment",
      title: "Understanding Market Volatility",
      excerpt: "Learn how to navigate market fluctuations and maintain your investment strategy during uncertain times.",
      link: "https://hklearning-naa.blogspot.com"
    },
    {
      id: "sm2",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Trading",
      title: "5 Essential Trading Strategies",
      excerpt: "Discover time-tested trading approaches that can help you maximize returns while managing risk effectively.",
      link: "https://hklearning-naa.blogspot.com"
    },
    {
      id: "sm3",
      image: "https://images.unsplash.com/photo-1579226905180-636b76d96082?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Planning",
      title: "Financial Planning for Beginners",
      excerpt: "Start your journey to financial freedom with these foundational principles and practical steps.",
      link: "https://hklearning-naa.blogspot.com"
    }
  ],
  "spirituality": [
    {
      id: "sp1",
      image: "https://images.unsplash.com/photo-1507692812060-98338d07aca3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Mindfulness",
      title: "The Power of Daily Meditation",
      excerpt: "Discover how incorporating a brief meditation practice can transform your mental clarity and emotional balance.",
      link: "https://hklearning-naa.blogspot.com"
    },
    {
      id: "sp2",
      image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Growth",
      title: "Finding Purpose Through Spirituality",
      excerpt: "Explore how connecting with your spiritual side can help you discover deeper meaning in life and work.",
      link: "https://hklearning-naa.blogspot.com"
    }
  ],
  "health": [
    {
      id: "h1",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Wellness",
      title: "Balancing Work and Health",
      excerpt: "Learn practical strategies to maintain your physical and mental health while pursuing career success.",
      link: "https://hklearning-naa.blogspot.com"
    },
    {
      id: "h2",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Communication",
      title: "Effective Communication Skills",
      excerpt: "Master the art of clear communication to improve your personal relationships and professional interactions.",
      link: "https://hklearning-naa.blogspot.com"
    }
  ],
  "nature": [
    {
      id: "n1",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Environment",
      title: "Connecting With Nature",
      excerpt: "Discover the profound benefits of spending time in natural settings for your mental and physical wellbeing.",
      link: "https://hklearning-naa.blogspot.com"
    },
    {
      id: "n2",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Leisure",
      title: "Balanced Entertainment Choices",
      excerpt: "Find the right mix of entertainment activities that refresh your mind without consuming too much time.",
      link: "https://hklearning-naa.blogspot.com"
    }
  ]
};

export default function BlogSection() {
  const [activeTab, setActiveTab] = useState("stock-market");
  
  // Check URL hash for direct navigation to specific tab
  useEffect(() => {
    // Get hash from URL (without the #)
    const hash = window.location.hash.substring(1);
    
    // If hash matches a category ID, set it as active
    if (hash && hash.startsWith('blog-')) {
      const categoryId = hash.replace('blog-', '');
      if (Object.keys(blogData).includes(categoryId)) {
        setActiveTab(categoryId);
      }
    }
    
    // Add scroll into view functionality
    const handleHashChange = () => {
      const newHash = window.location.hash.substring(1);
      if (newHash && newHash.startsWith('blog-')) {
        const categoryId = newHash.replace('blog-', '');
        if (Object.keys(blogData).includes(categoryId)) {
          setActiveTab(categoryId);
          document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  // Apply GSAP animation to blog posts when tab changes
  useEffect(() => {
    const blogPosts = document.querySelectorAll('.blog-post');
    gsap.fromTo(blogPosts, 
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.1, 
        duration: 0.5,
        ease: "power2.out" 
      }
    );
  }, [activeTab]);

  // Animation variants for Framer Motion
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  // Handle tab change with URL hash update
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    // Update URL hash without page reload
    window.history.pushState(null, '', `#blog-${tabId}`);
  };

  return (
    <section id="blog" className="py-16 bg-[#e7e5e0]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Our <span className="text-[#0d732d]">Blog</span>
          </h2>
          <div className="w-20 h-1 bg-[#0d732d] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Explore our knowledge hub covering various aspects of finance, spirituality, health, and more.
          </p>
        </div>
        
        {/* Blog Tabs - Enhanced for better mobile display */}
        <div className="flex flex-wrap justify-center mb-8 border-b border-gray-300 gap-1 md:gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-3 py-2 font-medium text-sm md:text-lg relative rounded-t-lg transition-all duration-300 ${
                activeTab === category.id 
                  ? "text-[#0d732d] font-semibold bg-white/50" 
                  : "text-gray-600 hover:text-[#0d732d] hover:bg-white/30"
              }`}
              onClick={() => handleTabChange(category.id)}
              id={`tab-${category.id}`}
              aria-selected={activeTab === category.id}
              role="tab"
            >
              {category.label}
              {activeTab === category.id && (
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0d732d]"
                  layoutId="activeTab"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
              )}
            </button>
          ))}
        </div>
        
        {/* Tab Content with improved animations */}
        <div className="tab-content" role="tabpanel">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -10 }}
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {blogData[activeTab].map((post) => (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  className="blog-post bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-semibold text-[#0d732d] uppercase tracking-wider px-2 py-1 bg-[#0d732d]/10 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mt-2 mb-3 text-gray-800">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <a 
                      href={post.link}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#2f10f9] font-medium hover:underline flex items-center group"
                    >
                      Read More 
                      <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="text-center mt-12">
          <Button
            className="blog-btn relative overflow-hidden bg-gradient-to-r from-[#2f10f9] via-[#2f10f9] to-[#3826d3] text-white font-semibold px-7 py-5 rounded-lg transition-all duration-500 shadow-lg hover:shadow-[0_10px_30px_-12px_rgba(47,16,249,0.5)] hover:-translate-y-1"
            asChild
            size="lg"
          >
            <a 
              href="https://hklearning-naa.blogspot.com"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center group"
              onMouseEnter={() => {
                gsap.to(".blog-btn-icon", {
                  x: 5,
                  rotation: 15,
                  duration: 0.3,
                  ease: "power2.out",
                  yoyo: true,
                  repeat: 1
                });
              }}
            >
              {/* Animated background dots */}
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-20 animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-white rounded-full opacity-15 animate-float"></div>
                <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white rounded-full opacity-10 animate-ping-slow"></div>
              </div>
              
              {/* Shine effect */}
              <div className="absolute -left-20 top-0 w-24 h-full transform rotate-12 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 group-hover:translate-x-96 transition-transform duration-1000"></div>
              
              <span className="relative z-10 text-base font-medium mr-2">Visit Our Blog</span>
              <div className="blog-btn-icon relative z-10 flex items-center justify-center h-8 w-8 bg-white bg-opacity-20 rounded-full">
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform duration-300" />
              </div>
              
              {/* Border effect */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white opacity-40 group-hover:w-full transition-all duration-500"></div>
              <div className="absolute right-0 top-0 h-0 w-0.5 bg-white opacity-40 group-hover:h-full transition-all duration-500 delay-100"></div>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
