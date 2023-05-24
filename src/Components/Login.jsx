import React, { Fragment, useState } from 'react';
import axios from "axios";
import './Login.css';
import {  Button ,Form} from 'react-bootstrap';

import {  useNavigate, Link } from "react-router-dom";


export const UserContext = React.createContext();

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [link, setLink] = useState('');
  const [errors,setErrors] = useState({});

  const navigate = useNavigate();
  const validateForm = () => {
    //const errors = {};    
     // Validate email field
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
       errors.email = 'Email is invalid';
    }
    
    // Validate password field
   if (!password.trim())
    {
      errors.password = 'Password is required';
    } 
    else if (password.length < 6) 
    {
     errors.password = 'Password must be at least 6 characters long';
    }
    
    setErrors(errors);
     // Return true if there are no errors, 0false otherwise
    return Object.keys(errors).length === 0;
  };


  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };
  const display =(e) => {
    setEmail(e.target.value);
};
const display2 =(e) => {
  setPassword(e.target.value);
};
const check =() => {
  if(email.localeCompare("admin")===0 && password.localeCompare("admin123")===0
  
  
  
  
  
  
  
  
  
  
  )
  {
    setLink("/home");
  }
  else{
    setLink("/CustomerApplyLoan");
  }
};

  const handleSave = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form submission logic here
      let auth = {
        isAuth : false,
        role : null
      }
      const data = {
      Email: email,
      Password: password
      };
     const url1 = '#';
     const url2 = '#';
     axios.post(url1, data).then((result) => {
      if (result.data === true) {
      alert("Customer Logged in Successfully");
      navigate('/Customerapplyloan/Home', { state: { email } });
        // navigate to the home page
      } else {
        axios.post(url2, data).then((result) => {
          if (result.data === true) {
            alert("Admin Logged in Successfully");
            navigate('/adminappliedloan/Home'); // navigate to the admin page
          } else {
            alert("Invalid");
          }
        });
      }
      });
    } 
    
  };
  return (
    <Fragment>
      <div id="Log" className="topnav"><center><h1>Login</h1></center></div>
     <div className='form-container'><center>
      <form action={link}>
    <Form.Group className="mb-3">
    <Form.Control className='form-control' type="text" value={email}  id="Email" placeholder="Enter Email" onChange={display}  required/>
    </Form.Group>
    <Form.Group className="mb-3">
    <Form.Control className='form-control' type="password" value={password} id="Password" placeholder="password" onChange={display2} required/>
    </Form.Group>
    <Button type="submit" id="loginButton" onClick={check}> Login</Button>
    <Form.Text id='signuplink'>  New User/admin?<Link to="/signup">Sign Up</Link>
    </Form.Text>
    </form>
    </center>
    </div>
    </Fragment>
  );
  
  
}


export default Login;