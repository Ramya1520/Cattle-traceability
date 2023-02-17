import React, { useState } from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import arrow from '../assets/Down_arrow.png';
import '../Product_details.css';
import airplane from '../assets/Airplane.png';
import ship from '../assets/Ship.png';
import truck from '../assets/Truck.webp';
import Header from './Header';
import No from '../assets/No.png';
import Yes from '../assets/Yes.png';

const Product_details = () => {
    const details = [{ Title: "Raw Material Supplier", Time: "13.40", Date: "11/11/2022", Location: "INDIA", Company_Name: "ABC_Pvt_Ltd", Result_of_Inspection: "yes", Vaccination_Details: "Yes" }, { Title: "Manufacturer", Date: "12/11/2022", Location: "INDIA", Company_Name: "ABC_Pvt_Ltd", Result_of_Inspection: "No", Vaccination_Details: "No", Time: "12.00" }, { Title: "Warehouse", Date: "13/11/2022", Location: "INDIA", Company_Name: "ABC_Pvt_Ltd", Time: "12.30", Result_of_Inspection: "yes", Vaccination_Details: "Yes" }, { Title: "Distributor", Date: "14/11/2022", Location: "China", Time: "12.30", Company_Name: "ABC_Pvt_Ltd", Result_of_Inspection: "yes", Vaccination_Details: "No" }, { Title: "Seller", Date: "15/11/2022", Location: "China", Company_Name: "ABC_Pvt_Ltd", Result_of_Inspection: "No", Vaccination_Details: "Yes", Time: "13.44" }];
    const transport = [{ Title: "Raw Material Supplier", Time: "13.40", Date: "11/11/2022", Location: "INDIA", Company_Name: "ERF_Pvt_Ltd", }, { Title: "Manufacturer", Date: "12/11/2022", Location: "INDIA", Company_Name: "FGR_Pvt_Ltd", Time: "12.00" }, { Title: "Warehouse", Date: "13/11/2022", Location: "INDIA", Company_Name: "KKK_Pvt_Ltd", Time: "12.30", }, { Title: "Distributor", Date: "14/11/2022", Location: "China", Time: "12.30", Company_Name: "ABC_Pvt_Ltd", }, { Title: "Seller", Date: "15/11/2022", Location: "China", Company_Name: "ABC_Pvt_Ltd", Time: "13.44" }];
    const [show_detail, setShow_detail] = useState(null);

    const show_details = (show) => {
        setShow_detail(show);
    }

    return (
        <div className='full-page'>
            <Header />
            <div className='page'>
                <div className="container-fluid buttons_details ">
                    <div className="row">
                        <div className="col-lg-6 left ">
                            <div className="buttons_detail">
                                <Row>
                                    <Col>
                                        <Button className='buttons' variant="light" onClick={() => show_details(details[0])}>Raw Material Supplier</Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='col_center'>
                                        <img src={airplane} onClick={() => show_details(transport[0])} alt="airplane" className='airplane'></img>
                                        <img src={arrow} alt="arrow" className='arrow '></img>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button className='buttons' variant="light" onClick={() => show_details(details[1])}>Manufacturer</Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='col_center'>
                                        <img src={ship} onClick={() => show_details(transport[1])} alt="Ship" className='ship'></img>
                                        <img src={arrow} alt="down_arrow" className='arrow'></img>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button className='buttons' variant="light" onClick={() => show_details(details[2])}>Warehouse</Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='col_center'>
                                        <img src={truck} onClick={() => show_details(transport[2])} alt="truck" className='truck'></img>
                                        <img src={arrow} alt="down_arrow" className='arrow'></img>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button className='buttons' variant="light" onClick={() => show_details(details[3])}>Distributor</Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='col_center'>
                                        <img src={airplane} alt="airplane" onClick={() => show_details(transport[3])} className='airplane'></img>
                                        <img src={arrow} alt="down_arrow" className='arrow'></img>
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
