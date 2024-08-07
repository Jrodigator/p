import React, { useState, useEffect } from "react";
import styles from "../../styles/MainContent.module.css";
import FunLetters from "../../components/FunLetters";
import jared from "../../public/jaredh.png";
import Image from "next/image";
import ticket from "../app/ticket.png";
import eyesImage from "../../public/eyes-looking.gif";
import InstagramEmbeds from "../../components/instagramHover"; // Import the InstagramEmbeds component
import Link from "next/link";

const post1 = require("../../public/post1.png");
const tv = require("../../public/tv.png");
const top = require("../../public/top.png");
const bottom = require("../../public/bottom.png");

const instagramPostUrls = [
  post1,
  post1,
  // Add more post URLs here
];

interface Eye {
  id: number;
  left: string;
  top: string;
  width: string;
  height: string;
  delay: string;
}

const home: React.FC = () => {
  const [hoverStates, setHoverStates] = useState({
    about: false,
    art: false,
    work: false,
    instagram: false,
    contact: false,
    thePark: false,
  });

  const [loadSkip, setLoadSkip] = useState<boolean>(false);
  const [eyes, setEyes] = useState<Eye[]>([]);
  const [showEyes, setShowEyes] = useState<boolean>(false);
  const [showInstagramImages, setShowInstagramImages] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showArt, setShowArt] = useState(false);

  const generateEyes = () => {
    const newEyes: Eye[] = [];
    for (let i = 0; i < 20; i++) {
      const l = Math.random() * 120 - 55;
      const t = Math.random() * 100 - 70;
      let x = Math.random() * 3 + 0.5;
      if (l > -3 && l < 25 && t > -60 && t < 3) {
        // Skip if within bounds of main box
        continue;
      }
      const left = `${l}vw`;
      const top = `${t}vh`;
      const width = `${2 * x}rem`;
      const height = `${x}rem`;
      // const size = `${Math.random() * 2 + 0.5}rem`; // Random size between 0.5rem and 2.5rem
      const delay = `${Math.random() * 4 * x}s`; // Random delay up to 0.5s
      newEyes.push({ id: i, left, top, width, height, delay });
    }
    setEyes(newEyes);
  };

  useEffect(() => {
    generateEyes();
  }, []);

  const handleMouseEnter = (key: string) => {
    setHoverStates((prevStates) => ({
      ...prevStates,
      [key]: true,
    }));
    // Perform specific actions for each hover state (key == x)
    console.log(`Hover started on ${key}`);

    if (key === "thePark") {
      setLoadSkip(true);
      setShowEyes(true);
    }
    if (key === "instagram") {
      setShowInstagramImages(true);
    }
    if (key === "contact") {
      setShowContact(true);
    }
    if (key === "art") {
      setShowArt(true);
    }
  };

  const handleMouseLeave = (key: string) => {
    setHoverStates((prevStates) => ({
      ...prevStates,
      [key]: false,
    }));
    // Perform specific actions when hovering ends
    console.log(`Hover ended on ${key}`);

    if (key === "thePark") {
      setShowEyes(false);
    }
    if (key === "instagram") {
      setShowInstagramImages(false);
    }
    if (key === "contact") {
      setShowContact(false);
    }
    if (key === "art") {
      setShowArt(false);
    }
  };

  return (
    <div className={styles.mainContent}>
      <nav className={styles.nav}>
        <div></div>
        <div className={styles.images}>
          <Image src={jared} alt="Jared" width={1024 / 2.5} height={347 / 2} />
        </div>
        {/* <FunLetters text="JARED" /> */}
        <div className={styles.navlinks}>
          <a
            href="/about"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={() => handleMouseLeave("about")}
          >
            {" "}
            <FunLetters text="ABOUT" imageClass="image-about" />{" "}
          </a>
          <Link
            href="/art"
            onMouseEnter={() => handleMouseEnter("art")}
            onMouseLeave={() => handleMouseLeave("art")}
          >
            <FunLetters text="ART" imageClass="image-art" />
          </Link>
          <a
            href="/work"
            onMouseEnter={() => handleMouseEnter("work")}
            onMouseLeave={() => handleMouseLeave("work")}
          >
            <FunLetters text="WORK" imageClass="image-work" />
          </a>
          <a
            href="https://www.instagram.com/jaredrodriguesxxl/"
            onMouseEnter={() => handleMouseEnter("instagram")}
            onMouseLeave={() => handleMouseLeave("instagram")}
          >
            <FunLetters text="INSTAGRAM" imageClass="image-instagram" />
          </a>
          <a
            href="/contact"
            onMouseEnter={() => handleMouseEnter("contact")}
            onMouseLeave={() => handleMouseLeave("contact")}
          >
            <FunLetters text="CONTACT" imageClass="image-contact" />
          </a>
          <Link
            href="/terminal"
            onMouseEnter={() => handleMouseEnter("thePark")}
            onMouseLeave={() => handleMouseLeave("thePark")}
          >
            <FunLetters text="THE_PARK" imageClass="image-park" />
          </Link>
        </div>
        {/* <div
          className={`${styles.eyesWrapper} ${
            showEyes ? styles.show : styles.hide
          }`}
        > */}
        <div>
          {/* <Image src={eyesImage} alt="Eyes" className={styles.eyes}  style={{ border: "10px red",left: '20vw', top: "3vh"}} /> 
          <Image src={eyesImage} alt="Eyes" className={styles.eyes}  style={{ border: "10px red",left: '-3.5vw', top: "3vh"}} /> 
          <Image src={eyesImage} alt="Eyes" className={styles.eyes}  style={{ border: "10px red",left: '20vw', top: "-60vh"}} /> 
          <Image src={eyesImage} alt="Eyes" className={styles.eyes}  style={{ border: "10px red",left: '-3.5vw', top: "-60vh"}} />  
          BOUNDS OF MAIN BOX */}

          {eyes.map((eye) => (
            <div
              className={`${styles.eyesWrapper} ${
                loadSkip ? (showEyes ? styles.show : styles.hide) : ""
              }`}
              style={
                showEyes
                  ? { animationDelay: eye.delay }
                  : { animationDelay: "0s" }
              }
            >
              <Image
                key={eye.id}
                src={eyesImage}
                alt="Eyes"
                className={styles.eyes}
                style={{
                  left: eye.left,
                  top: eye.top,
                  width: eye.width,
                  height: eye.height,
                  animationDelay: eye.delay,
                }}
              />
            </div>
          ))}
        </div>
        {/* INSTAGRAM STUFF */}
        <div>
          {showInstagramImages &&
            instagramPostUrls.map((url, index) => (
              <Image
                alt="post"
                src={url}
                className={styles.instagramEmbed}
                style={{
                  left: `${(index * 5 + 2) * 220 - window.innerWidth * 0.5}px`,
                  top: `${0 - window.innerHeight * 0.15}px`,
                }}
              />
            ))}
        </div>
        {/* CONTACT */}
        {showContact && <Image src={tv} alt="tv" className={styles.tv} />}
      </nav>
      {/* ART */}
      {showArt && (
        <div>
          <Image
            alt=""
            src={top}
            className={`${styles.imageTop} ${styles.show}`}
          ></Image>
          <Image alt="" src={bottom} className={styles.imageBottom}></Image>
        </div>
      )}
    </div>
  );
};

export default home;
