import {TextField, Button} from "@mui/material"
import { useRef } from 'react'
import Navbar from "../../components/Navbar"

const Register = () => {
    const form = useRef(null)
  
    const HandleForm = ()=>{
      const current = form.current;
      const surname = current["surname"].value;
      const lastname = current["lastname"].value;
      const sex = current["sex"].value;
      const age = current["age"].value;
      const business = current["business"].value;
      const daily_rate = current["daily_rate"].value;
      const dob = current["dob"].value;
      const location = current["location"].value;
      const business_name = current["business_name"].value;
      const business_location = current["business_location"].value;
      const contact = current["contact"].value;
      const business_address = current["business_address"].value;
      const next_of_kin = current["next_of_kin"].value;
      const kin_relation = current["kin_relation"].value;
      const kin_contact = current["kin_contact"].value;
      const kin_dob = current["kin_dob"].value;
  
      if(surname === "" || sex === "" || age==="" || business==="" || daily_rate===""){
        alert("Enter sure to fill all the credentials")
      }else{
        // router.push("/data")
        window.location.assign("/data")
      }
    }
    return ( 
        <main className="">
          {/* <div className="loader"></div> */}
   
          <section className="Content">
            <Navbar />
          <div className="padding">
   <form ref={form}>
   <div className="center width-800-max card design navy-left">
      <div className="padding hr">
        <div className="h2 text-navy"> Register user </div>
      </div>
      <div className="padding-top-40 row">
        <div className="padding col sm-12 md-12 lg-12">
          <div className="h3">Personal Information</div>
      </div>
        <div className="padding col sm-12 md-6 lg-6">
      <TextField required name="surname" type="text" variant="outlined" fullWidth label="Surname"/>
      </div>
        <div className="padding col sm-12 md-6 lg-6">
      <TextField required name="lastname" type="text" variant="outlined" fullWidth label="Lastname"/>
      </div>
        <div className="padding col sm-12 md-6 lg-6">
      <TextField required name="dob" type="date" variant="outlined" fullWidth label="Date Of Birth"/>
      </div>
        <div className="padding col sm-12 md-6 lg-6">
      <TextField required name="location" type="text" variant="outlined" fullWidth label="Location"/>
      </div>
      <div className="padding col sm-12 md-6 lg-6">
      <TextField required name="sex" type="text" variant="outlined" fullWidth label="Gender"/>
      </div>
      <div className="padding col sm-12 md-6 lg-6">
      <TextField required name="age" type="text" variant="outlined" fullWidth label="Age"/>
      </div>
      <div className="padding col sm-12 md-12 lg-12">
          <div className="h3">Business Information</div>
      </div>
      <div className="padding col sm-12 md-6 lg-6">
      <TextField required name="business_name" type="text" variant="outlined" fullWidth label="Business Name"/>
      </div>
      <div className="padding col sm-12 md-6 lg-6">
      <TextField required name="business_location" type="text" variant="outlined" fullWidth label="Business Location"/>
      </div>
      <div className="padding col sm-12 md-6 lg-6">
      <TextField required name="business" type="text" variant="outlined" fullWidth label="Type of Business"/>
      </div>
      <div className="padding col sm-12 md-6 lg-6">
      <TextField required name="contact" type="text" variant="outlined" fullWidth label="Contact"/>
      </div>
      <div className="padding col col sm-12 md-12 lg-12">
      <TextField required name="business_address" multiline rows={2} type="text" variant="outlined" fullWidth label="Business Address"/>
      </div>
      <div className="padding col sm-12 md-12 lg-12">
          <div className="h3">Next Of Kin</div>
      </div>
      <div className="padding col sm-12 md-6 lg-6">
      <TextField required name="next_of_kin" type="text" variant="outlined" fullWidth label="Next Of Kin"/>
      </div>
      <div className="padding col sm-12 md-6 lg-6">
      <TextField required name="kin_relation" type="text" variant="outlined" fullWidth label="Relation To Next Of Kin"/>
      </div>
      <div className="padding col sm-12 md-6 lg-6">
      <TextField required name="kin_dob" type="text" variant="outlined" fullWidth label="Date Of Birth"/>
      </div>
      <div className="padding col sm-12 md-6 lg-6">
      <TextField required name="kin_contact" type="text" variant="outlined" fullWidth label="Contact"/>
      </div>
      <div className="padding col sm-12 md-6 lg-6">
      <TextField required name="daily_rate" type="text" variant="outlined" fullWidth label="Daily Rate"/>
      </div>
      <div className="padding col sm-12 md-6 lg-6">
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