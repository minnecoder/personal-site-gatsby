import React from 'react'
// import styles from "./home.module.css"
import styled from 'styled-components'
import img from '../images/black-and-white-black-and-white-blur-34088.jpg'

const HomeSect = styled.div`
  height: 100vh;
  background: url(${img});
    no-repeat center center fixed;
  background-size: cover;
  opacity: 0.9;
  position: relative;
`

const Shade = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
`
const HomeText = styled.div`
  color: #08fdd8;
  font-family: Arial, sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // font-size: 30px;
  > h2 {
    font-size: 6em;
  }
  p {
    text-align: center;
    color: white;
    font-size: 2em;
  }
`

const Home = () => (
  <HomeSect id="home">
    <Shade />
    <HomeText>
      <h2>Sean Parkin</h2>
      <p>Web Developer</p>
      <p>Passion for Learning</p>
    </HomeText>
  </HomeSect>
)

export default Home
