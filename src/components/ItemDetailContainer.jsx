import { useParams } from "react-router"
import ItemCount from "./ItemCount"
import { useEffect, useState } from "react"
import { getItemData } from "../../data/firestore"
import { useContext } from "react"
import cartContext from "../context/cartContext"

import './ItemDetail.css'


function ItemDetailContainer(){
    
    const { itemID } = useParams()
    const [product, setProduct] = useState({})
    const { addProductToCart } = useContext(cartContext)

    function onAddToCart(count){
        alert( count + " productos agregados")
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
            <ItemCount onAddToCart={onAddToCart}/>
        </div>
    )
}

export default ItemDetailContainer