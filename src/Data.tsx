import { ProductInterface } from "./Types";

const products: ProductInterface[] = [
  {
    id: "1",
    productName: "High-Performance Exhaust System",
    imageUrl:
      "https://comoto.imgix.net/facet_set/image/4251/akrapovic_full_exhaust_systems_750x750.jpg?w=130&dpr=2.625&auto=format%2Ccompress&h=130&fit=fill&bg=fff",
    description:
      "Upgrade your bike's performance with our high-performance exhaust system.",
    price: 249.99,
    quantity: 50,
    category: "Exhaust Systems",
  },
  {
    id: "2",
    productName: "Premium Motorcycle Helmet",
    imageUrl:
      "https://www.dans.ph/cdn/shop/products/bell-qualifier-street-full-face-motorcycle-helmet-ascent-matte-black-red-white-front-left_grande.jpg?v=1663904900",
    description:
      "Stay safe and stylish with our premium motorcycle helmet featuring advanced safety features.",
    price: 149.99,
    quantity: 100,
    category: "Helmets",
  },
  {
    id: "3",
    productName: "Motorcycle Chain and Sprocket Kit",
    imageUrl:
      "https://sc04.alicdn.com/kf/Hc9c32d86897f44cb86e851c0c2eeae94b.jpg",
    description:
      "Replace your worn-out chain and sprockets with our durable kit for smoother rides.",
    price: 79.99,
    quantity: 75,
    category: "Chains & Sprockets",
  },
  {
    id: "4",
    productName: "LED Motorcycle Headlight Kit",
    imageUrl: "https://i.ebayimg.com/images/g/ZtgAAOSwhq5krRD9/s-l1200.jpg",
    description:
      "Upgrade your bike's lighting with our high-intensity LED headlight kit for better visibility.",
    price: 69.99,
    quantity: 60,
    category: "Lights & Electrical",
  },
];

export default products;
