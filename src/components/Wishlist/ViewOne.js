import React from 'react';
import styled from 'styled-components';
import car from '../../MotorAssets/interior.jpg';
import Navbar from '../Navbar/Navbar';
const Resize = styled.img`
    width: 100vw;
    height: auto;
    display: block;
    margin: 0 auto;
`;

const Background = styled.div`
    background-color: #FFFFFF;
`;

const ViewOne = (props) => {
    return(
        <Background>
            <Navbar />
            <Resize src={car} />       
        </Background>
    )
}

export default ViewOne;

