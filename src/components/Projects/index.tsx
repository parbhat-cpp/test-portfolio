import React from "react";
import styles from "./styles.module.scss";
import { projects, seeMoreCard } from "@/constants";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsContainer}>
      <h5>Projects</h5>
      <div className={styles.projectWrapper}>
        <div className={styles.projects}>
          {projects.slice(0, 5).map((project) => (
            <>
              <ProjectCard
                projectName={project.name}
                projectDescription={project.content}
                imgSrc={`${project.img}`}
                imgAlt={project.name}
                githubLink={project.source_code}
                liveLink={project.url}
              />
            </>
          ))}
          <ProjectCard
            projectName={seeMoreCard.title}
            projectDescription={""}
            imgSrc={`${seeMoreCard.img}`}
            imgAlt={seeMoreCard.alt}
            seeMore
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
