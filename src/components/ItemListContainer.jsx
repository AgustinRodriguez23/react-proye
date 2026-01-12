import Item from "./Item"
import getData, { getCategoryData } from "../../data/mockService"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function ItemListContainer(props){
    const [products, setProducts] = useState([])
    const  { categoryID } = useParams()

    useEffect( () => {
        if (categoryID) {
            getCategoryData(categoryID).then( respuesta => setProducts(respuesta))               
        }
        else {
        getData().then( (respuesta) => {
        setProducts(respuesta)
    }).catch( (error) => {
        alert(error)
    })}
    })
        

    return (
        <div>
            <h3 style={{margin: 56}}>Bienvenido a la Tienda! Compre sin titubear..!</h3>
            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", margin: 25, gap: 16}}>
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