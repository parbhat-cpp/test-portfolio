"use client";

import React from "react";
import ContactLinks from "../ContactLinks";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div>
          <ContactLinks />
        </div>
        <div className={styles.divider}></div>
        <div className={styles.footertext}>
          <h6>Developed by Parbhat Sharma</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
