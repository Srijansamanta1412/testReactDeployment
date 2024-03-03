import React from "react";
import { Link } from "react-router-dom";

function Menu(){
    return(<>
    <Link to={"/"}>About US</Link>
    <Link to={"/contact"}> Contact US</Link>
    <Link to={"/services/:name"}>Services</Link>
    <br></br>
    <p>About Us</p>
    <p>Contact Us</p>
    </>)
}
export {Menu}