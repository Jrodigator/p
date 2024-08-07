"use client";

import React from "react";

import GrainyEffect from "../../components/effect";
import styles from "../../styles/terminal.module.css";
import TerminalComponent from "./terminalComponent";
// import dynamic from "next/dynamic";

// const TerminalComponent = dynamic(() => import("./terminalComponent"), {
//   ssr: false, // Disable server-side rendering
// });

const terminal: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.effect}>
        <GrainyEffect />
      </div>
      <TerminalComponent />
    </div>
  );
};

export default terminal;
