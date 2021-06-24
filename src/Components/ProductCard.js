import { useContext } from "react";
import "./ProductCard.css";
import formatCurrency from "format-currency";
import CartContext from "../context/cart/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "$" };
  return (
    <div className="productCard__wrapper">
      <div>
        <img className="productCard__img" src={product.image} alt="" />
        <h4>{product.title}</h4>
        <br />
        <div className="ProductCard__category">
          <h5>{product.category}</h5>
        </div>
        <div className="ProductCard__price">
          <h5>{formatCurrency(`${product.price}`, opts)}</h5>
        </div>
        <div className="ProductCard__description">
          <h5>{product.description}</h5>
        </div>
        <br />
        <button
          className="ProductCard__button"
          onClick={() => addToCart(product)}
        >
          Add to basket
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
