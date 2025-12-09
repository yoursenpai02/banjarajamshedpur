import { MapPin, Clock, Phone, IndianRupee, Heart, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import interiorImage from "@/assets/interior-1.jpg";

const quickFacts = [
  {
    icon: MapPin,
    label: "Location",
    value: "Bindal Mall, Marine Dr Rd, Jamshedpur",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Open Daily till 11:00 PM",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "075458 00700",
  },
  {
    icon: IndianRupee,
    label: "Price Range",
    value: "₹400 – ₹600 per person",
  },
];

export function About() {
  const { ref: sectionRef, isInView } = useScrollAnimation(0.1);
  const { ref: factsRef, isInView: factsInView } = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-24 bg-cream pattern-rajasthani" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <motion.img
                src={interiorImage}
                alt="Banjara Restaurant Interior - Colorful Rajasthani Ambiance"
                className="w-full h-[500px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            {/* Decorative elements */}
            <motion.div 
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-2xl -z-10 opacity-50"
              initial={{ scale: 0, rotate: -45 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -45 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
            <motion.div 
              className="absolute -top-6 -left-6 w-24 h-24 bg-secondary rounded-2xl -z-10 opacity-50"
              initial={{ scale: 0, rotate: 45 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 45 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
          </motion.div>

          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div>
              <motion.span 
                className="text-accent font-semibold text-sm uppercase tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Our Story
              </motion.span>
              <motion.h2 
                className="font-heading text-4xl md:text-5xl font-bold text-primary mt-2"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                A Royal Culinary Journey
              </motion.h2>
              <motion.div 
                className="section-divider mt-4 mx-0"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{ originX: 0 }}
              />
            </div>

            <motion.div 
              className="space-y-4 text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p>
                Banjara brings the heart of Rajasthan to Jamshedpur — colourful thalis, 
                bold flavours, and warm hospitality. Our chefs blend traditional recipes 
                with global thali influences, served in a vibrant, modern setting.
              </p>
              <p>
                Step into a world where every meal is a celebration. Our menu features 
                authentic Rajasthani specialties like Dal Bati Churma and Gatte ki Sabzi, 
                alongside pan-Indian and global thali creations that cater to every palate.
              </p>
              <p>
                As a women-owned establishment, we take pride in creating a welcoming 
                space for everyone — families, friends, and food lovers from all walks 
                of life.
              </p>
            </motion.div>

            {/* Badges */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.div 
                className="flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 0, 0, 0.3)" }}
              >
                <Heart className="w-4 h-4" />
                <span className="text-sm font-medium">Women-owned</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(242, 183, 5, 0.3)" }}
              >
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">LGBTQ+ Friendly</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Quick Facts */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16" ref={factsRef}>
          {quickFacts.map((fact, index) => (
            <motion.div
              key={fact.label}
              className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border"
              initial={{ opacity: 0, y: 40 }}
              animate={factsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div 
                className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <fact.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <p className="text-sm text-muted-foreground">{fact.label}</p>
              <p className="font-semibold text-foreground mt-1">{fact.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
