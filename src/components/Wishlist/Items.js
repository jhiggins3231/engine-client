import React, { useState, useEffect } from 'react';
import './Items.css';
// import Wishlist from './wishlist/wishlist';
import ViewTwo from './ViewTwo';
import Home from './Home';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
//Table components
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import APIURL from '../../helpers/environment';


//TABLES STYLES
const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: '#b2b2b2',
      color: "#ffffff",
      fontSize: 18
    },
    body: {
      fontSize: 16,
      fontWeight: 400,
      
    },
  }))(TableCell);
  
const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: "#736f72",
        },
        '&:nth-of-type(even)': {
            backgroundColor: "#FFFFFF",
        },
    },
}))(TableRow);
    
const useStyles = makeStyles(theme => ({
    root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    },
    table: {
    minWidth: 700,
    },
    }));

const Background = styled.div`
    padding: (0, 0, 0 , 0);
    background: #FFFFFF
`;

const Wishlists = (props) => {
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [quantity, setQuantity] = useState('');
    const [motorName, setMotorName] = useState('');
    const [id, setItemId] = useState('');
    const [wishlist, setWishlist] = useState([]);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [checked, setChecked] = useState();
    const [open, setOpen] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [transition, setTransition] = useState(undefined);
    const [transition2, setTransition2] = useState(undefined);
    const [transition3, setTransition3] = useState(undefined);

    function TransitionRight(props) {
        return <Slide {...props} direction="right" />;
      }

    const handleClick = Transition => () => {
        setTransition(() => Transition);
        setOpen(true);
      };
    const handleClick2 = Transition2 => () => {
        setTransition2(() => Transition2);
        setOpen6(true);
      };
    const handleClick3 = Transition3 => () => {
        setTransition3(() => Transition3);
        setOpen7(true);
      };
      const handleClose1 = () => {
        setOpen(false);
      };
      const handleClose2 = () => {
        setOpen6(false);
      };
      const handleClose3 = () => {
        setOpen7(false);
      };

    const handleOpen1 = () => {
      setOpen1(true);
    };
    const handleOpen2 = () => {
      setOpen2(true);
    };
    const handleOpen3 = () => {
      setOpen3(true);
    };
    const handleOpen4 = () => {
      setOpen4(true);
    };
    const handleOpen5 = () => {
      setOpen5(true);
    };
  
    const handleClose = () => {
        setOpen1(false);
        setOpen2(false);
        setOpen3(false);
        setOpen4(false);
        setOpen5(false);
    };
    const handleChange = () => {
        setChecked(true);
      };
    const timer = setTimeout(() => {
        setOpen1(false);
        setOpen2(false);
        setOpen3(false);
        setOpen4(false);
        setOpen5(false);
    }, 2000);

    // GET
    useEffect(() => {
        fetch(`${APIURL}/wishlist`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        })
        .then(res => res.json())
        .then(json => setWishlist(json))
        .then(handleChange)
        .catch(err => console.log(err))
    }, [])

