const ChampionFilters = ({filters}) => {

    return (
        <div className="filter-button">
            <ul>
                {filters.map((filters) => (
                    <li key={filters}>
                        <button type="button">{filters}</button>
                    </li>
                ))}
                
            </ul>
        </div>
    )
}

export default ChampionFilters
