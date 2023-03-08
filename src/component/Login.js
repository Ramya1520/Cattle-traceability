import React, { useState } from "react";
import "./Login.css";
import Cattle from '../assets/cattle.png'
import { useNavigate } from "react-router-dom";
import Trace from '../assets/trace.png'
import signout from "../assets/signout.png"

function Login() {
    const [login, setLogin] = useState({ username: "", password: "" });
    const navigate=useNavigate()

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLogin({ ...login, [name]: value });
    }

    const handleLogin = (event) => {
        event.preventDefault();
        console.log("&&")
        if(login.username==="emp1" && login.password==="emp1" ){
            console.log("ss&&")
            navigate('/farmuser')
        }
        else if(login.username==="emp2" && login.password==="emp2" ){
            console.log("ss&&")
            navigate('/slaughterhouse')
        }
        else if(login.username==="emp3" && login.password==="emp3" ){
            console.log("ss&&")
            navigate('/logistics')
        }
        else if(login.username==="emp4" && login.password==="emp4" ){
            console.log("ss&&")
            navigate('/seller')
        }

        // Do your login logic here
    }

    return (
        <div className="container-fluid">
            <div className="row full-row">
                <div className="col-lg-6 right-side">
                  
               
                    <div className="right-side-content">
                    <img src={Trace} className="trace"></img> 
                    
                    </div>
                </div>           
                <div className="col-lg-6 left-side" >
                    <div className="left-side-login">
                        <div className="ctl-img">
                            <img className="cattle-img-logo" src={Cattle} alt="cattle-logo"></img>
                        </div>
                        <div className="left-side-content">
                            <div className="login-page">
                                <h5 className="traceability">Cattle Traceability</h5>
                                <div className="form">
                                    <form className="login-form" onSubmit={handleLogin}>
                                        <input type="text" placeholder="username" name="username" value={login.username} onChange={handleInputChange} />
                                        <input type="password" placeholder="password" name="password" value={login.password} onChange={handleInputChange} />
                                        <button className="btn btn-primary" type="submit">login</button>
                            
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
