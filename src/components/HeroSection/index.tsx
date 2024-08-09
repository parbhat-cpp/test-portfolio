"use client";

import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import ContactLinks from "../ContactLinks";

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroimageContainer}>
        <Image
          priority
          className={styles.heroimage}
          src={`/assets/hero.png`}
          alt="Developer portfolio"
          height={360}
          width={275}
        />
      </div>
      <div className={styles.pageIntro}>
        <h1>
          Hey, myself <span className={styles.name}>Parbhat Sharma</span>
        </h1>
        <p>I have expertise in</p>
        <TypeAnimation
          sequence={[
            "MERN Stack",
            1000,
            "Next.js",
            1000,
            "Flutter",
            1000,
            "C/C++",
            1000,
            "Java",
            1000,
            "JavaScript",
            1000,
          ]}
          wrapper="span"
          speed={35}
          style={{ fontSize: "4.5em", display: "inline-block" }}
          repeat={Infinity}
        />
        <div className={styles.contact}>
          <ContactLinks />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
