import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledInputContainer = styled.div`
  flex-basis: 80%;
  z-index: 1;
`

const StyledInput = styled.input`
  padding: 12px 32px 16px 32px;
  border: 1px solid transparent;
  border-radius: 54px;
  color: rgb(233, 60, 60);
  background-color: rgba(233, 60, 60, 0.1);
  font-weight: 700;
  font-size: 60px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  z-index: 1;
  :focus {
    border: 1px solid rgb(233, 60, 60, 0.4);
    box-shadow: 2px 3px 0px 0px rgba(233, 60, 60, 0.5);
    background-color: #fff;
  }
  ::placeholder {
    color: rgba(233, 60, 60, 0.5);
  }
  :hover {
    box-shadow: 2px 3px 0px 0px rgba(233, 60, 60, 0.5);
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
