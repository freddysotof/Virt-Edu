import React from "react";
import { Layout } from "../../layout/Layout";
import CoursesBox from "../../components/Containers/CoursesBox/CoursesBox";

import styles from "../../components/Containers/CoursesBox/CoursesBox.module.css";
import { Box } from "@mui/material";

function Courses() {
  const coursesInfo = [
    { courseTitle: "Quimica", courseId: "CBA356" },
    { courseTitle: "Matematica", courseId: "CBA302" },
    { courseTitle: "Redaccion", courseId: "LIT215" },
    { courseTitle: "Musica", courseId: "MUS103" },
    { courseTitle: "Historia", courseId: "HIS210" },
    { courseTitle: "Tecnologia", courseId: "TEC315" },
    { courseTitle: "Educacion Fisica", courseId: "EDF101" },
    { courseTitle: "Seminario", courseId: "SEM201" },
  ];

  return (
    <Layout>

      <Box>
        <CoursesBox
          courseTitle={coursesInfo[0].courseTitle}
          courseId={coursesInfo[0].courseId}
        ></CoursesBox>
      </Box>

      <Box sx={{ pl: 50}}>
        <CoursesBox
          courseTitle={coursesInfo[1].courseTitle}
          courseId={coursesInfo[1].courseId}
        ></CoursesBox>
      </Box>

      <Box sx={{ pl: 100 }}>
        <CoursesBox
          courseTitle={coursesInfo[2].courseTitle}
          courseId={coursesInfo[2].courseId}
        ></CoursesBox>
      </Box>

      <Box sx={{ pl: 150}}>
        <CoursesBox
          courseTitle={coursesInfo[3].courseTitle}
          courseId={coursesInfo[3].courseId}
        ></CoursesBox>
      </Box>

      <Box sx={{ pt: 55 }}>
        <CoursesBox
          courseTitle={coursesInfo[4].courseTitle}
          courseId={coursesInfo[4].courseId}
        ></CoursesBox>
      </Box>

      <Box sx={{ pt: 0, pl: 50 }}>
        <CoursesBox
          courseTitle={coursesInfo[5].courseTitle}
          courseId={coursesInfo[5].courseId}
        ></CoursesBox>
      </Box>

      <Box sx={{ pt: 0, pl: 100 }}>
        <CoursesBox
          courseTitle={coursesInfo[6].courseTitle}
          courseId={coursesInfo[6].courseId}
        ></CoursesBox>
      </Box>

      <Box sx={{ pt: 0, pl: 150 }}>
        <CoursesBox
          courseTitle={coursesInfo[7].courseTitle}
          courseId={coursesInfo[7].courseId}
        ></CoursesBox>
      </Box>

      {/* <Box sx={{ }} >
            <Courses_Box/>
        </Box> */}

      {/* <Courses_Box/>
        <Courses_Box/>
        <Courses_Box/>
        <Courses_Box/> */}

      {/* <div className={styles.vectorParent}>
        <img className={styles.groupChild} alt="" src="/Assets/svg/Courses/rectangle-20.svg" />
        <img className={styles.groupItem} alt="" src="/Assets/svg/Courses/rectangle-21@2x.png" />
        <div className={styles.quimicaIns356}>
          <p className={styles.quimica}>
            <span>
              <span className={styles.quimica1}>
                <span>Quimica</span>
                <span>{` `}</span>
              </span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span>
                <span>&nbsp;</span>
              </span>
            </span>
          </p>
          <p className={styles.ins356}>
            <span>
              <span>INS356</span>
            </span>
          </p>
        </div>
        <button className={styles.groupInner} />
        <div className={styles.seeMore}>See more</div>
      </div>


      <div className={styles.vectorGroup}>
        <img className={styles.groupChild} alt="" src="/Assets/svg/Courses/rectangle-20.svg" />
        <img className={styles.groupItem} alt="" src="/Assets/svg/Courses/rectangle-21@2x.png" />
        <div className={styles.quimicaIns356}>
          <p className={styles.quimica}>
            <span>
              <span className={styles.quimica1}>
                <span>Quimica</span>
                <span>{` `}</span>
              </span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span>
                <span>&nbsp;</span>
              </span>
            </span>
          </p>
          <p className={styles.ins356}>
            <span>
              <span>INS356</span>
            </span>
          </p>
        </div>
        <button className={styles.groupInner} />
        <div className={styles.seeMore}>See more</div>
      </div>

      <div className={styles.vectorContainer}>
        <img className={styles.groupChild} alt="" src="/Assets/svg/Courses/rectangle-20.svg" />
        <img className={styles.groupItem} alt="" src="/Assets/svg/Courses/rectangle-21@2x.png" />
        <div className={styles.quimicaIns356}>
          <p className={styles.quimica}>
            <span>
              <span className={styles.quimica1}>
                <span>Quimica</span>
                <span>{` `}</span>
              </span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span>
                <span>&nbsp;</span>
              </span>
            </span>
          </p>
          <p className={styles.ins356}>
            <span>
              <span>INS356</span>
            </span>
          </p>
        </div>
        <button className={styles.groupInner} />
        <div className={styles.seeMore}>See more</div>
      </div>

      <div className={styles.groupDiv}>
        <img className={styles.groupChild} alt="" src="/Assets/svg/Courses/rectangle-20.svg" />
        <img className={styles.groupItem} alt="" src="/Assets/svg/Courses/rectangle-21@2x.png" />
        <div className={styles.quimicaIns356}>
          <p className={styles.quimica}>
            <span>
              <span className={styles.quimica1}>
                <span>Quimica</span>
                <span>{` `}</span>
              </span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span>
                <span>&nbsp;</span>
              </span>
            </span>
          </p>
          <p className={styles.ins356}>
            <span>
              <span>INS356</span>
            </span>
          </p>
        </div>
        <button className={styles.groupInner} />
        <div className={styles.seeMore}>See more</div>
      </div>
      
      <div className={styles.vectorParent1}>
        <img className={styles.groupChild} alt="" src="/Assets/svg/Courses/rectangle-20.svg" />
        <img className={styles.groupItem} alt="" src="/Assets/svg/Courses/rectangle-21@2x.png" />
        <div className={styles.quimicaIns356}>
          <p className={styles.quimica}>
            <span>
              <span className={styles.quimica1}>
                <span>Quimica</span>
                <span>{` `}</span>
              </span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span>
                <span>&nbsp;</span>
              </span>
            </span>
          </p>
          <p className={styles.ins356}>
            <span>
              <span>INS356</span>
            </span>
          </p>
        </div>
        <button className={styles.groupInner} />
        <div className={styles.seeMore}>See more</div>
      </div>

      <div className={styles.vectorParent2}>
        <img className={styles.groupChild} alt="" src="/Assets/svg/Courses/rectangle-20.svg" />
        <img className={styles.groupItem} alt="" src="/Assets/svg/Courses/rectangle-21@2x.png" />
        <div className={styles.quimicaIns356}>
          <p className={styles.quimica}>
            <span>
              <span className={styles.quimica1}>
                <span>Quimica</span>
                <span>{` `}</span>
              </span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span>
                <span>&nbsp;</span>
              </span>
            </span>
          </p>
          <p className={styles.ins356}>
            <span>
              <span>INS356</span>
            </span>
          </p>
        </div>
        <button className={styles.groupInner} />
        <div className={styles.seeMore}>See more</div>
      </div>

      <div className={styles.vectorParent3}>
        <img className={styles.groupChild} alt="" src="/Assets/svg/Courses/rectangle-20.svg" />
        <img className={styles.groupItem} alt="" src="/Assets/svg/Courses/rectangle-21@2x.png" />
        <div className={styles.quimicaIns356}>
          <p className={styles.quimica}>
            <span>
              <span className={styles.quimica1}>
                <span>Quimica</span>
                <span>{` `}</span>
              </span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span>
                <span>&nbsp;</span>
              </span>
            </span>
          </p>
          <p className={styles.ins356}>
            <span>
              <span>INS356</span>
            </span>
          </p>
        </div>
        <button className={styles.groupInner} />
        <div className={styles.seeMore}>See more</div>
      </div>

      <div className={styles.vectorParent4}>
        <img className={styles.groupChild} alt="" src="/Assets/svg/Courses/rectangle-20.svg" />
        <img className={styles.groupItem} alt="" src="/Assets/svg/Courses/rectangle-21@2x.png" />
        <div className={styles.quimicaIns356}>
          <p className={styles.quimica}>
            <span>
              <span className={styles.quimica1}>
                <span>Quimica</span>
                <span>{` `}</span>
              </span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span>
                <span>&nbsp;</span>
              </span>
            </span>
          </p>
          <p className={styles.ins356}>
            <span>
              <span>INS356</span>
            </span>
          </p>
        </div>
        <button className={styles.groupInner} />
        <div className={styles.seeMore}>See more</div>
      </div> */}
    </Layout>
  );
}

export default Courses;
