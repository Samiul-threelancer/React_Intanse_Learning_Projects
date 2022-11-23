import React from "react";
import { useState } from "react";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import BlogBody from "./BlogBody";
const Blog = () => {
    const [getdata, setData] = useState([''])
    const history = useHistory()
  
    const Getdata = async() =>{
        
        await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
            console.log(res.data)
            setData(res.data)
          })
          .catch( err =>{
            console.log(err)
          }) 
      
          
    
        
      }
      Getdata()

      const Bloghandle = () =>{
        history.push("/blogbody")
      }
      
      

      
     return(
        <>
       {getdata.slice(0,5).map((item, i) =>{
        return( 
          
          <div>

            <div className="blogdiv">


              <tr>
              <td>{item.title}</td>
              <td>{item.body}</td>
              <td><button>Update</button></td>
              <td><button>Delete</button></td>
              <td></td>
                
              </tr>
           
          <button type="submit" className="blogbutton" onClick={Bloghandle}>  Details...</button>


            </div>
          
         
          
  
            </div>
        
       

        
      

        )
       }

       )}
        
        
        </>
     )
       

        

      

   
}

export default Blog