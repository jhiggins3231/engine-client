import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
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
    backgroundColor: '#B2B2B2',
    color: '#FFFFFF',
    fontFamily: 'Playfair',
    borderRadius: '5px'
  },
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
        <h2>Exhaust Videos Eargasms!</h2>
        <Divider />
        <List>
          <li><button className={classes.button} onClick={props.fetchSR}>SR20DET</button></li>
          <li><button className={classes.button} onClick={props.fetchJZ}>1/2JZ</button></li>   
          <li><button className={classes.button} onClick={props.fetchLS}>LSx</button></li>
          <li><button className={classes.button} onClick={props.fetchRB}>RB20/25/26</button></li>
          <li><button className={classes.button} onClick={props.fetchKA}>KA24DE/T</button></li>
        </List>
      </Drawer>
    </div>
  );
}