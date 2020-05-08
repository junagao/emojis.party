import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { device } from "../helpers/device"

const StyledHeader = styled.header`
  font-family: Avenir, Roboto, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`

const StyledLogo = styled.div`
  font-size: 42px;
  font-weight: 900;
  a {
    color: #e35354;
    text-decoration: none;
  }
  @media ${device.mobileLandscape} {
    font-size: 60px;
  }
  @media ${device.tabletPortrait} {
    font-size: 60px;
  }
  @media ${device.tabletLandscape} {
    font-size: 60px;
  }
  @media ${device.laptop} {
    font-size: 60px;
  }
`

const StyledTagline = styled.p`
  color: #666;
  font-weight: 400;
  margin-top: 5px;
  width: 90%;
  margin-left: -32px;
  font-size: 16px;
  position: relative;
  @media ${device.mobileLandscape} {
    width: 70%;
    font-size: 20px;
  }
  @media ${device.tabletPortrait} {
    font-size: 18px;
  }
  @media ${device.tabletLandscape} {
    font-size: 18px;
  }
  @media ${device.laptop} {
    width: 60%;
    font-size: 20px;
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
        {description} Find emojis using keywords like{" "}
        <StyledSpan>white</StyledSpan>, <StyledSpan>love</StyledSpan>,{" "}
        <StyledSpan>food</StyledSpan>.
      </StyledTagline>
    </StyledHeader>
  )
}

export default Header
