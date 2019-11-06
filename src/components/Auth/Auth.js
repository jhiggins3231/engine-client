import React, {useState} from 'react';
import './Auth.css';
import styled from 'styled-components';
import ViewOne from '../Wishlist/ViewOne';
import { makeStyles } from '@material-ui/core/styles';
import APIURL from '../../helpers/environment';
const Signtext = styled.div`
    text-align: center;
    font-family: Abril;
    padding: 5px;
    color: #F2F4F3;
    font-weight: 500;
    `;
const useStyles = makeStyles(theme => ({
        container: {
            display: 'flex',
            position: 'absolute',
            borderRadius: '(50%, 0, 50%, 0)',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            flexWrap: 'wrap',
            margin: '0 auto',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'  
        }, 
        input: {
            margin: theme.spacing(1),
            fontFamily: 'Abril',
            color: '#F2F4F3',
            background: 'rgba(0, 0, 0, 0.8)',
            border: '2px solid #22333b',
            borderRadius: '5px',
            height: '30px',
            marginLeft: '50px',
            marginRight: '50px'
        },
        button: {
            backgroundColor: '#22333b',
            color: "#F2F4F3",
            width: '120px',
            height: '25px',
            margin: theme.spacing(1), 
            left: '35%',
            top: '50%',
            borderRadius: '5px',
        },
        credential: {
            fontSize: '18px',
            fontFamily: 'Abril',
            letterSpacing: .8,
        }
}));


const Auth = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');

const title = () => {
    return login ? 'Login' : 'Signup'; //check state of login to see if it is true. displays login/signup depending on state of activity
}

const loginToggle = (event) => {
    event.preventDefault();
    setLogin(!login);//toggles between login/signup button states
    // setUsername('');
    setPassword('');
    setUsername('');
}

const signupFields = () => !login ?
    (
        <div>
            <label className={classes.credential} htmlFor='email'>Email:</label>
            <br/>
            <input type='text' className={classes.input} value={email} onChange={ (e) => setEmail(e.target.value)}/>
        </div>
    ) : null;

const handleSubmit = (e) => {
    e.preventDefault();
    const url = login ? `${APIURL}/auth/signin` : `${APIURL}/auth/signup`
    const bodyObj = login ? {
        username: username,
        password: password
    } : {
        username: username,
        email: email,
        password: password
    }
    console.log( bodyObj )
fetch (url, {
    method: 'POST',
    body: JSON.stringify(bodyObj),
    headers: {
        'Content-Type': 'application/json'
    }
    })
    .then(res => res.json())
    .then(json => props.setSession(json.sessionToken))
}

const classes = useStyles();


return(
        <div>
            <ViewOne />
            <form className={classes.container} onSubmit={handleSubmit}>
                <Signtext>
                <h1>{title()}</h1>
                {signupFields()}
                <label className={classes.credential} htmlFor='username'>Username:</label>
                <br/>
                <input type='text' className={classes.input} value={username} onChange={(e) => setUsername(e.target.value)}/>
                <br/>
                <label className={classes.credential} htmlFor='password'>Password:</label>
                <br/>
                <input type='password' className={classes.input} value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                <button className={classes.button} type='submit'>Submit</button>
                <br/>
                <button className={classes.button} onClick={loginToggle}>Login/Sign Up</button>
                </Signtext>
            </form>
        </div>
    )
}


export default Auth;