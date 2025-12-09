import { useState } from "react";
import interiorImage from "@/assets/interior-1.jpg";
import heroThali from "@/assets/hero-thali.jpg";
import rajasthaniThali from "@/assets/rajasthani-thali.jpg";
import northIndianThali from "@/assets/thali-north-indian.jpg";
import momos from "@/assets/momos.jpg";
import honeyChilliPotato from "@/assets/honey-chilli-potato.jpg";

const galleryImages = [
  { src: interiorImage, alt: "Banjara Restaurant Interior - Vibrant Rajasthani Decor", category: "Interior" },
  { src: heroThali, alt: "Authentic Rajasthani Thali Spread", category: "Food" },
  { src: rajasthaniThali, alt: "Traditional Dal Bati Churma Thali", category: "Food" },
  { src: northIndianThali, alt: "Rich North Indian Thali", category: "Food" },
  { src: momos, alt: "Steamed Momos with Chutney", category: "Food" },
  { src: honeyChilliPotato, alt: "Crispy Honey Chilli Potato", category: "Food" },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Gallery
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mt-2">
            Experience the Vibe
          </h2>
          <div className="section-divider mt-4" />
          <p className="text-muted-foreground mt-6">
            Fashionable restaurant with a colourful interior presenting thali-style 
            global provisions in a warm, inviting atmosphere.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                  index === 0 ? "h-[300px] md:h-full" : "h-[200px] md:h-[250px]"
                }`}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-primary-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  View
                </span>
              </div>
              <div className="absolute bottom-3 left-3">
                <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-2 py-1 rounded">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Gallery view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <button
              className="absolute top-6 right-6 text-primary-foreground text-4xl hover:scale-110 transition-transform"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
