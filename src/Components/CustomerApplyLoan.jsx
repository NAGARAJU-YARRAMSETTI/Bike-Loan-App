import React, { Fragment, useState } from "react";
import "./CustomerApplyLoan.css";
//import Customerloanstatus from './Customerloanstatus/Customerloanstatus';
//import Logout from'./Logout';
import { Link } from "react-router-dom";
import axios , {post} from 'axios';

function CustomerApplyLoan() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [pan, setPan] = useState("");
  const [salary, setSalary] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanrepaymentMonths, setRepaymentMonths] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const mobilePattern = /^[6-9]\d{9}$/;
    if (!mobilePattern.test(mobile)) {
      alert("Please enter a valid mobile number");
      return;
    }
    const aadharPattern = /^\d{12}$/;
    if (!aadharPattern.test(aadhar)) {
      alert("Please enter a valid Aadhar number");
      return;
    }
    const panPattern = /^[A-Za-z0-9]{10}$/;
    if (!panPattern.test(pan)) {
      alert("Please enter a valid PAN number");
      return;
    }

    // handle form submission logic here
  };

  const handlepage1 = (e) => {
    document.querySelector("#box5").classList.remove("pages2");
    document.querySelector("#box5").classList.add("pages3");
    document.querySelector("#page2").classList.add("pages2");
  };
  const handlepage2 = (e) => {
    document.querySelector("#box5").classList.remove("pages3");
    document.querySelector("#box5").classList.add("pages2");
    document.querySelector("#page2").classList.remove("pages2");
  };
  const handleAadharChange = (event) => {
    const value = event.target.value;
    if (value.match(/^\d{0,12}$/)) {
      setAadhar(value);
    }
  };
   const onchange = (e) =>
  {
    let files=e.target.files;
    let reader= new FileReader();
    reader.readAsDataURL(files[0]);
     reader.onload=(e)=>{
      console.warn("img data ",e.target.result)

      const url="";
      const formData={file:e.target.result}
      return axios.post(url,formData)
      .then(response=>console.warn("result",response))
     }
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
      <div>
         <center>
           <h1>Apply for Loans</h1>
          </center>
          <center>
            <div id="box4">
            <form id="box6" onSubmit={handleSubmit}>
            
              <div id="box5" class="pages3">
                
                <input
                  type="text"
                  id="enterName"
                  placeholder="Enter Applicant Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <input
                  type="email"
                  id="enterEmail"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <input
                  type="tel"
                  id="enterMobile"
                  placeholder="Enter mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />

                <input
                  type="text"
                  id="enterAddress"
                  placeholder="Enter Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />

                <input
                  type="text"
                  id="enterAadharNo"
                  placeholder="Enter Aadhar number"
                  value={aadhar}
                  onChange={(e) => setAadhar(e.target.value)}
                  required
                />

                <input
                  type="text"
                  id="enterPanNo"
                  placeholder="Enter PAN number"
                  value={pan}
                  onChange={(e) => setPan(e.target.value)}
                  required
                />

                <input
                  type="number"
                  id="enterSalary"
                  placeholder="Enter monthly salary"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  required
                />

                <input
                  type="number"
                  id="enterAmount"
                  placeholder="Enter loan amount required"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  required
                />

                <input
                  type="number"
                  id="enterMonths"
                  placeholder="Enter loan repayment months"
                  value={loanrepaymentMonths}
                  onChange={(e) => setRepaymentMonths(e.target.value)}
                  required
                />
              </div>
              </form>
            </div>
          </center>
            
             
              <div class="pages2 secondpage"  id="page2">
                <label id="selectDocumentType">
                  Upload documents(Mandatory*)
                </label>
                
                <select name="cars" id="cars">
                  <option >Please pick a type</option>
                  <option value="Aadhar">Aadhar</option>
                  <option value="Pan">Pan</option>
                  <option value="Voter id">Voter id</option>
                  <option value="Driving">Driving licence</option>
                </select>
                
                <br />
                <label id="chooseFile">
                  Images or Documents(Upload below 2mb)
                </label>
                <input
                  type="file"
                  name="file"
                  id="chooseFile"
                  onChange={(e) => this.onChange(e)}
                />
                <br />
                <button id="uploadDocumentsButton" type="submit">
                  Upload Documents
                </button>
                &nbsp; &nbsp;
                
                <button id="applyLoanButton" type="submit">
                  Apply for loan
                </button>
                
              </div>
              <center/>
              <center>
              <button id="pagechange1" onClick={(e) => handlepage1(e)}>
                1
              </button>
              <button id="pagechange2" onClick={(e) => handlepage2(e)}>
                2
              </button>
              </center>
            
          </div>
      
    </Fragment>
  );
}

export default CustomerApplyLoan;
