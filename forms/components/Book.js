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
                        <table>
                            <tr>
                            <td>{data.id}</td>
                            <td>{data.productname}</td>
                            <td>{data.size}</td>
                            <td>{data.quantity}</td>
                            </tr>
                        </table>


                    </div>
                )
            })}

            
        </div>
    )
    
}
export default Book;