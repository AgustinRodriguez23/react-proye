import { useContext } from "react"
import cartContext from "../context/cartContext"
import { createBuyOrder } from "../../data/firestore"


export default function CartContainer(){
    const { cart } = useContext(cartContext)
    const { removeCartProduct } = useContext(cartContext)

    function handleCheckout(){
        const buyOrder = {
        buyer: "Matias",
        phone: "1187328282",
        total: 450,
        date: new Date()
        }
        createBuyOrder(buyOrder)
    }



    return(
        <div>
            <h2>Tu carrito de compras</h2>
            <div>
                {
                    cart.map( item => <section style={{display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center", gap: 10}}>
                        { item.title }
                        <img style={{width: 150}} src={item.img} alt="" /> 
                        <p>${ item.price }</p>
                        <p>Cantidad: { item.count}</p>
                         <button onClick={ () => removeCartProduct(item.id)}>Eliminar del carrito</button>
                    </section>)
                }
            </div>
            <button onClick={handleCheckout}>Confirmar compra</button>
        </div>
    )
}