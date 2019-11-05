import React, { useState } from 'react';
import './Home.css';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
import sr from '../../MotorAssets/sr20.jpg';
import jz from '../../MotorAssets/2jz.jpg';
import rb from '../../MotorAssets/rb.jpg';
import ls from '../../MotorAssets/ls.jpg';
import ka from '../../MotorAssets/ka.jpg';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) {
          onEnter();
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited();
        }
      },
    });
    return (
      <animated.div ref={ref} style={style} {...other}>
        {children}
      </animated.div>
    );
  });

const Para = styled.p`
    text-align: center;
    font-family: Varela;
    font-size: 1em;
    font-weight: 500;
    justify-content: center;
    width: 460px;
    margin-left: 50%;
    transform: translate(-50%)
`;
const Background = styled.div`
    padding: (0, 0, 0 , 0);
    background: #FFFFFF
`;

const Motors = styled.div`
    position: relative;
    width: 800px;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
    `;


const useStyles = makeStyles(theme => ({
    button: {
      width: '100px',
      margin: theme.spacing(2),
      backgroundColor: '#B2B2B2',
      color: '#FFFFFF',
      fontFamily: 'Playfair',
    },
    input: {
      display: 'none',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        color: '#52d1dc',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        backgroundColor: '#FFFFFF',
    },
    appBar: {
          position: 'relative',
          width: '500px',
          backgroundColor: '#FFFFFF',
        //   border: '1px solid black',
    },
    title: {
          color: '#b2b2b2',
          marginLeft: theme.spacing(2),
          flex: 1,
          width: '100%',
          fontFamily: 'Playfair'
          
    },
    root: {
        width: '500px',
    },
    heading: {
        fontSize: '18px',
        fontWeight: theme.typography.fontWeightRegular,
        backgroundColor: '#2b2b2b2',
        fontFamily: 'Playfair'
    },
    details: {
        backgroundColor: '#b2b2b2',
        fontFamily: 'Playfair'
    },
    panel: {
        backgroundColor: '#b2b2b2',
    },
    introButton: {
        justifyContent: 'center',
        width: '100px',
        height: '50px',
        backgroundColor: '#52d1dc',
        color: '#FFFFFF',
        left: '42%',
        top: '50%',
        // transform: 'translate(0%, -50%)'
    },
    root1: {
        position: 'relative',
        width: '100%',
        padding: '75px',
      },
    close: {
      backgroundColor: '#b2b2b2',
      borderRadius: '50%'
    },
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });


const Home = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState('false');
    
    

const handleClickOpen = () => {
    setOpen(true);
};
const handleClickClose = () => {
    setOpen(false);
};


    return (
        <Background className="main">
            <div className={classes.root1}>
            <Button variant='outlined' onClick={handleClickOpen} className={classes.introButton}>
                Welcome!
            </Button>
            <Dialog fullscreen open={open} onClose={handleClickClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClickClose} aria-label="close">
                            <CloseIcon className={classes.close}/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Helpful Notes
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className={classes.root}>
                <ExpansionPanel className={classes.panel}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panl1a-content'
                        id='panel1a-header'>
                            <Typography className={classes.heading}>Intoduction</Typography>
                        </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className={classes.details}>
                        <Para>This app is intended to be a helpful tool to track and price out items you'd like to buy. Instead of having a singular store website wishlist. Here you can add different items from different web stores and track the total cost of your build. With this app you're also able to build and view different wishlist based on 5 common 240sx motor swaps. Those swaps include SR20, KA24, LSx, RB20/25/26, and 1/2JZ. </Para>
                        </Typography>
                    </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <Divider />
                    <ExpansionPanel className={classes.panel}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panl2a-content'
                        id='panel2a-header'>
                            <Typography className={classes.heading}>Helpful Notes</Typography>
                        </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className={classes.details}>
                        <Para>
                    <li>Currently this feature does not distinguish between motor variants. I.E. 1JZ or 2JZ. If you'd like to distinguish between variants you may insert the specific motor name in the Item name field. </li>
                    <li>You have the ability to create, update, and delete items from your wishlist. In order to delete or update an item just grab the Item ID and enter it into the Item ID field.</li>
                    <li>Each button is intended to take you to different engine wishlist as well as show you an image of the selected motor.  Allowing you to have an image for inspiration and to create multiple wishlist.</li>
                    <li>Item ID is not needed unless you are updating or deleting an item in the table.</li>
                        </Para>
                        </Typography>
                    </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel disabled>
                    <ExpansionPanelSummary
                        aria-controls='panl3a-content'
                        id='panel3a-header'>
                            <Typography>Thanks For Visiting!</Typography>
                        </ExpansionPanelSummary>
                        </ExpansionPanel>
                    </div>
            </Dialog>
            </div>
            <div className="mainDiv">
        <Motors className="Buttons">

        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={sr}
          title="SR20DET"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            SR20DET
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            One of the most common and affordable swaps into the Nissan 240sx.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={props.fetchSR} size="small" color="primary">
          SR20
        </Button>
      </CardActions>
    </Card>


{/* <Button id="sr" onClick={props.fetchSR} variant="contained" className={classes.button} >SR20        
</Button>
            <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={props.open1}
        onClose={props.handleClose}
        
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open1}>
          <div className={classes.paper}>
            <h2 id="spring-modal-title">SR20 Inspiration</h2>
            <p id="spring-modal-description"><img src={sr} alt="sr20"></img> </p>
          </div>
        </Fade>
      </Modal> */}
<Button id="jz" onClick={props.fetchJZ} variant="contained" className={classes.button}>JZ
</Button>
            <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={props.open2}
        onClose={props.handleClose}
        checked={props.checked}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open2}>
          <div className={classes.paper}>
            <h2 id="spring-modal-title">JZ Inspiration</h2>
            <p id="spring-modal-description"><img src={jz} alt="jz"></img> </p>
          </div>
        </Fade>
      </Modal>
<Button id="Lsx" onClick={props.fetchLS} variant="contained" className={classes.button}>LSx
</Button>
            <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        onClickAway={props.handleClickAway}
        className={classes.modal}
        open={props.open3}
        onClose={props.handleClose}
        checked={props.checked}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open3}>
          <div className={classes.paper}>
            <h2 id="spring-modal-title">American Muscle Inspiration</h2>
            <p id="spring-modal-description"><img src={ls} alt="ls"></img> </p>
          </div>
        </Fade>
      </Modal>
<Button id="rb" onClick={props.fetchRB} variant="contained" className={classes.button}>RB
</Button>
            <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={props.open4}
        onClose={props.handleClose}
        checked={props.checked}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open4}>
          <div className={classes.paper}>
            <h2 id="spring-modal-title">RB Inspiration</h2>
            <p id="spring-modal-description"><img src={rb} alt="rb"></img> </p>
          </div>
        </Fade>
      </Modal>
<Button id="ka" onClick={props.fetchKA} variant="contained" className={classes.button}>KA</Button>
<Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={props.open5}
        onClose={props.handleClose}
        checked={props.checked}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open5}>
          <div className={classes.paper}>
            <h2 id="spring-modal-title">KA-T Inspiration</h2>
            <p id="spring-modal-description"><img src={ka} alt="ka"></img> </p>
          </div>
        </Fade>
      </Modal>
<Button id="all" onClick={props.getWishlist} variant="contained" className={classes.button}>List All</Button>
        </Motors>
    </div> 
</Background>
    );

}
export default Home;