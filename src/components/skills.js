// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import { FaDesktop, FaServer, FaWrench } from "react-icons/fa"

import "../components/skills.css"

const FEskills = ["HTML", "CSS", "JavaScript", "Sass", "Bootstrap"]
const BEskills = ["Node JS", "Express JS", "MongoDB", "MySQL", "APIs"]
const OtherSkills =["GitHub"]

const Skills = () => (
  <div id="skills">
    <div className="skills">
      <h2 className="skills-header">Skills</h2>
      <div className="skills-section">
        <FaDesktop size={56} />
        <h2 className="front-end-title">Front End Skills</h2>
        <ul className="front-end-text">
        {FEskills.map(skill => (
          <li key={skill} className="skills-item">{skill}</li>
        ))}
        </ul>
      </div>
      <div className="skills-section">
        <FaServer size={56} />
        <h2 className="back-end-title">Back End Skills</h2>
        <ul className="back-end-text">
        {BEskills.map(skill => (
          <li key={skill} className="skills-item">{skill}</li>
        ))}
        </ul>
      </div>
      <div className="skills-section">
        <FaWrench size={56} />
        <h2 className="web-app-title">Tools</h2>
        <ul className="web-app-text">
        {OtherSkills.map(skill => (
          <li key={skill} className="skills-item">{skill}</li>
        ))}
        </ul>
      </div>
    </div>
  </div>
)

export default Skills
