import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../components/header'
import Home from '../components/home'
import Work from '../components/work'
import About from '../components/about'
import Contact from '../components/contact'
import Footer from '../components/footer'
import './index.css'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      {
        bgImage: file(relativePath: { eq: "white-building.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1600, maxHeight: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Main>
        <Helmet title="Sean Parkin" />
        {console.log(data)}
        <Home bgImage={data.bgImage} />
        <Header />
        <About />
        <Work />
        <Contact />
        <Footer />
      </Main>
    )}
  />
)

export default IndexPage

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
`
