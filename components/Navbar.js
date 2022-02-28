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
          <div className="">
          <div className="navigation-bar card padding">
                    <div className="h4">
                     <span className="padding">
                     Susu
                     </span>
                    </div>
                    <div className="z-index-2"> 
{/* <div className="dropdown-hover text-white">
    <div className="drop-button">
  
        <Avatar sx={{ width: 32, height: 32 }}>
            User
        </Avatar>
    </div>
     <div className="drop-menu white item-hoverable text-black">
         <div className="width-300">
         <div className="drop-item">
             <div className="hr row-flex">
            <div className="padding">
            <Avatar sx={{ width: 32, height: 32 }}>
               User
            </Avatar>
            </div>
           <div className="padding">
            <div>{fullname}</div>
            <div>{role}</div>
           </div>
             </div>
         </div>
   
         <div className="drop-item">
          <Link href="/user/update">
              <a>
              Update account
              </a>
          </Link>
         </div>
         <div className="drop-item">
         <Link href="/user/password">
             <a>
            Change Paasword
             </a>
         </Link>
         </div>
         <div className="drop-item">
         <Logout fontSize="small" />
          Logout
         </div>
         </div>
     </div>
</div> */}

                    </div>
           
                       <div className="pointer z-index-1  sideTrigger" >
                       <i className="fas fa-bars pointer" onClick={()=>setsidebar("300px")}></i>
                       </div>
              
            </div>
          </div>
            <div className="sideBar card resnav">
                <div className="padding">
          
                        <Link href="/client/register">
                        <a>
                        <div className="sideLink">Register User</div>
                        </a>
                        </Link>
            
                        <Link href="/data">
                        <a>
                        <div className="sideLink">All Users</div>
                        </a>
                        </Link>
            
             
                </div>
            </div>
            <div className="sideBar card" style={{width:`${sidebar}`}}>
                <div className="padding">
                    
                <div className="z-index-1 text-right">
                       <i className="fas fa-times pointer text-larger"  onClick={()=>setsidebar("0px")}></i>
                       </div>
              
                    <div className="sideLink">
                        <Link href="/dashboard">
                        <a>
                            <i className="fab indigo padding-20 text-white fa-buffer"></i> Dashboard
                        </a>
                        </Link>
                    </div>
              
                    <div className="sideLink">
                        <Link href="/register">
                        <a>
                            <i className="fab indigo padding-20 text-white fa-buffer"></i> Register User
                        </a>
                        </Link>
                    </div>
                    <div className="sideLink">
                        <Link href="/dispatched">
                            <a>
                            <i className="fas indigo padding-20 text-white fa-book"></i>  Dispatched Books
                            </a>
                           
                        </Link>
                    </div>
                    <div className="sideLink">
                        <Link href="/received">
                        <a>
                        <i className="fab indigo padding-20 text-white fa-buffer"></i>  Books Received
                        </a>
                            
                        </Link>
                    </div>
                    <div className="sideLink">
                        <Link href="/add/dispatch">
                            <a>
                            <i className="fas indigo padding-20 text-white fa-book"></i>  Dispatch Books
                            </a>
                           
                        </Link>
                    </div>
                    <div className="sideLink">
                        <Link href="/add/received">
                        <a>
                        <i className="fab indigo padding-20 text-white fa-buffer"></i> Receiving Books
                        </a>
                            
                        </Link>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Navbar;