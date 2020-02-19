import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledInputContainer = styled.div`
  z-index: 1;
  min-width: 50%;
`

const StyledInput = styled.input`
  padding: 12px 32px 16px 32px;
  border: 1px solid transparent;
  border-radius: 54px;
  color: #e35354;
  background-color: #fff;
  font-weight: 700;
  font-size: 48px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  z-index: 1;
  :focus {
    border: 1px solid #ee9898;
    box-shadow: 2px 3px 0px 0px #ee9898;
    background-color: #fff;
  }
  ::placeholder {
    color: #ee9898;
  }
  :hover {
    border: 1px solid #ee9898;
    box-shadow: 2px 3px 0px 0px #ee9898;
  }
`

const SearchInput = ({ searchTerm, onTermChange }) => (
  <StyledInputContainer>
    <StyledInput
      id="searchInput"
      type="text"
      value={searchTerm}
      onChange={onTermChange}
      placeholder="search"
    />
  </StyledInputContainer>
)

SearchInput.propTypes = {
  onTermChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
}

export default SearchInput
