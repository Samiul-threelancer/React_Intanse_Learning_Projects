import React,  { useState } from 'react'


// initial value
const intiState = 
{
    name: "",
    phone: ""
}

const Test = () => {


    // state
    const [value, setValue] = useState(intiState)


    // onchange event
     const ChangeHandle = (event) => {

        const name = event.target.name;
        const value = event.target.value
        setValue({ ...value,  [name]:value })
    }

    

    console.log("callback", value)

  return (
    <div>

        <p> { value.name }  </p>
        <p> { value.phone }  </p>
        
        <form action=" ">
            <input type="text" onChange={ChangeHandle} value={value.name} placeholder='name' name='name' /> <br />
            <input type="number" onChange={ChangeHandle} value={value.phone} placeholder='phone' name='phone' /> <br />
            <input type="password" onChange={ChangeHandle} value={value.phone} placeholder='password' name='Password' /> <br />
            <button type='submit'> Submit </button>
        </form>
    </div>
  )
}

export default Test