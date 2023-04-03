import React from "react";
import './Farm_user_dashboard.css';
import 'react-circular-progressbar/dist/styles.css';
import 'react-circular-progressbar/dist/styles.css';
import "react-circular-progressbar/dist/styles.css";
import 'react-circular-progressbar/dist/styles.css';
import ReactApexChart from 'react-apexcharts';
import { useState } from "react";
import No from '../assets/No.png';
import Yes from '../assets/tick.png'
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Button } from "react-bootstrap";
import { CDBListGroup, CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem, } from 'cdbreact';
import { Navbar, Nav } from "react-bootstrap";
import { Link, Navigate } from 'react-router-dom';
import Cattle from '../assets/cattle.png'
import { useEffect } from "react";
import signout from "../assets/signout.png"
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import profile from '../assets/profile.svg';
import './Farmuser_data.css'
import { useLocation } from "react-router-dom";

const Farm_user_manage = (props) => {
  const location = useLocation();
  const details = location.state?.de
  console.log(details,"details...............")
  const [table, setTable] = useState(false)
  const [show, setShow] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedOption, setSelectedOption] = useState();
  const [title, setTitle] = useState(null);
  const [option, setOption] = useState(null);
  const titles = Object.keys(details?.returnables?.overall_reports[0]);

  const navigate = useNavigate();

    const options = {
      'CurrentLocation': [],
      'ID': [],
      'Name': [],
      'ParentProduct': [],
      'BreedType': [],
      'Color': [],
      'Height':[],
      'Time_inward': [],
      'Traded_Born': [],
      'Vaccinated':[],
      'Weight':[] 
     };
  const App_user="EMP002"
 
  const handleClick = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }
  details?.returnables.overall_reports.forEach((item) => {
    if (!options.CurrentLocation.includes(item.CurrentLocation)) {
      options.CurrentLocation.push(item.CurrentLocation);
    }
    if (!options.ID.includes(item.ID)) {
      options.ID.push(item.ID);
    }
    if (!options.Name.includes(item.Name)) {
      options.Name.push(item.Name);
    }
  
    if (!options.ParentProduct.includes(item.ParentProduct)) {
      options.ParentProduct.push(item.ParentProduct);
    }
    if (!options.ParentProduct.includes(item.ParentProduct)) {
      options.ParentProduct.push(item.ParentProduct);
    }
    if (!options.BreedType.includes(item.BreedType)) {
      options.BreedType.push(item.BreedType);
    }
    if (!options.Time_inward.includes(item.Time_inward)) {
      options.Time_inward.push(item.Time_inward);
    }
    if (!options.Color.includes(item.Color)) {
      options.Color.push(item.Color);
    }
    // if (!options.Height.includes(item.Height)) {
    //   options.Height.push(item.Height);
    // }
    if (!options.Traded_Born.includes(item.Traded_Born)) {
      options.Traded_Born.push(item.Traded_Born);
    }
    console.log(item.Vaccinated,"Vaccinated")

    // if (!options.Weight.includes(item.Weight)) {
    //   options.Weight.push(item.Weight);
    // }
        if (item.Vaccinated =='true') {
      if (!options.Vaccinated.includes('Vaccinated')) {
        options.Vaccinated.push('Vaccinated');
      }
    } else if (item.Vaccinated =='false') {
      if (!options.Vaccinated.includes('Non Vaccinated')) {
        options.Vaccinated.push('Non Vaccinated');
      }
    }
    if (item.Weight <= 100) {
      if (!options.Weight.includes('Below100')) {
        options.Weight.push('Below-100');
      }
    } else if (item.Weight >=101 && item.Weight<=150) {
      if (!options.Weight.includes('101 To 120')) {
        options.Weight.push('101 To 120');
      }
    }
    else if (item.Weight >=151) {
      if (!options.Weight.includes('Above-150')) {
        options.Weight.push('Above-150');
      }
  }
  if (item.Height <= 500) {
    if (!options.Height.includes('Below-500')) {
      options.Height.push('Below-500');
    }
  } else if (item.Height >=501 && item.Height<=1000) {
    if (!options.Height.includes('501 To 1000')) {
      options.Height.push('501 To 1000');
    }
  }
  else if (item.Height >=1001) {
    if (!options.Height.includes('Above-1000')) {
      options.Height.push('Above-1000');
    }
}
   
  });
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = scrollPosition > 0 ? "navbar1 shadow" : "navbar1";


  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setOption(null);
  };

  const handleOptionChange = (event) => {
    setOption(event.target.value);
  };
  const filterData = () => {
    if (!title || !option) {
      return details?.returnables.overall_reports;
    }

    const reports = details.returnables.overall_reports.filter(report => {
      if (title === 'CurrentLocation' || title === 'ID' || title === 'Name' || title === 'ParentProduct' || title === 'BreedType' || title === 'Color' || title === 'Time_inward' || title==="Traded_Born" ) {
        return report[title] === option;
      }
         else if (title === 'Vaccinated') {	
        if (option === 'Vaccinated') {	
          return report[title] == 'true';	
        } if (option === 'Non Vaccinated') {	
          return report[title] =='false';	
        } 	
      }
      else if (title === 'Weight') {	
        if (option === 'Below-100') {	
          return report[title] <= 100;	
        } else if (option === '101 To 120') {	
          return report[title] >= 101 && report[title] <= 150;	
        } else {	
          return report[title] >= 151;	
        }	
      }
      else if (title === 'Height') {	
        if (option === 'Below-500') {	
          return report[title] <= 1000;	
        } else if (option === '501 To 1000') {	
          return report[title] >= 501 && report[title] <= 1000;	
        } else {	
          return report[title] >= 1001;	
        }	
      }
    });
    return reports;
   
  };
  const data=filterData()
  console.log(data,"data")

  const Sidebar = () => {
    return (
      <div>
           <div className="container-fluid all-cards ">
            <div>
        <Navbar className={navbarClass} expand="lg" fixed="top">    
        <div className="navbar-nav">
         <div className="title1">
                <Nav.Link href="#home" className="link page-title">
                  <span className="nav-link-name">
                    <img src={Cattle} className="cattle" alt="Cattle" />
                    <h5>Cattle Traceability </h5>
                  </span>         
                </Nav.Link>
              </div>
              <div className="btn-id">
                <Nav.Link href="#home" className="link  link2">
                  <Button variant="light" className="id" >
                    User ID: {App_user}
                  </Button>
                <Button variant="light" className="logout">
                    Logout <img className="signout" src={signout}></img>
                  </Button>
                </Nav.Link>
              </div>
              </div>
        </Navbar>
       
            <div className="row ch">
              <div>
                {details &&
                  <div>
                      <div>
                        <div>
                        </div>
                        <div>
                          <Card className=" card-c card-1">
                            <Card.Header className="card-header">
                              <div>
                                <h6>REPORTS</h6>
                              </div>
                              <div className="table-header">
                                <select id="title" name="title" className="dropdown-title" onChange={handleTitleChange}>
                                  <option value="">Sort by</option>
                                  {titles.map((title) => (
                                    <option key={title} value={title}>{title}</option>
                                  ))}
                                </select>
                                {title ? (
                                  <div>
                                    <select id="option" name="option" onChange={handleOptionChange}>
                                      <option value="">Select</option>
                                      {options[title].map((option) => (
                                        <option key={option} value={option}>{option}</option>
                                      ))}
                                    </select>
                                  </div>
                                ) : <select id="option" disabled={title === null} >
                                  <option value="">Select</option>
                                </select>}
                              </div></Card.Header>
                            <Card.Body>
                              <div>
                              </div>
                              <div className="row ">
                                <table>
                                  <thead>
                                    <tr>
                                      <th>ID</th>
                                      <th>CurrentLocation</th>
                                      <th>Name</th>
                                      <th>BreedType</th>
                                      <th>Color</th>
                                      <th>Height</th>
                                      <th>Time Inward</th>
                                      <th>Traded_Born</th>
                                      <th>Vaccinated</th>
                                      <th>Weight</th>
                                 </tr>
                                  </thead>
                                  <tbody>
                                    {data.map((item, index) => (
                                      <tr key={item.ID} className={`row-${index % 2}`}>
                                        <td>{item.ID}</td>
                                        <td>{item.CurrentLocation}</td>
                                        <td>{item.Name}</td>
                                        <td>{item.BreedType}</td>
                                        <td>{item.Color}</td>
                                        <td>{item.Height}</td>
                                        <td>{item.Time_inward}</td>
                                        <td>{item.Traded_Born}</td>
                                        <td>{item.Vaccinated == "true" && <img src={Yes} className="no2" /> || <img src={No} className="no1" />}</td>
                                        <td>{item.Weight}</td>
                                        {/* <td>{item.inspection == "true" && <img src={Yes} className="no2" /> || <img src={No} className="no1" />}</td> */}
                                      
                                      
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                              <div className="view-more">
                             
                              </div> 
                            </Card.Body>
                          </Card>
                        </div>
                      </div>
                    
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>{Sidebar()}</div>
  );
};

export default Farm_user_manage;
