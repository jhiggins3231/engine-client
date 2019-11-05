import React, { useState } from 'react';
import './Home.css';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
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
import Grid from '@material-ui/core/Grid';



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
    },
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
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
<Grid spacing={1} container className={classes.root}>
      <Grid container
  direction="row"
  justify="center"
  alignItems="center"
>
<Grid item xs={12}>
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
<Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={jz}
          title="JZ"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            1/2 JZ
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            One of the most desirable swaps into the 240sx. Due to it's great sound and ability to handle massive power.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={props.fetchJZ} size="small" color="primary">
          JZ Wishlist
        </Button>
      </CardActions>
    </Card>
<Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ls}
          title="LSx"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            LSx
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A very desirable swap into the 240sx chassis. The LS line of motors can be found for cheap and are very reliable. They make easy power for the price.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={props.fetchLS} size="small" color="primary">
          LSx Wishlist
        </Button>
      </CardActions>
    </Card>
<Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={rb}
          title="RB"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            RB20/25/26
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            RB's are known for their amazing sounds. Often compared to the JZ motors.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={props.fetchRB} size="small" color="primary">
          RB Wishlist
        </Button>
      </CardActions>
    </Card>
<Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ka}
          title="KA"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            KA24DE/T
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Not always a swap but an easy motor to upgrade if you don't wish to do a complete swap!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={props.fetchKA} size="small" color="primary">
          KA Wishlist
        </Button>
      </CardActions>
    </Card>
</Grid>
</Grid>
</Grid>
</Background>
    );
}
export default Home;