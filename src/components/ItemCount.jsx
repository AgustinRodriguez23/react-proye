import { useState } from "react"

export default function ItemCount( props ){
    const [count, setCount] = useState(1)

    function handleResta(){
        setCount(count - 1)
    }
    function handleSuma(){
        setCount(count + 1)
    }

    return (
        <div style={{padding: 50}}>
            <div>
                <button onClick={handleResta}>-</button>
                <span>{count}</span>
                <button onClick={handleSuma}>+</button>
            </div>
            <button onClick={ () => props.onAddToCart(count)} className="add-to-cart">Agregar al carrito</button>
        </div>
    )
}

