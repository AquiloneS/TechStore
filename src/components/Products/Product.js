import React from "react";
import {Link} from 'react-router-dom'

export default function Product({image,title,price,id}) {
  
  return (
    <article className="product">
      
      <div className="img-container">
        <img src={image} alt={title}/>
        <Link className='btn btn-primary product-link' to={`/products/${id}`}>Details</Link>
      </div>
      <div className="product-footer">
      <p className="product-title">{title}</p>
      <p className="product-price">${price}</p>
      </div>
    </article>
  )
}
