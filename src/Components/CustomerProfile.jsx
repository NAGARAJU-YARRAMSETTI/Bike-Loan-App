
import React, { useEffect, useState } from 'react';
import './CustomerProfile.css'
import { Fragment } from 'react';
import { Link } from 'react-router-dom';


function CustomerProfile() {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/user/getProfile')
      .then((response) => response.json())
      .then((data) => setCustomer(data))
      .catch((error) => console.error('Error fetching customer profile:', error));
  }, []);

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

    <center>
    <div id="box">
    <h1>Profile Information</h1>
    </div>
    <div id="box2">
      <div>
        <label htmlFor="name">Name:</label>
        <span id="name">{customer?.name}</span>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <span id="email">{customer?.email}</span>
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <span id="address">{customer?.address}</span>
      </div>
      <div>
        <label htmlFor="mobileNo">Mobile no:</label>
        <span id="mobileNo">{customer?.name}</span>
      </div>
      <div>
        <label htmlFor="loanId">Loan Id:</label>
        <span id="loanId">{customer?.name}</span>
      </div>
      <div>
        <label htmlFor="monthlyemi">Monthly emi:</label>
        <span id="monthlyemi">{customer?.name}</span>
      </div>
      {/* Add more profile information as needed */}
    </div>
    </center>
    </Fragment>
  );
}

export default CustomerProfile;
