import React, { Fragment, useState } from 'react';
import './CustomerApplyLoan.css';
//import Customerloanstatus from './Customerloanstatus/Customerloanstatus';
//import Logout from'./Logout';
import { Link } from 'react-router-dom';


function CustomerApplyLoan() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [pan, setPan] = useState('');
  const [salary, setSalary] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanrepaymentMonths, setRepaymentMonths] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    const mobilePattern = /^[6-9]\d{9}$/;
    if (!mobilePattern.test(mobile)) {
      alert('Please enter a valid mobile number');
      return;
    }
    const aadharPattern = /^\d{12}$/;
    if (!aadharPattern.test(aadhar)) {
      alert('Please enter a valid Aadhar number');
      return;
    }
    const panPattern = /^[A-Za-z0-9]{10}$/;
    if (!panPattern.test(pan)) {
    alert('Please enter a valid PAN number');
    return;
    }

    // handle form submission logic here
  };
  

  const handleAadharChange = (event) => {
    const value = event.target.value;
    if (value.match(/^\d{0,12}$/)) {
      setAadhar(value);
    }
  };
  return(
    <Fragment>
    <div id="navbarbox" className="navbar-container">
            <nav className="main-nav ">
                <div className="menu-link">
                    <ul>
                    <h1>Bike|Loan</h1>
                        <li>
                            <Link to = "/Customerapplyloan">Apply Loan </Link>
                        </li>
                        <li>
                            <Link to = "/Customerloanstatus"> Loan status </Link>
                        </li>
                        <li >
                            <Link to = "/Customerprofile"> Profile </Link>
                            </li>
                        <li>
                            <Link to = "/login"> Logout </Link>
                        </li>  
                    </ul> 
                </div>
            </nav>
    </div>
    <div id="box5">
        <center>
        <h1>Apply for Loans</h1>
        <div id="box4">
      <form onSubmit={handleSubmit}> 
      
          <input
            type="text"
            id="enterName"
            placeholder="Enter Applicant Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        
        <br />
          <input
            type="email"
            id="enterEmail"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

        <br />
          <input
            type="tel"
            id="enterMobile"
            placeholder="Enter mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        
        <br />
          
          <input
            type="text"
            id="enterAddress"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <br />
          
          <input
            type="text"
            id="enterAadharNo"
            placeholder="Enter Aadhar number"
            value={aadhar}
            onChange={(e) => setAadhar(e.target.value)}
            required
          />
        
        <br />
      
          <input
            type="text"
            id="enterPanNo"
            placeholder="Enter PAN number"
            value={pan}
            onChange={(e) => setPan(e.target.value)}
            required
          />
        <br />
      
          <input
            type="number"
            id="enterSalary"
            placeholder="Enter monthly salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
          />
        
        <br />
        
          <input
            type="number"
            id="enterAmount"
            placeholder="Enter loan amount required"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            required
          />
        
        <br />
        
          <input
            type="number"
            id="enterMonths"
            placeholder="Enter loan repayment months"
            value={loanrepaymentMonths}
            onChange={(e) => setRepaymentMonths(e.target.value)}
            required
          />
        
        <br />
        <br />
        <button type="submit">Next</button>
        
      </form>
      </div>
      </center>
    </div>
    </Fragment>
  );
};

export default CustomerApplyLoan;