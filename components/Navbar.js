import Link from "next/link";
import { useState, useEffect } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
const Navbar = () => {
    const [sidebar, setsidebar] = useState("250px")
    useEffect(()=>{
        window.addEventListener("resize" , ()=>{
            setsidebar("250px")
        })
    })
    return ( 
        <section>
        <nav className="fixed-top white width-100-p ">
        <div className="design">
            <div className="navigation-bar card hr">
            <div className="h4 padding">
                <span className="">
                Susu
                </span>
            </div>
            <div className="row-flex">
            <div className="dropdown-hover">
               <button className="height-40 width-40 circle button white pointer hover-indigo hover-text-white">W</button>
               <div className="drop-menu white item-hoverable">
               <div className="width-200">
               <div className="drop-item">
                       Iddris Abdul Wahab
                    </div>
                   <div className="drop-item">
                       Update Account
                    </div>
                   <div className="drop-item">
                      Logout
                    </div>
              </div>
               </div>
            </div>
            <div className="pointer z-index-1 sideTrigger" >
            <button className="button height-40 width-40 circle" onClick={()=>setsidebar("250px")}>
            <i className="fas fa-bars pointer"></i>
            </button>
            </div>
            </div>

            </div>
        </div>
        </nav>
            <div className="sideBar resnav" style={{width:`${sidebar}`}}>
                <div className="padding-20">
                    <div className="default padding-20">
                    <div className="text-right sideTrigger">
                    <button className="button height-40 width-40 circle white"  onClick={()=>setsidebar("0px")}>
                    <i className="fas fa-times pointer text-red"></i>
                    </button>
                    </div>
                    <Link href="/client/register">
                    <a className="text-black">
                    <div className="sideLink"><i className="fas fa-user-plus text-indigo"></i> Register User</div>
                    </a>
                    </Link>
                    <Link href="/data">
                    <a className="text-black">
                    <div className="sideLink"><i className="fas fa-plus text-indigo"></i> Credit Account</div>
                    </a>
                    </Link>
                    <Link href="/debit">
                    <a className="text-black">
                    <div className="sideLink"><i className="fas fa-minus text-indigo"></i> Debit Account</div>
                    </a>
                    </Link>
                    <Link href="/report">
                    <a className="text-black">
                    <div className="sideLink"><i className="fas fa-history text-indigo"></i> Report</div>
                    </a>
                    </Link>
                    </div>
                </div>
            </div>
            {/* <div className="sideBar card" >
             
               
            </div> */}
        </section>
     );
}
 
export default Navbar;