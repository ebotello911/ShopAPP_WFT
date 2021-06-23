import { useContext } from "react";
import "./CartItem.css";
import CartContext from "../context/cart/CartContext";
import formatCurrency from "format-currency";
import products from "../data";

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "$" };
  return (
    <li className='CartItem__item'>
      <img src={products.image} alt='' />
      <div>
        {products.title} {formatCurrency(`${products.price}`, opts)}
      </div>
      <button className='CartItem__button' onClick={() => removeItem(products.id)}>
        Remove
      </button>
    </li>
  );
};

export default CartItem;