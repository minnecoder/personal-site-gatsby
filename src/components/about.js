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
                fluid(maxWidth: 128) {
                  ...GatsbyImageSharpFluid
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
                fluid(maxWidth: 128) {
                  ...GatsbyImageSharpFluid
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
                fluid(maxWidth: 128) {
                  ...GatsbyImageSharpFluid
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
        <Skills>
          <h1>Skills</h1>
          <SkillsSection>
            <h2>Front End Skills</h2>
            {data.front.edges.map(({ node }, i) => (
              <SkillItem>
                <Img key={i} fluid={node.childImageSharp.fluid} />
                <p>{node.name}</p>
              </SkillItem>
            ))}
          </SkillsSection>
          <SkillsSection>
            <h2>Back End Skills</h2>
            {data.back.edges.map(({ node }, i) => (
              <SkillItem>
                <Img key={i} fluid={node.childImageSharp.fluid} />
                <p>{node.name}</p>
              </SkillItem>
            ))}
          </SkillsSection>
          <SkillsSection>
            <h2>Tools</h2>
            {data.tools.edges.map(({ node }, i) => (
              <SkillItem>
                <Img key={i} fluid={node.childImageSharp.fluid} />
                <p>{node.name}</p>
              </SkillItem>
            ))}
          </SkillsSection>
        </Skills>
      </div>
    )}
  />
)

export default AboutPage

const AboutSection = styled.div`
  display: flex;

  padding: 60px 0;
  font-family: 'Poppins', sans-serif;
  background: #fff;
`

const About = styled.div`
  width: 70%;
  margin: 0 auto;
  > p {
    padding: 20px;
  }
  h1 {
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
  }
`

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
