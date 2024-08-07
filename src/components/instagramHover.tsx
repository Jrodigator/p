import React, { useEffect, useState } from "react";
import styles from "../styles/instagram.module.css";

const InstagramEmbeds: React.FC<{ urls: string[] }> = ({ urls }) => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {urls.map((url, index) => (
        <blockquote
        key={index}
        className={styles.instagramEmbed}
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ height: "100px", width: "100px"}}
      ></blockquote>
        // <img src={url} alt="Instagram" className={styles.instagramEmbed}></img>
      ))}
    </div>
  );
};

export default InstagramEmbeds;
