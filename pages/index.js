import Head from 'next/head'
import Image from 'next/image'
import {TextField, Button} from "@mui/material"
import { useRef } from 'react'
export default function Home() {
  const form = useRef(null)
  const HandleForm = ()=>{
    const current = form.current;
    const username = current["username"].value;
    const password = current["password"].value;

    if(username === "" && password === ""){
      alert("Enter your email and password")
    }else{
      window.location.assign("/data")
    }
  }
  return (
    <div className="padding">
   <form ref={form}>
   <div className="form width-500-max shadow-bingo">
      <div className="padding hr">
        <div className="h2"> Login Account </div>
      </div>
      <div className="padding-top-40">
        <div className="padding">
      <TextField name="username" type="text" variant="outlined" fullWidth label="Username"/>
      </div>
      <div className="padding">
      <TextField name="password" type="password" variant="outlined" fullWidth label="Password"/>
      </div>
      <div className="padding">
      <Button variant="contained" color="info" onClick={HandleForm}>
      Login Account
      </Button>
      </div>
  </div>
    </div>
   </form>
    </div>
  )
}
