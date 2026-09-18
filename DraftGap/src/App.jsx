import ChampionCard from './components/ChampionCard'
import './App.css'
import Nav from './components/Nav'

function App() {

  return (
    <>
    <header>
      <Nav links={[ "Teambuilder", "About"]} image= "/assets/themes/light/brand/draft-gap-mark.svg" alt = "image of site logo"/>
      </header>
      <main>
        <section id='Hero'>
          <h1>Building your team made simple.</h1>
        </section>
       
        <ChampionCard name = "Mordekaiser" image = "/assets/champions/icons/Mordekaiser.png"/>

      </main>
      <footer>
        <p>Draft Gap is not endorsed by Riot Games and does not reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games and all associated properties are trademarks or registered trademarks of Riot Games, Inc.</p>
      </footer>
    </>
  )
}

export default App
