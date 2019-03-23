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
    <div class="skills">
      <h2 class="skills-header">Skills</h2>
      <div class="skills-section">
        <FaDesktop size={56} />
        <h2 class="front-end-title">Front End Skills</h2>
        <ul class="front-end-text">
        {FEskills.map(skill => (
          <li class="skills-item">{skill}</li>
        ))}
        </ul>
      </div>
      <div class="skills-section">
        <FaServer size={56} />
        <h2 class="back-end-title">Back End Skills</h2>
        <ul class="back-end-text">
        {BEskills.map(skill => (
          <li class="skills-item">{skill}</li>
        ))}
        </ul>
      </div>
      <div class="skills-section">
        <FaWrench size={56} />
        <h2 class="web-app-title">Tools</h2>
        <ul class="web-app-text">
        {OtherSkills.map(skill => (
          <li class="skills-item">{skill}</li>
        ))}
        </ul>
      </div>
    </div>
  </div>
)

export default Skills
