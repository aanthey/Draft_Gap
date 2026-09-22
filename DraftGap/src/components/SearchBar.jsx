const SearchBar = () => {
    return (
        <div id="search-bar">
            <label htmlFor="search-input"><img src="/assets/themes/light/icons/ui/search.svg" alt="search-icon" /></label>
            <input 
            id="search-input"
            type="text" 
            placeholder="Search for a champion.."
            />
        </div>
    )
}

export default SearchBar