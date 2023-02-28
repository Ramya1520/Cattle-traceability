
import React, { useState } from 'react';
import { Modal, Button, } from 'react-bootstrap';
import './Create_new.css'
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Navigate, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function New_form() {
    const [formData, setFormData] = useState({
        userid: '',
        contractName: '',
        ID: '',
        Name: '',
        Designation: '',
        Phone: '',
        Mail: '',
        Organization: ''
    });
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [formTableData, setFormTableData] = useState(null);
    const [formErrors, setFormErrors] = useState({});
    const location = useLocation();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const App_user = location.state?.user
    const navigate=useNavigate()

   

    const handleSave = (event) => {
        if (formData.ID && formData.Name && formData.Mail && formData.contractName && formData.Phone &&formData.Organization) {
        setShow(true)  
        }
      
     
       if(show == true){
            const formattedFormData = {
                userid: formData.userid,
                asset: {
                    contractName: formData.contractName,
                    assetValue: {
                        ID: App_user,
                        Name: formData.Name,
                        Designation: formData.Designation,
                        Phone: formData.Phone,
                        Mail: formData.Mail,
                        Organization: formData.Organization
                    }
                }
            };

            console.log("farmdata")
            setFormTableData(formattedFormData);
            setShowConfirmation(true);
            console.log(formattedFormData)
            navigate('/manage',{state :{user:App_user}})
           
        }
    
      
        event.preventDefault();
        let errors = {};
        if (!formData.userid) {
            errors.userid = "*User ID is required";
        }
        if (!formData.contractName) {
            errors.contractName = "*Contract Name is required";
        }
        if (!formData.User) {
            errors.User = "*User ID is required";
        }

        if (!formData.userid) {
            errors.userid = "*User ID is required";
        }
        if (!formData.contractName) {
            errors.contractName = "*Contract Name is required";
        }
        if (!formData.Mail) {
            errors.Mail = "*Mail is required";
        }
        if (!formData.Name) {
            errors.Name = "*Name is required";
        }
        if (!formData.Phone) {
            errors.Phone = "*Phone is required";
        }
        if (!formData.ID) {
            errors.ID = "*ID is required";
        }
        if (!formData.Organization) {
            errors.Organization = "*ID is required";
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }
       
   

    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: "" });
    };

    return (
        <div className='container-fluid pg'>
            <div className='row'>
                <div className='col-lg-12 crd'>
                    <div class="login-page">
                        <div class="form">
                            <form class="login-form" onSubmit={handleSave}>
                                <h6 className='fill-up'>Fill Up</h6>
                                <input type="text" placeholder="User ID" name="userid" value={App_user} onChange={handleChange} disabled />
                                <input type="text" placeholder="Contract Name" name="contractName" value={formData.contractName} onChange={handleChange} />
                                {formErrors.contractName && <p className="error">{formErrors.contractName}</p>}
                                <input type='email' placeholder="Mail" name="Mail" value={formData.Mail} onChange={handleChange} />
                                {formErrors.Mail && <p className="error">{formErrors.Mail}</p>}
                                <input type="text" placeholder="Name" name="Name" value={formData.Name} onChange={handleChange} />
                                {formErrors.Name && <p className="error">{formErrors.Name}</p>}
                                <input type="tel" placeholder="Mobile" name="Phone" value={formData.Phone} onChange={handleChange} />
                                {formErrors.Phone && <p className="error">{formErrors.Phone}</p>}
                                <input type="text" placeholder='ID' name="ID" value={formData.ID} onChange={handleChange} />
                                {formErrors.ID && <p className="error">{formErrors.ID}</p>}
                                <input type="text" placeholder='Organization' name="Organization" value={formData.Organization} onChange={handleChange} />
                                {formErrors.Organization && <p className="error">{formErrors.Organization}</p>}
                                <input type="text" placeholder="Designation" name="Designation" value={formData.Designation} onChange={handleChange} />

                                <Button onClick={handleSave}>Save</Button>
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
                <Button variant="primary" onClick={handleSave}>
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