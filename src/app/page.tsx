"use client";

import React from "react";
import GrainyEffect from "../components/effect";
import MainContent from "./home/home";
import ParkContent from "./thepark/page";
import styles from "../styles/Home.module.css";

const page: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.effect}>
        <GrainyEffect />
      </div>
      <MainContent />
    </div>
  );
};

export default page;
