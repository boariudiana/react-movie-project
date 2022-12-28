import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Movie🎥List</Typography>
          <ul className={styles.ul}>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
