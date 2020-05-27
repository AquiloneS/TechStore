import React from "react";
import {ProductContext}from "../context/products";
import {useParams, useHistory} from 'react-router-dom'
import Loading from "../components/Loading";
import { CartContext } from "../context/cart";

export default function ProductDetails() {

  const {id}=useParams()
  const history = useHistory()
  const {products}=React.useContext(ProductContext)
  const {addToCart}=React.useContext(CartContext)
  const product = products.find((item)=>{return item.id===parseInt(id)})
  console.log(product);
  if(product){
    const {image, description,title,price}=product;
    return( 
      <section className="section single-product">
        <img src={image} alt={title} className='single-product-image'/>
        <article>
          <h1>{title}</h1>
          <h2>{price}</h2>
          <p>{description}</p>
          <button
          className='btn btn-primary btn-block'
          onClick={()=>{
            addToCart(product)
            history.push('/cart')
          }}
          >add to cart</button>

        </article>
      </section>
    )

  }else{return <Loading/>}



 

}
