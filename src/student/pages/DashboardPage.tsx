
import React, { Fragment } from "react";
import styles from "../assets/css/dashboard.module.css";
import { Box } from "@mui/material";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import CoursesBox from "../components/courses/CoursesBox";

function DashboardPage(){
  const coursesInfo = [
    { courseTitle: "Quimica", courseId: "e3b9452c-a7bc-45f9-b664-8740cf52ab8a" },
    { courseTitle: "Matematica", courseId: "CBA302" },
    { courseTitle: "Redaccion", courseId: "LIT215" },
    { courseTitle: "Musica", courseId: "e3b9452c-a7bc-45f9-b664-8740cf52ab8a" },
    { courseTitle: "Historia", courseId: "e3b9452c-a7bc-45f9-b664-8740cf52ab8a" },
    { courseTitle: "Tecnologia", courseId: "TEC315" },
    { courseTitle: "Educacion Fisica", courseId: "e3b9452c-a7bc-45f9-b664-8740cf52ab8a" },
    { courseTitle: "Seminario", courseId: "SEM201" },
  ];

  return (
    <Fragment>
      <Breadcrumb/>
      <div className={styles.upcomingTasks}>Upcoming Tasks</div>
      <div className={styles.today}>Today</div>
      <div className={styles.dashboardItem} />
      <div className={styles.dashboardInner} />
      <button className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <div className={styles.technology}>Technology</div>
        <div className={styles.may1216}>May 12-16</div>

        <div className={styles.rightArrow1}>
          <img className={styles.groupIcon16} alt="" src="/Assets/svg/group16.svg"/>
        </div>

      </button>

      <div className={styles.rectangleContainer}>
        <div className={styles.groupItem} />
        <div className={styles.math}>Technology</div>
        <div className={styles.am}>10 AM</div>

        <button className={styles.rightArrow1}>
          <img className={styles.groupIcon16} alt="" src="/Assets/svg/group17.svg"/>
        </button>

      </div>

      <div className={styles.groupDiv}>
        <div className={styles.groupChild} />
        <div className={styles.math}>Math</div>
        <div className={styles.am}>May 12-16</div>
        <button className={styles.rightArrow1}>
          <img
            className={styles.groupIcon16}
            alt=""
            src="/Assets/svg/group16.svg"
          />
        </button>
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.groupItem} />
        <div className={styles.math}>Math</div>
        <div className={styles.am}>12 PM</div>
        <button className={styles.rightArrow1}>
          <img
            className={styles.groupIcon16}
            alt=""
            src="/Assets/svg/group17.svg"
          />
        </button>
      </div>
      <div className={styles.rectangleParent2}>
        <div className={styles.groupChild} />
        <div className={styles.math}>Science</div>
        <div className={styles.am}>May 12-16</div>
        <button className={styles.rightArrow1}>
          <img
            className={styles.groupIcon16}
            alt=""
            src="/Assets/svg/group16.svg"
          />
        </button>
      </div>
      <div className={styles.rectangleParent3}>
        <div className={styles.groupItem} />
        <div className={styles.math}>Science</div>
        <div className={styles.am}>3 PM</div>
        <button className={styles.rightArrow1}>
          <img
            className={styles.groupIcon16}
            alt=""
            src="/Assets/svg/group17.svg"
          />
        </button>
      </div>
      <div className={styles.rectangleParent4}>
        <div className={styles.groupChild} />
        <div className={styles.math}>P.E.</div>
        <div className={styles.am}>May 12-16</div>
        <button className={styles.rightArrow1}>
          <img
            className={styles.groupIcon16}
            alt=""
            src="/Assets/svg/group16.svg"
          />
        </button>
      </div>
      <div className={styles.rectangleParent5}>
        <div className={styles.groupItem} />
        <div className={styles.math}>P.E.</div>
        <div className={styles.am}>4 PM</div>
        <button className={styles.rightArrow1}>
          <img
            className={styles.groupIcon16}
            alt=""
            src="/Assets/svg/group17.svg"
          />
        </button>
      </div>
      <div className={styles.rectangleParent6}>
        <div className={styles.groupChild} />
        <div className={styles.math}>History</div>
        <div className={styles.am}>May 12-16</div>
        <button className={styles.rightArrow1}>
          <img
            className={styles.groupIcon16}
            alt=""
            src="/Assets/svg/group16.svg"
          />
        </button>
      </div>
      <div className={styles.rectangleParent7}>
        <div className={styles.groupItem} />
        <div className={styles.math}>History</div>
        <div className={styles.am}>8 PM</div>
        <button className={styles.rightArrow1}>
          <img
            className={styles.groupIcon16}
            alt=""
            src="/Assets/svg/group17.svg"
          />
        </button>
      </div>
      <div className={styles.rectangleParent8}>
        <div className={styles.groupChild} />
        <div className={styles.math}>Data S.</div>
        <div className={styles.am}>May 12-16</div>
        <button className={styles.rightArrow1}>
          <img
            className={styles.groupIcon16}
            alt=""
            src="/Assets/svg/group16.svg"
          />
        </button>
      </div>
      <div className={styles.rectangleParent9}>
        <div className={styles.groupItem} />
        <div className={styles.math}>Data S.</div>
        <div className={styles.am}>9 PM</div>
        <button className={styles.rightArrow1}>
          <img
            className={styles.groupIcon16}
            alt=""
            src="/Assets/svg/group17.svg"
          />
        </button>
      </div>
      
      <div className={styles.myCourses}>My Courses</div>

      <Box sx={{ pt: 35 }}>
        <CoursesBox
          courseTitle={coursesInfo[4].courseTitle}
          courseId={coursesInfo[4].courseId}
        ></CoursesBox>
      </Box>

      <Box sx={{ pt: 0, pl: 48 }}>
        <CoursesBox
          courseTitle={coursesInfo[5].courseTitle}
          courseId={coursesInfo[5].courseId}
        ></CoursesBox>
      </Box>

      <Box sx={{ pt: 0, pl: 96 }}>
        <CoursesBox
          courseTitle={coursesInfo[6].courseTitle}
          courseId={coursesInfo[6].courseId}
        ></CoursesBox>
      </Box>
      
      {/* <div className={styles.courseCompleted}>Course completed</div>
      <div className={styles.div1}>33%</div>
      <img
        className={styles.ellipseIcon}
        alt=""
        src="/Assets/svg/ellipse-15.svg"
      />
      <img
        className={styles.ellipseIcon}
        alt=""
        src="/Assets/svg/ellipse-15.svg"
      />

      <div className={styles.courseCompleted1}>Course completed</div>
      <div className={styles.div2}>33%</div>
      <img
        className={styles.dashboardChild13}
        alt=""
        src="/Assets/svg/ellipse-15.svg"
      />
      <img
        className={styles.dashboardChild13}
        alt=""
        src="/Assets/svg/ellipse-15.svg"
      />

      <div className={styles.courseCompleted2}>Course completed</div>
      <div className={styles.div3}>33%</div>
      <img
        className={styles.dashboardChild16}
        alt=""
        src="/Assets/svg/ellipse-15.svg"
      />
      <img
        className={styles.dashboardChild16}
        alt=""
        src="/Assets/svg/ellipse-15.svg"
      />

      <div className={styles.courseCompleted3}>Course completed</div>
      <div className={styles.div4}>33%</div>
      <img
        className={styles.dashboardChild19}
        alt=""
        src="/Assets/svg/ellipse-15.svg"
      />
      <img
        className={styles.dashboardChild19}
        alt=""
        src="/Assets/svg/ellipse-15.svg"
      /> */}
    </Fragment>
  );
};

export default DashboardPage;
