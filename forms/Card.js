import React from "react";
import { Link } from "react-router-dom";

const Card =()=>{
    return(
        <div>
        <h1>Hwllo</h1>
        
        <nav>
        <ul>
        
        <Link to="/booklist"> Booklist </Link> <br/>
        <Link to="/book"> Book </Link> <br/>
        <Link to="/chapter"> Chapter </Link>
        
        </ul>
        </nav>

        </div>
        

    )
}
export default Card