import React from 'react'
import { FaDesktop, FaServer, FaWrench } from 'react-icons/fa'
import styled from 'styled-components'

const FEskills = ['HTML', 'CSS', 'JavaScript', 'Sass', 'Bootstrap']
const BEskills = ['Node JS', 'Express JS', 'MongoDB', 'MySQL', 'APIs']
const OtherSkills = ['GitHub']

const AboutSection = styled.div`
  padding-top: 12vh;
  background-color: #100e17;
  font-family: 'Montserrat', sans-serif;
  color: white;
`
const AboutContainer = styled.div`
  width: 70%;
  background: #202026;
  margin: 0 auto;
  padding: 30px 0;
  box-shadow: rgb(0, 0, 0) -16px 0px 48px 0px;
`

const About = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  > p {
    padding: 20px;
  }
`

const AboutHeader = styled.h1`
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
`

const Skills = styled.div`
  width: 60%;
  margin: 0 auto;
  overflow: hidden;
  > h4 {
    font-size: 40px;
    text-align: center;
    padding: 20px 0;
  }
`

const SkillsSection = styled.div`
  float: left;
  width: 33%;
  text-align: center;
  > h2 {
    padding: 10px 0px;
  }
  li {
    list-style-type: none;
    padding: 5px 0px;
  }
`

const AboutPage = () => (
  <AboutSection id="about">
    <AboutContainer>
      <AboutHeader>About</AboutHeader>
      <About>
        <p>
          Hi! My name is Sean Parkin, I am a recent graduate of the Web Programming track at Rasmussen College. With all
          of the information that I learned while in college and the projects that I have worked, I am looking to start
          my career as a web developer.
        </p>
      </About>

      <Skills>
        <h4>Skills</h4>
        <SkillsSection>
          <FaDesktop size={56} color="#08fdd860" />
          <h2>Front End Skills</h2>
          <ul>
            {FEskills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </SkillsSection>
        <SkillsSection>
          <FaServer size={56} color="#08fdd860" />
          <h2>Back End Skills</h2>
          <ul>
            {BEskills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </SkillsSection>
        <SkillsSection>
          <FaWrench size={56} color="#08fdd860" />
          <h2>Tools</h2>
          <ul>
            {OtherSkills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </SkillsSection>
      </Skills>
    </AboutContainer>
  </AboutSection>
)

export default AboutPage
