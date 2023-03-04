
import React, { useState } from 'react';
import { Modal, Button, } from 'react-bootstrap';
import './Create_new.css'
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Navigate, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useEffect } from 'react';


function New_form() {

    const [shipmentData, setShipmentData] = useState({
        userid: "",
        shipment: {
            Name: "",
            Source: "",
            Destination: "",
            Started: "",
            Ended: "",
            Logistics: "",
            Vehicle: "",
            Products: ""
        }
    });
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
    const [formTableData, setFormTableData] = useState(null);
    const [formErrors, setFormErrors] = useState({});
    const location = useLocation();
    const App_user = location.state?.user
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
const handleSaveChanges=()=>{
    console.log(shipmentData,"data")
    // convertDateToTimestamp()
    navigate('/manage', { state: { user: App_user } })
}
const convertDateToTimestamp = (date) => {
    return Math.floor(date.getTime() / 1000);
  };

  
const handleDateChange = () => {
    const currentDate = new Date();
    const currentTimestamp = convertDateToTimestamp(currentDate);
  
    setShipmentData({
      ...shipmentData,
      shipment: {
        ...shipmentData.shipment,
        Started: currentTimestamp,
        Ended: currentTimestamp
      }
    });
  };
   
 
  
 const handleSave = (event) => {
if(shipmentData.shipment.Name &&shipmentData.shipment.Destination&&shipmentData.shipment.Logistics&&shipmentData.shipment.Products &&shipmentData.shipment.Source &&shipmentData.shipment.Vehicle){
    const startTimestamp = startDate.getTime();
    const endTimestamp = endDate.getTime();
    shipmentData.shipment.Started=startTimestamp
    shipmentData.shipment.Ended=endTimestamp
    shipmentData.userid=App_user
    console.log(startTimestamp, endTimestamp);
    console.log(shipmentData,"P")

    //     const fetchData = async () => {
    //       const response = await fetch(process.env.REACT_APP_BACKEND_HOST + "", {
    //         method: 'POST',
    //         body: JSON.stringify(
    //           {
    //            shipmentData
    //           }
    //         ),
    //         headers: {
    //           'Content-type': 'application/json; charset=UTF-8',
    //           'Authorization': 'Bearer ' + process.env.REACT_APP_BACKEND_ENDUSER_TOKEN
    //           //process.env.BACKEND_ENDUSER_TOKEN
    //         }
    //       }).then(res => res.json())
    //         .then(data => {
    //           console.log(data);
    //         })
    //         .catch(err => console.log(err));
        
    //     fetchData();
    //   };
    handleShow()
}



        let errors = {};

        if (!shipmentData.userid) {
            errors.userid = "*User ID is required";
        }
        if (!shipmentData.shipment.Name) {
            errors.name = "*Shipment name is required";
        }
        if (!shipmentData.shipment.Source) {
            errors.source = "*Source is required";
        }
        if (!shipmentData.shipment.Destination) {
            errors.destination = "*Destination is required";
        }
        if (!shipmentData.shipment.Logistics) {
            errors.logistics = "*Logistics is required";
        }
        if (!shipmentData.shipment.Vehicle) {
            errors.vehicle = "*Vehicle is required";
        }
        if (!shipmentData.shipment.Products) {
            errors.products = "*Products is required";
        }
        if (!shipmentData.shipment.Started) {
            errors.Started = "*Started is required";
        }
        if (!shipmentData.shipment.Ended) {
            errors.Ended = "*Ended is required";
        }


        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }
        else{
            handleShow()
        }

    }

    return (
        <div className='container-fluid pg'>
            <div className='row'>
                <div className='col-lg-12 crd'>
                    <div class="login-page">
                        <div class="form test-form">
                            <form class="login-form" onSubmit={handleSave}>
                                <h6 className='fill-up'>Fill Up!</h6>
                                <div className='property'>
                                    <input type="text" placeholder="UserId" value={App_user} disabled />                               
                                    <input type="text" placeholder='Name' value={shipmentData.shipment.Name} onChange={(e) => setShipmentData({ ...shipmentData, shipment: { ...shipmentData.shipment, Name: e.target.value } })} />  
                                </div>
                                <div className='shipment-name'>
                                {/* {formErrors.userid && <div className='error'>{formErrors.userid}</div>} */}
                                {formErrors.name && <div className='error'>{formErrors.name}</div>}
                                </div>
                                <input type="text" placeholder='Source' value={shipmentData.shipment.Source} onChange={(e) => setShipmentData({ ...shipmentData, shipment: { ...shipmentData.shipment, Source: e.target.value } })} />
                                {formErrors.source && <div  className="error">{formErrors.source}</div>}
                               
                                <div className='mail-error'>
                                </div>
                                <div className='property'>
                                <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="dd/MM/yyyy HH:mm"
        placeholderText="Start Date"
        data-tip={startDate.toLocaleString()}
      />
      <DatePicker
      placeholder="End Date"
        selected={endDate}
        onChange={date => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="dd/MM/yyyy HH:mm"
      />
                                             </div>
                                <div className='error-msg'>
                              
                                </div>
                                <input type="text" placeholder='Destination' value={shipmentData.shipment.Destination} onChange={(e) => setShipmentData({ ...shipmentData, shipment: { ...shipmentData.shipment, Destination: e.target.value } })} />
                                {formErrors.destination && <div  className="error">{formErrors.destination}</div>}
                                <div className='property'>
                                <input type="text" placeholder='Logistics' value={shipmentData.shipment.Logistics} onChange={(e) => setShipmentData({ ...shipmentData, shipment: { ...shipmentData.shipment, Logistics: e.target.value } })} />
                               
                                <input type="text" placeholder='Vehicle' value={shipmentData.shipment.Vehicle} onChange={(e) => setShipmentData({ ...shipmentData, shipment: { ...shipmentData.shipment, Vehicle: e.target.value } })} />
                          
                                </div>
                                <div className='error-msg'>
                                {formErrors.logistics && <div className="error">{formErrors.logistics}</div>}
                                {formErrors.vehicle && <div className="error">{formErrors.vehicle}</div>}
                                </div>
                                <input type="text" placeholder='Products' value={shipmentData.shipment.Products} onChange={(e) => setShipmentData({ ...shipmentData, shipment: { ...shipmentData.shipment, Products: e.target.value } })} />
                                {formErrors.products && <div className="error">{formErrors.products}</div>}
                                <div className='btns'>
                                    <Button onClick={handleSave} className="save">Save</Button>
                                </div>
                                <>
    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default New_form