import React, { Fragment, useState } from 'react';
import  axios from "axios";
import './Signup.css';
import { Link } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';

function Signup(){
    const url=""
    const[data, setData] =useState({
      Adimnuser: "",
      Email:"",
      Username: "",
      Mobilenumber: "",
      Password: "",
      ConfirmPassword: ""
    })
    function Register(e){
      e.preventDefafault();
        (url="",{
        Adminuser: data.name,
        Email: data.Email,
        Username: data.Username,
        Mobilenumber: data.Mobilenumber,
        Password: data.Password,
        ConfirmPassword: data.ConfirmPassword
      })
      .then(res=>{
        console.log(res.data)
      })
    }

    function handle(e) {
      const newdata={...data}
      newdata[e.target.id] = e.target.value
      setData(newdata)
  
    }
    const [Usertype, setAdminOrUser] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    
    const validateForm = () => {
    const errors = {};
    
    // Name validation
    if (!username) {
      errors.userName = 'Name is required';
    }

    // Email validation
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }

    // Password validation
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password should be at least 6 characters long';
    }

    // Confirm password validation
    if (!confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (confirmPassword !== password) {
      errors.confirmPassword = 'Passwords do not match';
    }

    // Mobile number validation
    if (!mobile) {
      errors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(mobile)) {
      errors.mobileNumber = 'Invalid mobile number';
    }
    setErrors(errors);

    // Return true if there are no errors
    return Object.keys(errors).length === 0;
    };


    const handleAdminUserChange = (e) => {
      const value=e.target.value;
      setAdminOrUser(value.toLowerCase());
      e.target.value=value;
    }
    const handleEmailChange = (e) => {
      const value=e.target.value;
      setEmail(value.toLowerCase());
      e.target.value=value;
      setData({...data,
        Email:value
    })
    }
    const handleUsernameChange = (e) => {
      const value=e.target.value;
        setUserName(value);
        setData({...data,
          Username:value
      })
        e.target.value=value;
    }
    const handleMobileChange = (e) => {
      const value=e.target.value;
        setMobile(value);
        setData({...data,
          Mobilenumber:value
      })
        e.target.value=value;
    }
    const handlePasswordChange = (e) => {
      const value=e.target.value;
        setPassword(value);
        setData({...data,
          Password:value
      })
        e.target.value=value;
    }

    const handleConfrimPasswordChange = (e) => {
      const value=e.target.value;
        setConfirmPassword(value);
        setData({...data,
          ConfirmPassword:value
      })
        e.target.value=value;
    }
    const handleSave = () => {
      console.log(data);
        if(validateForm()) {
        const data = {
            Usertype : Usertype,
            Email: email,
            Username : username,
            Mobilenumber: mobile,
            Password: password
        };
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        if (Usertype === "admin") {
            const url2 = '#';
            
            axios.post(url2, data).then((result) => {
                if (result.data === 'Admin Successfully Registered'){
                setAdminOrUser('')
                setEmail('')
                setUserName('')
                setMobile('')
                setPassword('')
                setConfirmPassword('')
                alert(result.data);
                window.location.reload();
                }
            }).catch((error) => {
                alert(error);
            })
        } else if (Usertype === "user") {
            const url1 = '#';
            axios.post(url1, data).then((result) => {
                if (result.data === 'User Successfully Registered');
                alert(result.data);
                setAdminOrUser(null)
                setEmail('')
                setUserName('')
                setMobile('')
                setPassword('')
                setConfirmPassword('')
                window.location.reload();
            }).catch((error) => {
                alert(error);
            })
        }
      }
    }

    return (
        <Fragment>
            <center>
              <div id="Reg">
            <Form.Label><center>Registration</center></Form.Label>
            </div>
            <div id="box3">
            <Form.Group  onSubmit={(e)=>Register(e)} className="mb-3">
            <Form.Control className='form-control' type="text" id="adminuser" placeholder="Enter AdminUser"  value={data.Adminuser} onChange={(e) => handleAdminUserChange(e)} required/>
            {errors.usertype && <div className='validation'>{errors.usertype}</div>}
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Control className='form-control' type="text" id="email" placeholder="Enter Email" value={data.Email}  onChange={(e) => handleEmailChange(e)} required/>
            {errors.email && <div className='validation'>{errors.email}</div>}
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Control type="text" id="username" placeholder="Enter Username" value={data.Username}  onChange={(e) => handleUsernameChange(e)} required/>
            {errors.userName && <div className='validation'>{errors.userName}</div>}
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Control className='form-control' type="text" id="mobileNumber" placeholder="Enter Mobilenumber" value={data.Mobilenumber}  onChange={(e) => handleMobileChange(e)} required/>
            {errors.mobile && <div className='validation'>{errors.mobile}</div>}
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Control className='form-control' type="password" id="password" placeholder="Password" value={data.Password} onChange={(e) => handlePasswordChange(e)} required />
            {errors.password && <div className='validation'>{errors.password}</div>}
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Control className='form-control' type="password" id="confirmPassword" placeholder="ConfirmPassword" value={data.ConfirmPassword} onChange={(e) => handleConfrimPasswordChange(e)} required/>
            {errors.confirmPassword && <div className='validation'>{errors.confirmPassword}</div>}
            </Form.Group>

            <Button onClick={() => handleSave()} id="submitButton" >Register</Button><br></br>
            <Form.Text id='signuplink'>
                Already a user?&nbsp;&nbsp;<Link to="/">Login</Link>
            </Form.Text>
            </div>
            </center>
        </Fragment>
    )
}

export default Signup