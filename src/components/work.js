import React from 'react'
import styled from 'styled-components'
import pic from '../images/tech.jpeg'

const PortfolioSection = styled.div`
  padding: 8vh 0px;
  background: #353535;
  font-family: Arial, Helvetica, sans-serif;
`
const Portfolio = styled.div`
  width: 70%;
  margin: 0 auto;
  justify-items: center;
  display: flex;
  flex-direction: column;
  > h2 {
    font-size: 50px;
    text-align: center;
    color: #08fdd8;
    padding: 20px 0;
  }
`

const PortfolioItem = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  border: solid 1px rgb(99, 97, 97);
  background: #a3a3a3;
  margin-bottom: 25px;
  > h3 {
    font-size: 30px;
    padding: 20px 0;
  }
`
const PortfolioInfo = styled.div`
  display: flex;
  justify-content: space-around;
`
const PortfolioLeft = styled.div`
  width: 50%;

  > h3 {
    padding-top: 20px;
    padding-bottom: 5px;
  }
  li {
    list-style-type: none;
  }
`
const PortfolioRight = styled.div`
  width: 50%;

  > p {
    padding-right: 40px;
    padding-bottom: 20px;
    text-align: justify;
  }
  h3 {
    padding-bottom: 5px;
  }
  li {
    list-style-type: none;
  }
`

const WorkBtns = styled.div`
  order: 2;
  padding: 20px;
  display: flex;
  justify-content: space-around;
`

const WorkBtn = styled.a`
  padding: 0 40px;
  background: #08fdd860;
  border: solid 1px #08fdd860;
  border-radius: 4px;
  padding: 6px 25px;
  color: #222;
  text-decoration: none;
`

const WorkPage = () => (
  <PortfolioSection id="work">
    <Portfolio>
      <h2>Portfolio</h2>

      <PortfolioItem>
        <h3>Project Title</h3>
        <PortfolioInfo>
          <PortfolioLeft>
            <img src={pic} alt="" />
            <h3>Technologies Used</h3>
            <ul>
              <li>Tech </li>
              <li>Tech </li>
              <li>Tech </li>
              <li>Tech </li>
              <li>Tech </li>
              <li>Tech </li>
            </ul>
          </PortfolioLeft>
          <PortfolioRight>
            <h3>Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sequi perspiciatis a, nesciunt aperiam
              accusantium hic quo similique, nihil laborum recusandae vitae asperiores non fugiat voluptatum reiciendis
              culpa quibusdam tempora at omnis adipisci sapiente quis. Consectetur libero rem dolores veniam ratione
              beatae cum alias debitis placeat facere! Culpa, at illum.
            </p>
            <h3>Notable Features</h3>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
              <li>Feature 5</li>
            </ul>
          </PortfolioRight>
        </PortfolioInfo>
        <WorkBtns>
          <WorkBtn href="https://www.seanparkin.com">Website</WorkBtn>
          <WorkBtn href="https://github.com/minnecoder/">GitHub</WorkBtn>
        </WorkBtns>
      </PortfolioItem>

      <PortfolioItem>
        <h3>Project Title</h3>
        <PortfolioInfo>
          <PortfolioLeft>
            <img src={pic} alt="" />
            <h3>Technologies Used</h3>
            <ul>
              <li>Tech </li>
              <li>Tech </li>
              <li>Tech </li>
              <li>Tech </li>
              <li>Tech </li>
              <li>Tech </li>
            </ul>
          </PortfolioLeft>
          <PortfolioRight>
            <h3>Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sequi perspiciatis a, nesciunt aperiam
              accusantium hic quo similique, nihil laborum recusandae vitae asperiores non fugiat voluptatum reiciendis
              culpa quibusdam tempora at omnis adipisci sapiente quis. Consectetur libero rem dolores veniam ratione
              beatae cum alias debitis placeat facere! Culpa, at illum.
            </p>
            <h3>Notable Features</h3>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
              <li>Feature 5</li>
            </ul>
          </PortfolioRight>
        </PortfolioInfo>
        <WorkBtns>
          <WorkBtn href="https://www.seanparkin.com">Website</WorkBtn>
          <WorkBtn href="https://github.com/minnecoder/">GitHub</WorkBtn>
        </WorkBtns>
      </PortfolioItem>

      <PortfolioItem>
        <h3>Project Title</h3>
        <PortfolioInfo>
          <PortfolioLeft>
            <img src={pic} alt="" />
            <h3>Technologies Used</h3>
            <ul>
              <li>Tech </li>
              <li>Tech </li>
              <li>Tech </li>
              <li>Tech </li>
              <li>Tech </li>
              <li>Tech </li>
            </ul>
          </PortfolioLeft>
          <PortfolioRight>
            <h3>Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sequi perspiciatis a, nesciunt aperiam
              accusantium hic quo similique, nihil laborum recusandae vitae asperiores non fugiat voluptatum reiciendis
              culpa quibusdam tempora at omnis adipisci sapiente quis. Consectetur libero rem dolores veniam ratione
              beatae cum alias debitis placeat facere! Culpa, at illum.
            </p>
            <h3>Notable Features</h3>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
              <li>Feature 5</li>
            </ul>
          </PortfolioRight>
        </PortfolioInfo>
        <WorkBtns>
          <WorkBtn href="https://www.seanparkin.com">Website</WorkBtn>
          <WorkBtn href="https://github.com/minnecoder/">GitHub</WorkBtn>
        </WorkBtns>
      </PortfolioItem>

      <PortfolioItem>
        <h3>Project Title</h3>
        <PortfolioInfo>
          <PortfolioLeft>
            <img src={pic} alt="" />
            <h3>Technologies Used</h3>
            <ul>
              <li>Tech </li>
              <li>Tech </li>
              <li>Tech </li>
              <li>Tech </li>
              <li>Tech </li>
              <li>Tech </li>
            </ul>
          </PortfolioLeft>
          <PortfolioRight>
            <h3>Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sequi perspiciatis a, nesciunt aperiam
              accusantium hic quo similique, nihil laborum recusandae vitae asperiores non fugiat voluptatum reiciendis
              culpa quibusdam tempora at omnis adipisci sapiente quis. Consectetur libero rem dolores veniam ratione
              beatae cum alias debitis placeat facere! Culpa, at illum.
            </p>
            <h3>Notable Features</h3>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
              <li>Feature 5</li>
            </ul>
          </PortfolioRight>
        </PortfolioInfo>
        <WorkBtns>
          <WorkBtn href="https://www.seanparkin.com">Website</WorkBtn>
          <WorkBtn href="https://github.com/minnecoder/">GitHub</WorkBtn>
        </WorkBtns>
      </PortfolioItem>
    </Portfolio>
  </PortfolioSection>
)

export default WorkPage
