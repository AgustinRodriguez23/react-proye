import CartWidget from './CartWidget'
import { NavLink } from 'react-router'
export default function NavBar(){

    return (
        <nav style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', top: 0, width: '100%', alignItems: 'center'}}>
            <h2>AllBarberShop</h2>
            <ul style={{display: 'flex', flexDirection: 'row', gap: 25}}>
                <li style={{listStyleType: 'none'}}>
                    <NavLink style={{color: 'black'}} to="/">INICIO</NavLink>
                    </li>
                <li style={{listStyleType: 'none'}}>
                    <NavLink style={{color: 'black'}} to="/category/clipper">Clippers</NavLink>
                    </li>
                <li style={{listStyleType: 'none'}}>
                    <NavLink style={{color: 'black'}} to="/category/trimmer">Trimmers</NavLink>
                    </li>
                <li style={{listStyleType: 'none'}}>
                    <NavLink style={{color: 'black'}} to="/category/shaver">Shavers</NavLink>
                    </li>        
            </ul>
            <CartWidget></CartWidget>
        </nav>
    )
}