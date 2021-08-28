import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
    background: 0,
  },
  menuList: {
    width: 300,
    margin: 20,
  },
}));

export default function ProjectNav(props) {
  const classes = useStyles();
  //   const anchorRef = React.useRef(null);

  return (
    <div className={classes.root}>
      <Paper elevation={6} className={classes.paper}>
        <MenuList className={classes.menuList}>
          {props.projects.projects.map((project) => (
            <>
              <MenuItem
                onClick={() => props.onChange(project)}
                autoFocus={
                  props.projects.currentProject.number === project.number
                    ? true
                    : false
                }
              >
                {project.name}
              </MenuItem>
              <Divider />
            </>
          ))}
        </MenuList>
      </Paper>
    </div>
  );
}
