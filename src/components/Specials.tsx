import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import rajasthaniThali from "@/assets/rajasthani-thali.jpg";
import northIndianThali from "@/assets/thali-north-indian.jpg";
import honeyChilliPotato from "@/assets/honey-chilli-potato.jpg";
import momos from "@/assets/momos.jpg";

const specials = [
  {
    name: "Rajasthani Thali",
    description: "Our signature thali with authentic Dal Bati Churma and more",
    price: "₹399",
    image: rajasthaniThali,
    badge: "Most Popular",
  },
  {
    name: "North Indian Thali",
    description: "Rich curries, fluffy naans, and aromatic rice",
    price: "₹379",
    image: northIndianThali,
    badge: "Chef's Special",
  },
  {
    name: "Honey Chilli Potato",
    description: "Crispy potato fingers in sweet-spicy glaze",
    price: "₹199",
    image: honeyChilliPotato,
    badge: "Trending",
  },
  {
    name: "Steamed Momos",
    description: "8 delicious dumplings with fiery red chutney",
    price: "₹149",
    image: momos,
    badge: "Fan Favorite",
  },
];

export function Specials() {
  const { ref, isInView } = useScrollAnimation(0.1);

  return (
    <section className="py-24 bg-cream pattern-rajasthani" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="text-accent font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TrendingUp className="w-4 h-4" />
            Popular This Week
          </motion.span>
          <motion.h2 
            className="font-heading text-4xl md:text-5xl font-bold text-primary mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Guest Favorites
          </motion.h2>
          <motion.div 
            className="section-divider mt-4"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </motion.div>

        {/* Specials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specials.map((item, index) => (
            <motion.div
              key={item.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="absolute top-3 left-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {item.badge}
                  </span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-heading text-xl font-bold text-primary">
                    {item.price}
                  </span>
                  <motion.button 
                    className="text-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Add to Order →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
