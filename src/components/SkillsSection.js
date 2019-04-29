import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

const SkillSection = ({ imgData }) => (
  <div className="skills-section">
    <h2>Front End Skills</h2>
    <div className="skill-items">
      {imgData.map(({ node }) => (
        <div className="skill-item">
          <div>
            <Img fixed={node.childImageSharp.fixed} />
          </div>
          <div>
            <p>{node.name}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default SkillSection

SkillSection.propTypes = {
  imgData: PropTypes.object,
}
