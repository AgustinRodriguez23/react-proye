import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
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
