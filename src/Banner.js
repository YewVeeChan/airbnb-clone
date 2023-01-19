import React, {useState} from "react"
import "./Banner.css"
import { Button } from "@mui/material"
import Search from "./Search"
import { useNavigate } from "react-router-dom";

function Banner() {
    const [showSearch, setShowSearch] = useState (false);

    let navigate = useNavigate();
    function handleClick() {
      navigate("/search");
    }

  return (
    <div className="banner">

        <div className="banner-search">
            {showSearch && <Search />}
            <Button 
            onClick = {() =>
            setShowSearch(!showSearch) }
            className="banner-searchButton"
            variant="outlined">
            {showSearch ? "Hide" : "Search Dates"}
            </Button>
        </div>
        <div className="banner-info">
            <h1>Get out and stretch your imagination</h1>
            <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
            <Button onClick={handleClick} 
            variant="outlined">Explore Nearby
            </Button>
        </div>
    
    </div>
  )
}

export default Banner