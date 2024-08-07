import React, { useEffect } from "react";
import styles from "../styles/funLetters.module.css";
import TransitionImage from "./transitionImage";

interface FunLettersProps {
  text: string;
  imageClass: string;
  useRgbTextShift?: boolean; //  'rgbTextShift' 
}

const FunLetters: React.FC<FunLettersProps> = ({
  text,
  imageClass,
  useRgbTextShift,
}) => {
  useEffect(() => {
    console.log("FunLetters mounted");
    const spans = document.querySelectorAll(`.${styles.funLetters} span`);
    spans.forEach((span) => {
      const randomRotation = Math.random() * 20 - 10; // -10 -> 10
      (span as HTMLElement).style.transform = `rotate(${randomRotation}deg)`;
    });
  }, [text]); // on `text` prop change

  // spans for each character in `text`, incorp bef aftr ? 
  const letterSpans = text.split("").map((char, index) => (
    <span key={index}>{char}</span>
  ));

  // const containerClass = useRgbTextShift ? `${styles.funLetters} ${styles['rgb-text-shift']}` : styles.funLetters;

  return (
    <div className={styles.funLetters} >
      {letterSpans}
      {/* <TransitionImage imageClass={imageClass} /> */}
    </div>
  );
};

export default FunLetters;

// import React, { useState, useEffect } from "react";
// import styles from "../styles/funtext.module.css"; // Adjust path as necessary
// import TransitionImage from "./transitionImage";

// interface FunLettersProps {
//   text: string;
//   imageClass: string;
// }

// const FunLetters: React.FC<FunLettersProps> = ({ text, imageClass }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     const spans = document.querySelectorAll(`.${styles.funLetters} span`);
//     spans.forEach((span) => {
//       const randomRotation = Math.random() * 20 - 10; // Random rotation between -10deg and 10deg
//       (span as HTMLElement).style.transform = `rotate(${randomRotation}deg)`;
//     });
//   }, [text]); // Re-run effect whenever `text` prop changes

//   // Generate spans for each character in `text`
//   const letterSpans = text
//     .split("")
//     .map((char, index) => <span key={index}>{char}</span>);

//   return (
//     
     //   <div><div
//       className={styles.funLetters}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {letterSpans}
   //   </div>
//       <TransitionImage imageClass={imageClass} show={isHovered} />
//     </div>
//   );
// };

// export default FunLetters;
