import React, { useState } from "react";

const MultipleInputs = () => {
const [usReg, setusReg] = useState({
    username: "",
    email : "",
    phone: "",
    password: ""
})

const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setusReg({...usReg, [name] : value});

}

    return(
        <form action="">
            <div>
            <label htmlFor = "username">Username</label>
            <input type="text" 
            value={usReg.username}
            onChange={handleInput}
             name="username" id="username"></input>
            </div>

            <div>
            <label htmlFor = "username">Email</label>
            <input type="email" 
            value={usReg.email}
            onChange={handleInput}
            name="email" id="email"></input>
            </div>

            <div>
            <label htmlFor = "username">Phone</label>
            <input type="phone" 
            value={usReg.phone}
            onChange={handleInput}
            name="phone" id="phone"></input>
            </div>

        
               
            

            <div>
            <label htmlFor = "username">Password</label>
            <input type="password" 
            value={usReg.password}
            onChange={handleInput}
            name="password" id="password"></input>
            </div>
            

            <button type="submit"> Registration</button>

        </form>
    )
}

export default MultipleInputs