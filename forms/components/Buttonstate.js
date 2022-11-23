import React from "react"
import { useEffect } from "react"
import { useState } from "react"

const Buttonstate =()=>{



  const[count, setcount] = useState(0)
  const[secondcount, setsecondcount] = useState(3)
  
  const decrement = ()=>{
    setcount(prevcount=> prevcount-1)
  }
  const increment = ()=>{
  
  setcount(prevcount=>prevcount+1)
  }
  useEffect (()=>{
  if(count===5){
    console.log("Hello World")
    return
  }

  },[secondcount])
 



    return(

        <div>
            <button onClick={decrement}>-</button>
            <span> {count} </span>
            <button onClick={increment}>+</button>
        </div>
    )
}



export default Buttonstate