import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import youtube from '../../MotorAssets/youtube.png';


const drawerWidth = 200;



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#0a0908'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: '#0a0908'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#0a0908'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    backgroundColor: '#0a0908'
  },
  button: {
    width: '120px',
    height: '50px',
    fontFamily: 'Playfair',
    marginTop: '25px',
    marginBottom: '25px',
    marginLeft: '25px',
    background: 'linear-gradient(45deg, #0A0908 30%, #22333B 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 2px 6px 4px rgba(29, 26, 66, .5)',
    color: 'white',
  },
  header: {
    fontFamily: 'Playfair',
    color: '#f2f4f3',
    backgroundColor: '#0a0908'
  },
  list: {
    backgroundColor: '#0a0908'
  },
  youtube: {
      height: '140px',
      filter: 'grayscale(40%)'
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
        anchor="right">
        <h3 className={classes.header}>Exhaust Videos for Eargasms!</h3>
        <div className={classes.toolbar} />
        <img className={classes.youtube} src={youtube} />
        <Divider />
        <List className={classes.list}>
          <li><Button className={classes.button} onClick={() => window.open("https://www.youtube.com/results?search_query=240sx+sr20+exhaust")}>SR20DET</button></li>
          <li><Button className={classes.button} onClick={() => window.open("https://www.youtube.com/results?search_query=240sx+jz+exhaust")}>1/2JZ</button></li>   
          <li><Button className={classes.button} onClick={() => window.open("https://www.youtube.com/results?search_query=240sx+ls+exhaust")}>LSx</button></li>
          <li><Button className={classes.button} onClick={() => window.open("https://www.youtube.com/results?search_query=240sx+rb+exhaust")}>RB20/25/26</button></li>
          <li><Button className={classes.button} onClick={() => window.open("https://www.youtube.com/results?search_query=240sx+ka+exhaust")}>KA24DE/T</button></li>
        </List>
      </Drawer>
    </div>
  );
}