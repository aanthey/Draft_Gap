const ChampionCard = ({ champions, onSelect, team, activeRoleLabel }) => {
  return champions.map((champion) => {
    const selected = Object.values(team).some((pick) => pick?.id === champion.id)
    return (
      <button
        type="button"
        className="champion-card"
        key={champion.id}
        onClick={() => onSelect(champion)}
        disabled={selected}
        aria-label={selected ? `${champion.name}, already on your team` : `Select ${champion.name} for ${activeRoleLabel}`}
      >
        <img src={champion.icon} alt="" loading="lazy" />
        <span className="champion-name">{champion.name}</span>
        <span className="champion-type-badge">{selected ? 'On your team' : champion.tags.join(' · ')}</span>
      </button>
    )
  })
}

export default ChampionCard
