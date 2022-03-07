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
    const [sidebar, setsidebar] = useState("0px")
    return ( 
        <section>
        <nav className="fixed-top white">
        <div className="design">
            <div className="navigation-bar card padding">
            <div className="h4">
                <span className="padding">
                Susu
                </span>
            </div>

            <div className="pointer z-index-1  sideTrigger" >
            <i className="fas fa-bars pointer" onClick={()=>setsidebar("300px")}></i>
            </div>

            </div>
        </div>
        </nav>
            <div className="sideBar card resnav">
                <div className="padding design">
                    <Link href="/client/register">
                    <a className="text-black">
                    <div className="sideLink"><i class="fas fa-user-plus text-indigo"></i> Register User</div>
                    </a>
                    </Link>
                    <Link href="/data">
                    <a className="text-black">
                    <div className="sideLink"><i class="fas fa-plus text-indigo"></i> Credit Account</div>
                    </a>
                    </Link>
                    <Link href="/data">
                    <a className="text-black">
                    <div className="sideLink"><i class="fas fa-minus text-indigo"></i> Debit Account</div>
                    </a>
                    </Link>
                    <Link href="/data">
                    <a className="text-black">
                    <div className="sideLink"><i class="fas fa-history text-indigo"></i> History</div>
                    </a>
                    </Link>
                </div>
            </div>
            <div className="sideBar card" style={{width:`${sidebar}`}}>
             
               
            </div>
        </section>
     );
}
 
export default Navbar;