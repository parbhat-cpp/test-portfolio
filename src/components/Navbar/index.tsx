"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { iconStyle } from "@/style-components";
import { navbarOptions } from "@/constants";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const generateHrefs = (option: string): string => {
    return `#${option.split(" ").join("-").toLowerCase()}`;
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarLogo}>Parbhat&apos;s Portfolio</div>
      <div className={styles.navbarOptions}>
        {navbarOptions.map((option) => (
          <a href={generateHrefs(option)} key={option}>
            {option}
          </a>
        ))}
      </div>
      <IconButton className={styles.navbarMenu} onClick={handleClick}>
        <MenuIcon style={iconStyle} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {navbarOptions.map((option) => (
          <MenuItem key={generateHrefs(option)} onClick={handleClose}>
            <a href={generateHrefs(option)}>
              {option}
            </a>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Navbar;
