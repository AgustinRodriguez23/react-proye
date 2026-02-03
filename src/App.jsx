import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router'
import ItemDetailContainer from './components/ItemDetailContainer'
import { CartProvider } from './context/cartContext'


function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <header>
          <NavBar></NavBar>
        </header>
        <Routes>
          <Route index element= {<ItemListContainer/>}/>
          <Route path="/product/:itemID" element= {<ItemDetailContainer/>}/>
          <Route path="/category/:categoryID" element= {<ItemListContainer/>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
