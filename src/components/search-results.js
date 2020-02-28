import React from "react"
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"

const emojisFadeIn = keyframes`
  from {
    left: 0;
    padding-top: 100px;
    opacity: 0;
  }
  to {
    left: 0;
    top: 0;
    opacity: 1;
  }
`

const StyleResultsContainer = styled.div`
  padding: 0px 64px 120px 64px;
  animation: ${emojisFadeIn} 0.25s ease-in;
  -moz-animation: ${emojisFadeIn} 0.25s ease-in; /* Firefox */
  -webkit-animation: ${emojisFadeIn} 0.25s ease-in; /* Safari and Chrome */
  -o-animation: ${emojisFadeIn} 0.25s ease-in; /* Opera */
  @media (max-width: 575.98px) {
    padding: 0px 8px 120px 8px;
  }
`

const StyledResultsList = styled.ul`
  justify-content: space-evenly;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`

const StyledEmojiButton = styled.button`
  font-size: 88px;
  padding: 28px 34px;
  transition: all 0.25s ease-out;
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: none;
  border-radius: 4px;
  :active {
    background-color: rgba(233, 60, 60, 0.25);
    transition: 1s;
  }
  @media (max-width: 575.98px) {
    font-size: 64px;
    padding: 10px 16px;
  }
`

const SearchResults = ({ searchTerm, searchResults, onCopyToClipboard }) =>
  searchTerm && (
    <StyleResultsContainer>
      <StyledResultsList>
        {searchResults.map(emoji => (
          <li key={emoji.unicode}>
            <StyledEmojiButton
              type="button"
              onClick={() => onCopyToClipboard(emoji.char)}
            >
              {emoji.char}
            </StyledEmojiButton>
          </li>
        ))}
      </StyledResultsList>
    </StyleResultsContainer>
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
