import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const StyledHeaderContainer = styled.div`
  background-color: #f8ebf0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px;
`

const StyledNotFoundContainer = styled.div`
  padding: 0;
  margin: 50px auto;
  text-align: center;
`
const StyledEmoticon = styled.span`
  font-size: 110px;
  padding: 5px;
  vertical-align: baseline;
`
const Styled4 = styled.span`
  color: #e35354;
  font-weight: 900;
  font-size: 122px;
`

const StyledHeader = styled.div`
  font-size: 20px;
  color: #666;
  margin-bottom: 10px;
`

const StyledInternalLink = styled(props => <Link {...props} />)`
  font-family: Avenir, sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #666;
  text-decoration: none;
  :visited {
    color: #666;
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <StyledHeaderContainer>
      <Header />
    </StyledHeaderContainer>
    <StyledNotFoundContainer>
      <Styled4>4</Styled4>
      <StyledEmoticon role="img" aria-label="404">
        🤭
      </StyledEmoticon>
      <Styled4>4</Styled4>

      <StyledHeader>Oh, oh.. Seems you got lost</StyledHeader>
      <StyledInternalLink to="/">
        <span role="img" aria-label="go back">
          👈
        </span>{" "}
        Go back
      </StyledInternalLink>
    </StyledNotFoundContainer>
  </Layout>
)

export default NotFoundPage
