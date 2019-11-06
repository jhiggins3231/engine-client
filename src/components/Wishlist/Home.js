import React, {useState} from 'react';
import './Home.css';
import ImageGrid from './ImageGrid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import main from '../../MotorAssets/mainPage1.jpg';
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
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import nissan from '../../MotorAssets/nissan.png'





const useStyles = makeStyles(theme => ({
    button: {
      width: '100px',
      backgroundColor: '#B2B2B2',
      color: '#FFFFFF',
      fontFamily: 'Playfair',
    },
    input: {
      display: 'none',
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
    card: {
        maxWidth: 305,
        border: '1px solid black'
    },
    media: {
        height: 140,
    },
    root: {
      flexGrow: 1,
      margin: '10px'
    },
    nis: {
      width: 250,
      height: 175,
      alignItems: 'center'
    }
}));



const Home = (props) => {
    const classes = useStyles();
      




    return (
      <div className={classes.root}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Grid container spacing={3}>
    <Grid item xs={4}>
      <ImageGrid />
      <img src={nissan} className={classes.nis} />
      </Grid>
      <Grid item xs={2}>
      <Card className={classes.card} id='sr'>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={sr}
          title="SR"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            SR20DET
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Here is the list of items you've added for the SR20.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.button} onClick={props.fetchSR} size="small" color="primary">
          Wishlist
        </Button>
      </CardActions>
    </Card>
<Card className={classes.card} id='jz'>
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
          Here is the list of items you've added for the 1/2JZ.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.button} onClick={props.fetchJZ} size="small" color="primary">
          Wishlist
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={2}>
<Card className={classes.card} id='ls'>
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
          Here is the list of items you've added for the LSx.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={props.fetchLS} className={classes.button} size="small" color="primary">
          Wishlist
        </Button>
      </CardActions>
    </Card>
<Card className={classes.card} id='rb'>
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
          Here is the list of items you've added for the RB20/25/26.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={props.fetchRB} className={classes.button} size="small" color="primary">
          Wishlist
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={2}>
<Card className={classes.card} id='ka'>
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
          Here is the list of items you've added for the KA24.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={props.fetchKA} className={classes.button} size="small" color="primary">
          Wishlist
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.card} id='ka'>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={main}
          title="All"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            All Items
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A list of all items across each of your wishlist.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={props.getWishlist} className={classes.button} size="small" color="primary">
          List All
        </Button>
      </CardActions>
    </Card>
    </Grid>
</Grid>
</div>
    );
}
export default Home;