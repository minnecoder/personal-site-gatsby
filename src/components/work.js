import React, { Component } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import projects from '../data/projects.json'
import pic from '../images/projects/tech.png'

class Work extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const projectI = this.props
    const { projectImgs } = projectI

    return (
      <PortfolioSection id="work">
        <Portfolio>
          <h2>Portfolio</h2>

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
  padding: 8vh 0px;
  background: #353535;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
`
const Portfolio = styled.div`
  margin: 0 auto;
  justify-items: center;
  display: flex;
  flex-direction: column;
  > h2 {
    font-size: 50px;
    text-align: center;
    color: #08fdd8;
    padding: 20px 0;
  }
`
const PortfolioList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`

const PortfolioItem = styled.div`
  width: 400px;
  display: flex;
  text-align: center;
  flex-direction: column;
  border: solid 1px rgb(99, 97, 97);
  background: #a3a3a3;
  margin-top: 15px;
  > h3 {
    font-size: 25px;
    padding: 20px 0;
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
  color: #222;
  text-decoration: none;
`
