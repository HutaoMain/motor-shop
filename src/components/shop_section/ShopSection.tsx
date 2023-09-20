import "./ShopSection.css";
import products from "../../Data";
import ProductCard from "../product_card/ProductCard";

const ShopSection = () => {
  return (
    <div className="shop-section">
      <div className="shop-section-container">
        <h1 className="shop-section-title">BEST SELLING PRODUCTS</h1>
        <p className="shop-section-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <section className="shop-products-section">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default ShopSection;
