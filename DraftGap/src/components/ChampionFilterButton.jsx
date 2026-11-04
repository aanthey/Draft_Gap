const ChampionFilters = ({ filters, activeFilter, onFilterChange }) => {

    return (
        <div className="filter-button">
            <ul aria-label="Champion classes">
                {filters.map((filter) => (
                    <li key={filter}>
                        <button
                            type="button"
                            aria-pressed={activeFilter === filter}
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
