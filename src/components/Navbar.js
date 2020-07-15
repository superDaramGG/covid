import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Styles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "#5DADE2",
  },
  title: {
    textAlign: "center",
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const styles = Styles();

  return (
    <div className={styles.root}>
      <AppBar position="static" className={styles.appbar}>
        <Toolbar>
          <Typography variant="h4" className={styles.title}>
            세계 코로나 19 통계
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
