// src/app/thepark/introduction/page.tsx
import React from 'react';
import styles from '../../styles/StoryStyles/thePark.module.css';

const Introduction: React.FC = () => {
  return (
    <div className={`${styles.webs} ${styles.textBox}`}>
      <h1 className={`${styles.text} ${styles.text1}`}>The Park Introduction</h1>
      <h2 className={`${styles.text} ${styles.text2}`}>Welcome to the park...</h2>
    </div>
  );
};

export default Introduction;
