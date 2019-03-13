import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Skills from "../components/skills"
import Work from "../components/work"
import About from "../components/about"
import Contact from "../components/contact"

import "../css/home.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div id="home">
      <div class="home-text">
        <h2>Sean Parkin</h2>
        <p>Web Developer</p>
        <p>Passion for Learning</p>
      </div>
    </div>
    <div>
    <About/>
    <Skills />
    <Work />
    <Contact />
    </div>
  </Layout>
)

export default IndexPage
