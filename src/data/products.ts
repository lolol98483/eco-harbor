export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
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
    name: "Bamboo Toothbrush",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04",
    category: "Bathroom",
  },
  {
    id: "5",
    name: "Stainless Steel Lunchbox",
    price: 34.99,
    image: "https://seedandsprout.com/cdn/shop/files/Sandwich-lunch-boxes_1.png?v=1723524234",
    category: "Kitchen",
  },
  {
    id: "6",
    name: "Cotton Produce Bag",
    price: 12.99,
    image: "https://www.battlegreen.co.uk/wp-content/uploads/2024/07/PRODUCE-BAG-1.jpg",
    category: "Shopping",
  },
  {
    id: "7",
    name: "Organic Beeswax Wraps",
    price: 19.99,
    image: "https://honig-klause-heidenau.com/cdn/shop/products/2_448bcb69-d50d-4b09-a401-0820a4e6dd5c.jpg?v=1623663063",
    category: "Kitchen",
  },
  {
    id: "8",
    name: "Bamboo Toilet Paper",
    price: 24.99,
    image: "https://www.reelpaper.com/cdn/shop/files/reel_toilet_paper_05.png?v=1701908135",
    category: "Bathroom",
  },
  {
    id: "9",
    name: "Solar-Powered Charger",
    price: 45.99,
    image: "https://www.travelandleisure.com/thmb/ZQOf7XDHumCQ2dEOy7jPF9PJsEM=/fit-in/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/bigblue-solarpowa-10w-etfe-portable-solar-panel-charger-d77182975fea4ffe98ffe1fec581aa1f.jpg",
    category: "Electronics",
  },
  {
    id: "10",
    name: "Reusable Coffee Filter",
    price: 14.99,
    image: "https://shop95691.sfstatic.io/upload_dir/shop/pics/2022/10/_thumbs/Genanvendeligt-kaffefilter-3-stk-str.-2-str.-4-ECO-LIVING-COCOON-COMPANY.w800.h800.jpg",
    category: "Kitchen",
  },
  {
    id: "11",
    name: "Natural Loofah Sponge",
    price: 8.99,
    image: "https://natbrands.co.uk/cdn/shop/articles/Feb_LoofCo_image_1024x.jpg?v=1581275859",
    category: "Bathroom",
  },
  {
    id: "12",
    name: "Biodegradable Phone Case",
    price: 29.99,
    image: "https://ru.mmore.net/cdn/shop/products/Biodegradable-Eco-Friendly-Phone-Case-Black.jpg?v=1637761164",
    category: "Electronics",
  },
  {
    id: "13",
    name: "Organic Cotton Tote",
    price: 18.99,
    image: "https://www.ecobags.com/cdn/shop/products/ECOBAGS-ORC-201-c-1457x2000x240ppi-Edit_16de106b-cf50-4f6f-ad48-efd123fa2f3f.jpg?v=1670870197",
    category: "Shopping",
  },
  {
    id: "14",
    name: "Bamboo Dish Brush",
    price: 7.99,
    image: "https://jungleculture.eco/cdn/shop/files/natural-dish-brushes_1_1200x.jpg?v=1691494020",
    category: "Kitchen",
  },
  {
    id: "15",
    name: "Stainless Steel Straws",
    price: 12.99,
    image: "https://m.media-amazon.com/images/I/81pZ71cKNnL.jpg",
    category: "Kitchen",
  },
  {
    id: "16",
    name: "Compostable Food Containers",
    price: 19.99,
    image: "https://ueeshop.ly200-cdn.com/u_file/UPAT/UPAT050/2110/products/14/b24ce018b1.jpg",
    category: "Kitchen",
  },
  {
    id: "17",
    name: "Natural Wool Dryer Sheets",
    price: 15.99,
    image: "https://bamboo-haus.com/wp-content/uploads/2022/04/Wool-Dryer-Balls-1024x576.jpg",
    category: "Laundry",
  },
  {
    id: "18",
    name: "Reusable Silicone Bags",
    price: 16.99,
    image: "https://www.lekue.com/cdn-cgi/image/format=auto,onerror=redirect/media/catalog/product/cache/80d68d1e74225849a505107b39a42815/8/8/881947_7.jpg",
    category: "Kitchen",
  }
];

export const categories = ["All", "Kitchen", "Shopping", "Lifestyle", "Bathroom", "Electronics", "Laundry"];
