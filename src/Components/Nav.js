import "./Nav.css";
import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  const { cartItems, showHideCart } = useContext(CartContext);

  return (
    <nav>
      {/* Title */}
      <div className="nav__left">Super Store </div>
      <div className="nav__middle">
        {/* Search */}
        <div className="input__wrapper">
          <input type="text" />
          <i className="fas fa-search" />
        </div>
      </div>
      {/* Cart Icon */}
      <div className="nav__right">
        <div className="cart__icon">
          <i
            className="fas fa-shopping-cart"
            aria-hidden="true"
            onClick={showHideCart}
          />
          {/* Item count */}
          {cartItems.length > 0 && (
            <div className="item__count">
              <span>{cartItems.length}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
