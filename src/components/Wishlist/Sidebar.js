import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';


const drawerWidth = 240;



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  button: {
    width: '100px',
    height: '50px',
    fontFamily: 'Playfair',
    marginTop: '35px',
    marginBottom: '35px',
    marginLeft: '40px',
    background: 'linear-gradient(45deg, #0A0908 30%, #22333B 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 4px 6px 2px rgba(29, 26, 66, .5)',
    color: 'white',
  },
  header: {
    fontFamily: 'Playfair',
    color: '#22333B'
  },
  list: {
    backgroundColor: '#0a0908'
  }
}));

export default function PermanentDrawerRight(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        <div className={classes.toolbar} />
        <h3 className={classes.header}>Exhaust Videos for Eargasms!</h3>
        <Divider />
        <List className={classes.list}>
          <li><button className={classes.button} onClick={() => window.open("https://www.youtube.com/results?search_query=240sx+sr20+exhaust")}>SR20DET</button></li>
          <li><button className={classes.button} onClick={() => window.open("https://www.youtube.com/results?search_query=240sx+jz+exhaust")}>1/2JZ</button></li>   
          <li><button className={classes.button} onClick={() => window.open("https://www.youtube.com/results?search_query=240sx+ls+exhaust")}>LSx</button></li>
          <li><button className={classes.button} onClick={() => window.open("https://www.youtube.com/results?search_query=240sx+rb+exhaust")}>RB20/25/26</button></li>
          <li><button className={classes.button} onClick={() => window.open("https://www.youtube.com/results?search_query=240sx+ka+exhaust")}>KA24DE/T</button></li>
        </List>
      </Drawer>
    </div>
  );
}