import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledContainer = styled.div`
  padding: 0;
  margin: 50px auto;
  text-align: center;
`
const StyledEmoticon = styled.div`
  font-size: 100px;
`

const StyledHeader = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: #777;
  margin-bottom: 10px;
`

const StyledInternalLink = styled(props => <Link {...props} />)`
  font-family: Avenir, sans-serif;
  font-weight: 500;
  font-size: 30px;
  color: #444;
  text-decoration: none;
  visited {
    color: #444;
    text-decoration: none;
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <StyledContainer>
      <StyledEmoticon>
        <span role="img" aria-label="404">
          ⛔
        </span>
      </StyledEmoticon>
      <StyledHeader>page not found</StyledHeader>
      <StyledInternalLink to="/">
        <span role="img" aria-label="go back">
          👈
        </span>{" "}
        go back
      </StyledInternalLink>
    </StyledContainer>
  </Layout>
)

export default NotFoundPage
