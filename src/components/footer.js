import React from 'react'
import styled from 'styled-components'

const FooterSect = styled.div`
  height: 10vh;
  background-color: #202026;
  width: 70%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-right: auto;
  margin-left: auto;
  // position: relative;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: rgb(0, 0, 0) -16px 0px 48px 0px;
`

const FooterText = styled.p`
  text-align: center;
  color: rgb(236, 233, 233);
  font-weight: bold;
  padding-top: 20px;
`

const Footer = () => (
  <FooterSect>
    <FooterText>© 2019 Sean Parkin</FooterText>
  </FooterSect>
)

export default Footer
