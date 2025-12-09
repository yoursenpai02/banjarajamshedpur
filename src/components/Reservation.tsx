import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, MessageSquare, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Reservation() {
  const { toast } = useToast();
  const { ref, isInView } = useScrollAnimation(0.1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    requests: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("reservations").insert({
        name: formData.name,
        phone: formData.phone,
        email: formData.email || null,
        date: formData.date,
        time: formData.time,
        guests: parseInt(formData.guests) || 2,
        special_requests: formData.requests || null,
        status: "pending",
      });

      if (error) throw error;

      toast({
        title: "Reservation Confirmed!",
        description:
          "Thank you! Your table at Banjara is confirmed. We will call to reconfirm 2 hours before your booking.",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        guests: "2",
        requests: "",
      });
    } catch (error) {
      console.error("Reservation error:", error);
      toast({
        title: "Booking Failed",
        description: "Something went wrong. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Banjara — I want to book a table.\nName: ${formData.name}\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}\nSpecial requests: ${formData.requests || "None"}`
  );

  return (
    <section id="reserve" className="py-24 bg-primary text-primary-foreground pattern-mandala" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
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
              Reservations
            </motion.span>
            <motion.h2 
              className="font-heading text-4xl md:text-5xl font-bold mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Book Your Table
            </motion.h2>
            <motion.div 
              className="w-24 h-1 mx-auto rounded-full bg-accent mt-4"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
            <motion.p 
              className="text-primary-foreground/80 mt-6 max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Reserve your spot for an unforgettable Rajasthani dining experience. 
              For immediate bookings, call us or message on WhatsApp.
            </motion.p>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-card text-foreground rounded-2xl p-8 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label className="text-sm font-medium text-foreground">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Enter your name"
                />
              </motion.div>

              {/* Phone */}
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.55 }}
              >
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
              </motion.div>

              {/* Email */}
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label className="text-sm font-medium text-foreground">
                  Email (for confirmation)
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="your@email.com"
                />
              </motion.div>

              {/* Date */}
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.65 }}
              >
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </motion.div>

              {/* Time */}
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Time *
                </label>
                <select
                  required
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                >
                  <option value="">Select time</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="12:30">12:30 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="13:30">1:30 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="19:30">7:30 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="20:30">8:30 PM</option>
                  <option value="21:00">9:00 PM</option>
                  <option value="21:30">9:30 PM</option>
                  <option value="22:00">10:00 PM</option>
                </select>
              </motion.div>

              {/* Guests */}
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.75 }}
              >
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Number of Guests *
                </label>
                <select
                  required
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({ ...formData, guests: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                  <option value="10+">10+ (Large Party)</option>
                </select>
              </motion.div>

              {/* Special Requests */}
              <motion.div 
                className="space-y-2 md:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Special Requests
                </label>
                <input
                  type="text"
                  value={formData.requests}
                  onChange={(e) =>
                    setFormData({ ...formData, requests: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Birthday, anniversary, dietary needs..."
                />
              </motion.div>
            </div>

            {/* Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.85 }}
            >
              <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Confirming..." : "Confirm Reservation"}
                </Button>
              </motion.div>
              <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="button"
                  variant="whatsapp"
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a
                    href={`https://api.whatsapp.com/send?phone=917545800700&text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book via WhatsApp
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.form>

          {/* Phone CTA */}
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <p className="text-primary-foreground/80 mb-2">
              Prefer to call? We're happy to help!
            </p>
            <motion.a
              href="tel:+917545800700"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold text-lg transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-5 h-5" />
              075458 00700
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
