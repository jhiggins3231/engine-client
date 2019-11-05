import React, { useState } from 'react';
import './Home.css';
import ImageGrid from './ImageGrid';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useSpring, animated } from 'react-spring/web.cjs';
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
import Slide from '@material-ui/core/Slide';

import Grid from '@material-ui/core/Grid';






const Background = styled.div`
    padding: (0, 0, 0 , 0);
    background: #FFFFFF
`;

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
      maxWidth: 305,
      maxHeight: 400,
      display: 'inline-block',
      margin: '4px',
      border: '1px solid black'
    },
    media: {
      height: 140,
    },
    root3: {
      flexGrow: 1,
      display: 'inline-block',
      padding: '10px',
      justifyContent: 'center'
    },
    row: {
      display: 'inline-block',
      justifyContent: 'center'
    }
}));

return (
        <Background className="main">
            
<div className={classes.row}>
<Grid spacing={2} container className={classes.root3}>
      <Grid container
  direction="row"
  justify="space-between"
  alignItems="center"
>
<Grid item xs zeroMinWidth>

  <Card className={classes.card} id='sr'>
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
    </Grid>
    </Grid>
    <Grid container
  direction="row"
  justify="space-between"
  alignItems="center"
>
<Grid item xs zeroMinWidth>
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
<ImageGrid />
</Grid>
</div>
</Background>
    );
}
export default Home;