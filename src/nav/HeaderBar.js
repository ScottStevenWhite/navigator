import * as React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    navDisplayFlex: {
      display: `flex`,
      justifyContent: `space-between`
    },
    linkText: {
      textDecoration: `none`,
      textTransform: `uppercase`,
      color: `white`
    }
  });

const navLinks = [
    { title: `Computer Science`, path: `/compsci` },
    { title: `Philosophy`, path: `/philosophy` }
  ];

function Header() {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="home" href="/">
                    <Home fontSize="large"/>
                </IconButton>
                    
                <List 
                    component="nav" 
                    aria-labelledby="main navigation"
                    className={classes.navDisplayFlex}
                    >
                    {navLinks.map(({ title, path }) => (
                        <Link to={path} key={title} className={classes.linkText}>
                            <ListItem button>
                                <ListItemText primary={title} />
                            </ListItem>
                        </Link>
))}
</List>
            </Toolbar>
        </AppBar>
    );
  }

  export default Header;