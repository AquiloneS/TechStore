import React from "react";
import {CartContext} from '../context/cart'
import EmptyCart from "../components/Cart/EmptyCart";
import CartItem from '../components/Cart/CartItem'
import {Link} from 'react-router-dom'
import { UserContext } from "../context/user";

export default function Cart() {

  const {cart,total}=React.useContext(CartContext)
  const {user}=React.useContext(UserContext)

  if (cart.length===0) {
    return <EmptyCart/>
  }

  return <section className="section cart-items">
    <h2>Your Cart</h2>
    {cart.map(item=>{return <CartItem key={item.id} {...item}></CartItem>})}
    <h2>Total : ${total}</h2>
    {user.token ? (
      <Link to='/checkout' className='btn btn-primary btn-block' >
        checkout
      </Link>
      ):(
      <Link className='btn btn-primary btn-block' to='/login'>
        Login
      </Link>
      )}
  </section>
}
