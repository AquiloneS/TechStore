// cart context
import React from 'react'

function getCartFromLocalStorage (){
    return localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
}

export const CartContext =React.createContext()

function CartProvider({children}) {

    const [cart,setCart]=React.useState(getCartFromLocalStorage())
    const [total,setTotal]=React.useState(0)
    const [cartItems,setCartItems]=React.useState(0)

    React.useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))

        let newTotal = [...cart].reduce((total,cartItem)=>{return total+=cartItem.amount*cartItem.price},0)
        newTotal=parseFloat(newTotal.toFixed(2));
        setTotal(newTotal);

        let newCartItems = [...cart].reduce((total,cartItem)=>{return total+=cartItem.amount},0)
        setCartItems(newCartItems);

    },[cart])

    const removeItem = id =>{
        const newCart = [...cart].filter(item=>{return item.id!==id});
        setCart(newCart)
    }

    const increaseAmount = id =>{
        const newCart = [...cart].map(item=>item.id===id?{...item, amount: item.amount+1}:{...item})
        setCart(newCart)


    }

    const decreaseAmount =(id,amount)=>{
        if(amount===1){
            removeItem(id)
        }else{
            setCart([...cart].map(item=>{return item.id===id?{...item, amount:item.amount-1}:{...item}}))
        }
    }

    const addToCart = product =>{
        const {id,title,price,image}=product;
        const item = [...cart].find(item=>item.id===id);
        if(item){
            increaseAmount(id)
        }else{
            const newCartItem = {id,title,price,image, amount:1};
            setCart([...cart,newCartItem]);
        }
    }

    const clearCart = ()=>{
        setCart([])
    }


    return (
        <CartContext.Provider value={{cart,total,cartItems,removeItem, addToCart, increaseAmount, decreaseAmount, clearCart}} >{children}</CartContext.Provider>
    )
}

export default CartProvider
