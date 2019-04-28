import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import media from './media'
import './about.css'
// import FEicons from '../data/FEicons.json'
// import BEicons from '../data/BEicons.json'
// import Toolsicons from '../data/Toolsicons.json'

const AboutPage = () => (
  <StaticQuery
    query={graphql`
      {
        front: allFile(filter: { relativeDirectory: { eq: "icons/front" } }) {
          edges {
            node {
              name
              relativePath
              childImageSharp {
                fixed(width: 64, height: 64) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
        back: allFile(filter: { relativeDirectory: { eq: "icons/back" } }) {
          edges {
            node {
              name
              relativePath
              childImageSharp {
                fixed(width: 64, height: 64) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
        tools: allFile(filter: { relativeDirectory: { eq: "icons/tools" } }) {
          edges {
            node {
              name
              relativePath
              childImageSharp {
                fixed(width: 72, height: 64) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div id="about">
        <div className="about">
          <h1>About</h1>
          <p>
            Hi! My name is Sean Parkin, as a recent college graduate, I am looking to either get hired on at a company
            or start a career in freelancing. I have made websites and have also made the back end part of websites
            also. I am currently heavy into the React ecosystem.
          </p>
        </div>
        <div className="skills">
          <h1>Skills</h1>
          <div className="skills-section">
            <h2>Front End Skills</h2>
            <div />
          </div>
          <div className="skills-section">
            <h2>Back End Skills</h2>
          </div>
          <div className="skills-section" />
        </div>
      </div>
    )}
  />
)

export default AboutPage

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 70%;
  margin: 0 auto;
  overflow: hidden;
  ${media.plusphone`
  width: 100%;
  `}
  > h1 {
    font-size: 30px;
    text-align: center;
    padding: 20px 0;
  }
  p {
  }
`
const SkillItem = styled.div`
  width: 48px;
`

const SkillsSection = styled.div`
  text-align: center;
  > h2 {
    padding: 10px 0px;
    font-size: 20px;
    ${media.plusphone`
    font-size: 16px;
    `}
  }
  // ${SkillItem} {
  //   display: flex;
  //   flex-direction: row;
  // }
  li {
    list-style-type: none;
    padding: 2px 0px;
    ${media.plusphone`
    width: 50%;
    `}
  }
`
