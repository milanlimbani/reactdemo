
import './App.css';
import React from 'react';
//import { useNavigate} from "react-router-dom"
import { Navigate } from "react-router-dom";
function Home() {
   
    //const navigate = useNavigate();
   const getusername = sessionStorage.getItem("username");
   //alert(getusername);
   if(getusername == null)
   {
   //alert("Hello");
   // navigate(`/Login`);
   return <Navigate replace to="/" />;
   }else{
    
    return (
    
        <h4>Welcome : {getusername}</h4>

        );
   }
   
   
 
}

export default Home;
