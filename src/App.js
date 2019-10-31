import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Items from './components/Wishlist/Items';
// import { BrowserRouter as Router, } from 'react-router-dom';
// import Home from './components/Wishlist/Home';
// import ViewThree from './components/Wishlist/ViewThree'


function App() {

const [sessionToken, setSessionToken] = useState(undefined);

const viewConductor = () => {
  return sessionToken !== undefined ? <Items token={sessionToken} /> : <Auth setSession={setSessionToken} />
}
// create an auth component for both login/signup
  return (
    <div className="App">
     <Navbar setSession={setSessionToken} />
     {viewConductor()}
    </div>
  );
} 

export default App;
