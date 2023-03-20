import React, { useState } from "react";

function Item({ name, category }) {

  const [isCart, setIsCart] = useState(true)

  function handleClick() {
    setIsCart((isCart) => !isCart)
  }

  const className = isCart ? "Add to Cart" : "Remove From Cart"

  return (
    <li className={isCart ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick ={handleClick}className="add">{isCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
