import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { device } from "../helpers/device"

const StyledInputContainer = styled.div`
  z-index: 1;
  min-width: 50%;
`

const StyledInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 12px 32px;
  border: 1px solid transparent;
  border-radius: 54px;
  color: #e35354;
  background-color: #fff;
  font-family: Avenir, Roboto, sans-serif;
  font-size: 44px;
  font-weight: 700;
  outline: none;
  width: 28rem;
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
  @media ${device.mobileLandscape} {
    font-size: 44px;
    width: 36rem;
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
