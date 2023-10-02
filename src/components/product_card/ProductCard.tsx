import "./ProductCard.css";
import { LocalMall, Add, Remove } from "@mui/icons-material";
import React from "react";
import { ProductInterface } from "../../Types";
import Rating from "@mui/material/Rating";
import { useCartStore } from "../../zustand/CartStore";

interface Props {
  product: ProductInterface;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  // const [quantity, setQuantity] = useState<number>(1);
  const addItem = useCartStore((state) => state.addItem);
  const handleAddProductToCart = () => {
    addItem(product, 1);
  };
  return (
    <div className="product-card">
      <section className="product-image-container">
        <img
          className="product-image"
          src={product.productImage}
          alt={product.productName}
        />
      </section>
      <section>
        <Rating name="size-medium" defaultValue={2} />
      </section>
      <section className="product-info-container">
        <section className="product-info">
          <div className="product-name-section">
            {/* <span className="product-category">
              {product.category?.categoryName}
            </span> */}
            <span className="product-name">{product.productName}</span>
          </div>
          <div className="product-price-section">
            <span className="product-price">₱{product.price}</span>
            <span className="product-quantity">{product.quantity}pcs</span>
          </div>
        </section>
        <section className="product-btns">
          <div className="product-quantity-btn">
            <Remove sx={{ cursor: "pointer", fontSize: "20px" }} />
            <input type="number" className="product-amount" min="1" value={1} />
            <Add sx={{ cursor: "pointer", fontSize: "20px" }} />
          </div>
          <div onClick={handleAddProductToCart}>
            <LocalMall sx={{ fontSize: "30px", cursor: "pointer" }} />
          </div>
        </section>
      </section>
    </div>
  );
};

export default ProductCard;
