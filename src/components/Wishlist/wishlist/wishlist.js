import React from 'react';
import './wishlist.css';

const Wishlist = (props) => {
    return (
        <tr>
            <td>{props.testData.itemName}</td> 
            <td>{props.testData.location}</td>
            <td>{props.testData.quantity}</td>
            <td>{props.testData.price}</td>
            <td>{props.testData.motorName}</td>
            <td>{props.testData.id}</td>
        </tr>
    )
}



export default Wishlist;