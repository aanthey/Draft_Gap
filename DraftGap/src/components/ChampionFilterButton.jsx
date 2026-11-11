const ChampionFilters = ({ filters, selectedFilter, onFilterChange }) => {
  return (
    <div className="filter-button" role="group" aria-label="Filter champions by class">
      <ul>
        {filters.map((filter) => (
          <li key={filter}>
            <button
              type="button"
              aria-pressed={selectedFilter === filter}
              onClick={() => onFilterChange(filter)}
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ChampionFilters
