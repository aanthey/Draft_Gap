const ChampionCard = ({ champions }) => {
  return (
    <>
      {champions.map((champion) => (
        <article className="champion-card" key={champion.id}>
          <img src={champion.icon} alt={champion.name} />
          <h2>{champion.name}</h2>
          <div className="champion-type-badge">
            <span>{champion.tags.join('   ')}</span>
          </div>
        </article>
      ))}
    </>
  )
}

export default ChampionCard