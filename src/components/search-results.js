import React from "react"
import PropTypes from "prop-types"

const SearchResults = ({ searchTerm, searchResults, onCopyToClipboard }) =>
  searchTerm && (
    <div className="results">
      <ul className="results-list">
        {searchResults.map(emoji => (
          <li key={emoji.unicode}>
            <button type="button" onClick={() => onCopyToClipboard(emoji.char)}>
              {emoji.char}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )

SearchResults.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      unicode: PropTypes.string,
      codepoint: PropTypes.string,
      char: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      sub_category: PropTypes.string,
      shortcode: PropTypes.string,
      keywords: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  onCopyToClipboard: PropTypes.func.isRequired,
}

export default SearchResults
