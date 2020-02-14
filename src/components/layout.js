import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          social {
            github
          }
        }
      }
    }
  `)

  const {
    title,
    author,
    social: { github },
  } = data.site.siteMetadata

  return (
    <>
      <Header siteTitle={title} />
      <div>
        <main>{children}</main>
      </div>
      <Footer siteAuthor={author} siteGithub={github} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
