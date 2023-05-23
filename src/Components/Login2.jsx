
import React, { Fragment, useState } from 'react';
import "./Adminappliedloan.css"


function Login2(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    


    const handleEmailChange = (value) => {
        setEmail(value);
    }
    const handlePasswordChange = (value) => {
        setPassword(value);
    }


    const handleLogin =() => {
        const data = {
            Email : email,
            Password : password
            
        };
        
    }

    return(
        <Fragment>
            <form action="/home">
        <h1 id="Log">LOGIN</h1>  
        <input type="text" id="txtemail" placeholder="Enter Email" onChange={(e) => handleEmailChange(e.target.value)}></input><br></br>
        <input type="text" id="txtpassword" placeholder="Enter Password" onChange={(e) => handlePasswordChange(e.target.value)}></input>
        <br></br>
        <button onClick={() => handleLogin()}>Login</button>
        </form>
        </Fragment>
    )
}

export default Login2;