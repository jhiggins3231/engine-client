import React from 'react';
import './Logout.css';
// import Icon from '@material-ui/icons';




const Logout = (props) => {
    return (
        <div
        onClick= {() => props.setSession(undefined)} id="logout" className="logout"
        />
    )
}


export default Logout;