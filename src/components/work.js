import React from "react"
import styles from "./work.module.css"
import pic from "../images/tech.jpeg"



const WorkPage = () => (
  <div id="work" className={styles.workID}>
    <div className={styles.work}>
      <h2 className={styles.workHeader}>Work</h2>

     
        <div className={`${styles.workItem} ${styles.workItem1}`}>
          <div className={styles.workInfo}>
            <h3>Work Item 1</h3>
            <img src={pic} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
      quos mollitia, dolorum esse quo quod impedit cumque sed quae
      voluptatibus.</p>
          </div>
          <div className={styles.workBtns}>
            <a className={styles.workBtn} href="https://www.seanparkin.com">
              Website
            </a>
            <a className={styles.workBtn} href="https://github.com/minnecoder/">
              GitHub
            </a>
          </div>
        </div>

        <div className={`${styles.workItem} ${styles.workItem2}`}>
          <div className={styles.workInfo}>
            <h3>Work Item 2</h3>
            <img src={pic} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
      quos mollitia, dolorum esse quo quod impedit cumque sed quae
      voluptatibus.</p>
          </div>
          <div className={styles.workBtns}>
            <a className={styles.workBtn} href="https://www.seanparkin.com">
              Website
            </a>
            <a className={styles.workBtn} href="https://github.com/minnecoder/">
              GitHub
            </a>
          </div>
        </div>

        <div className={`${styles.workItem} ${styles.workItem3}`}>
          <div className={styles.workInfo}>
            <h3>Work Item 3</h3>
            <img src={pic} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
      quos mollitia, dolorum esse quo quod impedit cumque sed quae
      voluptatibus.</p>
          </div>
          <div className={styles.workBtns}>
            <a className={styles.workBtn} href="https://www.seanparkin.com">
              Website
            </a>
            <a className={styles.workBtn} href="https://github.com/minnecoder/">
              GitHub
            </a>
          </div>
        </div>

        <div className={`${styles.workItem} ${styles.workItem4}`}>
          <div className={styles.workInfo}>
            <h3>Work Item 4</h3>
            <img src={pic} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
      quos mollitia, dolorum esse quo quod impedit cumque sed quae
      voluptatibus.</p>
          </div>
          <div className={styles.workBtns}>
            <a className={styles.workBtn} href="https://www.seanparkin.com">
              Website
            </a>
            <a className={styles.workBtn} href="https://github.com/minnecoder/">
              GitHub
            </a>
          </div>
        </div>

    </div>
  </div>
)

export default WorkPage
