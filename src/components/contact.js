import React from "react"
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa"
import styles from "./contact.module.css"
// import "./contact.css"



const Contact = () => (
  <div id="contact" className={styles.contactid}>
    <h1 className={styles.contactheader}>Contact</h1>
    <div className={styles.contactsect}>
      <h3>
        Do you like what you have seen and you are interested in working me?
      </h3>
      <div className={styles.sociallinks}>
        <a className={styles.sociallink} href="https://twitter.com/minnecoder">
          <FaTwitter size={42} color={"#08fdd860"}/>
        </a>
        <a className="" href="https://www.linkedin.com/in/seanparkin/">
          <FaLinkedin size={42} color={"#08fdd860"} />
        </a>
        <a className={styles.sociallink} href="https://github.com/minnecoder">
          <FaGithub size={42} color={"#08fdd860"}/>
        </a>
        <a className={styles.sociallink} href="mailto:sdparkin@gmail.com">
          <FaEnvelope size={42} color={"#08fdd860"}  />
        </a>
      </div>
    </div>
  </div>
)

export default Contact
