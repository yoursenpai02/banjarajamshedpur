import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type MenuCategory = {
  name: string;
  items: {
    name: string;
    description: string;
    price: string;
    isSignature?: boolean;
    isVeg?: boolean;
  }[];
};

const menuData: MenuCategory[] = [
  {
    name: "Rajasthani Thali",
    items: [
      {
        name: "Royal Rajasthani Thali",
        description: "Dal Bati Churma, Gatte ki Sabzi, Ker Sangri, Papad, Pickle, Rice, Roti",
        price: "₹399",
        isSignature: true,
        isVeg: true,
      },
      {
        name: "Desert King Thali",
        description: "Laal Maas, Safed Maas, Dal Bati, Bajre ki Roti, Churma, Pickle",
        price: "₹549",
        isSignature: true,
      },
      {
        name: "Marwari Special Thali",
        description: "Moong Dal, Papad ki Sabzi, Besan Gatta, Kadhi, Rice, Ghewar",
        price: "₹349",
        isVeg: true,
      },
    ],
  },
  {
    name: "North Indian Thali",
    items: [
      {
        name: "Shahi Paneer Thali",
        description: "Shahi Paneer, Dal Makhani, Jeera Rice, Naan, Raita, Salad",
        price: "₹379",
        isSignature: true,
        isVeg: true,
      },
      {
        name: "Butter Chicken Thali",
        description: "Butter Chicken, Dal Tadka, Rice, Butter Naan, Pickle, Gulab Jamun",
        price: "₹449",
      },
      {
        name: "Mixed Veg Thali",
        description: "Seasonal Vegetables, Dal Fry, Rice, Chapati, Papad, Sweet",
        price: "₹299",
        isVeg: true,
      },
    ],
  },
  {
    name: "Pan-Asian Thali",
    items: [
      {
        name: "Oriental Delight Thali",
        description: "Veg Manchurian, Fried Rice, Noodles, Spring Roll, Soup",
        price: "₹399",
        isVeg: true,
      },
      {
        name: "Dragon Chicken Thali",
        description: "Dragon Chicken, Burnt Garlic Rice, Hakka Noodles, Dim Sum",
        price: "₹449",
      },
    ],
  },
  {
    name: "Momos & Starters",
    items: [
      {
        name: "Steamed Veg Momos",
        description: "8 pieces served with spicy red chutney",
        price: "₹149",
        isVeg: true,
      },
      {
        name: "Fried Chicken Momos",
        description: "8 pieces, crispy fried, served with mayo dip",
        price: "₹179",
      },
      {
        name: "Honey Chilli Potato",
        description: "Crispy potato fingers in sweet chilli glaze",
        price: "₹199",
        isSignature: true,
        isVeg: true,
      },
      {
        name: "Paneer Tikka",
        description: "Chargrilled cottage cheese with bell peppers",
        price: "₹249",
        isVeg: true,
      },
    ],
  },
  {
    name: "Desserts & Beverages",
    items: [
      {
        name: "Ghewar",
        description: "Traditional Rajasthani disc-shaped sweet",
        price: "₹99",
        isVeg: true,
      },
      {
        name: "Gulab Jamun (2 pcs)",
        description: "Soft milk dumplings in sugar syrup",
        price: "₹79",
        isVeg: true,
      },
      {
        name: "Masala Chai",
        description: "Authentic Indian spiced tea",
        price: "₹49",
        isVeg: true,
      },
      {
        name: "Lassi (Sweet/Salted)",
        description: "Traditional yogurt-based drink",
        price: "₹69",
        isVeg: true,
      },
    ],
  },
];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].name);
  const { ref, isInView } = useScrollAnimation(0.1);

  const activeMenu = menuData.find((cat) => cat.name === activeCategory);

  return (
    <section id="menu" className="py-24 bg-background" ref={ref}>
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
            Our Menu
          </motion.span>
          <motion.h2 
            className="font-heading text-4xl md:text-5xl font-bold text-primary mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Taste the Royal Flavours
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
            From authentic Rajasthani thalis to pan-Asian delights, explore our 
            carefully curated menu featuring traditional recipes and modern fusion.
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {menuData.map((category, index) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.name
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {activeMenu?.items.map((item, index) => (
              <motion.div
                key={item.name}
                className="bg-card rounded-xl p-6 shadow-md border border-border group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      {item.isVeg && (
                        <span className="w-4 h-4 border-2 border-green-600 rounded-sm flex items-center justify-center">
                          <span className="w-2 h-2 bg-green-600 rounded-full" />
                        </span>
                      )}
                      {item.isSignature && (
                        <motion.span 
                          className="flex items-center gap-1 bg-accent/20 text-accent-foreground px-2 py-0.5 rounded text-xs font-medium"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Star className="w-3 h-3 fill-accent text-accent" />
                          Chef's Pick
                        </motion.span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {item.description}
                    </p>
                  </div>
                  <motion.span 
                    className="font-heading text-xl font-bold text-primary whitespace-nowrap"
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.price}
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="gold" size="lg" asChild>
              <a
                href="https://api.whatsapp.com/send?phone=917545800700&text=Hello%20Banjara%20—%20I%20want%20to%20place%20a%20takeaway%20order."
                target="_blank"
                rel="noopener noreferrer"
              >
                Order via WhatsApp
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" size="lg">
              <Download className="w-4 h-4 mr-2" />
              Download Full Menu
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
