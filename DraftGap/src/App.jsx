import ChampionCard from './components/ChampionCard'
import './App.css'
import Nav from './components/Nav'
import SearchBar from './components/SearchBar'
import ChampionFilters from './components/ChampionFilterButton'
import champions from './champions.json'

function App() {

  return (
    <>
    <header>
      <Nav
        links={[
          { label: "Team Builder", href: "#champions-container", active: "True" },
          { label: "About", href: "#about" },
        ]}
        image="/assets/themes/light/brand/draft-gap-mark.svg"
      />
    </header>
    <section id='hero'>
        <p id='plan-text'>Plan/Pick/Play</p>
        <h1 id='tagline'>Building your <span>dream team</span> made simple.</h1>
        <p id='choose-champions-text'>Choose your champions. Pick a team that <span>fits</span>.</p>
    </section>
    <main>
      <div id='champions-container'>
        <div className='champions-header'>
          <h2>Champions</h2>
          <SearchBar/>
        </div>
        <ChampionFilters filters = {["All","Mage","Marksman","Assassin","Tank","Support"]} />
        <div className="champion-grid">
          <ChampionCard champions={champions} />
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