const fetchWishlist = () => {
    fetch(`${APIURL}/wishlist`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        })
        .then(res => res.json())
        .then(json => setWishlist(json))
        .catch(err => console.log(err))
}
const fetchSR = () => {
    fetch(`${APIURL}/wishlist/sr20`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        })
        .then(res => res.json())
        .then(json => setWishlist(json))
        .then(handleOpen1)
        .then(timer)
        .then(handleChange)
        .catch(err => console.log(err))
}
const fetchJZ = () => {
    fetch(`${APIURL}/wishlist/JZ`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        })
        .then(res => res.json())
        .then(json => setWishlist(json))
        .then(handleOpen2)
        .then(timer)
        .then(handleChange)
        .catch(err => console.log(err))
}
const fetchLS = () => {
    fetch(`${APIURL}/wishlist/LS`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        })
        .then(res => res.json())
        .then(json => setWishlist(json))
        .then(handleOpen3)
        .then(timer)
        .then(handleChange)
        .catch(err => console.log(err))
}
const fetchRB = () => {
    fetch(`${APIURL}/wishlist/RB`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        })
        .then(res => res.json())
        .then(json => setWishlist(json))
        .then(handleOpen4)
        .then(timer)
        .then(handleChange)
        .catch(err => console.log(err))
}
const fetchKA = () => {
    fetch(`${APIURL}/wishlist/KA`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        })
        .then(res => res.json())
        .then(json => setWishlist(json))
        .then(handleOpen5)
        .then(timer)
        .then(handleChange)
        .catch(err => console.log(err))
}

    const postWishlist = (e) => {
        e.preventDefault();
        const wishlistObj = {
            itemName: itemName,
            quantity: quantity,
            price: price,
            location: location,
            motorName: motorName,
            id: id
        }

        fetch(`${APIURL}/wishlist`, {
            method: 'POST',
            body: JSON.stringify(wishlistObj),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        })
        .then(res => res.json())
        .then(json => setWishlist([...wishlist, json]))
        .then(
            setItemName(''),
            setQuantity(''),
            setPrice(''),
            setLocation(''),
            setMotorName(''),
            setItemId('')
        )
        .then(handleClick(TransitionRight))
        .catch(err => console.log(err))
    }
    

    const deleteWishlist = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/wishlist/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        })
        
        .then(res => res.json())
        .then(json => setWishlist(wishlist, json))
        .then(
            setItemName(''),
            setQuantity(''),
            setPrice(''),
            setLocation(''),
            setMotorName(''),
            setItemId('')
        )
        .then(handleClick3(TransitionRight))
        .then (fetchWishlist())
        .catch(err => console.log(err))
    }
    
    const updateWishlist = () => {
        const updateWishlist= {
            itemName: itemName,
            quantity: quantity,
            price: price,
            location: location,
            motorName: motorName,
            id: id
         }
        fetch(`${APIURL}/wishlist/${id}`, {
            method: 'PUT',
            body: JSON.stringify(updateWishlist),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }    
        })
        .then(res => res.json())
        .then(json => setWishlist([...wishlist, json]))
        .then(
            setItemName(''),
            setQuantity(''),
            setPrice(''),
            setLocation(''),
            setMotorName(''),
            setItemId('')
        )
        .then(handleClick2(TransitionRight))
        .then (fetchWishlist())
        .catch(err => console.log(err))
    }

    const classes = useStyles(); 

    return (
     
        <Background className='table'>
            <div className='ViewTwo'>
            <Home getWishlist={fetchWishlist} fetchSR={fetchSR} fetchKA={fetchKA} fetchRB={fetchRB} fetchLS={fetchLS} fetchJZ={fetchJZ} handleClose={handleClose} open1={open1} open2={open2} open3={open3} open4={open4} open5={open5} />
            <ViewTwo open={open} open6={open6} open7={open7} transition={transition} transition2={transition2} transition3={transition3} handleClose1={handleClose1} handleClose2={handleClose2} handleClose3={handleClose3} handleClick={handleClick} post={postWishlist} delete={deleteWishlist} update={updateWishlist} itemName={itemName} name={setItemName} quantityName={quantity} quantity={setQuantity} price={setPrice} priceName={price} location={setLocation} locationName={location} motor={setMotorName} motorName={motorName} id={id} itemId={setItemId}  />
            </div>
            <div className="Home">
            </div>
            <Slide direction="up" in={checked}>
            <Paper className={classes.root}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead className={classes.body}>
                        <TableRow>
                            <StyledTableCell align="left">Item Name</StyledTableCell>
                            <StyledTableCell align="left">Where to buy</StyledTableCell>
                            <StyledTableCell align="left">Item Quantity</StyledTableCell>
                            <StyledTableCell align="left">Item Price</StyledTableCell>
                            <StyledTableCell align="left">Motor Name</StyledTableCell>
                            <StyledTableCell align="left">Item ID</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                {wishlist.map(row => (
                    <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                            {row.itemName}
                        </StyledTableCell>
                        {/* <StyledTableCell align='center'>{row.itemName}</StyledTableCell> */}
                        <StyledTableCell align="left">{row.location}</StyledTableCell>
                        <StyledTableCell align="left">{row.quantity}</StyledTableCell>
                        <StyledTableCell align="left">{row.price}</StyledTableCell>
                        <StyledTableCell align="left">{row.motorName}</StyledTableCell>
                        <StyledTableCell align="left">{row.id}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
                </Table>
            </Paper>
            </Slide>
            {/* // <table className="Table">
            //     <tbody>
            //     {WishlistRows()}
            //     </tbody>
            // </table> */}
            
        </Background>
    )
}

export default Wishlists;