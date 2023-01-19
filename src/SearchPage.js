import { Button } from "@mui/material";
import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
        <div className="searchPage-info">
            <p>62 stays • 1 February to 4 February • 2 guests</p>
            <h1>Stays nearby</h1>
            <Button
            variant="outlined">
            Cancellation Flexibility</Button>
            <Button
            variant="outlined">
            Type of place</Button>
            <Button
            variant="outlined">
            Price</Button>
            <Button
            variant="outlined">
            Rooms and beds</Button>
            </div>
            <SearchResult
                img="https://a0.muscache.com/im/pictures/prohost-api/Hosting-755137040389728919/original/f0e6a6ed-4acb-4efa-bd29-9de320df368e.jpeg?im_w=480"
                location="Joshua Tree, Califronia, US"
                title="Invisible House Joshua Tree | Modern Masterpiece"
                description="Entire home hosted by Fieldtrip"
                star="4.83"
                price="RM 13,763 / night"
                total="RM 50,596 total"
            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/c596d286-57a6-460e-b6a8-9698b6f31157.jpg?im_w=480"
                location="Forde, Vestland fylke, Norway"
                title="Amazing view of fjord & mountains glamping Birdbox"
                description="Treehouse hosted by Torstein"
                star="4.88"
                price="RM 1,547 / night"
                total="RM 5,336 total"
            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/miso/Hosting-53630298/original/fc04d5cb-0ae4-4d42-a886-8e4e91048b5a.jpeg?im_w=480"
                location="El Prado, New Mexico, United States"
                title="Taos Skybox Stargazer High Desert Retreat"
                description="Entire home hosted by Sean"
                star="5.00"
                price="RM 598 / night"
                total="RM 2,385 total"
            />   
            

    </div>
  )
}

export default SearchPage