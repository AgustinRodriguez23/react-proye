export default function Item( {title, img, price, }) {

    return (
        <div style={{ border: "solid 1px black", borderRadius: 8, padding: 8}}>
            <h3>{title}</h3>
            <img width="250" src={img} />
            <p>{price}</p>
            <button>Ver producto</button>
        </div>
    )
}

export function ItemButton(){
}