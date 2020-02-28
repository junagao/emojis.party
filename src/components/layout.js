import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import Footer from "./footer"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    
  }
  body {
    background-color: #fff;
    font-family: Avenir, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  ul {
  padding: 0;
  margin: 0;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

const StyledMainContent = styled.main`
  flex: 1 0 auto;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteAuthorGithubQuery {
      site {
        siteMetadata {
          author
          social {
            github
          }
        }
      }
    }
  `)

  const {
    author,
    social: { github },
  } = data.site.siteMetadata

  return (
    <StyledContainer>
      <GlobalStyle whiteColor />
      <StyledMainContent>{children}</StyledMainContent>
      <Footer siteAuthor={author} siteGithub={github} />
    </StyledContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
