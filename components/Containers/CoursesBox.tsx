import React from 'react'
import styles from "../dashboard.module.css"

function CoursesBox() {
  return (
    <>
    <img
    className={styles.rectangleIcon}
    alt=""
    src="/Assets/images/rectangle-21@2x.png"
  />
  <img
    className={styles.dashboardChild7}
    alt=""
    src="/Assets/images/rectangle-24@2x.png"
  />
  <img
    className={styles.dashboardChild8}
    alt=""
    src="/Assets/images/rectangle-27@2x.png"
  />
  <div className={styles.qoremIpsumDolor}>
    Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
    libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    Curabitur tempus urna at turpis condimentum lobortis.
  </div>
  <div className={styles.qoremIpsumDolor1}>
    Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
    libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    Curabitur tempus urna at turpis condimentum lobortis.
  </div>
  <div className={styles.qoremIpsumDolor2}>
    Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
    libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    Curabitur tempus urna at turpis condimentum lobortis.
  </div>
  <button className={styles.rectangleButton} />
  <button className={styles.dashboardChild9} />
  <button className={styles.dashboardChild10} />
  <div className={styles.seeMore}>See more</div>
  <div className={styles.seeMore1}>See more</div>
  <div className={styles.seeMore2}>See more</div>
  </>
  )
}

export default CoursesBox