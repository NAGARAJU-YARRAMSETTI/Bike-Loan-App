import React, { Fragment, useState } from "react";
import "./CustomerApplyLoan.css";
import { Link } from "react-router-dom";
import axios  from 'axios';

function CustomerApplyLoan() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [pan, setPan] = useState("");
  const [salary, setSalary] = useState("");
  const [loanAmountRequired, setLoanAmount] = useState("");
  const [loanrepaymentMonths, setRepaymentMonths] = useState("");
  const[file,setFile] = useState();
  const[formdata,setFormData]=useState({
    loantype:"BikeLoan",
    applicantName : name,
    applicantAddress: address,
    applicantMobile:mobile,
    applicantEmail:email,
    applicantAadhaar:aadhar,
    applicantPan:pan,
    applicantSalary:salary,
    loanAmountRequired:loanAmountRequired,
    loanRepaymentMonths:loanrepaymentMonths
  });

  

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
  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
    event.target.value=value;
    setFormData({...formdata,
      applicantName:value})
  };
  const handleAadharChange = (event) => {
    const value = event.target.value;
    setAadhar(value);
    event.target.value=value;
    if(value.match(/^\d{12}$/)){
      setFormData({...formdata,
        applicantAadhaar:value})
    }
    else{
      setFormData({...formdata,
        applicantAadhaar:"wrong data"});
    }
  };
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    event.target.value=value;
    if(value.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)){
      setFormData({...formdata,
        applicantEmail:value})
    }
    else{
      setFormData({...formdata,
        applicantEmail:"wrong data"});
    }
  };
  const handleMobilenumberChange = (event) => {
    const value = event.target.value;
    setMobile(value);
    event.target.value=value;
    if(value.match(/^[6-9]\d{9}$/)){

      setFormData({...formdata,applicantMobile:value})
    }
    else{
    setFormData({...formdata,
      applicantMobile:value});
    }
  };
  const handleAdressChange = (event) => {
    const value = event.target.value;
    setAddress(value);
    event.target.value=value;
    if(value.length!=0){
      setFormData({...formdata,
        applicantAddress:value})
    }
    else{
      setFormData({...formdata,
        applicantAddress:"wrong data"});
    }
  };
  const handlePanChange = (event) => {
    const value = event.target.value;
    setPan(value);
    event.target.value=value;
    if(value.match(/[A-Z]{5}[0-9]{4}[A-Z]{1}$/)){
      setFormData({...formdata,
        applicantPan:value})
    }
    else{
      setFormData({...formdata,
        applicantPan:"wrong data"});
    }
  };
  const handleMonthlysalaryChange = (event) => {
    const value = event.target.value;
    setSalary(value);
    event.target.value=value;
    if(parseInt(value)>0){
      setFormData({...formdata,
        applicantSalary: value})
    }
    else{
      setFormData({...formdata,
        applicantSalary:"wrong data"});
    }
  };
  const handleLoanamountChange = (event) => {
    const value = event.target.value;
    setLoanAmount(value);
    event.target.value=value;
    if(value.match(/^\d{5}$/)){
      setFormData({...formdata,
        loanAmountRequired:value})
    }
    else{
      setFormData({...formdata,
        loanAmountRequired:"wrong data"});
    }
  };
    
  const handleRepaymentChange = (event) => {
    const value = event.target.value;
    setRepaymentMonths(value);
    event.target.value=value;
    if(parseInt(value)>0){
      setFormData({...formdata,
        loanRepaymentMonths:value})
    }
    else{
      setFormData({...formdata,
        loanRepaymentMonths:"wrong data"});
    }
  };
  
  const url="";
  const handleapply = (e) => {
    axios.post("https://jsonplaceholder.typicode.com/posts",formdata).then(res=> console.log(res.data)).catch(err =>console.log(err))
  }

  const fileChange = (e)=>{
    if(e.target.files){
      setFile(e.target.files[0]);
    }
    console.log(file);
  };

   const fileupload = () =>
  {
    if(!file){
      return;
    }
    axios.post("https://jsonplaceholder.typicode.com/posts",file.name).then((data)=>console.log(data))
    .catch((err)=>console.error(err));
  };

  return (
    <Fragment>
      <div id="navbarbox" className="navbar-container">
        <nav className="main-nav ">
          <div className="menu-link">
            <ul>
              <h1 id="add">Bike|Loan</h1>
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
            <form id="box6" onSubmit={handleapply}>
            
              <div id="box5" class="pages3">
                
                <input type="text" id="enterName" placeholder="Enter Applicant Name" value={name} onChange={(e) => handleNameChange(e)} required/>

                <inpu type="email" id="enterEmail" placeholder="Enter Email" value={email} onChange={(e) => handleEmailChange(e)} required/>

                <input
                  type="tel"
                  id="enterMobile"
                  placeholder="Enter mobile number"
                  value={mobile}
                  onChange={(e) => handleMobilenumberChange(e)}
                  required
                />

                <input
                  type="text"
                  id="enterAddress"
                  placeholder="Enter Address"
                  value={address}
                  onChange={(e) => handleAdressChange(e)}
                  required
                />

                <input
                  type="text"
                  id="enterAadharNo"
                  placeholder="Enter Aadhar number"
                  value={aadhar}
                  onChange={(e) => handleAadharChange(e)}
                  required
                />

                <input
                  type="text"
                  id="enterPanNo"
                  placeholder="Enter PAN number"
                  value={pan}
                  onChange={(e) => handlePanChange(e)}
                  required
                />

                <input type="number" id="enterSalary" placeholder="Enter monthly salary" value={salary} onChange={(e) => handleMonthlysalaryChange(e)} required/>
                <input type="number" id="enterAmount" placeholder="Enter loan amount required" value={loanAmountRequired} onChange={(e) => handleLoanamountChange(e)} required/>
                <input type="number" id="enterMonths" placeholder="Enter loan repayment months" value={loanrepaymentMonths} onChange={(e) => handleRepaymentChange(e)} required /> 
              </div>
              </form>
            </div>
          </center>
              <div class="pages2 secondpage"  id="page2">
                <label id="selectDocumentType">Upload documents(Mandatory*)</label>
                <select name="cars" id="cars">
                  <option >Please pick a type</option>
                  <option value="Aadhar">Aadhar</option>
                  <option value="Pan">Pan</option>
                  <option value="Voter id">Voter id</option>
                  <option value="Driving">Driving licence</option>
                </select><br />
                <label id="chooseFile">Images or Documents(Upload below 2mb)</label>
                <input type="file" name="file" id="chooseFile" onChange={(e) => fileChange(e)}/><br />
                <button id="uploadDocumentsButton" type="submit" onClick={fileupload}>Upload Documents</button>&nbsp; &nbsp;
                <button id="applyLoanButton" type="submit" onClick={(e) => handleapply(e)}> Apply for loan</button>
              </div>
              <center/>
              <center>
              <button id="pagechange1" onClick={(e) => handlepage1(e)}>1</button>
              <button id="pagechange2" onClick={(e) => handlepage2(e)}>2</button>
              </center>
          </div>
    </Fragment>
  );
}

export default CustomerApplyLoan;