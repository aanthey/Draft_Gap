const SearchBar = ({ value, onSearchChange }) => {
    return (
        <div id="search-bar">
            <label htmlFor="search-input">
                <span className="sr-only">Search champions</span>
                <img src="/assets/themes/light/icons/ui/search.svg" alt="" />
            </label>
            <input 
            id="search-input"
            type="search"
            value={value}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search for a champion..."
            />
        </div>
    )
}

export default SearchBar
