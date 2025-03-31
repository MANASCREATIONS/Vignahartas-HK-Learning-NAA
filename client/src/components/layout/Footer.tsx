import { Facebook, Mail, Phone } from "lucide-react";
import { FaWhatsapp, FaBlogger } from "react-icons/fa";

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#121111] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-10 w-10 bg-[url(assets/logo.jpg)] bg-cover rounded-full flex items-center justify-center">
                
              </div>
              <h3 className="text-lg font-bold">Vighnahartas</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering financial growth through education and expert guidance.
            </p>
            <p className="text-sm text-gray-400">
              Registration No.: UDYAM-MH-23-0014367
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleScrollTo("home")} 
                  className="text-gray-400 hover:text-[#0d732d] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("about")} 
                  className="text-gray-400 hover:text-[#0d732d] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("blog")} 
                  className="text-gray-400 hover:text-[#0d732d] transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("services")} 
                  className="text-gray-400 hover:text-[#0d732d] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("contact")} 
                  className="text-gray-400 hover:text-[#0d732d] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleScrollTo("services")} 
                  className="text-gray-400 hover:text-[#0d732d] transition-colors"
                >
                  Stock Market Education
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("services")} 
                  className="text-gray-400 hover:text-[#0d732d] transition-colors"
                >
                  Financial Education
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("services")} 
                  className="text-gray-400 hover:text-[#0d732d] transition-colors"
                >
                  Consultancy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("services")} 
                  className="text-gray-400 hover:text-[#0d732d] transition-colors"
                >
                  IT Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("services")} 
                  className="text-gray-400 hover:text-[#0d732d] transition-colors"
                >
                  CSC Services
                </button>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.facebook.com/kailas.hirodkar/photos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 text-xl transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://wa.me/918149347309"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 text-xl transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="https://hklearning-naa.blogspot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 text-xl transition-colors"
                aria-label="Blog"
              >
                <FaBlogger size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm flex items-center gap-2 mb-2">
              <Mail size={16} /> support@vighnahartas.com
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <Phone size={16} /> +91 8149 347 309
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Vighnahartas HK Learning & NAA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
