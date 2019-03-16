import React from "react"

import "../components/work.css"
import pic from "../images/tech.jpeg"

const WorkItems = [
  {
    title: "Work Item 1",
    image: pic,
    text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti" +
      "quos mollitia, dolorum esse quo quod impedit cumque sed quae" +
      "voluptatibus.",
    siteLink: "https://www.seanparkin.com",
    githubLink: "https://github.com/minnecoder/",
  },
  {
    title: "Work Item 2",
    image: pic,
    text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti" +
      "quos mollitia, dolorum esse quo quod impedit cumque sed quae" +
      "voluptatibus.",
    siteLink: "https://www.seanparkin.com",
    githubLink: "https://github.com/minnecoder/",
  },
  {
    title: "Work Item 3",
    image: pic,
    text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti" +
      "quos mollitia, dolorum esse quo quod impedit cumque sed quae" +
      "voluptatibus.",
    siteLink: "https://www.seanparkin.com",
    githubLink: "https://github.com/minnecoder/",
  },
  {
    title: "Work Item 4",
    image: pic,
    text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti" +
      "quos mollitia, dolorum esse quo quod impedit cumque sed quae" +
      "voluptatibus.",
    siteLink: "https://www.seanparkin.com",
    githubLink: "https://github.com/minnecoder/",
  },
]

const WorkPage = () => (
  <div id="work">
    <div class="work">
      <h2 class="work-header">Work</h2>

      {WorkItems.map(item => (
        <div class="work-item">
          <div class="work-info">
            <h3>{item.title}</h3>
            <img src={item.image} alt="" />
            <p>{item.text}</p>
          </div>
          <div class="work-btns">
            <a class="work-btn" href={item.siteLink}>
              Website
            </a>
            <a class="work-btn" href={item.githubLink}>
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default WorkPage
