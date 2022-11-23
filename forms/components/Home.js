import axios from "axios"
import { useState } from "react";

const Home = () => 
{
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    console.log(fname, lname)

    const sendDataAPI =()=>{
        axios.post(`https://6363700637f2167d6f7969ea.mockapi.io/crud`, {
            fname,
            lname
        })
    }

    const delDataAPI =(id)=>{
        axios.delete(`https://6363700637f2167d6f7969ea.mockapi.io/crud/{id}`, {
            fname,
            lname
        })
    }
    
    



    return(

        <form action=" ">
            <p>{fname}</p>
            <input type="text" onChange={(e) =>setfname(e.target.value)} placeholder='name' name='fname' /> <br />
            <p>{lname}</p>
            <input type="text" onChange={(e) =>setlname(e.target.value)} placeholder='name' name='lname' /> <br />
            
            
            <button type='submit' onClick= {sendDataAPI}> Submit </button>
            
        </form>
    )
}

export default Home