import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { device } from "../helpers/device"

const FooterContainer = styled.footer`
  padding: 16px 32px;
  font-size: 16px;
  background-color: #e35354;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media ${device.mobileLandscape} {
    padding: 16px 32px;
  }
  @media ${device.tabletPortrait} {
    padding: 16px 64px;
  }
  @media ${device.tabletLandscape} {
  }
  @media ${device.laptop} {
  }
`

const MadeWithLove = styled.div`
  max-width: 50%;
  @media (max-width: 768px) {
    max-width: 70%;
  }
  @media (max-width: 575.98px) {
    max-width: 90%;
  }
`

const Nav = styled.div`
  max-width: 50%;
`

const StyledExternalLink = styled.a`
  font-family: Avenir, sans-serif;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  :visited {
    color: #fff;
    text-decoration: none;
  }
`

const Footer = ({ siteAuthor, siteGithub }) => (
  <FooterContainer>
    <MadeWithLove>
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>{" "}
      by{" "}
      <StyledExternalLink href="http://junagao.com">
        {siteAuthor}
      </StyledExternalLink>
    </MadeWithLove>
    <Nav>
      <StyledExternalLink href={siteGithub}>Github</StyledExternalLink>
    </Nav>
  </FooterContainer>
)

Footer.propTypes = {
  siteAuthor: PropTypes.string.isRequired,
  siteGithub: PropTypes.string.isRequired,
}

export default Footer
