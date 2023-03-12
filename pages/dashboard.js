import { useCallback } from "react";
import { Button } from "@mui/material";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  const onCursoOnline1IconClick = useCallback(() => {
    // Please sync "Courses" to the project
  }, []);

  const onBurbujaDeDialogo1IconClick = useCallback(() => {
    // Please sync "Messages" to the project
  }, []);

  const onCalendario11Click = useCallback(() => {
    // Please sync "Schedule" to the project
  }, []);

  const onExamen1IconClick = useCallback(() => {
    // Please sync "Grades" to the project
  }, []);

  return (
    <div className={styles.dashboard}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img className={styles.hogar1Icon} alt="" src="/hogar-1.svg" />
        <img
          className={styles.cursoOnline1Icon}
          alt=""
          src="/cursoonline-1.svg"
          onClick={onCursoOnline1IconClick}
        />
        <img
          className={styles.burbujaDeDialogo1Icon}
          alt=""
          src="/burbujadedialogo-1.svg"
          onClick={onBurbujaDeDialogo1IconClick}
        />
        <img
          className={styles.calendario11}
          alt=""
          src="/calendario-1-1.svg"
          onClick={onCalendario11Click}
        />
        <img
          className={styles.examen1Icon}
          alt=""
          src="/examen-1.svg"
          onClick={onExamen1IconClick}
        />
        <div className={styles.vParent}>
          <div className={styles.v}>V</div>
          <div className={styles.e}>E</div>
        </div>
        <img className={styles.logout1Icon} alt="" src="/logout-1.svg" />
        <div className={styles.frameItem} />
      </div>
      <div className={styles.dashboard1}>Dashboard</div>
      <img className={styles.dashboardChild} alt="" src="/ellipse-2@2x.png" />
      <div className={styles.luisaPerez}>Luisa Perez</div>
      <div className={styles.student}>Student</div>
      <Button
        className={styles.notificacion1}
        sx={{ width: 40 }}
        variant="text"
        color="primary"
      />
      <div className={styles.dashboardInner}>
        <div className={styles.ellipseParent}>
          <img className={styles.groupChild} alt="" src="/ellipse-4.svg" />
          <img className={styles.groupItem} alt="" src="/ellipse-5.svg" />
          <div className={styles.div}>50%</div>
          <div className={styles.courseInProgress}>Course in progress</div>
        </div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.ellipseGroup}>
          <img className={styles.groupInner} alt="" src="/ellipse-41.svg" />
          <img className={styles.ellipseIcon} alt="" src="/ellipse-51.svg" />
          <div className={styles.div1}>50%</div>
          <div className={styles.courseCompleted}>Course completed</div>
        </div>
      </div>
      <div className={styles.dashboardInner1}>
        <div className={styles.ellipseGroup}>
          <img className={styles.groupInner} alt="" src="/ellipse-41.svg" />
          <img className={styles.ellipseIcon} alt="" src="/ellipse-51.svg" />
          <div className={styles.div1}>50%</div>
          <div className={styles.taskCompleted}>Task completed</div>
        </div>
      </div>
      <div className={styles.dashboardInner2}>
        <div className={styles.ellipseGroup}>
          <img className={styles.groupInner} alt="" src="/ellipse-41.svg" />
          <img className={styles.ellipseIcon} alt="" src="/ellipse-51.svg" />
          <div className={styles.div1}>50%</div>
          <div className={styles.califications}>Califications</div>
        </div>
      </div>
      <div className={styles.upcomingTasks}>Upcoming Tasks</div>
      <div className={styles.today}>Today</div>
      <div className={styles.dashboardItem} />
      <div className={styles.lineDiv} />
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangleDiv} />
        <div className={styles.technology}>Technology</div>
        <div className={styles.am}>May 12-16</div>
        <img
          className={styles.rightArrow1Icon}
          alt=""
          src="/rightarrow-1.svg"
        />
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild5} />
        <div className={styles.technology}>Technology</div>
        <div className={styles.am}>10 AM</div>
        <img
          className={styles.rightArrow1Icon}
          alt=""
          src="/rightarrow-11.svg"
        />
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.rectangleDiv} />
        <div className={styles.technology}>Math</div>
        <div className={styles.am}>May 12-16</div>
        <img
          className={styles.rightArrow1Icon}
          alt=""
          src="/rightarrow-1.svg"
        />
      </div>
      <div className={styles.rectangleParent2}>
        <div className={styles.groupChild5} />
        <div className={styles.technology}>Math</div>
        <div className={styles.am}>12 PM</div>
        <img
          className={styles.rightArrow1Icon}
          alt=""
          src="/rightarrow-11.svg"
        />
      </div>
      <div className={styles.rectangleParent3}>
        <div className={styles.rectangleDiv} />
        <div className={styles.technology}>Science</div>
        <div className={styles.am}>May 12-16</div>
        <img
          className={styles.rightArrow1Icon}
          alt=""
          src="/rightarrow-1.svg"
        />
      </div>
      <div className={styles.rectangleParent4}>
        <div className={styles.groupChild5} />
        <div className={styles.technology}>Science</div>
        <div className={styles.am}>3 PM</div>
        <img
          className={styles.rightArrow1Icon}
          alt=""
          src="/rightarrow-11.svg"
        />
      </div>
      <div className={styles.rectangleParent5}>
        <div className={styles.rectangleDiv} />
        <div className={styles.technology}>P.E.</div>
        <div className={styles.am}>May 12-16</div>
        <img
          className={styles.rightArrow1Icon}
          alt=""
          src="/rightarrow-1.svg"
        />
      </div>
      <div className={styles.rectangleParent6}>
        <div className={styles.groupChild5} />
        <div className={styles.technology}>P.E.</div>
        <div className={styles.am}>4 PM</div>
        <img
          className={styles.rightArrow1Icon}
          alt=""
          src="/rightarrow-11.svg"
        />
      </div>
      <div className={styles.rectangleParent7}>
        <div className={styles.rectangleDiv} />
        <div className={styles.technology}>History</div>
        <div className={styles.am}>May 12-16</div>
        <img
          className={styles.rightArrow1Icon}
          alt=""
          src="/rightarrow-1.svg"
        />
      </div>
      <div className={styles.rectangleParent8}>
        <div className={styles.groupChild5} />
        <div className={styles.technology}>History</div>
        <div className={styles.am}>8 PM</div>
        <img
          className={styles.rightArrow1Icon}
          alt=""
          src="/rightarrow-11.svg"
        />
      </div>
      <div className={styles.rectangleParent9}>
        <div className={styles.rectangleDiv} />
        <div className={styles.technology}>Data S.</div>
        <div className={styles.am}>May 12-16</div>
        <img
          className={styles.rightArrow1Icon}
          alt=""
          src="/rightarrow-1.svg"
        />
      </div>
      <div className={styles.rectangleParent10}>
        <div className={styles.groupChild5} />
        <div className={styles.technology}>Data S.</div>
        <div className={styles.am}>9 PM</div>
        <img
          className={styles.rightArrow1Icon}
          alt=""
          src="/rightarrow-11.svg"
        />
      </div>
      <div className={styles.dashboardChild1} />
      <div className={styles.dashboardChild2} />
      <div className={styles.dashboardChild3} />
      <div className={styles.dashboardChild4} />
      <div className={styles.myCourses}>My Courses</div>
      <div className={styles.dashboardChild5} />
      <div className={styles.dashboardChild6} />
      <div className={styles.dashboardChild7} />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-21@2x.png" />
      <img
        className={styles.dashboardChild8}
        alt=""
        src="/rectangle-24@2x.png"
      />
      <img
        className={styles.dashboardChild9}
        alt=""
        src="/rectangle-27@2x.png"
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
      <div className={styles.dashboardChild10} />
      <div className={styles.dashboardChild11} />
      <div className={styles.dashboardChild12} />
      <div className={styles.seeMore}>See more</div>
      <div className={styles.seeMore1}>See more</div>
      <div className={styles.seeMore2}>See more</div>
    </div>
  );
};

export default Dashboard;
