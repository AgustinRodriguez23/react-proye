import CartWidget from './CartWidget'

export default function NavBar(){

    return (
        <nav style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', position: 'fixed', top: 0, width: '60%', alignItems: 'center'}}>
            <h2>AllBarberShop</h2>
            <ul style={{display: 'flex', flexDirection: 'row', gap: 25}}>
                <li style={{listStyleType: 'none'}}>
                    <a style={{color: 'black'}}href="">INICIO</a>
                    </li>
                <li style={{listStyleType: 'none'}}>
                    <a style={{color: 'black'}}href="">PRODUCTOS</a>
                    </li>
                <li style={{listStyleType: 'none'}}>
                    <a style={{color: 'black'}}href="">CATEGORIAS</a>
                    </li>    
            </ul>
            <CartWidget></CartWidget>
        </nav>
    )
}