import { useParams } from "react-router"
import ItemCount from "./ItemCount"
import { useEffect, useState } from "react"
import { getItemData } from "../../data/firestore"
import { useContext } from "react"
import cartContext from "../context/cartContext"
import Swal from "sweetalert2"

import './ItemDetail.css'

const sweetAlert=()=>
    Swal.fire({
  title: "Producto agregado al carrito!",
  icon: "success",
  draggable: true,
  color: "black",
  background: "aqua"
  
});

function ItemDetailContainer(){
    
    const { itemID } = useParams()
    const [product, setProduct] = useState({})
    const { addProductToCart } = useContext(cartContext)

    function onAddToCart(count){
        sweetAlert()
        addProductToCart(product, count)
    }

    useEffect( () => {
        getItemData(itemID).then( response => setProduct(response))
    }, [])


    return(
        <div className="Item-Detail">
            <h2>{product.title}</h2>
            <img src={product.img} alt="" style={{width: 225}}/>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <ItemCount stock={product.stock} onAddToCart={onAddToCart}/>
        </div>
    )
}

export default ItemDetailContainer