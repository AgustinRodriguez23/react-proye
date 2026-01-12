import { useParams } from "react-router"
import ItemCount from "./ItemCount"
import { useEffect, useState } from "react"
import { getItemData } from "../../data/mockService"


function ItemDetailContainer(){
    
    const { itemID } = useParams()

    const [product, setProduct] = useState({})

    useEffect( () => {
        getItemData(itemID).then( response => setProduct(response))
    }, [])


    return(
        <div>
            <h2>{product.title}</h2>
            <img src={product.img} alt="" style={{width: 225}}/>
            <p>{product.price}</p>
            <ItemCount/>
        </div>
    )
}

export default ItemDetailContainer