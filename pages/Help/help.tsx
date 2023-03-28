import type { NextPage } from "next";
import styles from "./help.module.css";
import Login from "../../pages/Login/login";
import { useRouter } from "next/router";
import { Fragment, useCallback } from "react";
import Link from "next/link";



export const Help: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.help}>
      <img
        className={styles.clientsRequestsV11Icon}
        alt=""
        src="/Assets/svg/clientsrequestsv1-1.svg"
        />
   
     
      <div className={styles.helpCenterParent}>
        <div className={styles.helpCenter}>Help Center</div>
        <div className={styles.boremIpsumDolorContainer}>
          <p className={styles.boremIpsumDolor}>
            Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
          <p className={styles.boremIpsumDolor}>&nbsp;</p>
          <p className={styles.boremIpsumDolor}>
            Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
            quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo
            vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex
            eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus,
            porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna
            non ligula vestibulum eleifend. Nulla varius volutpat turpis sed
            lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum
            sem condimentum ullamcorper quis venenatis nisi. Proin vitae
            facilisis nisi, ac posuere leo.
          
          </p>
        </div>

      </div>
      <img className={styles.arrowlefthelp} alt="" src="/Assets/svg/arrowleft-1.svg" />
    </div>
 

  
  );
};

export default Help;
