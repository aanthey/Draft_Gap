import { useState } from 'react'
import Builder from './components/Builder'
import { roles } from './roles'
import ChampionCard from './components/ChampionCard'
import './App.css'
import Nav from './components/Nav'
import SearchBar from './components/SearchBar'
import ChampionFilters from './components/ChampionFilterButton'
import champions from './champions.json'

function App() {
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const normalizedQuery = searchQuery.trim().toLowerCase()
  const visibleChampions = champions.filter((champion) =>
    (selectedFilter === 'All' || champion.tags.includes(selectedFilter)) &&
    champion.name.toLowerCase().includes(normalizedQuery)
  )
  const [team, setTeam] = useState({})
  const [activeRole, setActiveRole] = useState('top')
  const [announcement, setAnnouncement] = useState('')
  const activeRoleLabel = roles.find((role) => role.id === activeRole).label

  function chooseChampion(champion) {
    if (Object.values(team).some((pick) => pick?.id === champion.id)) return
    setTeam({ ...team, [activeRole]: champion })
    setAnnouncement(`${champion.name} selected for ${activeRoleLabel}.`)
  }

  function removeChampion(role) {
    setTeam({ ...team, [role.id]: null })
    setActiveRole(role.id)
    setAnnouncement(`${role.label} slot cleared.`)
  }


  return (
    <>
    <header>
      <Nav
        links={[
          { label: "Team Builder", href: "#teambuilder-section", active: "True" },
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
          <SearchBar query={searchQuery} onQueryChange={setSearchQuery} />
        </div>
        <ChampionFilters
          filters={["All", "Fighter", "Mage", "Marksman", "Assassin", "Tank", "Support"]}
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
        />
        <p className="filter-results" role="status">{visibleChampions.length} {visibleChampions.length === 1 ? 'champion' : 'champions'} · {selectedFilter}</p>
        <p className="pick-instruction">Choose a champion for <strong>{activeRoleLabel}</strong>.</p>
        {visibleChampions.length === 0 && (
          <p className="search-empty">No champions match your search and class filter. Try another name or select All.</p>
        )}
        <div className="champion-grid">
          <ChampionCard champions={visibleChampions} onSelect={chooseChampion} team={team} activeRoleLabel={activeRoleLabel} />
        </div>
      </div>
      <Builder team={team} activeRole={activeRole} onSelectRole={setActiveRole} onRemove={removeChampion} />
      <p className="sr-only" role="status">{announcement}</p>
    </main>
    <footer>
      <p>Draft Gap is not endorsed by Riot Games and does not reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games and all associated properties are trademarks or registered trademarks of Riot Games, Inc.</p>
    </footer>
    </>
  )
}

export default App
