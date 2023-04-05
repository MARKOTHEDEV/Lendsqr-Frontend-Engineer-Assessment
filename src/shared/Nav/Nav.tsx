import React, { useState } from "react"
import InputWithSearch from "../InputWithSearch/InputWithSearch"
import AppLogo from "../Logo/Logo"
import './Nav.style.scss'
import {GoThreeBars} from 'react-icons/go'
import {AiOutlineBell} from 'react-icons/ai'
import {AiOutlineCaretDown} from 'react-icons/ai'
import UserImage from '../../assets/user.png'
import OffCanvas from "../OffCanvas/OffCanvas"
import { useMediaQuery } from 'react-responsive'
import {BiUserCircle} from 'react-icons/bi'
import {FaBars} from 'react-icons/fa'
import SideBar from "../SideBar/SideBar"


const NavLinksContainer = ():React.ReactElement=>{
    return(
        <div className="navlinks_container">
            <InputWithSearch />

            <div className="navusersection__container">
                <a href="">Docs</a>
                <AiOutlineBell className="nav_bell"/>
                <div>
                <img src={UserImage} alt="" />
                <p>Ayodeji</p>
                <AiOutlineCaretDown/>
                </div>
            </div>
        </div>
    )
}
const Nav =()=>{
  const [isOpen, setIsOpen] = useState(false)
  const [openSideBar,setOpenSideBar] =useState(false)
  const isLaptop = useMediaQuery({ query: '(min-width: 700px)' });
    
    return (
        <div className="nav__container">
            <AppLogo/>
            {/* <GoThreeBars className="ham_burger"/> */}
        
            {
                isLaptop?
            <NavLinksContainer/>
            :
            <div className="hambar_container">
                <BiUserCircle onClick={e=>setIsOpen(!isOpen)}/>
                <FaBars onClick={e=>setOpenSideBar(!openSideBar)}/>
            </div>
            }

            






            <OffCanvas
        size={80}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        // show nav
      >
            <NavLinksContainer/>
      </OffCanvas>

      <OffCanvas
        size={80}
        setIsOpen={setOpenSideBar}
        isOpen={openSideBar}
        // shows side bar
      >
            <SideBar/>
      </OffCanvas>
        </div>
    )
}
export default Nav