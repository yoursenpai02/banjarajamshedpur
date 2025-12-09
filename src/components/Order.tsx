import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Clock, Truck } from "lucide-react";

export function Order() {
  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Truck className="w-6 h-6 text-secondary" />
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Order Now
            </span>
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Craving Rajasthani Flavours?
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Order takeaway or no-contact delivery directly via WhatsApp. 
            We'll confirm your order and let you know the pickup/delivery time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
            
            <Button variant="outline" size="xl" asChild>
              <a href="tel:+917545800700">
                <Phone className="w-5 h-5 mr-2" />
                Call to Order
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-secondary" />
              <span>Avg. prep time: 20-30 mins</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-secondary" />
              <span>No-contact delivery available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
