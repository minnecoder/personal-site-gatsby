import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Header from '../components/header'
import Home from '../components/home'
import Work from '../components/work'
import About from '../components/about'
import Contact from '../components/contact'
import Footer from '../components/footer'
import './index.css'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
`

const IndexPage = ({ data }) => {
  const { edges: projectImgData } = data.ProjectImgs
  const { edges: iconImgData } = data.IconImgs
  return (
    <Main>
      <Helmet title="Sean Parkin" />
      <Home />
      <Header />
      <About iconImgs={iconImgData} />
      <Work projectImgs={projectImgData} />
      <Contact />
      <Footer />
    </Main>
  )
}

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.object,
}

export const query = graphql`
  query allImgsQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    coverImg: imageSharp(id: { regex: "/AirBalloon/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes
      }
    }
    profileImg: imageSharp(id: { regex: "/Maribel/" }) {
      sizes(maxWidth: 420, maxHeight: 630) {
        ...GatsbyImageSharpSizes
      }
    }
    ProjectImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/projects/.*.png/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 320) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
    IconImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/icons/.*.png/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 64) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
