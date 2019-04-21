import React from 'react'
import styled from 'styled-components'
import media from './media'

const FEskills = ['HTML/CSS', 'JavaScript', 'React', 'Gatsby']
const BEskills = ['Node JS', 'Express JS', 'MongoDB', 'MySQL']
const OtherSkills = ['GitHub', 'APIs', 'Sass', 'Bootstrap']

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

const SkillsSection = styled.div`
  text-align: center;
  > h2 {
    padding: 10px 0px;
    font-size: 20px;
    ${media.plusphone`
    font-size: 16px;
    `}
  }
  ul {
    display: flex;
    flex-direction: row;
  }
  li {
    list-style-type: none;
    padding: 2px 0px;
    ${media.plusphone`
    width: 50%;
    `}
  }
`

const AboutPage = () => (
  <AboutSection id="about">
    <About>
      <h1>About</h1>

      <p>
        Hi! My name is Sean Parkin, as a recent college graduate, I am looking to either get hired on at a company or
        start a career in freelancing. I have made websites and have also made the back end part of websites also. I am
        currently heavy into the React ecosystem.
      </p>
    </About>

    <Skills>
      <h1>Skills</h1>
      <SkillsSection>
        <h2>Front End Skills</h2>
        <ul>
          {FEskills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </SkillsSection>
      <SkillsSection>
        <h2>Back End Skills</h2>
        <ul>
          {BEskills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </SkillsSection>
      <SkillsSection>
        <h2>Tools</h2>
        <ul>
          {OtherSkills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </SkillsSection>
    </Skills>
  </AboutSection>
)

export default AboutPage
