import React, { useState } from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import arrow from '../assets/Down_arrow.png';
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

const Product_details = () => {
    const [records, setRecords] = useState([]);
    const [show_detail, setShow_detail] = useState(null);
    const [flag, setFlag] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [show, setShow] = useState(false);
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
            let data = await fetch('https://696ae6ee-9032-4134-b82c-2768a7f05662.mock.pstmn.io/GetHistoryOfProduct', {
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
                        setRecords(data.returnables);
                        setFlag(true);
                    }
          }

          fetchData();
 
    }, []);

    const navbarClass = scrollPosition > 0 ? "navbar1 shadow" : "navbar1";
    return (
        <div>
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
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 left ">
                            <div>
                                {
                                    records.map((element) => (
                                        (element.Type == "Product" && flag &&  
                                            <Row>
                                                <Col>
                                                    <Button className='buttons' variant="light" onClick={() => show_details(element)}>{element.Title}</Button>
                                                </Col>
                                            </Row>) ||
                                        (element.Type == "Shipment" && flag &&
                                            <Row>
                                                <Col className='col_center'>
                                                    <div className='ship-arrow'>
                                                    <img src={ship} onClick={() => show_details(element)} alt="Ship" className='ship'></img>
                                                    <img src={arrow} alt="down_arrow" className='ship-arrow'></img>
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
                                                <th colSpan="3">{show_detail.Title}</th>
                                            </tr>
                                                {
                                                    Object.keys(show_detail).map((object) => (
                                                        <tr className="row-date">
                                                            <td>{object}</td>
                                                            <td>{show_detail[object]}</td>
                                                        </tr> 
                                                    ))
                                                }
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <h5 className="view_detail">Click the button to view details.</h5>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product_details;
