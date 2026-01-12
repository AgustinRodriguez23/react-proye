import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'
import { BrowserRouter, Routes, Route } from 'react-router'
import { useState } from 'react'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {

  return (
    <BrowserRouter>
      <header>
        <NavBar></NavBar>
      </header>
    <Routes>
          <Route index element= {<ItemListContainer/>}/>
          <Route path="/product/:itemID" element= {<ItemDetailContainer/>}/>
          <Route path="/category/:categoryID" element= {<ItemListContainer/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
