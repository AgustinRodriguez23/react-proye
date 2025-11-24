export default function ItemListContainer(props){
    const { nombre, apellido } = props

    return (
        <div>
            <h3>Usuario</h3>
            <p>Bienvenido!! {nombre} {apellido}</p>
            <p>En breve podrá consultar productos y stock ..!</p>
        </div>
    )
}