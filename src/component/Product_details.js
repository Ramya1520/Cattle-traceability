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
import { Link, Navigate } from 'react-router-dom';
import Cattle from '../assets/cattle.png';
import Logout from "./Logout";


const Product_details = () => {
    const details = [{ Title: "Raw Material Supplier", Time: "13.40", Date: "11/11/2022", Location: "INDIA", Company_Name: "ABC_Pvt_Ltd", Result_of_Inspection: "yes", Vaccination_Details: "Yes" }, { Title: "Manufacturer", Date: "12/11/2022", Location: "INDIA", Company_Name: "ABC_Pvt_Ltd", Result_of_Inspection: "No", Vaccination_Details: "No", Time: "12.00" }, { Title: "Warehouse", Date: "13/11/2022", Location: "INDIA", Company_Name: "ABC_Pvt_Ltd", Time: "12.30", Result_of_Inspection: "yes", Vaccination_Details: "Yes" }, { Title: "Distributor", Date: "14/11/2022", Location: "China", Time: "12.30", Company_Name: "ABC_Pvt_Ltd", Result_of_Inspection: "yes", Vaccination_Details: "No" }, { Title: "Seller", Date: "15/11/2022", Location: "China", Company_Name: "ABC_Pvt_Ltd", Result_of_Inspection: "No", Vaccination_Details: "Yes", Time: "13.44" }];
    const transport = [{ Title: "Raw Material Supplier", Time: "13.40", Date: "11/11/2022", Location: "INDIA", Company_Name: "ERF_Pvt_Ltd", }, { Title: "Manufacturer", Date: "12/11/2022", Location: "INDIA", Company_Name: "FGR_Pvt_Ltd", Time: "12.00" }, { Title: "Warehouse", Date: "13/11/2022", Location: "INDIA", Company_Name: "KKK_Pvt_Ltd", Time: "12.30", }, { Title: "Distributor", Date: "14/11/2022", Location: "China", Time: "12.30", Company_Name: "ABC_Pvt_Ltd", }, { Title: "Seller", Date: "15/11/2022", Location: "China", Company_Name: "ABC_Pvt_Ltd", Time: "13.44" }];
    const [show_detail, setShow_detail] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [show, setShow] = useState(false);
    const show_details = (show) => {
        setShow_detail(show);
    }
    const Product_id="EMP002"
 

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
                    User ID: {Product_id}
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
                                
                                <Row>
                                    <Col>
                                        <Button className='buttons' variant="light" onClick={() => show_details(details[1])}>Farm</Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='col_center'>
                                        <div className='ship-arrow'>
                                        <img src={ship} onClick={() => show_details(transport[1])} alt="Ship" className='ship'></img>
                                        <img src={arrow} alt="down_arrow" className='ship-arrow'></img>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button className='buttons' variant="light" onClick={() => show_details(details[2])}>Slaughterhouse</Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='col_center'>
                                        <div className='truck-arrow'>
                                        <img src={truck} onClick={() => show_details(transport[2])} alt="truck" className='truck'></img>
                                        <img src={arrow} alt="down_arrow" className='arrow'></img>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button className='buttons' variant="light" onClick={() => show_details(details[4])}>Seller</Button>
                                    </Col>
                                </Row>
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
                                            <tr className="row-date">
                                                <td className='time'>Date</td>
                                                <td>{show_detail.Date}</td>
                                            </tr>
                                            <tr className="row-time">
                                                <td className='time'>Time</td>
                                                <td>{show_detail.Time}</td>
                                            </tr>
                                            <tr className="row-location">
                                                <td className='time'>Location</td>
                                                <td>{show_detail.Location}</td>
                                            </tr>
                                            <tr className="row-company">
                                                <td className='time'>Company</td>
                                                <td>{show_detail.Company_Name}</td>
                                            </tr>
                                            {show_detail.Result_of_Inspection &&
                                                <tr className="row-Inspection">
                                                    <td className='time'>Reusult of Inspection</td>
                                                    <td>{(show_detail.Result_of_Inspection == "Yes") && <img src={Yes} className="yes" /> || <img src={No} className="no" />}</td>
                                                </tr>}
                                            {show_detail.Vaccination_Details &&
                                                <tr className="row-vaccination">
                                                    <td className='time'>Vaccination Status</td>
                                                    <td>{(show_detail.Vaccination_Details == "Yes") && <img src={Yes} className="yes" /> || <img src={No} className="no" />}</td>
                                                </tr>}
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
