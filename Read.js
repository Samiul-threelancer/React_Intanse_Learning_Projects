import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Read =()=> {
    // const initState = 
    // {   id:"",
    //     fname: "",
    //     lname: ""
    // }
 

  const [apidata, setApidata] = useState([]);

  
  useEffect(() => {
    axios.get(`https://6363700637f2167d6f7969ea.mockapi.io/crud/3`)
      .then((getData) => {
        setApidata(getData.data);
      })
      .catch(error =>console.log(error.message))
  }, []);
 console.log(apidata)
  return (
    <div>
        <p>Id: {apidata.id}   </p>
        <p>First Name:{apidata.fname} </p>
        <p>Last Name: {apidata.lname} </p>
        <div>
          
            <input type= "number" placeholder="id"></input>
            <submit> </submit>


            <table>
           <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
      </tr>
           </table>
            
        </div>
    </div>
  )
}
export default Read;
