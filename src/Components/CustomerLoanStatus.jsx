import React, { useState } from 'react';
import './CustomerLoanStatus.css';


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
    <div className="app-container">
      
      <h2 className="app-heading">Track Your Loan Application</h2>
      <form id="loan" className="form-container" onSubmit={handleTrackClick}>
        <input type="text" id="enterLoanId" value={number} onChange={handleInputChange} placeholder="Enter loan ID" required />
        <br />
        <center><button id="trackButton" type="submit">Track</button></center>
      </form>
    </div>
  );
}

export default CustomerLoanStatus;