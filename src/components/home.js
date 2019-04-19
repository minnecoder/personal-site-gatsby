import React from 'react'
import styled from 'styled-components'
import mountains from '../images/white-building.jpg'

const HomeSect = styled.div`
  height: 100vh;
  background: url(${mountains});
    no-repeat center center fixed;
  background-size: cover;
  opacity: 0.8;
  position: relative;
  margin-top: 8vh;
  z-index: 1;
`

const HomeText = styled.div`
  font-family: 'Poppins', sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  // z-index: 4;
  > h2 {
    color: #383834f;
    font-size: 2em;
  }
  p {
    text-align: center;
    color: #111;
    font-size: 1em;
  }
`

const Home = () => (
  <HomeSect id="home">
    <HomeText>
      <h2>Sean Parkin</h2>
      <p>
        Web Developer
        <br />
        Passion for Learning
      </p>
    </HomeText>
  </HomeSect>
)

export default Home
