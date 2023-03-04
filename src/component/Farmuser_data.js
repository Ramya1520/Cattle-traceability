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
  // const [details, setDetails] = useState({ vaccination_status: { "yes": 20, "no": 80 }, traded_or_newborn: { "traded": 40, "new_born": 60 }, location: { "india": 4, "china": 90, "america": 6 }, farm_name: { "variety": 10, "cultivatio": 60, "ogo": 30 }, cattle_count_perday: { "hr_0_3": 9, "hr_4_7": 50, "hr_8_11": 7, "hr_12_15": 80, "hr_16_19": 9, "hr_20_23": 93 }, cattle_count_perweek: { "day1": 90, "day2": 50, "day3": 56, "day4": 80, "day5": 67, "day6": 93 }, cattle_weights: { "below_100": 25, "range_100_150": 35, "more_150": 40 }, overall_report: [{ "unique_id": "PRO1", "weight": 89, "inspection": "true", "farm_name": "ogo", "date_of_arrival": "30-Jan-2023", "time_of_arrival": "08:50:55", "location": "India", "traded_or_newborn": "Traded", "vaccination_status": "true" }, { "unique_id": "PRO2", "weight": 150, "inspection": "true", "farm_name": "variety", "date_of_arrival": "30-Jan-2023", "time_of_arrival": "08:50:55", "location": "India", "traded_or_newborn": "New_born", "vaccination_status": "false" }, { "unique_id": "PRO4", "weight": 120, "inspection": "false", "farm_name": "cultivatio", "date_of_arrival": "30-Jan-2023", "time_of_arrival": "08:50:55", "location": "India", "traded_or_newborn": "New_born", "vaccination_status": "true" }, { "unique_id": "PRO7", "weight": 120, "inspection": "false", "farm_name": "cultivatio", "date_of_arrival": "30-Jan-2023", "time_of_arrival": "08:50:55", "location": "India", "traded_or_newborn": "New_born", "vaccination_status": "true"}, { "unique_id": "PRO5", "weight": 120, "inspection": "false", "farm_name": "cultivatio", "date_of_arrival": "20-Jan-2023", "time_of_arrival": "08:50:55", "location": "China", "traded_or_newborn": "New_born", "vaccination_status": "true"}, { "unique_id": "PRO6", "weight": 120, "inspection": "false", "farm_name": "cultivatio", "date_of_arrival": "30-Feb-2023", "time_of_arrival": "08:51:55", "location": "China", "traded_or_newborn": "New_born", "vaccination_status": "true"}] })
  console.log(details,"details")
  const [table, setTable] = useState(false)
  const [show, setShow] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedOption, setSelectedOption] = useState();
  const [title, setTitle] = useState(null);
  const [option, setOption] = useState(null);
  const titles = Object.keys(details.returnables.overall_report[0]);

  const navigate = useNavigate();
  // const titles = ['uniquess_id', 'weight', 'inspection', 'farm_name', 'date_of_arrival', 'time_of_arrival', 'location'];
 
  const options = {
    'unique_id': [],
    'weight': [],
    'vaccination_status': [],
    'inspection': [],
    'farm_name': [],
    'date_of_arrival': [],
    'traded_or_newborn':[],
    'time_of_arrival': [],
    'location': []
  };
  const App_user="EMP002"
 
  const handleClick = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }
  

  
  details.returnables.overall_report.forEach((item) => {
    if (!options.unique_id.includes(item.unique_id)) {
      options.unique_id.push(item.unique_id);
    }
    if (item.weight < 100) {
      if (!options.weight.includes('below 100')) {
        options.weight.push('below 100');
      }
    } else if (item.weight <= 150) {
      if (!options.weight.includes('100 to 150')) {
        options.weight.push('100 to 150');
      }
    } else {
      if (!options.weight.includes('above 150')) {
        options.weight.push('above 150');
      }
    }
    if (item.vaccination_status =='true') {
      if (!options.vaccination_status.includes('Vaccinated')) {
        options.vaccination_status.push('Vaccinated');
      }
    } else if (item.vaccination_status =='false') {
      if (!options.vaccination_status.includes('Non Vaccinated')) {
        options.vaccination_status.push('Non Vaccinated');
      }
    }
    

    if (item.inspection =='true') {
      if (!options.inspection.includes('inspection completed')) {
        options.inspection.push('inspection completed');
      }
    } else if (item.inspection =='false') {
      if (!options.inspection.includes('inspection not completed')) {
        options.inspection.push('inspection not completed');
      }
    }
    if (!options.farm_name.includes(item.farm_name)) {
      options.farm_name.push(item.farm_name);
    }
    if (!options.traded_or_newborn.includes(item.traded_or_newborn)) {
      options.traded_or_newborn.push(item.traded_or_newborn);
    }
    if (!options.date_of_arrival.includes(item.date_of_arrival)) {
      options.date_of_arrival.push(item.date_of_arrival);
    }
    if (!options.time_of_arrival.includes(item.time_of_arrival)) {
      options.time_of_arrival.push(item.time_of_arrival);
    }
    if (!options.location.includes(item.location)) {
      options.location.push(item.location);
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
      return details.returnables.overall_report;
    }

    const reports = details.returnables.overall_report.filter(report => {
      if (title === 'unique_id' || title === 'farm_name' || title === 'location' || title === 'date_of_arrival' || title === 'time_of_arrival' ||title==="traded_or_newborn") {
        return report[title] === option;
      }
       else if (title === 'vaccination_status') {
        if (option === 'Vaccinated') {
          return report[title] == 'true';
        } if (option === 'Non Vaccinated') {
          return report[title] =='false';
        } 
      }

      else if (title === 'inspection') {
        if (option === 'inspection completed') {
          return report[title] == 'true';
        } if (option === 'inspection not completed') {
          return report[title] =='false';
        } 
      }
       else if (title === 'weight') {
        if (option === 'below 100') {
          return report[title] < 100;
        } else if (option === '100 to 150') {
          return report[title] >= 100 && report[title] <= 150;
        } else {
          return report[title] > 150;
        }
      }
    });

    return reports;
  };
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
                          <Card className=" table-card card-1">
                            <Card.Header className="card-header">
                              <div>
                                <h6 className="report">REPORTS</h6>
                              </div>
                              <div className="table-header">
                              <p className="sort">Sort by</p>
                                <select id="title" name="title" className="dropdown-title" onChange={handleTitleChange}>
                                  <option value="">Select</option>
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
                                      <th>Unique IDs</th>
                                      <th>Weight</th>
                                      <th>Traded or Newborn</th>
                                      <th>Inspection</th>
                                      <th>Vaccination</th>
                                      <th>Date of Arrival</th>
                                      <th>Time of Arrival</th>
                                      <th>Location</th>
                                 </tr>
                                  </thead>
                                  <tbody>
                                    {filterData().map((item, index) => (
                                      <tr key={item.unique_id} className={`row-${index % 2}`}>
                                        <td>{item.unique_id}</td>
                                        <td>{item.weight}</td>
                                        <td className="traded-newborn">{item.traded_or_newborn}</td>
                                        <td>{item.inspection == "true" && <img src={Yes} className="no2" /> || <img src={No} className="no1" />}</td>
                                        <td>{item.vaccination_status == "true" && <img src={Yes} className="no2" /> || <img src={No} className="no1" />}</td>
                                        <td>{item.date_of_arrival}</td>
                                        <td>{item.time_of_arrival}</td>
                                        <td>{item.location}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
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
