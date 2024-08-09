"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./styles.module.scss";

interface ProjectCardProps {
  imgSrc: string;
  imgAlt: string;
  projectName: string;
  projectDescription: string;
  liveLink?: string;
  githubLink?: string;
  seeMore?: boolean;
}

export default function ProjectCard(props: ProjectCardProps) {
  const {
    imgSrc,
    imgAlt,
    projectName,
    projectDescription,
    liveLink,
    githubLink,
    seeMore,
  } = props;

  const handleProjectCardButtonClick = (url: string) => {
    window.open(url);
  };

  return (
    <Card  className={styles.projectCard}>
      <CardMedia component="img" alt={imgAlt} height="140" image={imgSrc} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {projectName}
        </Typography>
        <Typography variant="body2">
          {projectDescription}
        </Typography>
      </CardContent>
      <CardActions>
        {liveLink && (
          <Button
            size="small"
            onClick={() => handleProjectCardButtonClick(liveLink)}
          >
            Live Link
          </Button>
        )}
        {githubLink && (
          <Button
            size="small"
            onClick={() => handleProjectCardButtonClick(githubLink)}
          >
            Github Link
          </Button>
        )}
        {seeMore && (
          <Button
            size="small"
            onClick={() => handleProjectCardButtonClick("/projects")}
          >
            See More Projects
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
