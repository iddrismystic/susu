import { Button, TextField } from "@mui/material";
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from "react";

const Debit = () => {
const [payment, setpayment] = useState(false)
const [withdrawal, setwithdrawal] = useState(false)
const [amount, setamount] = useState(0)
return ( 
<main className="">


    <section className="Content">

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
        <TextField fullWidth type="number"  label="Amount To Withdraw" onChange={(e)=>setamount(e.target.value)}/>
    </div>
</div>
    </DialogContentText>
</DialogContent>
<DialogActions>
    <Button onClick={()=>setwithdrawal(false)} color="error">Close</Button>
    <Button autoFocus variant="contained" color="success">
    Withdraw {amount}.00
    </Button>
</DialogActions>
</Dialog>
<div className="container">
<div className="section h2">Debit Account</div>
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
    <th>Withdraw</th>
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
    <Button color="success" variant="contained" onClick={()=>setwithdrawal(true)}>
        Withdraw
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
        <Button color="success" variant="contained" onClick={()=>setwithdrawal(true)}>
            Withdraw
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
        <Button color="success" variant="contained" onClick={()=>setwithdrawal(true)}>
            Withdraw
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
 
export default Debit;