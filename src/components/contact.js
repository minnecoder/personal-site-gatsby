import React from "react"
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa"

import "../css/contact.css"



const Contact = () => (
  <div id="contact">
    <h1 class="contact-header">Contact</h1>
    <div class="contact">
      <h3>
        Do you like what you have seen and you are interested in working me?
      </h3>
      <div class="social-links">
        <a class="social-link" href="https://twitter.com/minnecoder">
          <FaTwitter size={42} color={"#1da1f2"}/>
        </a>
        <a class="" href="https://www.linkedin.com/in/seanparkin/">
          <FaLinkedin size={42} color={"#0077b5"} />
        </a>
        <a class="social-link" href="https://github.com/minnecoder">
          <FaGithub size={42} color={"#211f1f"}/>
        </a>
        <a class="social-link" href="mailto:sdparkin@gmail.com">
          <FaEnvelope size={42} color={"black"}  />
        </a>
      </div>
    </div>
  </div>
)

export default Contact
