import React from 'react'
import { useState } from 'react'

export default function UserInputOne() {
    const [input,setInput] = useState("");
    const [user, setUser] =  useState({
        name : "",
        surname : "",
        email : "",
        password: "",
        country:"",
        city :"",
    });

    const handleChange = (e) =>{
        setUser(prev=>({...prev,  [e.target.name]:e.target.value}))
    }

    console.log(user);

    return (
        <>
            <h2>User:</h2>
            <input type="text" name={"name"} onChange={handleChange} placeholder="name"></input>
            <input type="text" name={"surname"} onChange={handleChange} placeholder="surname"></input>
            <input type="text" name={"email"} onChange={handleChange} placeholder="email"></input>
            <input type="text" name={"password"} onChange={handleChange} placeholder="password"></input>
            <input type="text" name={"country"} onChange={handleChange} placeholder="country"></input>           
            <input type="text" name={"city"} onChange={handleChange} placeholder="city"></input>
        </>
  )
}
