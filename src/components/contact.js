import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import styled from 'styled-components'

const ContactArea = styled.div`
  padding-top: 12vh;
  padding-bottom: 30vh;
  height: 100%;

  background: #100e17;
  font-family: 'Montserrat', sans-serif;
`
const ContactSect = styled.div`
  width: 70%;
  padding: 100px 0;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
  background: #202026;
  box-shadow: rgb(0, 0, 0) -16px 0px 48px 0px;
  > p {
    font-size: 20px;
    text-align: center;
    // padding: 20px;
    color: #fff;
  }
  h1 {
    font-size: 30px;
    text-align: center;
    padding: 20px;
    color: #fff;
  }
`

const SocialLinks = styled.div`
  padding: 60px 0;
  margin: 0 auto;

  > a {
    padding: 0px 15px;
  }
`

const SocialLink = styled.a``

const Contact = () => (
  <ContactArea id="contact">
    <ContactSect>
      <h1>Contact Me</h1>
      <p>Do you like what you have seen and you are interested in working me?</p>
      <p>Use one of the links below to get in contact with me.</p>
      <SocialLinks>
        <SocialLink href="https://twitter.com/minnecoder">
          <FaTwitter size={42} color="#08fdd860" />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/seanparkin/">
          <FaLinkedin size={42} color="#08fdd860" />
        </SocialLink>
        <SocialLink href="https://github.com/minnecoder">
          <FaGithub size={42} color="#08fdd860" />
        </SocialLink>
        <SocialLink href="mailto:sdparkin@gmail.com">
          <FaEnvelope size={42} color="#08fdd860" />
        </SocialLink>
      </SocialLinks>
    </ContactSect>
  </ContactArea>
)

export default Contact
