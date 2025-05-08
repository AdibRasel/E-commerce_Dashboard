import React, { useState } from 'react'

import Logo from "../../assets/Logo/Logo.png"
import { Link } from 'react-router-dom'

import Button from '@mui/material/Button';

import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import SearchBox from '../SearchBox/SearchBox';

import NightlightIcon from '@mui/icons-material/Nightlight';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';


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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Settings from '@mui/icons-material/Settings';
import RestoreIcon from '@mui/icons-material/Restore';
import Logout from '@mui/icons-material/Logout';

import Config from '../../../Config.json';
import SideMenu from './SideMenu';



const Header = () => {


    // My Account Dropdown
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClickMyAccDrop = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccDrop = () => {
        setAnchorEl(null);
    };
   
   
    // Notification Dropdown
    const [anchorElNotificationsDrop, setNotificationsDropAnchorEl] = React.useState<null | HTMLElement>(null);
    const openNotificationsDrop = Boolean(anchorElNotificationsDrop);
    const handleClickNotificationsDrop = (event: React.MouseEvent<HTMLElement>) => {
        setNotificationsDropAnchorEl(event.currentTarget);
    };
    const handleCloseNotificationsDrop = () => {
        setNotificationsDropAnchorEl(null);
    };


    return (
        <>

            <header className='d-flex align-items-center'>

                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center">


                        {/* First Section Logo  ===== part 1 ====*/}
                        <div className="col-sm-2 part1">
                            <Link to="/" className='d-flex align-items-center logo'>
                                <img src={Logo} alt="Logo" />
                                <span className='ml-2'>{Config.Name}</span>
                                
                            </Link>
                        </div>





                        {/* Second Section Search Bar Wrapper ===== part 2 ===== */}
                        <div className="col-sm-3 d-flex align-items-center part2">
                            <Button className='rounded-circle mr-3'><MenuOpenIcon /></Button>
                            <SearchBox />
                        </div>




                        {/* Second Section Icons Wrapper ===== part 3 ===== */}
                        <div className="col-sm-7 d-flex align-items-center justify-content-end part3">

                            <Button className='rounded-circle mr-3'><LightModeOutlinedIcon /></Button>



                            <Button className='rounded-circle mr-3'><ShoppingCartOutlinedIcon /></Button>


                            <Button className='rounded-circle mr-3'><MailOutlineIcon /></Button>

                            {/* Notification Start  */}
                            <Button onClick={handleClickNotificationsDrop} className='rounded-circle mr-3'><NotificationsNoneOutlinedIcon /></Button>
                            <Menu
                                anchorEl={anchorElNotificationsDrop}
                                className="notifications"
                                id="notifications"
                                open={openNotificationsDrop}
                                onClose={handleCloseNotificationsDrop}
                                onClick={handleCloseNotificationsDrop}
                                slotProps={{
                                    paper: {
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&::before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >

                                <div className="head p-2 pb-0 d-flex align-items-center justify-content-between">
                                    <span className='font-bold'>Today's Order (12) </span>
                                    <span>See All</span>
                                </div>

                                <Divider className='mb-3' />


                                <MenuItem onClick={handleCloseNotificationsDrop}>
                                    <div className="d-flex align-items-center NotificationsItem">
                                        <div className="userImg">
                                            <span className='rounded-circle'>
                                                <img src="https://avatars.githubusercontent.com/u/97701792?v=4" alt="" />
                                            </span>
                                        </div>

                                        <p>Headphon g54 &nbsp;&nbsp;&nbsp; </p> <br />
                                        <p>  1250/-</p>

                                    </div>
                                </MenuItem>
                            </Menu>

                            {/* Notification End */}





                            {/* My Account Start  */}
                            <Button className="myAccWrapper" onClick={handleClickMyAccDrop}>
                                <div className="myAcc d-flex align-items-center">
                                    <div className="userImg">
                                        <span className='rounded-circle'>
                                            <img src="https://avatars.githubusercontent.com/u/97701792?v=4" alt="" />
                                        </span>
                                    </div>


                                    <div className="userInfo">
                                        <h4>Rasal Hossain</h4>
                                        <p className='mb-0'>@rasal</p>
                                    </div>
                                </div>




                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleCloseMyAccDrop}
                                onClick={handleCloseMyAccDrop}
                                slotProps={{
                                    paper: {
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&::before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={handleCloseMyAccDrop}>
                                    <ListItemIcon>
                                        <AccountCircleOutlinedIcon fontSize="small" />
                                    </ListItemIcon>
                                    My Account
                                </MenuItem>
                                <MenuItem onClick={handleCloseMyAccDrop}>
                                    <ListItemIcon>
                                        <RestoreIcon fontSize="small" />
                                    </ListItemIcon>
                                    Reset Password
                                </MenuItem>
                                <MenuItem onClick={handleCloseMyAccDrop}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                            {/* My Account End  */}




                        </div>


                    </div>
                </div>

            </header>
            


            <SideMenu />






            


        </>
    )
}

export default Header
