import { motion } from "framer-motion";
import { 
  LineChart, 
  Wallet, 
  Laptop, 
  HandshakeIcon, 
  Train, 
  Scale, 
  Building 
} from "lucide-react";

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  type: "primary" | "secondary" | "addon";
}

const services: Service[] = [
  {
    id: "stock-market",
    icon: <LineChart className="h-10 w-10" />,
    title: "Stock Market Online Education",
    description: "Comprehensive online courses designed to help you understand stock market fundamentals, technical analysis, and create effective investment strategies.",
    type: "primary"
  },
  {
    id: "financial-education",
    icon: <Wallet className="h-10 w-10" />,
    title: "Financial Education",
    description: "Learn essential financial concepts, budgeting techniques, investment principles, and wealth management strategies tailored to your specific needs.",
    type: "primary"
  },
  {
    id: "it-services",
    icon: <Laptop className="h-10 w-10" />,
    title: "IT Services",
    description: "Professional IT solutions including website development, software consulting, and technology implementation for businesses of all sizes.",
    type: "secondary"
  },
  {
    id: "consultancy",
    icon: <HandshakeIcon className="h-10 w-10" />,
    title: "Consultancy & Counseling",
    description: "Personalized guidance on financial decisions, investment strategy, and portfolio management from experienced professionals.",
    type: "primary"
  },
  {
    id: "railway",
    icon: <Train className="h-10 w-10" />,
    title: "Railway Ticket Booking",
    description: "Convenient and efficient railway ticket booking assistance for all your travel needs across different classes and routes.",
    type: "addon"
  },
  {
    id: "legal",
    icon: <Scale className="h-10 w-10" />,
    title: "Legal Advisory",
    description: "Professional legal guidance on financial matters, investment regulations, and compliance requirements for individuals and businesses.",
    type: "secondary"
  },
  {
    id: "csc",
    icon: <Building className="h-10 w-10" />,
    title: "Common Service Centre (CSC)",
    description: "Access to various government and essential services through our authorized Common Service Centre facility.",
    type: "secondary"
  }
];

// Colors based on service type
const serviceTypeConfig = {
  primary: {
    border: "border-[#0d732d]",
    icon: "text-[#0d732d]",
    badge: "bg-green-100 text-[#0d732d]"
  },
  secondary: {
    border: "border-[#2f10f9]",
    icon: "text-[#2f10f9]",
    badge: "bg-blue-100 text-[#2f10f9]"
  },
  addon: {
    border: "border-[#f14836]",
    icon: "text-[#f14836]",
    badge: "bg-red-100 text-[#f14836]"
  }
};

export default function ServicesSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            Our <span className="text-[#0d732d]">Services</span>
          </h2>
          <div className="w-20 h-1 bg-[#0d732d] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Comprehensive range of services designed to meet your financial education and consultancy needs.
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => {
            const typeConfig = serviceTypeConfig[service.type];
            
            return (
              <motion.div
                key={service.id}
                className={`bg-white rounded-lg shadow-lg p-6 transition-all duration-300 border-t-4 ${typeConfig.border} hover:-translate-y-2 animate-on-scroll`}
                variants={cardVariants}
                whileHover={{ 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                }}
              >
                <div className={`text-4xl mb-4 ${typeConfig.icon}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <span className={`inline-block ${typeConfig.badge} text-xs px-2 py-1 rounded-full font-semibold`}>
                  {service.type === "primary" 
                    ? "Primary Service" 
                    : service.type === "secondary" 
                      ? "Secondary Service" 
                      : "Add-on Service"}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
