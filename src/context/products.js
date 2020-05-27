import React from 'react'
import Axios from 'axios'
import url from '../utils/URL'
import featuredProduct, { flattenProducts } from '../utils/helpers'

export const ProductContext = React.createContext()

export default function ProductProvider ({children}) {

    const [loading,setLoading]=React.useState(false)
    const [products,setProducts]=React.useState([])
    const [featured,setFeatured]=React.useState([])

    React.useEffect(()=>{
        setLoading(true)
        Axios.get(`${url}/products`).then(response=>{
            const products = flattenProducts(response.data)
            const featured = featuredProduct(products)
            console.log(products);
            
            setFeatured(featured)
            setProducts(products)
            setLoading(false)
        })
        return ()=>{}
    },[])


    return (
        <ProductContext.Provider value={{loading,products,featured}} >{children}</ProductContext.Provider>
    )
}

