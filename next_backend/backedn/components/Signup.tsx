"use client"
import axios from "axios"
import { useState } from "react"
export default function (){
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    return <div>
        <input type="text" placeholder="username" onChange={(e)=>{
            setUsername(e.target.value);
        }} />
        <input type="password" placeholder="password" onChange={(e)=>{
            setPassword(e.target.value);
        }}/>
        <button onClick={()=>{
            axios.post("http://localhost:3002/api/user",{
                username,
                password
            })
        }}> signup vro</button>


    </div>
     
}