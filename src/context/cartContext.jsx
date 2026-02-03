import { createContext, useState } from "react";

const cartContext = createContext({ cart: [] })
const DefaultContextProvider = cartContext.Provider


export function CartProvider( {children} ){

    const [cart, setCart] = useState([])

    function addProductToCart(item, count){
        const newCart = structuredClone(cart)
        newCart.push( { ...item, count} )

        setCart(newCart)
    }

    function removeCartProduct(idRemove){
        const newCart = cart.filter( item => item.id !== idRemove)
        setCart(newCart)
    }

    function countItemsInCart(){
        let total = 0
        cart.forEach( ( item ) => total += item.count)
        return total 
    }

    return (
        <DefaultContextProvider value={ { cart, addProductToCart, removeCartProduct, countItemsInCart } }>
            {children}
        </DefaultContextProvider>
    )
}


export default cartContext