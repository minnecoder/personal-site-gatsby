import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import styled from 'styled-components'

const ContactArea = styled.div`
  margin-bottom: 60px;
  background: #222;
  font-family: Arial, sans-serif;
`
const ContactHeader = styled.h1`
  font-size: 50px;
  text-align: center;
  padding: 20px;
  color: #08fdd8;
`
const ContactSect = styled.div`
  padding-bottom: 50px;
  width: 60%;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
`

const ContactSectHeader = styled.h3`
  color: white;
`

const SocialLinks = styled.div`
  padding-top: 20px;
  padding-left: 80px;
`

const SocialLink = styled.a`
  padding: 0px 15px;
`

const Contact = () => (
  <ContactArea id="contact">
    <ContactHeader>Contact</ContactHeader>
    <ContactSect>
      <ContactSectHeader>Do you like what you have seen and you are interested in working me?</ContactSectHeader>
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
