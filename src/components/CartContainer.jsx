import { useContext, useState } from "react"
import cartContext from "../context/cartContext"
import { createBuyOrder } from "../../data/firestore"
import './CartContainer.css'


export default function CartContainer(){
    const { cart } = useContext(cartContext)
    const { removeCartProduct } = useContext(cartContext)
    const [formData, setFormData] = useState({
        username: "",
        phone: "",
        email: ""
    })

async function handleCheckout(){
        const buyOrder = {
        buyer: formData,
        phone: "1187328282",
        total: 450,
        date: new Date()
        }
        const orderId = await createBuyOrder(buyOrder)
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


    return(
        <>
        <div>
            <h2>Tu carrito de compras</h2>
            <div className="itemCart">
                {
                    cart.map( item => <section style={{display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center", gap: 10, flexWrap: "wrap"}}>
                        { item.title }
                        <img style={{width: 150}} src={item.img} alt=""/> 
                        <p>{ item.price }</p>
                        <p>Cantidad: { item.count}</p>
                         <button onClick={ () => removeCartProduct(item.id)}>Eliminar del carrito</button>
                    </section>)
                }
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