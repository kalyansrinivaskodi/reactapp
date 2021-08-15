import logo from './logo.svg';
import './App.css';
import { Pricing } from './Pricing';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'

import { CartItems } from './CartItems';
function App() {


  return (
    <div className="App">
        {/* <ul>
          <li>Dashboard</li>
          <Dashboard />

          <div className="interface">
            <li>Components</li>
            <li>Utilities</li>
          </div>
          <div className="AddOns">
            <li>Pages</li>
            <li>Charts</li>
            <li>Tables</li>
          </div>

        </ul>
      </div>

      <div className="TopNavBar">
        <input type="text" placeholder="Search for.."></input>
        <icon>bell</icon>
        <icon>mail</icon>
        <button type="button">pic</button>

      </div> */}





      {/* this is the second react app u created */} 
     <CartItems />

      {/* this is the first react app u created*/}
      {/* <Pricing /> */}
    </div>
  );
  }



export default App;
