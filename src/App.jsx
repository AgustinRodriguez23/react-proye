import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <section>
        <ItemCount></ItemCount>
        <ItemListContainer></ItemListContainer>        
      </section>
    </>
  )
}

export default App
