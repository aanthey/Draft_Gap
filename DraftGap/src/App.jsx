import ChampionCard from './components/ChampionCard'
import './App.css'
import Nav from './components/Nav'

function App() {

  return (
    <>
    <header>
      <Nav links={["Home", "About", "Champions"]}/>    
      </header>
      <main>
        
         <h1>Draft Gap</h1>
       
        <ChampionCard name = "Mordekaiser" image = "/assets/champions/icons/Mordekaiser.png"/>

      </main>
      
    </>
  )
}

export default App
