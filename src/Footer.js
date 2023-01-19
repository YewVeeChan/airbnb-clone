import React from "react"
import "./Footer.css"



function Footer() {

    const year = new Date().getFullYear();

  return (
    
    <div className="footer">

    <p>© {year} Airbnb clone! No rights reserved - this is a demo</p>
    <p>Privacy • Terms • Sitemap • Company Details</p>
    </div>

  )
}

export default Footer