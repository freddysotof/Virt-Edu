import React, { useEffect } from 'react'

import styles from "../assets/css/Schedule.module.css";

function SchedulePage() {

  return (
    <>
      <div className={styles.schedule1}>Schedule</div>
      <div className={styles.task}>Task</div>
      <div className={styles.scheduleInner} />
      <div className={styles.calendar}>
        <div className={styles.month}>
          <div className={styles.arrow}>
            <img className={styles.vectorIcon} alt="" src="/Assets/svg/vector.svg" />
          </div>
          <div className={styles.arrowc}>
            <img className={styles.arrowc} alt="" src="/Assets/svg/Arrow.svg" />
          </div>
          <div className={styles.arrowl}>
            <img className={styles.arrowl} alt="" src="/Assets/svg/Arrowl.svg" />
          </div>
          <b className={styles.february2021}>February 2021</b>
          <div className={styles.arrow1}>
            <img className={styles.vectorIcon} alt="" src="/Assets/svg/vector1.svg" />
          </div>
        </div>

        <div className={styles.dates}>
          <div className={styles.row}>
            <div className={styles.mon}>MON</div>
            <div className={styles.div1}>1</div>
            <div className={styles.div1}>8</div>
            <div className={styles.div1}>15</div>
            <div className={styles.div1}>22</div>
            <div className={styles.div1}>29</div>
          </div>
          <div className={styles.row}>
            <div className={styles.mon}>TUE</div>
            <div className={styles.div1}>2</div>
            <div className={styles.div1}>9</div>
            <div className={styles.div1}>16</div>
            <div className={styles.div1}>23</div>
            <div className={styles.div1}>30</div>
          </div>
          <div className={styles.row}>
            <div className={styles.mon}>WED</div>
            <div className={styles.div1}>3</div>
            <div className={styles.div1}>10</div>
            <div className={styles.div1}>17</div>
            <div className={styles.div1}>24</div>
            <div className={styles.div1}>31</div>
          </div>
          <div className={styles.row}>
            <div className={styles.mon}>THU</div>
            <div className={styles.div1}>4</div>
            <div className={styles.div1}>11</div>
            <div className={styles.div1}>18</div>
            <div className={styles.div1}>25</div>
            <div className={styles.div20}>1</div>
          </div>
          <div className={styles.row}>
            <div className={styles.mon}>FRI</div>
            <div className={styles.div1}>5</div>
            <div className={styles.div1}>12</div>
            <div className={styles.div1}>19</div>
            <div className={styles.div1}>26</div>
            <div className={styles.div20}>2</div>
          </div>
          <div className={styles.row}>
            <div className={styles.mon}>SAT</div>
            <div className={styles.div1}>6</div>
            <div className={styles.div1}>13</div>
            <div className={styles.div1}>20</div>
            <div className={styles.div1}>27</div>
            <div className={styles.div20}>3</div>
          </div>
          <div className={styles.row}>
            <div className={styles.mon}>SUN</div>
            <div className={styles.div1}>7</div>
            <div className={styles.div1}>14</div>
            <div className={styles.div1}>21</div>
            <div className={styles.div1}>28</div>
            <div className={styles.div20}>4</div>
          </div>
        </div>
      </div>


      <div className={styles.addNewTask}>Add new task +</div>
      <div className={styles.lineDiv} />
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <div className={styles.technology}>Technology</div>
        <div className={styles.may1216}>May 12-16</div>
        <img
          className={styles.rightArrow1Icon}
          alt=""
          src="/Assets/svg/rightarrow-1.svg"
        />
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild} />
        <div className={styles.technology}>Math</div>
        <div className={styles.may1216}>May 12-16</div>
        <img
          className={styles.rightArrow1Icon}
          alt=""
          src="/Assets/svg/rightarrow-1.svg"
        />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupChild} />
        <div className={styles.technology}>Science</div>
        <div className={styles.may1216}>May 12-16</div>
        <img
          className={styles.rightArrow1Icon}
          alt=""
          src="/Assets/svg/rightarrow-1.svg"
        />
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.groupChild} />
        <div className={styles.technology}>P.E.</div>
        <div className={styles.may1216}>May 12-16</div>
        <img
          className={styles.rightArrow1Icon}
          alt=""
          src="/Assets/svg/rightarrow-1.svg"
        />
      </div>
      <div className={styles.rectangleParent2}>
        <div className={styles.groupChild} />
        <div className={styles.technology}>History</div>
        <div className={styles.may1216}>May 12-16</div>
        <img
          className={styles.rightArrow1Icon}
          alt=""
          src="/Assets/svg/rightarrow-1.svg"
        />
      </div>

      <div className={styles.rectangleParent3}>
        <div className={styles.groupChild} />
        <div className={styles.technology}>Data S.</div>
        <div className={styles.may1216}>May 12-16</div>
        <img
          className={styles.rightArrow1Icon}
          alt=""
          src="/Assets/svg/rightarrow-1.svg"
        />
      </div>


      <div className={styles.december15}>December 15 - 21. 2023</div>
      <div className={styles.scheduleChild1} />
      <div className={styles.div36}>15</div>
      <div className={styles.div37}>16</div>
      <div className={styles.div38}>17</div>
      <div className={styles.div39}>18</div>
      <div className={styles.div40}>19</div>
      <div className={styles.div41}>20</div>
      <div className={styles.div42}>21</div>
      <div className={styles.monday}>Monday</div>
      <div className={styles.tuesday}>Tuesday</div>
      <div className={styles.wednesday}>Wednesday</div>
      <div className={styles.thursday}>Thursday</div>
      <div className={styles.friday}>Friday</div>
      <div className={styles.saturday}>Saturday</div>
      <div className={styles.sunday}>Sunday</div>
      <div className={styles.am}>8:00 AM</div>
      <div className={styles.am1}>9:00 AM</div>
      <div className={styles.am2}>10:00 AM</div>
      <div className={styles.am3}>11:00 AM</div>
      <div className={styles.pm}>12:00 PM</div>
      <div className={styles.pm1}>1:00 PM</div>
      <div className={styles.pm2}>2:00 PM</div>
      <div className={styles.pm3}>3:00 PM</div>
      <div className={styles.pm4}>4:00 PM</div>
      <div className={styles.pm5}>5:00 PM</div>
      <div className={styles.pm6}>6:00 PM</div>
      <div className={styles.pm7}>7:00 PM</div>
      <div className={styles.pm8}>8:00 PM</div>
      <div className={styles.pm9}>9:00 PM</div>
      <div className={styles.pm10}>10:00 PM</div>
      <div className={styles.scheduleChild2} />
      <div className={styles.scheduleChild3} />
      <div className={styles.scheduleChild4} />
      <div className={styles.scheduleChild5} />
      <div className={styles.scheduleChild6} />
      <div className={styles.example}>Data S.</div>
      <div className={styles.example1}>Tech</div>
      <div className={styles.example2}>Math</div>
      <div className={styles.example3}>Science</div>
      <div className={styles.example4}>Science</div>
      <div className={styles.rectangleO}></div>
      <div className={styles.rectangleOr}></div>
      <div className={styles.arrow}></div>
    </>
  );
}

export default SchedulePage;