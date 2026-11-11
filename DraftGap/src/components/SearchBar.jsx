const SearchBar = ({ query, onQueryChange }) => {
  return (
    <div id="search-bar">
      <label htmlFor="search-input">
        <img src="/assets/themes/light/icons/ui/search.svg" alt="" />
        <span className="sr-only">Search champions by name</span>
      </label>
      <input
        id="search-input"
        type="search"
        placeholder="Search for a champion..."
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
      />
    </div>
  )
}

export default SearchBar
