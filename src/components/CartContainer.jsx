import { useContext, useState } from "react"
import cartContext from "../context/cartContext"
import { createBuyOrder } from "../../data/firestore"
import './CartContainer.css'
import Swal from "sweetalert2"


const alertCheckout = (orderId) =>
  Swal.fire({
    title: "¡Compra realizada con éxito! 🎉",
    icon: "success",
    text: `Tu número de orden es ${orderId}`,
    footer: "RECIBIRAS LOS DETALLES DE TU COMPRA EN TU EMAIL",
  })



export default function CartContainer(){
    const { cart, removeCartProduct, getTotalPrice, clearCart } = useContext(cartContext)
    const [formData, setFormData] = useState({
        username: "",
        phone: "",
        email: ""
    })

async function handleCheckout(){
        const buyOrder = {
        buyer: formData,
        phone: formData.phone,
        total: getTotalPrice(),
        date: new Date()
        }
        const orderId = await createBuyOrder(buyOrder)
        clearCart()
        alertCheckout(orderId)
    }


function handleSubmit(event){
    event.preventDefault()
    setFormData({
        username: "",
        phone: "",
        email: "" 
    })
}    

function handleChange(event){
    const { value, name } = event.target
    const newFormData = {...formData}
    newFormData[name] = value
    setFormData(newFormData)
}

function handleReset(){
    setFormData({
        username: "",
        phone: "",
        email: ""
    })
}

console.log("CART 👉", cart)

cart.forEach(item => {
  console.log(
    "price:", item.price,
    "type:", typeof item.price,
    "count:", item.count,
    "type:", typeof item.count
  )
})



    return(
        <>
        <div>
            <h2>Tu carrito de compras</h2>
            <div className="itemCart">
                {
                    cart.map( item => <section key={item.id} style={{display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center", gap: 10, flexWrap: "wrap"}}>
                        { item.title }
                        <img style={{width: 150}} src={item.img} alt=""/> 
                        <p>{ item.price }</p>
                        <p>Cantidad: { item.count}</p>
                         <button onClick={ () => removeCartProduct(item.id)}>Eliminar del carrito</button>
                    </section>)
                } <h3>Total: ${getTotalPrice()}</h3>
            </div>
            
        </div>
        <div className="form-checkout">
            <form onSubmit={handleSubmit}>
                <label for="username">
                    Nombre: 
                    <input
                    onChange={handleChange} 
                    type="text"
                    placeholder="Nombre Completo"
                    name="username"
                    value={ formData.username }/>
                </label>
                <label for="email">
                    Email: 
                    <input
                    onChange={handleChange} 
                    type="email"
                    placeholder="tumail@mail.com"
                    name="email"
                    value={ formData.email }/>                   
                </label>
                <label for="phone">
                    Teléfono: 
                    <input
                    onChange={handleChange} 
                    type="text"
                    placeholder="12345678"
                    name="phone"
                    value={ formData.phone }/>
                </label>
                    <div>
                        <button onClick={handleCheckout}>Confirmar compra</button>
                        <button className="CancelForm" type="reset" onClick={handleReset}>Cancelar</button>
                    </div>
            </form>
        </div>
        </>
    )
}