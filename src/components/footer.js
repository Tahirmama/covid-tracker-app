import React from "react"
import "../App.css"

function Footer() {
    var date = new Date().getFullYear();

    return (
        <footer className="foot" >
            <br />
            <h3><p align="center">Copyrights @ {date} Tahir Muzaffar</p></h3>
<a href = "mailto: tahirmama8@gmail.com" className="link" align="center"> <h3>FOR CONTACT CLICK HERE</h3></a>
            <br />
        </footer>
    )
}

export default Footer;