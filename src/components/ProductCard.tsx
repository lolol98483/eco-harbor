import { Link } from "react-router-dom";
import { ShoppingBag, Star, StarHalf } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { Button } from "./ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating?: number;
  reviews?: number;
}

const ProductCard = ({
  id,
  name,
  price,
  image,
  category,
  rating = 4.5,
  reviews = Math.floor(Math.random() * 50) + 10,
}: ProductCardProps) => {
  const { addItem } = useCart();

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`star-${i}`}
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half-star"
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      );
    }

    return stars;
  };

  const handleAddToCart = () => {
    addItem({ id, name, price, image });
  };

  return (
    <div className="group relative bg-card rounded-lg overflow-hidden border animate-fade-in">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-muted-foreground mb-1">{category}</p>
        <h3 className="font-medium text-foreground mb-2">{name}</h3>
        <div className="flex items-center gap-1 mb-2">
          {renderStars(rating)}
          <span className="text-sm text-muted-foreground ml-1">
            ({reviews})
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-accent font-semibold">${price.toFixed(2)}</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleAddToCart}
            className="hover:bg-accent/10 rounded-full transition-colors"
          >
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;