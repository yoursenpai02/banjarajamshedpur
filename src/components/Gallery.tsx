import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import interiorImage from "@/assets/interior-1.jpg";
import heroThali from "@/assets/hero-thali.jpg";
import rajasthaniThali from "@/assets/rajasthani-thali.jpg";
import northIndianThali from "@/assets/thali-north-indian.jpg";
import momos from "@/assets/momos.jpg";
import honeyChilliPotato from "@/assets/honey-chilli-potato.jpg";

const galleryImages = [
  { src: interiorImage, alt: "Banjara Restaurant Interior - Vibrant Rajasthani Decor", category: "Interior" },
  { src: heroThali, alt: "Authentic Rajasthani Thali Spread", category: "Food" },
  { src: rajasthaniThali, alt: "Traditional Dal Bati Churma Thali", category: "Food" },
  { src: northIndianThali, alt: "Rich North Indian Thali", category: "Food" },
  { src: momos, alt: "Steamed Momos with Chutney", category: "Food" },
  { src: honeyChilliPotato, alt: "Crispy Honey Chilli Potato", category: "Food" },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { ref, isInView } = useScrollAnimation(0.1);

  return (
    <section id="gallery" className="py-24 bg-background" ref={ref}>
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
            Gallery
          </motion.span>
          <motion.h2 
            className="font-heading text-4xl md:text-5xl font-bold text-primary mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Experience the Vibe
          </motion.h2>
          <motion.div 
            className="section-divider mt-4"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          <motion.p 
            className="text-muted-foreground mt-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Fashionable restaurant with a colourful interior presenting thali-style 
            global provisions in a warm, inviting atmosphere.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image.src)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover ${
                  index === 0 ? "h-[300px] md:h-full" : "h-[200px] md:h-[250px]"
                }`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div 
                className="absolute inset-0 bg-primary/0 flex items-center justify-center"
                whileHover={{ backgroundColor: "rgba(139, 0, 0, 0.4)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.span 
                  className="text-primary-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  View
                </motion.span>
              </motion.div>
              <motion.div 
                className="absolute bottom-3 left-3"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-2 py-1 rounded">
                  {image.category}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={selectedImage}
                alt="Gallery view"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.button
                className="absolute top-6 right-6 text-primary-foreground text-4xl"
                onClick={() => setSelectedImage(null)}
                whileHover={{ scale: 1.2, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                ×
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
