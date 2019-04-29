import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import SkillSection from './SkillsSection'
import './about.css'

const AboutPage = () => (
  <StaticQuery
    query={graphql`
      {
        front: allFile(sort: { order: ASC, fields: [id] }, filter: { relativePath: { regex: "icons/front.*.png/" } }) {
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
                fixed(width: 64, height: 64) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const FEimages = data.front.edges
      const BEimages = data.back.edges
      const Toolimages = data.tools.edges
      return (
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
            <SkillSection imgData={FEimages} />
            <SkillSection imgData={BEimages} />
            <SkillSection imgData={Toolimages} />
          </div>
        </div>
      )
    }}
  />
)

export default AboutPage
