import React from "react";
import styles from "./styles.module.scss";
import { skills } from "@/constants";
import Image from "next/image";

const MySkills = () => {
  return (
    <section id="skills" className={styles.skillsContainer}>
      <h5>My Skills & Abilities</h5>
      <div className={styles.skillsBox}>
        <div className={styles.skills}>
          {skills.map((skill) => (
            <div className={styles.skill} key={skill.name}>
              <Image src={skill.logo} alt={skill.name} width={80} height={80} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
