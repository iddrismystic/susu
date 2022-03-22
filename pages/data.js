import { Button, TextField } from "@mui/material";
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from "react";
import Navbar from "../components/Navbar";
const Data = () => {
const [payment, setpayment] = useState(false)
const [withdrawal, setwithdrawal] = useState(false)
return ( 
<main className="">


    <section className="Content">
        <Navbar />
    <Dialog
open={payment}
// onClose={handleClose}
aria-labelledby="alert-dialog-title"
aria-describedby="alert-dialog-description"
>
<DialogTitle id="alert-dialog-title">
  <div className="padding hr">
  {"Make Daily Payment"}
  </div>
</DialogTitle>
<DialogContent>
    <DialogContentText id="alert-dialog-description">
        <div className=" row default padding-20">
    <div className="padding col sm-12 md-6 lg-6">
    <TextField fullWidth defaultValue={"Iddris Abdul wahab"} label="Fullname"  disabled/>
    </div>
    <div className="padding col sm-12 md-6 lg-6">
    <TextField fullWidth type="number" defaultValue={34} label="Rate"  disabled/>
    </div>
    <div className="padding col sm-12 md-12 lg-12">
    <TextField fullWidth type="date" label="Date"  autoFocus/>
    </div>
        </div>
    </DialogContentText>
</DialogContent>
<DialogActions>
    <Button onClick={()=>setpayment(false)} color="error">Close</Button>
    <Button autoFocus  variant="contained" color="success">
    Make Payment 50.00
    </Button>
</DialogActions>
</Dialog>
        <Dialog
open={withdrawal}
// onClose={handleClose}
aria-labelledby="alert-dialog-title"
aria-describedby="alert-dialog-description"
>
<DialogTitle id="alert-dialog-title">
<div className="padding hr">
{"Make A Withrawal"}
</div>
</DialogTitle>
<DialogContent>
    <DialogContentText id="alert-dialog-description">
<div className="width-500-max row default padding-20">
    <div className="padding col sm-12 md-6 lg-6">
        <TextField fullWidth defaultValue={"Iddris Abdul wahab"} label="Fullname"  disabled/>
    </div>
    <div className="padding  col sm-12 md-6 lg-6">
        <TextField fullWidth type="number" defaultValue={34} label="Rate"  disabled/>
    </div>
    <div className="padding col sm-12 md-6 lg-6">
        <TextField fullWidth type="number" defaultValue={300.00} label="Current Balance"  disabled/>
    </div>

    <div className="padding col sm-12 md-6 lg-6">
        <TextField fullWidth type="number"  label="Amount To Withdraw" />
    </div>
</div>
    </DialogContentText>
</DialogContent>
<DialogActions>
    <Button onClick={()=>setwithdrawal(false)} color="error">Close</Button>
    <Button autoFocus variant="contained" color="success">
    Withdraw 0.00
    </Button>
</DialogActions>
</Dialog>
<div className="container">
<div className="row-flex card navy-left padding">
<div><i className="lni lni-credit-cards h1 padding"></i></div>
<div className="padding h2">
    Credit Account
</div>
</div>
<div className="section">
    <TextField variant="outlined" label="Search" />
</div>
<div className="horizontal-scroll default padding ">
<table className="table stripped">
<thead>
    <th>Username</th>
    <th>Sex</th>
    <th>Age</th>
    <th>Business</th>
    <th>Rate</th>
    <th>Start Date</th>
    <th>Credit</th>
</thead>
<tbody>
<tr>
<td>Iddris abdul wahab</td>
<td>Male</td>
<td>32</td>
<td>Trader</td>
<td>3</td>
<td>22/37/2022</td>
<td>
    <Button color="success" variant="contained" onClick={()=>setpayment(true)}>
        Credit
    </Button>
</td>

</tr>
    <tr>
    <td>Iddris abdul Razak</td>
    <td>Male</td>
    <td>32</td>
    <td>Trader</td>
    <td>3</td>
    <td>22/37/2022</td>
    <td>
        <Button color="success" variant="contained" onClick={()=>setpayment(true)}>
            Credit
        </Button>
    </td>


    </tr>
    <tr>
    <td>Abdulai Karim</td>
    <td>Male</td>
    <td>32</td>
    <td>Trader</td>
    <td>3</td>
    <td>22/37/2022</td>
    <td>
        <Button color="success" variant="contained" onClick={()=>setpayment(true)}>
            Credit
        </Button>
    </td>

    </tr>

</tbody>
</table>
</div>
</div>

    </section>
</main>
     );
}
 
export default Data;