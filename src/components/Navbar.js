import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Typography,
  Box
} from "@material-ui/core";
import MobileRightMenuSlider from "@material-ui/core/Drawer";

import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail
} from "@material-ui/icons";
import avatar from "../avatar.png";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
//CSS STYLES

const useStyles = makeStyles(theme => ({
  menuSlideContainer: {
    width: 250,
    background: "#511",
    height: "100%"
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13)
  },
  listItem: {
    color: "tan"
  }
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    linkPath: "/"
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    linkPath: "/resume"
  },
  {
    listIcon: <Apps />,
    listText: "PortFolio"
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact"
  }
];

const Navbar = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    right: false
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const sideList = slider => (
    <Box
      className={classes.menuSlideContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="Mohammad Akram" />
      <Divider />
      <List>
        {menuItems.map((item, key) => (
          <ListItem button component={Link} to={item.linkPath} key={key}>
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={item.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBack style={{ color: "tomato" }}></ArrowBack>
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              Portfolio
            </Typography>
            <MobileRightMenuSlider
              anchor="right"
              onClose={toggleSlider("right", false)}
              open={state.right}
            >
              {sideList("right")}
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
