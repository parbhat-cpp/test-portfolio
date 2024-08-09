import React from "react";
import { iconStyle } from "@/style-components";
import {
  GitHub,
  Instagram,
  LinkedIn,
  Telegram,
  Twitter,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import styles from "./styles.module.scss";
import { contactLinks } from "@/constants";

const ContactLinks = () => {
  const handleContactLink = (url: string) => {
    window.open(url);
  };
  
  return (
    <div className={styles.contactLinks}>
      <IconButton onClick={() => handleContactLink(contactLinks.github)}>
        <GitHub style={iconStyle} />
      </IconButton>
      <IconButton onClick={() => handleContactLink(contactLinks.twitter)}>
        <Twitter style={iconStyle} />
      </IconButton>
      <IconButton onClick={() => handleContactLink(contactLinks.linkedin)}>
        <LinkedIn style={iconStyle} />
      </IconButton>
      <IconButton onClick={() => handleContactLink(contactLinks.telegram)}>
        <Telegram style={iconStyle} />
      </IconButton>
      <IconButton onClick={() => handleContactLink(contactLinks.instagram)}>
        <Instagram style={iconStyle} />
      </IconButton>
    </div>
  );
};

export default ContactLinks;
