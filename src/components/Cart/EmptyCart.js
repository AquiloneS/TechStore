import React from "react";
import {Link} from 'react-router-dom'

export default function EmptyCart() {
  return <section className="section empty-cart">
    <h2>Empty Cart...</h2>
    <Link className='btn btn-primary ' to='/products' >fill it</Link>
  </section>
}
