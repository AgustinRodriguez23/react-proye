import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Item from './components/ItemListContainer'
import ItemListContainer from './components/ItemListContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <section>
        <ItemListContainer
        nombre="Luis"
        apellido="Lopez"
        ></ItemListContainer>
      </section>
    </>
  )
}

export default App
