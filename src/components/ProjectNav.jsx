import React from "react";
import Paper from "@material-ui/core/Paper";
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
              <MenuItem onClick={() => props.onChange(project)}>
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
