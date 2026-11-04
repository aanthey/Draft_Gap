import { useState } from 'react'
import ChampionCard from './components/ChampionCard'
import './App.css'
import Nav from './components/Nav'
import SearchBar from './components/SearchBar'
import ChampionFilters from './components/ChampionFilterButton'
import champions from './champions.json'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')
  const normalizedQuery = searchQuery.trim().toLowerCase()

  const filteredChampions = champions.filter((champion) => {
    const matchesSearch = champion.name.toLowerCase().includes(normalizedQuery)
    const matchesClass = activeFilter === 'All' || champion.tags.includes(activeFilter)

    return matchesSearch && matchesClass
  })

  function clearFilters() {
    setSearchQuery('')
    setActiveFilter('All')
  }

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
          <SearchBar value={searchQuery} onSearchChange={setSearchQuery} />
        </div>
        <ChampionFilters
          filters={["All","Fighter","Mage","Marksman","Assassin","Tank","Support"]}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        <p className="champion-results" role="status">
          {filteredChampions.length} {filteredChampions.length === 1 ? 'champion' : 'champions'} found
        </p>
        <div className="champion-grid">
          {filteredChampions.length > 0 ? (
            <ChampionCard champions={filteredChampions} />
          ) : (
            <div className="champion-empty-state">
              <p>No champions match your search and class filter.</p>
              <button type="button" onClick={clearFilters}>Clear search and filters</button>
            </div>
          )}
        </div>
      </div>
      <section id='teambuilder-section'>
        <p>Teambuilder</p>

      </section>
    </main>
    <footer>
      <p>Draft Gap is not endorsed by Riot Games and does not reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games and all associated properties are trademarks or registered trademarks of Riot Games, Inc.</p>
    </footer>
    </>
  )
}

export default App
