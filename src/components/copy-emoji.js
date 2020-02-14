import React from "react"
import PropTypes from "prop-types"

const CopyEmoji = ({ copySuccess, copiedValue }) =>
  copySuccess ? (
    <div className="copy-wrap">
      <div className="copied">copied {copiedValue}</div>
    </div>
  ) : null

CopyEmoji.propTypes = {
  copiedValue: PropTypes.string.isRequired,
  copySuccess: PropTypes.bool.isRequired,
}

export default CopyEmoji
