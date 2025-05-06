import React from 'react'

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

const Header = () => {
  return (
    <>
    
    <header className='d-flex align-items-center'>

        <div className="container-fluid w-100">
            <div className="row d-flex align-items-center">


                {/* First Section Logo  ===== part 1 ====*/}
                <div className="col-sm-2 part1">
                    <Link to="/" className='d-flex align-items-center logo'>
                        <img src={Logo}  alt="Logo" />
                        <span className='ml-2'>KEF Online</span>
                    </Link>
                </div>





                {/* Second Section Search Bar Wrapper ===== part 2 ===== */}
                <div className="col-sm-3 d-flex align-items-center part2">
                    <Button className='rounded-circle mr-3'><MenuOpenIcon/></Button>
                    <SearchBox />
                </div>



                
                {/* Second Section Icons Wrapper ===== part 3 ===== */}
                <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
                    <Button className='rounded-circle mr-3'><LightModeOutlinedIcon/></Button>
                    <Button className='rounded-circle mr-3'><ShoppingCartOutlinedIcon/></Button>
                    <Button className='rounded-circle mr-3'><MailOutlineIcon/></Button>
                    <Button className='rounded-circle mr-3'><NotificationsNoneOutlinedIcon/></Button>


                    <Button className="myAccWrapper">
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




                </div>


            </div>
        </div>

    </header>
    
    
    </>
  )
}

export default Header
