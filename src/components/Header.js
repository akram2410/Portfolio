import React from "react";
import { Typography, Box, Grid, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";
import Typed from "react-typed";

const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1)
  },
  title: {
    color: "tomato"
  },
  subtitle: {
    color: "tan"
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Mohammad Akram" />
      </Grid>

      <Typography variant="h4" className={classes.title}>
        <Typed strings={["Akram Mohammad"]} typeSpeed={40} />
      </Typography>
      <Typography variant="h5" className={classes.subtitle}>
        <Typed
          strings={["Javascript", "Reactjs", "Redux"]}
          typeSpeed={40}
          backspeed={60}
          loop
        />
      </Typography>
      <br />
    </Box>
  );
};

export default Header;
