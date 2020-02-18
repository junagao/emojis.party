import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"

import Footer from "./footer"

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  body {
    background-color: #fff8fc;
    font-family: Avenir, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  ul {
  padding: 0;
  margin: 0;
  }
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
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
    <>
      <GlobalStyle whiteColor />
      <main>{children}</main>
      <Footer siteAuthor={author} siteGithub={github} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
