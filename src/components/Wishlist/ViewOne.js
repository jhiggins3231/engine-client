import React from 'react';
import styled from 'styled-components';
import car from '../../MotorAssets/interior.jpg';
// import Navbar from '../Navbar/Navbar';
const Resize = styled.img`
    width: 100vw;
    height: 100vh;
    height: auto;
    display: block;
    margin: 0 auto;
    position: absolute;
    background-size: cover;
    position: fixed;
    top: 0;
`;

const Background = styled.div`
    background-color: #FFFFFF;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
`;

const ViewOne = (props) => {
    return(
        <Background>
            <Resize src={car} />       
        </Background>
    )
}

export default ViewOne;

