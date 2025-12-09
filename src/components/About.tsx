import { MapPin, Clock, Phone, IndianRupee, Heart, Users } from "lucide-react";
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
  return (
    <section id="about" className="py-24 bg-cream pattern-rajasthani">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={interiorImage}
                alt="Banjara Restaurant Interior - Colorful Rajasthani Ambiance"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-2xl -z-10 opacity-50" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary rounded-2xl -z-10 opacity-50" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mt-2">
                A Royal Culinary Journey
              </h2>
              <div className="section-divider mt-4 mx-0" />
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
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
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full">
                <Heart className="w-4 h-4" />
                <span className="text-sm font-medium">Women-owned</span>
              </div>
              <div className="flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full">
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">LGBTQ+ Friendly</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {quickFacts.map((fact, index) => (
            <div
              key={fact.label}
              className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <fact.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">{fact.label}</p>
              <p className="font-semibold text-foreground mt-1">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
