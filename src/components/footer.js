import React from 'react'
import styled from 'styled-components'

const FooterDiv = styled.div`
  width: 100%;
  height: 8vh;
  background-color: #111;
  position: absolute;
  bottom: 0;
  left: 0;
  font-family: Arial, Helvetica, sans-serif;
`
const FooterText = styled.p`
  text-align: center;
  color: rgb(236, 233, 233);
  font-weight: bold;
  padding-top: 2rem;
`

const Footer = () => (
  <FooterDiv>
    <FooterText>© 2019 Sean Parkin</FooterText>
  </FooterDiv>
)

export default Footer
