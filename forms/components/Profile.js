import React from "react";
import "./style.css";
import Login from "./Blog";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";
import Photographs from "./Photographs";

const Profile = () =>{

    return (
        <div>      
                <div className="divone">
                <h2 className="pone">Guten Tag!<br/> </h2>
                    <p> Its Samiul Hauque Chowdhury. I am a space enthusiast. </p>
                    
                    <Link to="/signup">SignUp</Link>
                    <Link to="/photographs">Photographs</Link>
                    <Link to="/buttonstate">Button State</Link>
                    <Link to="/product"><div style={{color:"black"}}><h1>Product</h1></div></Link>
                    <Link to="/book"> Read </Link>


                    
                    </div>


            



        </div>
    )
}

export default Profile
