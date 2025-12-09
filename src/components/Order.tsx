import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Clock, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Order() {
  const { ref, isInView } = useScrollAnimation(0.1);

  return (
    <section className="py-16 bg-secondary/10" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="flex items-center justify-center gap-2 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Truck className="w-6 h-6 text-secondary" />
            </motion.div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Order Now
            </span>
          </motion.div>
          
          <motion.h2 
            className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Craving Rajasthani Flavours?
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Order takeaway or no-contact delivery directly via WhatsApp. 
            We'll confirm your order and let you know the pickup/delivery time.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="whatsapp" size="xl" asChild>
                <a
                  href="https://api.whatsapp.com/send?phone=917545800700&text=Hello%20Banjara%20—%20I%20want%20to%20place%20a%20takeaway%20order.%0AName:%20%0AItems:%20%0APickup%20time:%20%0APlease%20confirm."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Order on WhatsApp
                </a>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="xl" asChild>
                <a href="tel:+917545800700">
                  <Phone className="w-5 h-5 mr-2" />
                  Call to Order
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Clock className="w-4 h-4 text-secondary" />
              <span>Avg. prep time: 20-30 mins</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Truck className="w-4 h-4 text-secondary" />
              <span>No-contact delivery available</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
