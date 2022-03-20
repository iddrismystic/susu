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
import Brand from "./Brand";
const Navbar = () => {
    const [sidebar, setsidebar] = useState("250px")
    useEffect(()=>{
        window.addEventListener("resize" , ()=>{
            setsidebar("250px")
        })
    })
    return ( 
        <section>
        <nav className="fixed-top card white">
        <div>
            <div className="navigation-bar">
            <div className="h4 padding">
                <span className="">
                Susu
                </span>
            </div>
            <div className="row-flex">
            <div className="dropdown-hover">
               <button className="height-40 width-40 circle button pointer indigo text-navy">W</button>
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
            <div className="sideBar resnav card white" style={{width:`${sidebar}`}}>
                <div className="">
                    <div className="">
                    <div className="text-right sideTrigger">
                    <button className="button height-40 width-40 circle white"  onClick={()=>setsidebar("0px")}>
                    <i className="fas fa-times pointer text-red"></i>
                    </button>
                    </div>
                    <div className="padding-20 hr">
                        <div className="h3 text-navy"><Brand /></div>
                    </div>
                    <div className="padding navy-light">
                       <div className="row-flex">
                           <div className="padding">
                           <button className="height-40 width-40 circle button white text-navy pointer">W</button>
                           </div>
                           <div className="padding">
                           <div className="h6">
                               Iddris abdul wahab
                           </div>
                           <div className="">
                               Officer
                           </div>
                           </div>
                       </div>
                    </div>
                    <div className="padding-top-20">
                    <Link href="/client/register">
                    <a className="text-navy">
                    <div className="sideLink">
                        <div className="row-flex">
                            <div><i className="lni lni-user padding-right-10"></i></div>
                            <div>
                                Register user
                            </div>
                        </div>
                    </div>
                    </a>
                    </Link>
                 
                    <Link href="/data">
                    <a className="text-navy">
                    <div className="sideLink">
                        <div className="row-flex">
                            <div><i className="lni lni-credit-cards padding-right-10"></i></div>
                            <div>
                                Credit Account
                            </div>
                        </div>
                    </div>
                    </a>
                    </Link>
                 
                    <Link href="/debit">
                    <a className="text-navy">
                    <div className="sideLink">
                        <div className="row-flex">
                            <div><i className="lni lni-money-location padding-right-10"></i></div>
                            <div>
                                Credit Account
                            </div>
                        </div>
                    </div>
                    </a>
                    </Link>

                    <Link href="/report">
                    <a className="text-navy">
                    <div className="sideLink">
                        <div className="row-flex">
                            <div><i className="lni lni-layers padding-right-10"></i></div>
                            <div>
                                Report
                            </div>
                        </div>
                    </div>
                    </a>
                    </Link>
            
                
                    </div>
                    </div>
                </div>
            </div>
            {/* <div className="sideBar card" >
             
               
            </div> */}
        </section>
     );
}
 
export default Navbar;