import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.header`
  font-family: Avenir, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`

const StyledLogo = styled.div`
  font-size: 60px;
  font-weight: 900;
  a {
    color: #e35354;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    font-size: 56px;
  }
`

const StyledTagline = styled.p`
  color: #666;
  font-weight: 400;
  margin-top: 5px;
  width: 80%;
  margin-left: -32px;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const StyledSpan = styled.span`
  font-weight: 900;
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const { title, description } = data.site.siteMetadata

  return (
    <StyledHeader>
      <StyledLogo>
        <Link to="/">
          {title}{" "}
          <span role="img" aria-label="party emoji">
            🎉
          </span>
        </Link>
      </StyledLogo>
      <StyledTagline>
        {description} Find emojis <br />
        using keywords like <StyledSpan>white</StyledSpan>,{" "}
        <StyledSpan>love</StyledSpan>, <StyledSpan>food</StyledSpan>.
      </StyledTagline>
    </StyledHeader>
  )
}

export default Header
