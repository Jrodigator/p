"use client";

import React from "react";
// import styles from '../../styles/StoryStyles/Park.module.css';
import GrainyEffect from "../../components/effect";
// import ParkContent from "../art/thePark";
import styles from "../../styles/art/art.module.css";

const introduction: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.effect}>
        <GrainyEffect />
      </div>
      <div
        className={styles.wip}
      >
        WIP
      </div>
      {/* <ParkContent /> */}
    </div>
  );
};

export default introduction;
