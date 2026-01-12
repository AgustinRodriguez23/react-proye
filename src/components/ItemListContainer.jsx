import Item from "./Item"
import getData from "../../data/mockService"
import { useEffect, useState } from "react"

export default function ItemListContainer(props){
    const [products, setProducts] = useState([])

    useEffect( () => {
        getData().then( (respuesta) => {
        setProducts(respuesta)
    }).catch( (error) => {
        alert(error)
    })
    })
        

    return (
        <div>
            <h3>Usuario</h3>
            <p>Bienvenido!!</p>
            <p>En breve podrá consultar productos y stock ..!</p>
            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                {
                    products.map( 
                        (item) => <Item 
                        key={item.id}
                        {...item}>                   
                        </Item>

                    ) 
                }
            </div>
        </div>
    )
}