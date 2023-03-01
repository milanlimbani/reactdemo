import logo from './logo.svg';
import './App.css';
import React,{useEffect} from 'react';
import { json, useNavigate } from "react-router-dom";
function App() {
const navigate = useNavigate();
  const onbtnclick =()=>{
     
     const uname = document.getElementById("Username").value;
     const pass = document.getElementById("Password").value;

      if(uname == "milan@gmail.com" && pass=="Milan@123")
      {
       // alert("Hello"+uname)
      //alert(window.localStorage.setItem('uname',json.stringify(uname)));
      sessionStorage.setItem("username", uname); 
      navigate(`/Home`);
      }else{
        alert("Invalid Username & Password");
      }
    
    
  }
return (
 
    <div className="About">
   <h1>Login Page</h1>
   <div>
      <label for="Username">Username</label>
      <input type='text' name='Username' id="Username"></input>
   </div>
   <div>
      <label for="Password">Password</label>
      <input type='password' name='Password' id="Password"></input>
   </div>
   <div>
      
      <button onClick={ onbtnclick}>Login</button>
   </div>
  </div>
 

);
}

export default App;
