import React, { Component } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import projects from '../data/projects.json'
import pic from '../images/projects/tech.png'

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
                  <h3>{project.name}</h3>
                  <Img title={project.name} alt=" Image of project" sizes={imageSizes} />
                  <p>{project.description}</p>
                  <p>
                    <strong>Technologies Used:</strong> {project.technologies}
                  </p>

                  <WorkBtns>
                    <WorkBtn href={project.website}>Website</WorkBtn>
                    <WorkBtn href={project.github}>GitHub</WorkBtn>
                  </WorkBtns>
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
  padding-bottom: 12vh;
  padding-top: 12vh;
  background: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9em;
`
const Portfolio = styled.div`
  width: 70%;
  margin: 0 auto;
  justify-items: center;
  display: flex;
  flex-direction: column;
  background: #eee;
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
  justify-content: center;
  padding: 0 30px;
`

const PortfolioItem = styled.div`
  width: 400px;
  display: flex;
  text-align: center;
  flex-direction: column;
  border: solid 1px rgb(99, 97, 97);
  background: #a3a3a3;
  margin: 15px 5px 0 5px;
  > h3 {
    font-size: 20px;
    padding: 10px 0;
  }
  p {
    padding: 10px;
  }
`

const WorkBtns = styled.div`
  order: 2;
  padding: 20px;
  display: flex;
  justify-content: space-around;
`

const WorkBtn = styled.a`
  padding: 0 40px;
  background: #08fdd860;
  border: solid 1px #08fdd860;
  border-radius: 4px;
  padding: 6px 25px;
  color: #38384f;
  text-decoration: none;
`
