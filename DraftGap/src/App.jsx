import ChampionCard from './components/ChampionCard'
import './App.css'
import Nav from './components/Nav'

function App() {

  return (
    <>
    <header>
      <Nav links={[ "Teambuilder", "About"]} image= "/assets/themes/light/brand/draft-gap-mark.svg" alt = "image of site logo"/>
    </header>
    <section id='hero'>
        <p>Plan/Pick/Play</p>
        <h1>Building your <span>dream team</span> made simple.</h1>
        <p>Choose your champions. Pick a team that <span>fits</span>.</p>
    </section>
    <main>
      <div id='champions-container'>
        <h2>Champions</h2>
      <div className='champion-grid'>
        <ChampionCard name = "Mordekaiser" image = "/assets/champions/icons/Mordekaiser.png"/>
        <ChampionCard name = "Kalista" image = "/assets/champions/icons/Kalista.png"/>
        <ChampionCard name = "Thresh" image = "/assets/champions/icons/Thresh.png"/>
      </div>
      </div>
    </main>
    <footer>
      <p>Draft Gap is not endorsed by Riot Games and does not reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games and all associated properties are trademarks or registered trademarks of Riot Games, Inc.</p>
    </footer>
    </>
  )
}

export default App
