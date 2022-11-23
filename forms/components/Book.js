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
            {apidata.map((data) => {

                return(
                    <div>
                        
                        <h1>{data.id}</h1>
                        <h1>{data.productname}</h1>
                        <h1>{data.size}</h1>
                        <h1>{data.quantity}</h1>

                    </div>
                )
            })}

            
        </div>
    )
    
}
export default Book;