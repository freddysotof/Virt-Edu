import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./dashboard.module.css";
import { Layout } from "../../layout/layout";

const Dashboard: NextPage = () => {
  const onCursoOnline1Click = useCallback(() => {
    // Please sync "Courses" to the project
  }, []);

  const onBurbujaDeDialogo1Click = useCallback(() => {
    // Please sync "Messages" to the project
  }, []);

  const onCalendario11Click = useCallback(() => {
    // Please sync "Schedule" to the project
  }, []);

  const onExamen1Click = useCallback(() => {
    // Please sync "Grades" to the project
  }, []);

  return (
    <>
      <div className={styles.courseCompleted}>Course completed</div>
      <div className={styles.div1}>33%</div>
      <div className={styles.upcomingTasks}>Upcoming Tasks</div>
      <div className={styles.today}>Today</div>
      <div className={styles.dashboardItem} />
      <div className={styles.dashboardInner} />
      <button className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <div className={styles.technology}>Technology</div>
        <div className={styles.may1216}>May 12-16</div>
        <button className={styles.rightArrow1}>
          <img className={styles.groupIcon16} alt="" src="/Assets/svg/group16.svg" />
        </button>
      </button>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupItem} />
        <div className={styles.math}>Technology</div>
        <div className={styles.am}>10 AM</div>
        <button className={styles.rightArrow1}>
          <img className={styles.groupIcon16} alt="" src="/Assets/svg/group17.svg" />
        </button>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupChild} />
        <div className={styles.math}>Math</div>
        <div className={styles.am}>May 12-16</div>
        <button className={styles.rightArrow1}>
          <img className={styles.groupIcon16} alt="" src="/Assets/svg/group16.svg" />
        </button>
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.groupItem} />
        <div className={styles.math}>Math</div>
        <div className={styles.am}>12 PM</div>
        <button className={styles.rightArrow1}>
          <img className={styles.groupIcon16} alt="" src="/Assets/svg/group17.svg" />
        </button>
      </div>
      <div className={styles.rectangleParent2}>
        <div className={styles.groupChild} />
        <div className={styles.math}>Science</div>
        <div className={styles.am}>May 12-16</div>
        <button className={styles.rightArrow1}>
          <img className={styles.groupIcon16} alt="" src="/Assets/svg/group16.svg" />
        </button>
      </div>
      <div className={styles.rectangleParent3}>
        <div className={styles.groupItem} />
        <div className={styles.math}>Science</div>
        <div className={styles.am}>3 PM</div>
        <button className={styles.rightArrow1}>
          <img className={styles.groupIcon16} alt="" src="/Assets/svg/group17.svg" />
        </button>
      </div>
      <div className={styles.rectangleParent4}>
        <div className={styles.groupChild} />
        <div className={styles.math}>P.E.</div>
        <div className={styles.am}>May 12-16</div>
        <button className={styles.rightArrow1}>
          <img className={styles.groupIcon16} alt="" src="/Assets/svg/group16.svg" />
        </button>
      </div>
      <div className={styles.rectangleParent5}>
        <div className={styles.groupItem} />
        <div className={styles.math}>P.E.</div>
        <div className={styles.am}>4 PM</div>
        <button className={styles.rightArrow1}>
          <img className={styles.groupIcon16} alt="" src="/Assets/svg/group17.svg" />
        </button>
      </div>
      <div className={styles.rectangleParent6}>
        <div className={styles.groupChild} />
        <div className={styles.math}>History</div>
        <div className={styles.am}>May 12-16</div>
        <button className={styles.rightArrow1}>
          <img className={styles.groupIcon16} alt="" src="/Assets/svg/group16.svg" />
        </button>
      </div>
      <div className={styles.rectangleParent7}>
        <div className={styles.groupItem} />
        <div className={styles.math}>History</div>
        <div className={styles.am}>8 PM</div>
        <button className={styles.rightArrow1}>
          <img className={styles.groupIcon16} alt="" src="/Assets/svg/group17.svg" />
        </button>
      </div>
      <div className={styles.rectangleParent8}>
        <div className={styles.groupChild} />
        <div className={styles.math}>Data S.</div>
        <div className={styles.am}>May 12-16</div>
        <button className={styles.rightArrow1}>
          <img className={styles.groupIcon16} alt="" src="/Assets/svg/group16.svg" />
        </button>
      </div>
      <div className={styles.rectangleParent9}>
        <div className={styles.groupItem} />
        <div className={styles.math}>Data S.</div>
        <div className={styles.am}>9 PM</div>
        <button className={styles.rightArrow1}>
          <img className={styles.groupIcon16} alt="" src="/Assets/svg/group17.svg" />
        </button>
      </div>
      <div className={styles.lineDiv} />
      <div className={styles.dashboardChild1} />
      <div className={styles.dashboardChild2} />
      <div className={styles.dashboardChild3} />
      <div className={styles.myCourses}>My Courses</div>
      <div className={styles.dashboardChild4} />
      <div className={styles.dashboardChild5} />
      <div className={styles.dashboardChild6} />
      <img className={styles.rectangleIcon} alt="" src="/Assets/images/rectangle-21@2x.png" />
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
      <img className={styles.ellipseIcon} alt="" src="/Assets/svg/ellipse-15.svg" />
      <img className={styles.ellipseIcon} alt="" src="/Assets/svg/ellipse-15.svg" />
      
      <div className={styles.courseCompleted1}>Course completed</div>
      <div className={styles.div2}>33%</div>
      <img className={styles.dashboardChild13} alt="" src="/Assets/svg/ellipse-15.svg" />
      <img className={styles.dashboardChild13} alt="" src="/Assets/svg/ellipse-15.svg" />
      
      <div className={styles.courseCompleted2}>Course completed</div>
      <div className={styles.div3}>33%</div>
      <img className={styles.dashboardChild16} alt="" src="/Assets/svg/ellipse-15.svg" />
      <img className={styles.dashboardChild16} alt="" src="/Assets/svg/ellipse-15.svg" />
      
      <div className={styles.courseCompleted3}>Course completed</div>
      <div className={styles.div4}>33%</div>
      <img className={styles.dashboardChild19} alt="" src="/Assets/svg/ellipse-15.svg" />
      <img className={styles.dashboardChild19} alt="" src="/Assets/svg/ellipse-15.svg" />
      
    
      </>
  );
};

export default Dashboard;