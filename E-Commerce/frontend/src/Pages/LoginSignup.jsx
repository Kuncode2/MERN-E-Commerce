import React from 'react'
import './CSS/LoginSignup.css'
import { useState } from 'react'
import { backendURL } from '../config'
const LoginSignup = () => {
  const [state,setState] = useState("Login")
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })
////////////////////////////////////////////////////////////
  const login = async()=>{
    console.log("Login Function executed",formData);
    let responseData;
    await fetch(`${backendURL}/login`,{
      method:'POST',
      headers:{            
        Accept:'application/form-data',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/")
    }
    else{
      alert(responseData.errors)
    }
  }
  //////////////////////////////////////////////////////////
  const signup = async()=>{
    console.log("Signup Function executed",formData);
    let responseData;
    await fetch(`${backendURL}/signup`,{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/")
    }
    else{
      alert(responseData.errors)
    }
  }
////////////////////////////////////////////////////////////
  const changeHandler = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }


  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' />:<></>}
          <input  name='email' value={formData.email} onChange={changeHandler}  type="email" placeholder='Email Address' />
          <input  name='password' value={formData.password} onChange={changeHandler}  type="password" placeholder='Password'/> 
        </div>
        <button onClick={()=>{state === "Login"?login():signup()}}>Continue</button>
        {state === "Sign up"
        ? <p className="loginsignup-login"> Alredy have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>
        :<p className="loginsignup-login"> Create an account? <span onClick={()=>{setState("Sign up")}}>Click here</span></p>}
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By Continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
