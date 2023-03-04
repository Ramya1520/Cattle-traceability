import React from "react";
import { useNavigate } from "react-router-dom";
import signout from "../assets/signout.png";
import { Button } from "react-bootstrap";
function Logout(){
    const navigate =useNavigate()

    const loggedout=()=>{
        console.log("^^^")
        navigate('/')
    }

    return(
        <Button variant="light" onClick={loggedout} className="logout">
        Logout <img className="signout" src={signout}></img>
      </Button>
    )
}
export default Logout