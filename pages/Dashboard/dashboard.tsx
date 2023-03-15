import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./dashboard.module.css";

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
    <div className={styles.dashboard}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <button className={styles.hogar1}>
          <img className={styles.groupIcon} alt="" src="/Assets/svg/group.svg" />
        </button>
        <button className={styles.cursoOnline1} onClick={onCursoOnline1Click}>
          <img className={styles.vectorIcon} alt="" src="/Assets/svg/vector.svg" />
          <img className={styles.vectorIcon1} alt="" src="/Assets/svg/vector1.svg" />
          <img className={styles.vectorIcon2} alt="" src="/Assets/svg/vector2.svg" />
          <img className={styles.vectorIcon3} alt="" src="/Assets/svg/vector3.svg" />
          <img className={styles.vectorIcon4} alt="" src="/Assets/svg/vector4.svg" />
          <img className={styles.vectorIcon5} alt="" src="/Assets/svg/vector5.svg" />
          <img className={styles.vectorIcon6} alt="" src="/Assets/svg/vector6.svg" />
          <img className={styles.vectorIcon7} alt="" src="/Assets/svg/vector7.svg" />
          <img className={styles.vectorIcon8} alt="" src="/Assets/svg/vector8.svg" />
          <img className={styles.vectorIcon9} alt="" src="/Assets/svg/vector9.svg" />
          <img className={styles.vectorIcon10} alt="" src="/Assets/svg/vector10.svg" />
          <img className={styles.vectorIcon11} alt="" src="/Assets/svg/vector11.svg" />
          <img className={styles.vectorIcon12} alt="" src="/Assets/svg/vector12.svg" />
          <img className={styles.vectorIcon13} alt="" src="/Assets/svg/vector13.svg" />
        </button>
        <button
          className={styles.burbujaDeDialogo1}
          onClick={onBurbujaDeDialogo1Click}
        >
          <img className={styles.groupIcon1} alt="" src="/Assets/svg/group1.svg" />
        </button>
        <button className={styles.calendario11} onClick={onCalendario11Click}>
          <img className={styles.groupIcon2} alt="" src="/Assets/svg/group2.svg" />
        </button>
        <button className={styles.examen1} onClick={onExamen1Click}>
          <img className={styles.groupIcon3} alt="" src="/Assets/svg/group3.svg" />
          <img className={styles.groupIcon4} alt="" src="/Assets/svg/group4.svg" />
          <img className={styles.groupIcon5} alt="" src="/Assets/svg/group5.svg" />
          <img className={styles.groupIcon6} alt="" src="/Assets/svg/group6.svg" />
          <img className={styles.groupIcon7} alt="" src="/Assets/svg/group7.svg" />
          <img className={styles.groupIcon8} alt="" src="/Assets/svg/group8.svg" />
          <img className={styles.groupIcon9} alt="" src="/Assets/svg/group9.svg" />
          <img className={styles.groupIcon10} alt="" src="/Assets/svg/group10.svg" />
          <img className={styles.groupIcon11} alt="" src="/Assets/svg/group11.svg" />
          <img className={styles.groupIcon12} alt="" src="/Assets/svg/group12.svg" />
          <img className={styles.groupIcon13} alt="" src="/Assets/svg/group13.svg" />
          <img className={styles.groupIcon14} alt="" src="/Assets/svg/group14.svg" />
        </button>
        <button className={styles.vParent}>
          <div className={styles.v}>V</div>
          <div className={styles.e}>E</div>
        </button>
        <button className={styles.logout1}>
          <img className={styles.vectorIcon14} alt="" src="/Assets/svg/vector14.svg" />
          <img className={styles.vectorIcon15} alt="" src="/Assets/svg/vector15.svg" />
          <img className={styles.vectorIcon16} alt="" src="/Assets/svg/vector16.svg" />
          <img className={styles.vectorIcon17} alt="" src="/Assets/svg/vector17.svg" />
          <img className={styles.vectorIcon18} alt="" src="/Assets/svg/vector18.svg" />
        </button>
        <div className={styles.frameItem} />
      </div>
      <div className={styles.dashboard1}>Dashboard</div>
      <img className={styles.dashboardChild} alt="" src="/Assets/images/ellipse-2@2x.png" />
      <div className={styles.luisaPerez}>Luisa Perez</div>
      <div className={styles.student}>Student</div>
      <button className={styles.notificacion1}>
        <img className={styles.groupIcon15} alt="" src="/Assets/svg/group15.svg" />
        <img
          className={styles.notificacion1Child}
          alt=""
          src="/Assets/svg/ellipse-3.svg"
        />
        <div className={styles.div}>4</div>
      </button>
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
      
    </div>
  );
};

export default Dashboard;