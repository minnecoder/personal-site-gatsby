import React, { Component } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import projects from '../data/projects.json'
import pic from '../images/projects/tech.png'
import media from './media'

class Work extends Component {
  render() {
    const projectI = this.props
    const { projectImgs } = projectI

    return (
      <PortfolioSection id="work">
        <Portfolio>
          <h1>Recent Work</h1>
          <WorkTypes>
            <button type="button">All</button>
            <button type="button">Front End</button>
            <button type="button">Back End</button>
          </WorkTypes>

          <PortfolioList>
            {projects.map(project => {
              const image = projectImgs.find(n => n.node.relativePath === `projects/${project.img}`)
              const imageSizes = image.node.childImageSharp.sizes
              return (
                <PortfolioItem key={project.name}>
                  <Img title={project.name} alt=" Image of project" sizes={imageSizes} />
                  <Overlay>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <p>
                      <strong>Technologies Used:</strong> {project.technologies}
                    </p>
                    <WorkBtns>
                      <WorkBtn href={project.website}>Website</WorkBtn>
                      <WorkBtn href={project.github}>GitHub</WorkBtn>
                    </WorkBtns>
                  </Overlay>
                </PortfolioItem>
              )
            })}
          </PortfolioList>
        </Portfolio>
      </PortfolioSection>
    )
  }
}
export default Work

const PortfolioSection = styled.div`
  padding-bottom: 60px;
  padding-top: 60px;
  background: #eee;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9em;
`
const Portfolio = styled.div`
  margin: 0 auto;
  justify-items: center;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  > h1 {
    font-size: 30px;
    text-align: center;
    color: #38384f;
    padding: 20px 0;
  }
`

const WorkTypes = styled.div`
  margin: 0 auto;
  > button {
    background: none;
    font-size: 16px;
    color: #38384f;
    border: none;
    padding: 10px 15px 20px 15px;
  }
`

const PortfolioList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #08fdd8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  > h3 {
    font-size: 20px;
    padding-top: 20px;
  }
  p {
  }
`

const PortfolioItem = styled.div`
  position: relative;
  width: 33.33%;
  ${media.desktop`
  width: 50%;
  `}
  ${media.plusphone`
  width: 100%;
  `}
  > img {
    display: block;
    width: 100%;
    height: auto;
  }
  &:hover ${Overlay} {
    opacity: 1;
  }
`

const WorkBtns = styled.div`
  order: 2;
  padding-bottom: 30px;
`

const WorkBtn = styled.a`
  margin: 0 20px;
  background: #fff;
  border: solid 1px #08fdd860;
  border-radius: 4px;
  padding: 6px 25px;
  color: #38384f;
  text-decoration: none;
`
