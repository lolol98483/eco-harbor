import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

const featuredProducts = [
  {
    id: "1",
    name: "Bamboo Cutlery Set",
    price: 24.99,
    image: "https://jungleculture.eco/cdn/shop/products/sustainable-cutlery-set_1200x.jpg?v=1661789761",
    category: "Kitchen",
  },
  {
    id: "2",
    name: "Reusable Produce Bags",
    price: 15.99,
    image: "https://seekbamboo.com/cdn/shop/files/reusable-produce-bag-seek-bamboo.webp?v=1701628400&width=2048",
    category: "Shopping",
  },
  {
    id: "3",
    name: "Glass Water Bottle",
    price: 29.99,
    image: "https://black-blum.com/cdn/shop/files/black-blum-glass-water-bottle-almond-closed-inside.jpg?v=1695025072&width=1206",
    category: "Lifestyle",
  },
  {
    id: "4",
    name: "Organic Beeswax Wraps",
    price: 19.99,
    image: "https://honig-klause-heidenau.com/cdn/shop/products/2_448bcb69-d50d-4b09-a401-0820a4e6dd5c.jpg?v=1623663063",
    category: "Kitchen",
  },
  {
    id: "5",
    name: "Bamboo Toothbrush",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04",
    category: "Bathroom",
  },
  {
    id: "6",
    name: "Stainless Steel Lunchbox",
    price: 34.99,
    image: "https://seedandsprout.com/cdn/shop/files/Sandwich-lunch-boxes_1.png?v=1723524234",
    category: "Kitchen",
  }
];

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      <Hero />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
      
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-foreground/80">
              We believe in a future where sustainable living is the norm, not the exception. 
              Our carefully curated collection of eco-friendly products helps you reduce waste 
              and make a positive impact on our planet, one small change at a time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;