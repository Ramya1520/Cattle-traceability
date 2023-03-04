import React from "react";
import { useState } from "react";
import './Manage.css'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import Cattle from '../assets/cattle.png'
function Manage() {
  const [manage, setManage] = useState({
    status: true,
    returnables: [
    {
    Destination: "SH1",
   Ended: "1677598217",
    ID: "SHIP1",
    Logistics: "LOG1",
    Name: "Cow to slaughterhouse",
    Products: "PRO1,PRO2",
   Source: "FH1",
    Started: "1677488117",
    Vehicle: "VH1"
    }
    ]
    });
  const [show, setShow] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const App_user = location.state?.user
  console.log(App_user, "AA")
  const navbarClass = scrollPosition > 0 ? "navbar1 shadow" : "navbar1";




  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(process.env.REACT_APP_BACKEND_HOST + "", {
        method: 'POST',
        body: JSON.stringify(
          {
            "userid": process.env.REACT_APP_ADMIN_USER,
            "emp_org": "FH1"
          }
        ),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': 'Bearer ' + process.env.REACT_APP_BACKEND_ENDUSER_TOKEN
          //process.env.BACKEND_ENDUSER_TOKEN
        }
      }).then(res => res.json())
        .then(data => {
           setManage(data);
        })
        .catch(err => console.log(err));
    };
    fetchData();
  }, []);
  const Handleclick = () => {
    navigate('/create', { state: { user: App_user } })
  }
  const getRowClass = (index) => {
    return index % 2 === 0 ? 'even-row' : 'odd-row';
  }
  return (
    <div >
      <div className='container-fluid'>
        <div className="row ">
          <div className="col-lg-12">
            <Navbar className={navbarClass} expand="lg" fixed="top">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="">
                  <div className="title1">
                    <Nav.Link href="#home" className="link page-title">
                      <span className="nav-link-name">
                        <img src={Cattle} className="cattle" alt="Cattle" />
                        <h5>Cattle Traceability </h5>
                      </span>
                      <header>
                        <div className="header-toggle" onClick={() => setShow(!show)}>
                        </div>
                      </header>
                    </Nav.Link>
                  </div>
                  <div className="btn-id1">
                    <Nav.Link href="#home" className="link  link2">
                      <Button variant="light" >
                        User ID: {App_user}
                      </Button>

                    </Nav.Link>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>

          <div className='col-lg-12 create-button'>
          <h5 className="create-new">Farm User</h5>
          <div className="creatediv">
            <button type="button" onClick={() => Handleclick()} className="btn btn-primary create-new">Create New</button>
            </div>
          </div>

          <div className="report">
            <div className='col-lg-12'>
            
            <div>
      {manage && manage.status && (
        <table className="manage-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Source</th>
              <th>Destination</th>
              <th>Logistics</th>
              <th>Vehicle</th>
              <th>Started</th>
              <th>Ended</th>
            </tr>
          </thead>
          <tbody>
            {manage.returnables.map((item, index) => (
              <tr key={item.ID} className={getRowClass(index)}>
                <td>{item.Name}</td>
                <td>{item.Source}</td>
                <td>{item.Destination}</td>
                <td>{item.Logistics}</td>
                <td>{item.Vehicle}</td>
                <td>{new Date(item.Started * 1000).toLocaleDateString()}</td>
                <td>{new Date(item.Ended * 1000).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Manage