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
            <Navbar />

            <section className="Content">
            <Dialog
        open={payment}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Make Daily Payment"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
       <div className="padding">
           <TextField fullWidth defaultValue={"Iddris Abdul wahab"} label="Fullname"  disabled/>
       </div>
       <div className="padding">
           <TextField fullWidth type="number" defaultValue={34} label="Rate"  disabled/>
       </div>
       <div className="padding">
           <TextField fullWidth type="date" label="Date"  autoFocus/>
       </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setpayment(false)}>Close</Button>
          <Button autoFocus>
            Make Payment
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
          {"Make A Withrawal"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
              <div className="width-500-max">
              <div className="padding">
           <TextField fullWidth defaultValue={"Iddris Abdul wahab"} label="Fullname"  disabled/>
       </div>
       <div className="padding">
           <TextField fullWidth type="number" defaultValue={34} label="Rate"  disabled/>
       </div>
       <div className="padding">
           <TextField fullWidth type="number" defaultValue={300.00} label="Current Balance"  disabled/>
       </div>
 
       <div className="padding">
           <TextField fullWidth type="number"  label="Amount To Withdraw" />
       </div>
              </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setwithdrawal(false)}>Close</Button>
          <Button autoFocus>
            Withdraw
          </Button>
        </DialogActions>
      </Dialog>
            <table className="table stripped">
                <thead>
                    <th>Username</th>
                    <th>Sex</th>
                    <th>Age</th>
                    <th>Business</th>
                    <th>Rate</th>
                    <th>Start Date</th>
                    <th>Payment</th>
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
                            <Button color="info" onClick={()=>setpayment(true)}>
                                Pay
                            </Button>
                        </td>
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
                            <Button color="info" onClick={()=>setpayment(true)}>
                                Pay
                            </Button>
                        </td>
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
                            <Button color="info" onClick={()=>setpayment(true)}>
                                Pay
                            </Button>
                        </td>
                        <td>
                            <Button color="success" variant="contained" onClick={()=>setwithdrawal(true)}>
                                Withdraw
                            </Button>
                        </td>
                       
                    </tr>
               
                </tbody>
            </table>
            </section>
        </main>
     );
}
 
export default Data;