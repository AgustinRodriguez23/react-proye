
import { useState } from "react"

export default function ItemCount({ stock, onAddToCart }) {
    const [count, setCount] = useState(1)

    function handleResta() {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    function handleSuma() {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    return (
        <div style={{ padding: 50 }}>
            <div>
                <button onClick={handleResta} disabled={count <= 1}>-</button>
                <span>{count}</span>
                <button onClick={handleSuma} disabled={count >= stock}>+</button>
            </div>

            <button 
                onClick={() => onAddToCart(count)} 
                className="add-to-cart" disabled={stock === 0}>
                Agregar al carrito
            </button>
        </div>
    )
}
