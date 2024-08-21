"use client"
import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function (){
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const router = useRouter();
    return <div>
        <input type="text" placeholder="username" onChange={(e)=>{
            setUsername(e.target.value);
        }} />
        <input type="password" placeholder="password" onChange={(e)=>{
            setPassword(e.target.value);
        }}/>
        <button onClick={async()=>{
            
          await axios.post("/api/user",{
                username,
                password
            });
            router.push("/");
        
        
            
        }}> signup vro</button>


    </div>
     
}