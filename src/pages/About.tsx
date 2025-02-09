import { Leaf, RecycleIcon, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold mb-6">About Zero Waste</h1>
          <p className="text-lg text-foreground/80">
            We're on a mission to make sustainable living accessible and enjoyable for everyone.
            Our journey began with a simple belief: small changes can make a big difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Leaf className="h-8 w-8" />,
              title: "Sustainable Products",
              description:
                "We carefully select eco-friendly products that help reduce waste and environmental impact.",
            },
            {
              icon: <RecycleIcon className="h-8 w-8" />,
              title: "Zero Waste Mission",
              description:
                "Our goal is to promote a zero waste lifestyle through education and accessible solutions.",
            },
            {
              icon: <Heart className="h-8 w-8" />,
              title: "Community Focus",
              description:
                "We believe in building a community of like-minded individuals committed to sustainability.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-lg border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-foreground/80">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-muted rounded-lg p-8 animate-fade-in">
          <h2 className="text-2xl font-bold mb-4 text-center">Our Story</h2>
          <p className="text-foreground/80 mb-4">
            Founded in 2024, Zero Waste started as a small online store with a big dream:
            to make sustainable living accessible to everyone. We believe that every small
            action counts in the fight against environmental pollution and waste.
          </p>
          <p className="text-foreground/80">
            Today, we're proud to offer a carefully curated selection of eco-friendly
            products that help our customers reduce their environmental impact while
            maintaining a comfortable and stylish lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;