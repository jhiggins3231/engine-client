import React from 'react';
import './ViewTwo.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';
import Snackbar from '@material-ui/core/Snackbar';


const motorOptions = [
  {
    value: 'Motor Option'
  },
  {
    value: 'sr20'
  },
  {
    value: 'KA'
  },
  {
    value: 'RB'
  },
  {
    value: 'JZ'
  },
  {
    value: 'LS'
  },
];

const Selector = styled.div`
  width: 200px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-60%, 0%);
`;



const useStyles2 = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 190,
    border:'2px solid #52d1dc',
    borderRadius: '5px'
  },
  menu: {
    width: 200,
    border:'2px solid #52d1dc',
  },
}));


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: '125px',
        left: '50%',
        top: '50%',
        transform: 'translate(-5%, 0%)'
        
    },
    input: {
        margin: theme.spacing(1),
        color: '#F2F4F3',
        background: '#22333b',
        border: '3px solid #a9927d',
        borderRadius: '5px',
        height: '50px',
        marginLeft: '50px',
        marginRight: '50px'
    },
    input2: {
      margin: theme.spacing(1),
      border: '3px solid #a9927d',
      color: '#22333B',
      borderRadius: '5px',
      height: '50px',
      marginLeft: '50px',
      marginRight: '50px'
    },
    button: {
        backgroundColor: '#22333b',
        margin: theme.spacing(1),
        left: '35%',
        top: '50%',   
    },
    motorSelect: {
      border: '3px solid #A9927D',
    }
}));

export default function Inputs(props) {
    const classes = useStyles();
    const classes2 = useStyles2();

    return (
        <div className="mainDiv">
        <form className='inputs'>
            <div className={classes.container}>
      <Input id='partName' className={classes.input}
        placeholder="Part name"
        type='text' value={props.itemName} onChange={ (e) => props.name(e.target.value)}
        inputProps={{
          'aria-label': 'description',
        }}
      />
      <Input id='where' className={classes.input2}
        placeholder="Where to buy"
        type='text' value={props.locationName} onChange={ (e) => props.location(e.target.value)}
        inputProps={{
          'aria-label': 'description',
        }}
      />
      <Input id='price' className={classes.input}
        placeholder="Price"
        type='text' value={props.priceName} onChange={ (e) => props.price(e.target.value)}
        inputProps={{
          'aria-label': 'description',
        }}
      />
      <Input id='quantity' className={classes.input2}
        placeholder="Quantity"
        type='text' value={props.quantityName} onChange={ (e) => props.quantity(e.target.value)}
        inputProps={{
          'aria-label': 'description',
        }}
      />
      
      <Input id='owner' className={classes.input}
        placeholder="Item ID to Update/Delete"
        type='text' value={props.id} onChange={ (e) => props.itemId(e.target.value)}
        inputProps={{
          'aria-label': 'description',
        }}
        ></Input>
        <br/>
        <br />
        <br />
        </div>
        <Selector className={classes.motorSelect}>
        <TextField
            id="outlined-select-motor"
            select
            // label="Motor Options"
            className={classes2.textField}
            value={props.motorName} onChange={ (e) => props.motor(e.target.value)}
            SelectProps={{
              native: true,
              MenuProps: {
                className: classes2.menu,
              },
            }}
            // helperText="Please select your motor"
            margin="normal"
            variant="outlined"
          > 
            {motorOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
            </TextField>
            </Selector>
          </form>
      <div className='buttons'>
          <Button onClick={props.post}
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<SaveIcon />}
          >
            Add Item
      </Button>
      <Snackbar
        open={props.open}
        onClose={props.handleClose1}
        TransitionComponent={props.transition}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Your part has been added!</span>}
      />
      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
      <Button onClick={props.update}
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Update Item
      </Button>
      <Snackbar
        open={props.open6}
        onClose={props.handleClose2}
        TransitionComponent={props.transition2}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Your part has been updated!</span>}
      />
      <Button onClick={props.delete}
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Delete Item
      </Button>
      <Snackbar
        open={props.open7}
        onClose={props.handleClose3}
        TransitionComponent={props.transition3}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Your part has been deleted!</span>}
      />
    </div>
    </div>
  );
}



