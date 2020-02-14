import React from "react"
import PropTypes from "prop-types"

const SearchInput = ({ searchTerm, onTermChange }) => (
  <div className="search-input">
    <input
      id="searchInput"
      type="text"
      value={searchTerm}
      onChange={onTermChange}
      placeholder="search emoji"
    />
  </div>
)

SearchInput.propTypes = {
  onTermChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
}

export default SearchInput
