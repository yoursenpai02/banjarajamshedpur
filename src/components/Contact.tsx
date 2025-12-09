import { MapPin, Phone, Clock, Mail, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Bindal Mall, Marine Dr Rd, Ashiana Gardens, Sonari, Jamshedpur, Jharkhand 831011",
    link: "https://www.google.com/maps/search/?api=1&query=Banjara+Bindal+Mall+Jamshedpur",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "075458 00700",
    link: "tel:+917545800700",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Open Daily: 11:00 AM – 11:00 PM",
    link: null,
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@banjarajamshedpur.com",
    link: "mailto:hello@banjarajamshedpur.com",
  },
];

export function Contact() {
  const { ref, isInView } = useScrollAnimation(0.1);

  return (
    <section id="contact" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="text-accent font-semibold text-sm uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Contact Us
          </motion.span>
          <motion.h2 
            className="font-heading text-4xl md:text-5xl font-bold text-primary mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Find Us
          </motion.h2>
          <motion.div 
            className="section-divider mt-4"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <motion.div 
            className="rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.123456789!2d86.1234567!3d22.8123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBanjara%20Restaurant!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Banjara Restaurant Location"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ x: 5, boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)" }}
              >
                <motion.div 
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <info.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : undefined}
                      rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-medium text-foreground">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="gold" size="lg" className="w-full" asChild>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Banjara+Bindal+Mall+Jamshedpur"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </a>
                </Button>
              </motion.div>
              <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="whatsapp" size="lg" className="w-full" asChild>
                  <a
                    href="https://api.whatsapp.com/send?phone=917545800700&text=Hello%20Banjara!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Message on WhatsApp
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Additional Info */}
            <motion.div 
              className="bg-muted rounded-xl p-6 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-heading font-semibold text-foreground mb-3">
                Parking Information
              </h4>
              <p className="text-sm text-muted-foreground">
                Convenient parking available at Bindal Mall. Valet parking 
                available during peak hours. The restaurant is located on the 
                ground floor for easy accessibility.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
