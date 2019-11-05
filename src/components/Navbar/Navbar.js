import React from 'react';
import './Navbar.css';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import StoreIcon from '@material-ui/icons/Store';
import styled from 'styled-components';

const Icon = styled.div`
  display: block;
  position: absolute;
  left: 95%;
  top: 50%;
  transform: translate(-10%, -50%)
`;
const Store = styled.div`
  border-radius: 50%;
  display: block;
  position: absolute;
  left: 90%;
  top: 50%;
  transform: translate(-10%, -50%)
`;

const Nav = styled.div`
  background-color: #9a8f97;
  height: 75px;
  font-size: 28px;
`;
const Intro = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: Bangers;
`;

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = (props) => {
  return(
    <React.Fragment>
    <CssBaseline />
    <HideOnScroll {...props}>
      <AppBar>
          <Toolbar>
          <Typography variant="title">
            <Intro><h1>
            240sx Engine Wishlist Tracker
            </h1>
            </Intro>
            </Typography>
            <Store>
            <StoreIcon icon={<StoreIcon />} onClick={() => window.open("https://www.enjukuracing.com")}></StoreIcon></Store>
            <Icon>
            <ExitToAppIcon icon={<ExitToAppIcon />}  onClick= {() => props.setSession(undefined)}></ExitToAppIcon></Icon>
            </Toolbar>
      </AppBar>
      </HideOnScroll>
      </React.Fragment>
  )
}

export default Navbar;