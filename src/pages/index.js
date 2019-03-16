import React from "react"
import Header from "../components/header"
import Home from "../components/home"
import Skills from "../components/skills"
import Work from "../components/work"
import About from "../components/about"
import Contact from "../components/contact"
import Footer from "../components/footer"

import "./index.css"

const IndexPage = () => {
  return (
    <div>
     
      <div className="test">
      <Home />
        <Header />
        <About />
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default IndexPage
