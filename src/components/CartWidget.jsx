import { useContext } from "react"
import cartContext from "../context/cartContext"
import { Link } from "react-router"

export default function CartWidget(){
    const { countItemsInCart } = useContext(cartContext)
    
    return (
        <Link to="/Cart">
            <span>🛒 ( {countItemsInCart() } )</span>
        </Link>
    )
}
