import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, Facebook } from "lucide-react";
import { FaWhatsapp, FaBlogger } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };
  
  // Contact form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // Handle form submission
  function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    
    // Simulate form submission - in a real app, you would post to a server
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message! We will get back to you soon.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  }

  return (
    <section id="contact" className="py-16 bg-[#e7e5e0]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            Contact <span className="text-[#0d732d]">Us</span>
          </h2>
          <div className="w-20 h-1 bg-[#0d732d] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Have questions or ready to start your journey? Get in touch with our team today.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form */}
          <motion.div 
            className="lg:w-1/2"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your name" 
                            {...field} 
                            className="border-gray-300 focus:ring-[#0d732d] focus:border-[#0d732d]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your email" 
                            type="email" 
                            {...field} 
                            className="border-gray-300 focus:ring-[#0d732d] focus:border-[#0d732d]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Phone (Optional)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your phone number" 
                            type="tel" 
                            {...field} 
                            className="border-gray-300 focus:ring-[#0d732d] focus:border-[#0d732d]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help you?" 
                            {...field} 
                            rows={5}
                            className="border-gray-300 focus:ring-[#0d732d] focus:border-[#0d732d]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#0d732d] hover:bg-[#0a5f25] text-white font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
          
          {/* Contact Information & Map */}
          <motion.div 
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-8 mb-8"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-[#0d732d] text-xl mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-gray-700">3, HKLearning and NAA, Chakradhar Nagar, Panchavati, Nashik 422003</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#0d732d] text-xl mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-700">
                      <a href="tel:+918149347309" className="hover:text-[#0d732d]">+91 8149 347 309</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#0d732d] text-xl mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-700">
                      <a href="mailto:support@vighnahartas.com" className="hover:text-[#0d732d]">support@vighnahartas.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#0d732d] text-xl mr-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Business Hours</h4>
                    <p className="text-gray-700">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex space-x-4">
                <a 
                  href="https://www.facebook.com/kailas.hirodkar/photos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 text-2xl transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a 
                  href="https://wa.me/918149347309" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 text-2xl transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="h-6 w-6" />
                </a>
                <a 
                  href="https://hklearning-naa.blogspot.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-orange-600 text-2xl transition-colors"
                  aria-label="Blog"
                >
                  <FaBlogger className="h-6 w-6" />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-lg overflow-hidden shadow-lg h-80"
              variants={itemVariants}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.1812886849394!2d73.79!3d20.00!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDAwJzAwLjAiTiA3M8KwNDcnMjQuMCJF!5e0!3m2!1sen!2sin!4v1623456789012!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Office location map"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
