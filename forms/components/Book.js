import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const Book = () => {
    const [apidata, setapidata] =useState([])


   useEffect(()=>{
    axios.get(`https://6363700637f2167d6f7969ea.mockapi.io/crudtwo/`) 
    .then((getData)=>{
        setapidata(getData.data)
        console.log(getData)
    })
    

   }, [])
     


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
                            <td><button>Update</button></td>
                            <td><button>Delete</button></td>
                            
                            </tr>
                        


                   
                )
            })}

           </tbody>

           
            </table>

            
        </div>
    )
    
}
export default Book;