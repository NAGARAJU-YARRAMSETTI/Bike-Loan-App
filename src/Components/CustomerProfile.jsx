import React, { useEffect, useState, useRef} from 'react';
import './CustomerProfile.css'
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios  from 'axios';

function CustomerProfile() {
  
  
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [number,setNumber] = useState("");
  const [laonid,setLoanId] = useState("");
  const [address,setAddress] = useState("");
  const [emi,setEmi] = useState("");


  const nameref = useRef();
  const emailref = useRef();
  const numberref = useRef();
  const addressref = useRef();
  const emiref = useRef();
  const loanref = useRef();


  const editName=(e)=>{
    document.querySelector("#name").classList.remove("makedisabled")
    
    document.querySelector("#email").classList.remove("makedisabled")
    document.querySelector("#mobileNum").classList.remove("makedisabled")
    document.querySelector("#address").classList.remove("makedisabled")

    document.querySelector("#edit").classList.add("hidebtn")
    document.querySelector("#delete").classList.add("hidebtn")

    document.querySelector("#save").classList.remove("hidebtn")
    document.querySelector("#cancel").classList.remove("hidebtn")

  }

  const saveName=(e)=>{
    if(nameref.current.value.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){
      setName(nameref.current.value)
    }
    else{
      setName("Wrong Data")
    }
    if(emailref.current.value.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)){
      setEmail(emailref.current.value)
    }
    else{
      setEmail("Wrong Data")
    }
    if(numberref.current.value.match(/^[6-9]\d{9}$/)){
      setNumber(numberref.current.value)
    }
    else{
      setNumber("Wrong Data")
    }
    if(addressref.current.value){
      setAddress(addressref.current.value)
    }
    else{
      setAddress("Wrong Data")
    }
  }

  useEffect(() => {
    savelayout();
  },[name,email,number,address]);

  const handleDelete = (e)=>{
    axios.post("https://jsonplaceholder.typicode.com/posts",{Name:name}).then(result=>console.log(result.data))
  }

  const savelayout= ()=>{

  

    
    document.querySelector("#save").classList.add("hidebtn")
    document.querySelector("#cancel").classList.add("hidebtn")

    document.querySelector("#edit").classList.remove("hidebtn")
    document.querySelector("#delete").classList.remove("hidebtn")

    document.querySelector("#name").classList.add("makedisabled")
    document.querySelector("#email").classList.add("makedisabled")
    document.querySelector("#mobileNum").classList.add("makedisabled")
    document.querySelector("#address").classList.add("makedisabled")

    axios.post("https://jsonplaceholder.typicode.com/posts",{Name:name,Adress:address,Mobilenumber:number,Email:email}).then(result=>{
      console.log(result)
    })
  }

  const cancelName = (e)=>{
    document.querySelector("#save").classList.add("hidebtn")
    document.querySelector("#cancel").classList.add("hidebtn")

    document.querySelector("#edit").classList.remove("hidebtn")
    document.querySelector("#delete").classList.remove("hidebtn")

    document.querySelector("#name").classList.add("makedisabled")
    document.querySelector("#email").classList.add("makedisabled")
    document.querySelector("#mobileNum").classList.add("makedisabled")
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
      <input class="makedisabled"  type="text" name="name" id="name" ref={nameref} defaultValue={name} placeholder="name" autoComplete="off"/>
      </div>
      <div class="item">
      <label htmlFor="address">address:</label>
      <input class="makedisabled" type="text" name="address" id="address" ref={addressref} defaultValue={address} placeholder="address"/>
      </div>
      <div class="item">
      <label htmlFor="number">number:</label>
      <input class="makedisabled" type="text" name="number" id="mobileNum" ref={numberref} defaultValue={number} placeholder="Mobile"/>
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
      <button id="delete" onClick={(e)=>handleDelete(e)}>Delete</button>
      </div>
      {/* Add more profile information as needed */}
    </div>
    </div>
    </div>
    </Fragment>
  );
}

export default CustomerProfile;




