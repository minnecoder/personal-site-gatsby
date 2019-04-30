import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SkillsSection = styled.div`
  padding: 0.5rem 0;
  margin: 0 2rem;
  > h3 {
    text-align: center;
  }
`
const SkillItems = styled.div`
  display: flex;
  padding: 0.5rem 0;
`
const SkillItem = styled.div`
  padding: 0 0.7rem;
`

const SkillSection = ({ title, imgData }) => (
  <SkillsSection>
    <h3>{title}</h3>
    <SkillItems>
      {imgData.map(({ node }) => (
        <SkillItem>
          <div>
            <Img fixed={node.childImageSharp.fixed} />
          </div>
          <div>
            <p>{node.name}</p>
          </div>
        </SkillItem>
      ))}
    </SkillItems>
  </SkillsSection>
)

export default SkillSection

SkillSection.propTypes = {
  imgData: PropTypes.object,
  title: PropTypes.string,
}
