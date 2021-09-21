import React from "react";

function Footer(){
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <p> &​#169; Copyright Andrea Agosta {year} </p>
        </footer>
    );
}

export default Footer;



