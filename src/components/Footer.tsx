import { Phone, MapPin, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const quickLinks = [
  { name: "Menu", href: "#menu" },
  { name: "Reserve", href: "#reserve" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

const badges = [
  "Dine-in",
  "Takeaway",
  "No-contact Delivery",
  "LGBTQ+ Friendly",
  "Women-owned",
];

export function Footer() {
  const { ref, isInView } = useScrollAnimation(0.1);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground" ref={ref}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div 
            className="md:col-span-2 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="font-heading text-3xl font-bold"
              whileHover={{ scale: 1.02 }}
            >
              Banjara
            </motion.h3>
            <p className="text-primary-foreground/80 max-w-md">
              Authentic Rajasthani Thali & Global Thali Delights. Experience the 
              royal flavours of Rajasthan in the heart of Jamshedpur.
            </p>
            <motion.div 
              className="flex items-center gap-4 pt-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.a
                href="tel:+917545800700"
                className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="w-5 h-5" />
                075458 00700
              </motion.a>
            </motion.div>
            <motion.div 
              className="flex items-start gap-2 text-primary-foreground/70 text-sm"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>Bindal Mall, Marine Dr Rd, Jamshedpur 831011</span>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-heading font-semibold text-lg mb-4">Opening Hours</h4>
            <div className="space-y-2 text-primary-foreground/70">
              <p>Monday – Sunday</p>
              <p className="text-accent font-medium">11:00 AM – 11:00 PM</p>
            </div>
            <motion.div 
              className="mt-6 flex items-center gap-2 text-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Open Now</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Badges */}
        <motion.div 
          className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-primary-foreground/20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {badges.map((badge, index) => (
            <motion.span
              key={badge}
              className="bg-primary-foreground/10 text-primary-foreground/80 text-xs px-3 py-1 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="mt-8 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <p>
            © {new Date().getFullYear()} Banjara, Bindal Mall, Jamshedpur — All rights reserved
          </p>
          <motion.p 
            className="flex items-center gap-1"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> in India
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
