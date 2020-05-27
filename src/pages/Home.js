import React from "react";
import Hero from '../components/Hero'
import FeaturedProducts from '../components/Products/FeaturedProducts'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <>
    <Hero>
      <Link className='btn btn-primary btn-hero' to='/products'>Our products</Link>
    </Hero>
    <FeaturedProducts/>
    </>
  )
  
}
