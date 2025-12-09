import { Star, Clock, IndianRupee, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-thali.jpg";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Authentic Rajasthani Thali at Banjara Restaurant"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 hero-overlay pattern-mandala" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 text-primary-foreground animate-fade-up">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="font-semibold">4.4</span>
            </span>
            <span className="text-primary-foreground/80">•</span>
            <span className="text-sm">4,403 reviews</span>
            <span className="text-primary-foreground/80">•</span>
            <span className="flex items-center gap-0.5 text-sm">
              <IndianRupee className="w-3 h-3" />
              400–600
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight animate-fade-up stagger-1">
            Banjara
          </h1>
          <p className="font-heading text-2xl md:text-3xl text-accent italic animate-fade-up stagger-2">
            Authentic Rajasthani Thali & Global Thali Delights
          </p>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-up stagger-3">
            Traditional recipes, modern vibe. Experience the royal flavours of Rajasthan
            in the heart of Jamshedpur.
          </p>

          {/* Open Status */}
          <div className="flex items-center justify-center gap-4 text-primary-foreground/80 animate-fade-up stagger-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Open Now</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Closes 11:00 PM</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Bindal Mall</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-up stagger-5">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("#reserve")}
            >
              Reserve a Table
            </Button>
            <Button
              variant="hero-outline"
              size="xl"
              asChild
            >
              <a
                href="https://api.whatsapp.com/send?phone=917545800700&text=Hello%20Banjara%20—%20I%20want%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
              >
                Order on WhatsApp
              </a>
            </Button>
          </div>

          {/* Attributes */}
          <div className="flex flex-wrap justify-center gap-3 pt-6 animate-fade-up">
            {["Dine-in", "Takeaway", "No-contact Delivery", "LGBTQ+ Friendly", "Women-owned"].map(
              (attr) => (
                <span
                  key={attr}
                  className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-3 py-1 text-xs text-primary-foreground/90"
                >
                  {attr}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
