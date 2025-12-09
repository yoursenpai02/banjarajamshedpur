import { Star, Quote } from "lucide-react";

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
  return (
    <section id="reviews" className="py-24 bg-cream pattern-rajasthani">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mt-2">
            What Our Guests Say
          </h2>
          <div className="section-divider mt-4" />
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < 4 ? "fill-accent text-accent" : "fill-accent/50 text-accent/50"
                  }`}
                />
              ))}
            </div>
            <span className="font-heading text-3xl font-bold text-primary">4.4</span>
            <span className="text-muted-foreground">
              based on 4,403 reviews
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            ✓ Updated by this business 5 weeks ago
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow"
            >
              <Quote className="w-8 h-8 text-accent/30 mb-4" />
              
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
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "fill-accent text-accent"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/Banjara"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Read all reviews on Google
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
