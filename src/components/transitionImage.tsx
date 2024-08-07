import React, { useEffect, useState } from "react";
import styles from "../styles/transitionImage.module.css"; // Adjust path as necessary

interface TransitionImageProps {
  imageClass: string;
  show: boolean;
}

const TransitionImage: React.FC<TransitionImageProps> = ({ imageClass, show }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    isVisible && (
      <div className={`${styles.transitionImage} ${show ? styles.show : styles.hide} ${styles[imageClass]}`}></div>
    )
  );
};

export default TransitionImage;
