import React from "react";
import {FaAngleUp, FaAngleDown} from 'react-icons/fa'
import { CartContext } from "../../context/cart";

export default function CartItem({...item}) {
  
  const {image,title,price,amount,id}=item;

  const {removeItem,increaseAmount,decreaseAmount}=React.useContext(CartContext)
  

  return (
    <article className="cart-item">
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <h5>{price}</h5>
        <button
          onClick={() => {
            removeItem(id)
          }}
          className="cart-btn remove-btn"
        >
          remove
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            increaseAmount(id)
          }}
          type="button"
          className="cart-btn amount-btn"
        >
          <FaAngleUp />
        </button>
        <p className="item-amount">{amount}</p>
        <button
          onClick={() => {
            decreaseAmount(id,amount)
          }}
          type="button"
          className="cart-btn amount-btn"
        >
          <FaAngleDown />
        </button>
      </div>
    </article>
  );
}
