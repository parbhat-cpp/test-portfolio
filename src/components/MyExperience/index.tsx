import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";
import { experiences } from "@/constants";
import styles from "./styles.module.scss";
import { primaryColor } from "@/style-components";
import { TimelineOppositeContent } from "@mui/lab";

const MyExperience = () => {
  return (
    <section id="experience" className={styles.experienceContainer}>
      <h5>My Experience</h5>
      <Timeline position="alternate-reverse">
        {experiences.map((experience) => (
          <>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span" color={primaryColor}>
                  {experience.companyName}
                </Typography>
                <Typography>{experience.position}</Typography>
                <Typography component="p">{experience.employmentSpan}</Typography>
              </TimelineContent>
            </TimelineItem>
          </>
        ))}
      </Timeline>
    </section>
  );
};

export default MyExperience;
