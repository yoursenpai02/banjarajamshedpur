import { Phone, MapPin, Heart, Users } from "lucide-react";

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
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-heading text-3xl font-bold">Banjara</h3>
            <p className="text-primary-foreground/80 max-w-md">
              Authentic Rajasthani Thali & Global Thali Delights. Experience the 
              royal flavours of Rajasthan in the heart of Jamshedpur.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a
                href="tel:+917545800700"
                className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
              >
                <Phone className="w-5 h-5" />
                075458 00700
              </a>
            </div>
            <div className="flex items-start gap-2 text-primary-foreground/70 text-sm">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>Bindal Mall, Marine Dr Rd, Jamshedpur 831011</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Opening Hours</h4>
            <div className="space-y-2 text-primary-foreground/70">
              <p>Monday – Sunday</p>
              <p className="text-accent font-medium">11:00 AM – 11:00 PM</p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Open Now</span>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-primary-foreground/20">
          {badges.map((badge) => (
            <span
              key={badge}
              className="bg-primary-foreground/10 text-primary-foreground/80 text-xs px-3 py-1 rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>
            © {new Date().getFullYear()} Banjara, Bindal Mall, Jamshedpur — All rights reserved
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
