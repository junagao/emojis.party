import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 16px 64px;
  font-family: Avenir, sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
  background-color: #e35354;
  color: #fff;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: 2;
  align-items: center;
  @media (max-width: 768px) {
    padding: 16px 32px;
  }
`

const MadeWithLove = styled.div`
  max-width: 50%;
  @media (max-width: 768px) {
    max-width: 70%;
  }
`

const Nav = styled.div`
  max-width: 50%;
`

const StyledExternalLink = styled.a`
  font-family: Avenir, sans-serif;
  font-weight: 500;
  color: #fff;
  text-decoration: none;

  visited {
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
