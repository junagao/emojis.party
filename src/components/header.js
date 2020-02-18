import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.header`
  font-family: Avenir, sans-serif;
  margin-right: 40px;
  flex-basis: 30%;
`

const StyledLogo = styled.div`
  font-size: 40px;
  font-weight: 900;
  a {
    color: rgb(233, 60, 60);
    text-decoration: none;
  }
`

const StyledTagline = styled.p`
  color: #777;
  font-size: 16px;
  margin-top: 5px;
  width: 80%;
`

const StyledSpan = styled.span`
  font-weight: 600;
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
