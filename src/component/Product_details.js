import React, { useState } from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import arrow from '../assets/Down_arrow.svg';
import '../Product_details.css';
import ship from '../assets/ship.svg';
import truck from '../assets/truck.svg';
import Header from './Header';
import No from '../assets/No.png';
import Yes from '../assets/Yes.png';
import { Navbar, Nav } from "react-bootstrap";
import { Link, Navigate, useParams } from 'react-router-dom';
import Cattle from '../assets/cattle.png';
import Logout from "./Logout";
import { useEffect } from "react";
import { InfinitySpin } from 'react-loader-spinner'
import Loader1 from './Loader';

const Product_details = () => {
    const [records, setRecords] = useState([]);
    const [flag, setFlag] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [show, setShow] = useState(false);
    const [show_detail, setShow_detail] = useState(null);
    const show_details = (show) => {
        setShow_detail(show);
    }
    let Product_id = useParams().id;
    
    useEffect(() => {

        if (Product_id == undefined) {
            console.log("Emp id is not supplied");
            return;
        }

        if (flag) {
            return;
        }

        async function fetchData() {
           
                let data = await fetch(process.env.REACT_APP_BACKEND_HOST + "api/GetHistoryOfProduct", {
                                    method: 'POST',
                                    body: JSON.stringify(
                                        {
                                            "userid": process.env.REACT_APP_ADMIN_USER,
                                            "keyToSearch": Product_id
                                        }),
                                    headers: {
                                        'Authorization': 'Bearer ' + process.env.REACT_APP_BACKEND_ENDUSER_TOKEN,
                                        'Content-Type': 'application/json'
                                        },
                                    });

                data = await data.json();
                    if (data.status) {
                        
                        var final =data.returnables?.length -1
                        setRecords(data.returnables);
                        setShow_detail(data.returnables[final])
                        setFlag(true);
                    }
          }

          fetchData();
 
    }, []);

    const reversedRecords = [...records].reverse();
    console.log(reversedRecords)
    const navbarClass = scrollPosition > 0 ? "navbar1 shadow" : "navbar1";
    return (
        <div >
            <div className='page'>
            <Navbar className={navbarClass} expand="lg" fixed="top">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <div className="title1">
                <Nav.Link href="#home" className="link page-title">
                  <span className="nav-link-name">
                    <img src={Cattle} className="cattle" alt="Cattle" />
                    <h5 className="cattle-trace">Cattle Traceability </h5>
                  </span>
                  <header>
                    <div className="header-toggle" onClick={() => setShow(!show)}>
                     
                    </div>
                  </header>
                </Nav.Link>
              </div>
              <div className="btn-id">
                <Nav.Link href="#home" className="link  link2">
                  <Button variant="light" className="id" >
                    User ID: {process.env.REACT_APP_ADMIN_USER}
                  </Button>
            
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {reversedRecords ? (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 left ">
                            <div>
                                {
                                    reversedRecords.map((element) => (
                                        (element.Type == "Product" && flag &&  
                                            <Row>
                                                <Col>
                                                    <Button className='buttons' variant="light" onClick={() => show_details(element)}>{element.Company_Name}</Button>
                                                </Col>
                                            </Row>) ||
                                        (element.Type == "Shipment" && flag &&
                                            <Row>
                                                
                                                <Col className='col_center'>

                                                    <div className='ship-truck'>  
                                                    { (element.Vehicle[0]== "S" &&      
                                                    <img src={ship} onClick={() => show_details(element)} alt="Ship" className='ship'></img>
                                                    )}
                                                   { (element.Vehicle[0]== "T" &&      
                                                    <img src={truck} onClick={() => show_details(element)} alt="Ship" className='truck'></img>
                                                    )}
                                                    </div>
                                                </Col>
                                            </Row>)
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-lg-6 right">
                            {show_detail ? (
                                <div className="card_detail">
                                    <table className='tbl'>
                                        <tbody>
                                            <tr>
                                                <th colSpan="3">{show_detail.Company_Name}</th>
                                            </tr>
                                                {
                                                    Object.keys(show_detail).map((object,index) => (
                                                        <tr className={index % 2 === 0 ? "row-blue" : "row-white"}>
                                                            <td>{object}</td>
                                                            <td>{show_detail[object]}</td>
                                                        </tr> 
                                                    ))
                                                }
                                        </tbody>
                                    </table>
                                </div>
                            ) :(    <InfinitySpin 
                                width='200'
                                color="blue"
                              />)
                                
                        }
                        </div>
                    </div>
                </div>
        ):(    <InfinitySpin 
            width='200'
            color="blue"
          />)}
            </div>
        </div>
    );
}

export default Product_details;
