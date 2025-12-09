import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reviews = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "The best Rajasthani thali I've had outside of Jaipur! The Dal Bati Churma was absolutely divine. The ambiance is beautiful and the staff is so welcoming.",
    date: "2 weeks ago",
  },
  {
    name: "Rahul Verma",
    rating: 5,
    text: "Amazing food quality and portion sizes. The momos are a must-try! Perfect place for family dinners. Will definitely come back.",
    date: "1 month ago",
  },
  {
    name: "Ananya Das",
    rating: 4,
    text: "Lovely interiors and authentic taste. The Rajasthani thali took me back to my grandmother's cooking. A gem in Jamshedpur!",
    date: "3 weeks ago",
  },
  {
    name: "Vikram Singh",
    rating: 5,
    text: "The honey chilli potato is addictive! Great value for money. The restaurant has a wonderful vibe and the service is excellent.",
    date: "1 week ago",
  },
];

export function Reviews() {
  const { ref, isInView } = useScrollAnimation(0.1);
  const { ref: cardsRef, isInView: cardsInView } = useScrollAnimation(0.2);

  return (
    <section id="reviews" className="py-24 bg-cream pattern-rajasthani" ref={ref}>
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
            Testimonials
          </motion.span>
          <motion.h2 
            className="font-heading text-4xl md:text-5xl font-bold text-primary mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            What Our Guests Say
          </motion.h2>
          <motion.div 
            className="section-divider mt-4"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          
          {/* Rating Summary */}
          <motion.div 
            className="flex items-center justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                >
                  <Star
                    className={`w-6 h-6 ${
                      i < 4 ? "fill-accent text-accent" : "fill-accent/50 text-accent/50"
                    }`}
                  />
                </motion.div>
              ))}
            </div>
            <span className="font-heading text-3xl font-bold text-primary">4.4</span>
            <span className="text-muted-foreground">
              based on 4,403 reviews
            </span>
          </motion.div>
          <motion.p 
            className="text-sm text-muted-foreground mt-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            ✓ Updated by this business 5 weeks ago
          </motion.p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto" ref={cardsRef}>
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-xl p-6 shadow-lg border border-border"
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              animate={cardsInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 40, rotateX: 10 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.15)" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={cardsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.15 }}
              >
                <Quote className="w-8 h-8 text-accent/30 mb-4" />
              </motion.div>
              
              <p className="text-foreground leading-relaxed mb-6">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={cardsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.2, delay: 0.4 + index * 0.15 + i * 0.05 }}
                    >
                      <Star
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "fill-accent text-accent"
                            : "fill-muted text-muted"
                        }`}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.a
            href="https://www.google.com/maps/place/Banjara"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            whileHover={{ x: 5 }}
          >
            Read all reviews on Google
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
