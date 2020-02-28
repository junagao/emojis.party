import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const StyledContainer = styled.div`
  background-color: #fff8fc;
  display: flex;
  justify-content: column;
  align-items: center;
  padding: 24px 64px;
  width: 100%;
`

const About = () => (
  <Layout>
    <SEO title="About" />
    <StyledContainer>
      <Header />
    </StyledContainer>
  </Layout>
)

export default About
