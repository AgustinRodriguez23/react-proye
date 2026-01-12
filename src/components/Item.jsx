import { Link } from "react-router"

export default function Item( {title, img, price, id}) {

    return (
        <div style={{ border: "solid 2px black", borderRadius: 8, padding: 8}}>
            <h3>{title}</h3>
            <img width="250" src={img} />
            <p>{price}</p>
            <Link to={ `/product/${id}`}>
                <button>Ver producto</button>
            </Link>
        </div>
    )
}
