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

const IndexPage = () => (
  <Main>
    <Helmet title="Sean Parkin" />
    <Home />
    <Header />
    <About />
    <Work />
    <Contact />
    <Footer />
  </Main>
)

export default IndexPage
