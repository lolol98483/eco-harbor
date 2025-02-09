import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zero Waste</h3>
            <p className="text-accent-foreground/80">
              Making sustainable living accessible to everyone.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-accent-foreground/80">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="hover:text-accent-foreground/80">
                  Shop
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-accent-foreground/80">
              <li>Email: hello@zerowaste.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Eco Street</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent-foreground/80">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-accent-foreground/80">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-accent-foreground/80">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-accent-foreground/20 text-center text-accent-foreground/60">
          <p>&copy; {new Date().getFullYear()} Zero Waste. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
