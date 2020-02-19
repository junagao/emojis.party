import React from "react"
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const StyledCopyContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  position: fixed;
  z-index: 10;
  animation: ${fadeIn} 0.25s ease-in;
`

const StyledCopied = styled.div`
  font-size: 32px;
  white-space: nowrap;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 50%;
  background-color: rgba(255, 255, 255, 0.95);
  color: rgb(233, 60, 60);
  font-weight: 600;
  padding: 24px 40px;
  text-align: center;
  border-radius: 70px;
  z-index: 2;
`

const CopyEmoji = ({ copySuccess, copiedValue }) =>
  copySuccess && (
    <StyledCopyContainer>
      <StyledCopied>copied {copiedValue}</StyledCopied>
    </StyledCopyContainer>
  )

CopyEmoji.propTypes = {
  copiedValue: PropTypes.string.isRequired,
  copySuccess: PropTypes.bool.isRequired,
}

export default CopyEmoji
