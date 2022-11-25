import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// const clg = 5+5
const Book = () => {
    const [apidata, setapidata] =useState([])
    const [callback, setcallback]= useState(false)
  


   useEffect(()=>{
    axios.get(`https://6363700637f2167d6f7969ea.mockapi.io/crudtwo/`) 
    .then((getData)=>{
        setapidata(getData.data)
        //console.log(getData)
    })
   }, [callback])


   const setID = (id) =>{
    console.log(id);
    localStorage.setItem("ID", id)
   }

   const onDelete = (id) =>{

    axios.delete(`https://6363700637f2167d6f7969ea.mockapi.io/crudtwo/${id}`)
    .then((getData) =>{
        
        setcallback(!callback)

    })
   }


    return(
   
        <div>

            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Size</th>
                    <th>Quantity</th>
                    <th>Update</th>
                    <th>Delete</th>
                    

                    
                </tr>

                </thead>
                <tbody>
            {apidata.map((data, i) => {

                return(
                    
                        
                            <tr key={i}>
                            <td>{data.id}</td>
                            <td>{data.productname}</td>
                            <td>{data.size}</td>
                            <td>{data.quantity}</td>
                            <td>
                                <Link to="/update" >
                                <button onClick={()=>setID(data.id)}>Update</button>
                                </Link>
                            </td>
                            
                            <td>
                                
                                <button onClick={() => onDelete(data.id)}>Delete</button>
                                
                            </td>
                            
                            </tr>
                        


                   
                )
            })}

           </tbody>

           
            </table>

            
        </div>
    )
    
}
export default Book;