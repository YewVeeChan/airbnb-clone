import React from "react"
import "./Header.css"
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
        <Link to='/'> 
          <img
            className="header-icon"
            src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt="airbnb"
          />
        </Link>

        
        <div className="header-center">
          <input type="text" />
          <TravelExploreIcon />    
        </div>

        <div className="header-right">
          <p>Become a host</p>
          <LanguageIcon />
          <ArrowDropDownIcon />
          <AccountCircleIcon />

        </div>

    </div>
  )
}

export default Header