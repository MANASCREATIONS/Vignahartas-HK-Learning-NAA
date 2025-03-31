import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import BlogSection from "@/components/sections/BlogSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  // Animate elements when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#e7e5e0] text-[#121111]">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <BlogSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
