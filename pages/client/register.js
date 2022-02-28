import {TextField, Button} from "@mui/material"
import { useRef } from 'react'
import Navbar from "../../components/Navbar"

const Register = () => {
    const form = useRef(null)
  
    const HandleForm = ()=>{
      const current = form.current;
      const username = current["username"].value;
      const sex = current["sex"].value;
      const age = current["age"].value;
      const business = current["business"].value;
      const daily_rate = current["daily_rate"].value;
      const start_date = current["start_date"].value;
  
      if(username === "" || sex === "" || age==="" || business==="" || daily_rate==="" || start_date ===""){
        alert("Enter sure to fill all the credentials")
      }else{
        // router.push("/data")
        window.location.assign("/data")
      }
    }
    return ( 
        <main>
          <Navbar />
          <section className="Content">
          <div className="padding">
   <form ref={form}>
   <div className="form width-500-max shadow-bingo">
      <div className="padding hr">
        <div className="h2"> Register user </div>
      </div>
      <div className="padding-top-40">
        <div className="padding">
      <TextField required name="username" type="text" variant="outlined" fullWidth label="Username"/>
      </div>
      <div className="padding">
      <TextField required name="sex" type="password" variant="outlined" fullWidth label="Sex"/>
      </div>
      <div className="padding">
      <TextField required name="age" type="password" variant="outlined" fullWidth label="Age"/>
      </div>
      <div className="padding">
      <TextField required name="business" type="password" variant="outlined" fullWidth label="Type of Business"/>
      </div>
      <div className="padding">
      <TextField required name="daily_rate" type="password" variant="outlined" fullWidth label="Daily Rate"/>
      </div>
      <div className="padding">
      <TextField required name="start_date" autoFocus type="date" variant="outlined" fullWidth label="Start Date"/>
      </div>
      <div className="padding">
      <Button variant="contained" color="info" onClick={HandleForm}>
      Register user
      </Button>
      </div>
  </div>
    </div>
   </form>
    </div>
          </section>
        </main>
     );
}
 
export default Register;