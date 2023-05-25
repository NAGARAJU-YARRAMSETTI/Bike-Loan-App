
import React, { useEffect, useState } from 'react';
import './CustomerProfile.css'


function CustomerProfile() {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/user/getProfile')
      .then((response) => response.json())
      .then((data) => setCustomer(data))
      .catch((error) => console.error('Error fetching customer profile:', error));
  }, []);

  return (
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
  );
}

export default CustomerProfile;
