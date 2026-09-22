const ChampionFilters = ({filters}) => {

    return (
        <div className="filter-button">
            <ul>
                {filters.map((filters) => (
                    <li key={['All','Mage',"Tank","Assassin","Marksman"]}>
                        <button type="button">{filters}</button>
                    </li>
                ))}
                
            </ul>
        </div>
    )
}

export default ChampionFilters
