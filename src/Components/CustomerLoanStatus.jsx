import React, { useState } from 'react';
import './CustomerLoanStatus.css';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';



function CustomerLoanStatus() {
  const [number, setNumber] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (/^\d*$/.test(inputValue)) { // regular expression to only allow digits
      setNumber(inputValue);
    }
  };

  const handleTrackClick = () => {
    alert("Tracking loan status");
    // do something with the entered number, e.g. send it to a server
    console.log(number);
  };

  return (
    <Fragment>
      <div id="navbarbox" className="navbar-container">
        <nav className="main-nav ">
          <div className="menu-link">
            <ul>
              <h1>Bike|Loan</h1>
              <li>
                <Link to="/Customerapplyloan">Apply Loan </Link>
              </li>
              <li>
                <Link to="/Customerloanstatus"> Loan status </Link>
              </li>
              <li>
                <Link to="/Customerprofile"> Profile </Link>
              </li>
              <li>
                <Link to="/login"> Logout </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
  
    <div className="app-container">
      
      <h2 className="app-heading">Track Your Loan Application</h2>
      
      <form id="loan" className="form-container1" onSubmit={handleTrackClick}>
        <center>
        <input type="text" id="enterLoanId" value={number} onChange={handleInputChange} placeholder="Enter loan ID" required />
        </center>
                <br />
        <center><button id="trackButton" type="submit">Track</button></center>
      </form>
    </div>
    </Fragment>
  );
}

export default CustomerLoanStatus;