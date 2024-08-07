"use client";

import React from 'react';
// import styles from '../../styles/StoryStyles/Park.module.css';
import GrainyEffect from "../../components/effect";
import ParkContent from "../thepark/thePark";
import styles from "../../styles/Home.module.css";

const introduction: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.effect}>
        <GrainyEffect />
      </div>
      <ParkContent />
    </div>
  );
};

export default introduction;