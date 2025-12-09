import { TrendingUp } from "lucide-react";
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
  return (
    <section className="py-24 bg-cream pattern-rajasthani">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Popular This Week
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mt-2">
            Guest Favorites
          </h2>
          <div className="section-divider mt-4" />
        </div>

        {/* Specials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specials.map((item, index) => (
            <div
              key={item.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {item.badge}
                  </span>
                </div>
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
                  <button className="text-sm font-medium text-secondary hover:text-secondary/80 transition-colors">
                    Add to Order →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
