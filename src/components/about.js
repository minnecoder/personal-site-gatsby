import React from "react"
import { FaDesktop, FaServer, FaWrench } from "react-icons/fa"
import styles from "./about.module.css"

const FEskills = ["HTML", "CSS", "JavaScript", "Sass", "Bootstrap"]
const BEskills = ["Node JS", "Express JS", "MongoDB", "MySQL", "APIs"]
const OtherSkills = ["GitHub"]

const AboutPage = () => (
  <div id="about" className={styles.aboutID}>
    <h1 className={styles.aboutHeader}>About</h1>
    <div className={styles.about}>


      <p className={styles.aboutText}>
        Hi! My name is Sean Parkin, I am a recent graduate of the Web
        Programming track at Rasmussen College. With all of the information that
        I learned while in college and the projects that I have worked, I am
        looking to start my career as a web developer.
      </p>
    </div>

    <div className={styles.skills}>
      <h4 className={styles.skillsHeader}>Skills</h4>
      <div className={styles.skillsSection}>
        <FaDesktop size={56} color={"#08fdd860"}/>
        <h2 className={styles.skillTitle}>Front End Skills</h2>
        <ul className="front-end-text">
          {FEskills.map(skill => (
            <li key={skill} className={styles.skillsItem}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.skillsSection}>
        <FaServer size={56} color={"#08fdd860"} />
        <h2 className={styles.skillTitle}>Back End Skills</h2>
        <ul className="back-end-text">
          {BEskills.map(skill => (
            <li key={skill} className={styles.skillsItem}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.skillsSection}>
        <FaWrench size={56} color={"#08fdd860"} />
        <h2 className={styles.skillTitle}>Tools</h2>
        <ul className="web-app-text">
          {OtherSkills.map(skill => (
            <li key={skill} className={styles.skillsItem}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

export default AboutPage
