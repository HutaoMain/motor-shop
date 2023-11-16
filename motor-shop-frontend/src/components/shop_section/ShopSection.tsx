import "./ShopSection.css";
import ProductCard from "../product_card/ProductCard";
import { ProductInterface } from "../../Types";
import { useQuery } from "react-query";
import axios from "axios";

const ShopSection = () => {
  const { data } = useQuery<ProductInterface[]>({
    queryKey: ["client-products"],
    queryFn: () =>
      axios
        .get(`${import.meta.env.VITE_APP_BASE_URL}/api/product/list`)
        .then((res) => res.data),
  });

  return (
    <div className="shop-section">
      <div className="shop-section-container">
        <section className="shop-products-section">
          {data?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default ShopSection;
