import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Blog from "./Blog";
import { useEffect } from "react";

const SignUp = () => {
 
const[inpval, setinpval] = useState({
  email: "",
  phone: "",
  password: ""
  
})
const[error, seterror] = useState({})
// console.log(inpval)



const getdata=(e)=>{
  const{value, name} = e.target;
  setinpval(()=>{

    return{
      ...inpval,
      [name]:value
    }
  })
  
}


const addData=(e)=>{
  e.preventDefault();
  console.log(inpval)
  const{email, phone, password} = inpval



  if(email === "")
  {
   alert("****************")
   return 
  }
  
  else if(!email.includes("@"))
  { 
    alert("Please enter a valid email")
    return}
  else if(phone === "")
  { 
    alert("Phone is required!")
    return}
    else if(phone.length<11)
  { 
    alert("Enter valid phone number")
    return}
  else if(password === "")
  {
    alert("Password is required!")
    return
}
  else if (password.length<8)
  {alert("Password is less than 5")
  return
 }
  else
  {alert("data is added")}


  }


    return( 
        

      
        <div className="logindiv">
            <h1>SignUp...</h1>
            
            <form onSubmit={addData}>
            <input type="email" onChange={getdata}  placeholder="Email" name='email' className="inputtype"/> 
            <p>{alert.email}</p>


            <input type="phone" onChange={getdata}  placeholder="Number" name='phone' className="inputtype"/>
            
      
            <input type="password" onChange={getdata}  placeholder="Password" name='password' className="inputtype"/>
            <br/>

                   
            <button type="submit" > Submit </button>
            </form>

        </div>
    )
}

export default SignUp