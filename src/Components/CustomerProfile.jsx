import React, { useEffect, useState, useRef} from 'react';
import './CustomerProfile.css'
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios  from 'axios';

function CustomerProfile() {
  
  
  const [name,setName] = useState("none");
  const [email,setEmail] = useState("none");
  const [number,setNumber] = useState("none");
  const [laonid,setLoanId] = useState("1234");
  const [address,setAddress] = useState("none");
  const [emi,setEmi] = useState("10");


  const nameref = useRef();
  const emailref = useRef();
  const numberref = useRef();
  const addressref = useRef();
  const emiref = useRef();
  const loanref = useRef();


  const editName=(e)=>{
    document.querySelector("#name").classList.remove("makedisabled")
    document.querySelector("#email").classList.remove("makedisabled")
    document.querySelector("#number").classList.remove("makedisabled")
    document.querySelector("#address").classList.remove("makedisabled")

    document.querySelector("#edit").classList.add("hidebtn")

    document.querySelector("#save").classList.remove("hidebtn")
    document.querySelector("#cancel").classList.remove("hidebtn")

  }

  const saveName=(e)=>{
    setName(nameref.current.value)
    setEmail(emailref.current.value)
    setNumber(numberref.current.value)
    setAddress(addressref.current.value)
  }

  useEffect(() => {
    savelayout();
  },[name,email,number,address]);

  

  const savelayout= ()=>{
    setName(document.querySelector("#name").value)
    setEmail(document.querySelector("#email").value)
    setNumber(document.querySelector("#number").value)
    setAddress(document.querySelector("#address").value)

  

    
    document.querySelector("#save").classList.add("hidebtn")
    document.querySelector("#cancel").classList.add("hidebtn")

    document.querySelector("#edit").classList.remove("hidebtn")

    document.querySelector("#name").classList.add("makedisabled")
    document.querySelector("#email").classList.add("makedisabled")
    document.querySelector("#number").classList.add("makedisabled")
    document.querySelector("#address").classList.add("makedisabled")

    axios.post("https://jsonplaceholder.typicode.com/posts",{Name:name,Adress:address,Number:number,Email:email,Loanid:laonid,Emi:emi}).then(result=>{
      console.log(result.data)
    })
  }

  const cancelName = (e)=>{
    document.querySelector("#save").classList.add("hidebtn")
    document.querySelector("#cancel").classList.add("hidebtn")

    document.querySelector("#edit").classList.remove("hidebtn")

    document.querySelector("#name").classList.add("makedisabled")
    document.querySelector("#email").classList.add("makedisabled")
    document.querySelector("#number").classList.add("makedisabled")
  }


  

  {/*useEffect(() => {
    fetch('http://localhost:8080/user/getProfile')
      .then((response) => response.json())
      .then((data) => setCustomer(data))
      .catch((error) => console.error('Error fetching customer profile:', error));
  }, []);*/}
  

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
      <div id="box8">
    <div id="box">
    <center>
    <h1>Profile Information</h1>
    </center>
    <div id="box7">
      <div class="item">
        <label htmlFor="name">Name:</label>
      <input class="makedisabled"  type="text" name="name" id="name" ref={nameref} defaultValue={name} placeholder="name"/>
      </div>
      <div class="item">
      <label htmlFor="address">address:</label>
      <input class="makedisabled" type="text" name="address" id="address" ref={addressref} defaultValue={address} placeholder="address"/>
      </div>
      <div class="item">
      <label htmlFor="number">number:</label>
      <input class="makedisabled" type="text" name="number" id="number" ref={numberref} defaultValue={number} placeholder="Mobile"/>
      </div>
      <div class="item">
      <label htmlFor="loanid">loanid:</label>
      <input class="makedisabled" type="number" name="loanid" id="loanid" ref={loanref} defaultValue={laonid} placeholder="loanid"/>
      </div>
      <div class="item">
      <label htmlFor="email">email:</label>
      <input class="makedisabled" type="email" name="email" id="email" ref={emailref} defaultValue={email} placeholder="email"/>
      </div>
      <div class="item">
      <label htmlFor="name">emi:</label>
      <input class="makedisabled" type="number" name="emi" id="emi" ref={emiref} defaultValue={emi} placeholder="emi"/>
      </div><br></br>
      <div class="box11">
      <button id="edit" onClick={(e)=>editName(e)}>Edit</button><br></br>&nbsp;&nbsp;
      <button id="save" class="hidebtn" onClick={(e)=>saveName(e)}>Save</button>&nbsp;&nbsp;
      <button id="cancel" class="hidebtn" onClick={(e)=>cancelName(e)}>Cancel</button>
      </div>
      {/* Add more profile information as needed */}
    </div>
    </div>
    </div>
    </Fragment>
  );
}

export default CustomerProfile;




