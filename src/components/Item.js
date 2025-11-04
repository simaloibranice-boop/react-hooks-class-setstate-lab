import React, { useState } from "react";

function Item(props) {
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCartClick = () => {
    setIsInCart(!isInCart);
  };

    return (
      <li className={isInCart ? "in-cart" : ""}>
        <span>{props.name}</span>
        <span className="category">{props.category}</span>
        <button
          className={isInCart ? "remove" : "add"}
          onClick={handleAddToCartClick}
        >
          {isInCart ? "Remove From" : "Add to"} Cart
        </button>
      </li>
    );
  }

export default Item;
