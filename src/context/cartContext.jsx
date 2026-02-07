import { createContext, useState } from "react";

const cartContext = createContext({ cart: [] })
const DefaultContextProvider = cartContext.Provider


export function CartProvider( {children} ){

    const [cart, setCart] = useState([])


    function addProductToCart(item, count){
         setCart(prevCart => {
    const productIndex = prevCart.findIndex(
      prod => prod.id === item.id
    )
    if (productIndex !== -1) {
      const newCart = structuredClone(prevCart)
      newCart[productIndex].count += count
      return newCart
    }
    return [...prevCart, { ...item, count }]
  })
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


    function parsePrice(price) {
  return Number(
    price
      .replace(/\$/g, "") 
      .replace(/\./g, "")  
      .replace(/,/g, ".")  
  )
}



    function getTotalPrice() {
  return cart.reduce((acc, item) => {
    const price = parsePrice(item.price)
    const count = Number(item.count)
    return acc + price * count
  }, 0)
}


    function clearCart() {
    setCart([])
}




    return (
        <DefaultContextProvider value={ { cart, addProductToCart, removeCartProduct, countItemsInCart, getTotalPrice, clearCart } }>
            {children}
        </DefaultContextProvider>
    )
}


export default cartContext