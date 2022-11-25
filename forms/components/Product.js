import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Product = () => {
    const[val, setval] = useState({
        productname:"",
        size:"",
        quantity:""

    })
    
    console.log(val)


const getData=(e)=>{
const {value, name} = e.target;

setval(()=>{

    return{
        ...val,
        [name]:value
    }
 })
}

const aData = async (e)=>{
    // e.preventDefault()

   
    await axios.post(`https://6363700637f2167d6f7969ea.mockapi.io/crudtwo`, {...val}
 

    )
   

}



  return (


    <div>
    
    <form onSubmit={aData}>
        <input type="text" placeholder='prduct name' onChange={getData} name='productname'></input>
        <input type="text" placeholder='size' onChange={getData} name='size'></input>
        <input type="text" placeholder='quantity' onChange={getData} name='quantity'></input>
        <button type='submit' > Submit </button>
        {/* <button type='submit'> Edit </button>
        <button type='submit'> Update </button>
        <button type='submit'> Delete </button> */}
    </form>
    

    </div>


  )


}

export default Product