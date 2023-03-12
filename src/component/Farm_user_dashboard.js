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
import Logout from "./Logout";


const Farm_user_dashboard = (props) => {
  const [details, setDetails] = useState({returnables:{ name: "Bangalore-Farmhouse", emp_org :"FH1",vaccination_status: { "vaccinated": 20, "non_vaccinated": 80 }, traded_newborn: { "traded": 40, "newborn": 60 }, location: { "China": 4, "china": 90, "america": 6 }, farm_name: { "variety": 10, "cultivatio": 60, "ogo": 30 }, cattle_count_perday: { "time_0_3": 9, "time_4_7": 50, "time_8_11": 7, "time_12_15": 80, "time_16_19": 9, "time_20_23": 93 }, cattle_count_perweek: { "sunday": 90, "monday": 50, "tuesday": 56, "wednesday": 80, "thursday": 67, "friday": 93 }, cattle_weights: { "below_100": 25, "range_101_150": 35, "more_150": 40 },
   overall_reports: [
      {
      "CurrentLocation": "FH1",
      "ID": "PRO24",
      "Name": "Cow_002204",
      "ParentProduct": "-",
    
          "BreedType": "Breed22",
          "Color": "White&Br2own",
          "Height": 6020,
          "Time_inward": "16773856422000",
          "Traded_Born": "B2orn",
          "Vaccinated": true,
          "Weight": 1835
      }, {
        "CurrentLocation": "FwH1",
        "ID": "PROe4",
        "Name": "Cow_00ee04",
        "ParentProduct": "-",
  
            "BreedType": "Brdddeed2",
            "Color": "Whitddde&Brown",
            "Height": 900,
            "Time_inward": "dd",
            "Traded_Born": "Boddrn",
            "Vaccinated": true,
            "Weight": 1852
        }, {
      "CurrentLocation": "FH1",
      "ID": "PRO4",
      "Name": "Cow_0004",
      "ParentProduct": "-",
   
          "BreedType": "Breed2",
          "Color": "White&Brown",
          "Height": 600,
          "Time_inward": "1677385642000",
          "Traded_Born": "Born",
          "Vaccinated": true,
          "Weight": 185
      }, {
        "CurrentLocation": "FH1",
        "ID": "PRO4",
        "Name": "Cow_0004",
        "ParentProduct": "-",
      
            "BreedType": "Breed2",
            "Color": "White&Brown",
            "Height": 600,
            "Time_inward": "1677385642000",
            "Traded_Born": "Born",
            "Vaccinated": true,
            "Weight": 185
        }]} })
                      //  const details = {returnables:{ name: "Bangalore Farmhouse",location: { "india": 50, "china": 30, "america": 20 }, farm_name: { "variety": 10, "cultivatio": 60, "ogo": 30 }, cattle_count: { "hr_0_3": 2, "hr_4_7": 6, "hr_8_11": 12, "hr_12_15": 20, "hr_16_19": 8, "hr_20_23": 3 }, cattle_weights: { "below_100": 30, "range_101_150": 20, "more_150": 50 }, overall_report: [{ "unique_id": "PRO1", "weight": 89, "inspection": "false", "farm_name": "ogo", "daday1te_of_arrival": "30-Jan-2023", "time_of_arrival": "08:50:55", "location": "India", "farm_name": "variety" }, { "unique_id": "PRO2", "weight": 150, "inspection": "true", "farm_name": "variety", "date_of_arrival": "30-Jan-2023", "time_of_arrival": "08:50:55", "location": "India", "farm_name": "cultivatio" }, { "unique_id": "PRO3", "weight": 170, "inspection": "true", "farm_name": "cultivatio", "date_of_arrival": "30-Jan-2023", "time_of_arrival": "08:50:55", "location": "India", "farm_name": "ogo" }, { "unique_id": "PRO4", "weight": 120, "inspection": "true", "farm_name": "cultivatio", "date_of_arrival": "30-Jan-2023", "time_of_arrival": "08:50:55", "location": "India", "count_perday": "22", "count_perweek": "49", "farm_name": "ogo" }], cattle_count_perday: { "hr_0_3": 9, "hr_4_7": 50, "hr_8_11": 7, "hr_12_15": 80, "hr_16_19": 9, "hr_20_23": 93 }, cattle_count_perweek: { "day1": 90, "day2": 50, "day3": 56, "day4": 80, "day5": 67, "day6": 93 }} }
  const [table, setTable] = useState(false)
  const [show, setShow] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedOption, setSelectedOption] = useState();
  const [title, setTitle] = useState(null);
  const [option, setOption] = useState(null);
  const titles= Object.keys(details.returnables.overall_reports[0]);
  //  const tit= details.returnables.overall_reports[0];
  //  const title2= Object.keys(tit);  
  //  const titles = title1.concat(title2);
  //  const tit1= details.returnables.overall_reports[0].Properties.remove();
  //  console.log(tit1,"OOO")

  

console.log(details,"RRR")

  const [columnchart, setColumnchart] = useState({
    series: [{
      name: 'Hours', data: [{ x: '0-3hrs', y: details.returnables.cattle_count_perday.time_0_3 }, { x: '4-7hrs', y: details.returnables.cattle_count_perday.time_4_7, }, { x: '8-11hrs', y: details.returnables.cattle_count_perday.time_8_11, },
      { x: '12-15hrs', y: details.returnables.cattle_count_perday.time_12_15, }, { x: '16-19hrs', y: details.returnables.cattle_count_perday.time_16_19, }, { x: '20-23hrs', y: details.returnables.cattle_count_perday.time_20_23, },]
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar'
      },
      plotOptions: {
        bar: {
          columnWidth: '60%'
        }
      },
      colors: ['#00E396'],
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ['Hours'],
        markers: {
          fillColors: ['#00E396']
        }
      }
    }
  });
//   {
//     "status": true,
//     "returnables": {
//         "name": "Bangalore Farmhouse",
//         "emp_org": "FH1",
//         "vaccination_status": {
//             "vaccinated": 0,
//             "non_vaccinated": 100
//         },
//         "traded_newborn": {
//             "traded": 0,
//             "newborn": 100
//         },
//         "cattle_count_perday": {
//             "time_0_3": 0,
//             "time_4_7": 0,
//             "time_8_11": 100,
//             "time_12_15": 0,
//             "time_16_19": 0,
//             "time_20_23": 0
//         },
//         "cattle_count_perweek": {
//             "sunday": 100,
//             "monday": 0,
//             "tuesday": 0,
//             "wednesday": 0,
//             "thursday": 0,
//             "friday": 0,
//             "saturday": 0
//         },
//         "cattle_weight": {
//             "below_100": 0,
//             "range_101_150": 0,
//             "more_150": 100
//         },
//         "overall_reports": [
//             {
//                 "CurrentLocation": "FH1",
//                 "ID": "PRO4",
//                 "Name": "Cow_0004",
//                 "ParentProduct": "-",
//                 "Properties": {
//                     "BreedType": "Breed2",
//                     "Color": "White&Brown",
//                     "Height": 600,
//                     "Time_inward": "1677385642000",
//                     "Traded_Born": "Born",
//                     "Vaccinated": false,
//                     "Weight": 185
//                 }
//             }
//         ]
//     }
// }

  useEffect(() => {

    fetch("https://263f922d-2052-42d7-8d17-587a1f17a93e.mock.pstmn.io/FarmHouseUser", {
      method: 'POST',
      body: JSON.stringify(
        {"userid":"EMP1"
      }
      ),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + "02754eecbfa99dc885239a0acc7bf81cfa4ead0533d1c11131af3b90f2b3b3c73eba9668db7299532dc4ce8039078e7509ec575da430990e884f362d16ff8f8d8f8cd112b4c8f831823666e004a092e07301dad3f44c042d6486513a3a13078f4b8462dd42c959d1d49c2dfd021b6144e1eebae8226990d036deb7c51e69a1d5"
      }
    }
    )
      .then(res => res.json())
      .then(data => {
        // setRole_id(data.role_id);
        // setCard_detail(data.polls);
        // setLoading(false);
        console.log(data,"dddaatttaaa")
      
      })
      .catch(err => console.log(err));
  },[])

  const navigate = useNavigate();
  // const titles = ['uniquess_id', 'weight', 'inspection', 'farm_name', 'date_of_arrival', 'time_of_arrival', 'location'];
 
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
    'Weight':[]  };
  const App_user="EMP002"

function Manage() {
  console.log("&&")
  navigate("/manage", {state: {user: App_user}});
}
  
  details.returnables.overall_reports.forEach((item) => {
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
    if (item.Weight < 100) {
      if (!options.Weight.includes('below 100')) {
        options.Weight.push('below 100');
      }
    } else if (item.Weight <= 150) {
      if (!options.Weight.includes('100 to 150')) {
        options.Weight.push('100 to 150');
      }
    } else {
      if (!options.Weight.includes('above 150')) {
        options.Weight.push('above 150');
      }
    }
    if (!options.Vaccinated.includes(item.Vaccinated)) {
      options.Vaccinated.push(item.Vaccinated);
    }
 
    if (!options.BreedType.includes(item.BreedType)) {
      options.BreedType.push(item.BreedType);
    }
    if (!options.Color.includes(item.Color)) {
      options.Color.push(item.Color);
    }
    if (!options.Height.includes(item.Height)) {
      options.Height.push(item.Height);
    }
    if (!options.Time_inward.includes(item.Time_inward)) {
      options.Time_inward.push(item.Time_inward);
    }
    
    // if (item.inspection =='true') {
    //   if (!options.inspection.includes('inspection completed')) {
    //     options.inspection.push('inspection completed');
    //   }
    // } else if (item.inspection =='false') {
    //   if (!options.inspection.includes('inspection not completed')) {
    //     options.inspection.push('inspection not completed');
    //   }
    // }
      // if (item.vaccination_status =='true') {
    //   if (!options.vaccination_status.includes('Vaccinated')) {
    //     options.vaccination_status.push('Vaccinated');
    //   }
    // } else if (item.vaccination_status =='false') {
    //   if (!options.vaccination_status.includes('Non Vaccinated')) {
    //     options.vaccination_status.push('Non Vaccinated');
    //   }
    // }

   
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
      return details.returnables.overall_reports;
    }
    console.log("filterdata")
    const reports = details.returnables.overall_reports.filter(report => {
      if (title === 'CurrentLocation' || title === 'ID' || title === 'Name' || title === 'ParentProduct' || title === 'BreedType' || title === 'Color' || title === "Height" || title === 'Time_inward' || title === 'Vaccinated' || title === 'Weight' ) {
        return report[title] === option;
      }
      //  else if (title === 'Vaccinated') {
      //   if (option === 'Vaccinated') {
      //     return report[title] == true;
      //   } if (option === 'Non Vaccinated') {
      //     return report[title] ==false;
      //   } 
      // }

      // else if (title === 'inspection') {
      //   if (option === 'inspection completed') {
      //     return report[title] == 'true';
      //   } if (option === 'inspection not completed') {
      //     return report[title] =='false';
      //   } 
      // }
      //  else if (title === 'weight') {
      //   if (option === 'below 100') {
      //     return report[title] < 100;
      //   } else if (option === '100 to 150') {
      //     return report[title] >= 100 && report[title] <= 150;
      //   } else {
      //     return report[title] > 150;
      //   }
      // }
    });
    console.log(reports,"filterdata")
   
    return reports;
   
  };


  const handleClick = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }
  const View_more=()=>{
    navigate('/farmusermanage',{state:{de:details}})
    }

  const Cattlecountchart = () => {
    function handleOptionChange(value) {
      setSelectedOption(value)
      if (value === 'date') {
        setColumnchart({
          series: [
            {
              name: 'Hours',
              data: [{ x: '0-3hrs', y: details.returnables.cattle_count_perday.time_0_3, }, { x: '4-7hrs', y: details.returnables.returnables.cattle_count_perday.time_4_7, }, { x: '8-11hrs', y: details.returnables.cattle_count_perday.time_8_11, }, { x: '12-15hrs', y: details.returnables.cattle_count_perday.time_12_15, },
              {
                x: '16-19hrs',
                y: details.returnables.cattle_count_perday.time_16_19,
              }, { x: '20-23hrs', y: details.returnables.cattle_count_perday.time_20_23, },]
            }],
          options: {
            chart: {
              height: 370,
              type: 'bar'
            },
            plotOptions: {
              bar: {
                columnWidth: '60%'
              }
            },
            colors: ['#00E396'],
            dataLabels: {
              enabled: false
            },
           
            legend: {
              show: true,
              showForSingleSeries: true,
              customLegendItems: ['Hours'],
              markers: {
                fillColors: ['#00E396']
              }
            }
          }
        })
      }
      else {
        setColumnchart({
          series: [
            {
              name: 'Month',
              data: [{ x: 'Mon', y: details.returnables.cattle_count_perweek.sunday, }, { x: 'Tues', y: details.returnables.cattle_count_perweek.monday, }, { x: 'Wed', y: details.returnables.cattle_count_perweek.tuesday, }, { x: 'Thurs', y: details.returnables.cattle_count_perweek.wednesday, }, { x: 'Fri', y: details.returnables.cattle_count_perweek.thursday, }, { x: 'Sat', y: details.returnables.cattle_count_perweek.friday, },]
            }],
          options: {
            chart: {
              height: 370,
              type: 'bar'
            },
            plotOptions: {
              bar: {
                columnWidth: '60%'
              }
            },
            colors: ['#007fff'],
            dataLabels: {
              enabled: false
            },
            legend: {
              show: true,
              showForSingleSeries: true,
              customLegendItems: ['Day',],
              markers: {
                fillColors: ['#007fff']
              }
            }
          }
        })
      }
    }
    return (
      <div>
        <div className="count">
          <h6 className="h6">CATTLE COUNT</h6>
          <select value={selectedOption} className="select-count" onChange={(event) => handleOptionChange(event.target.value)}>
            <option value="date">Date</option>
            <option value="week">Week</option>
          </select>
        </div>
        <div className="count1">
          <div id="chart">
            <ReactApexChart options={columnchart.options} series={columnchart.series} type="bar" height={215} width={480} />
          </div>
        </div>
      </div>

    );
  };
  

  const Piechart = (vaccinated, non_vaccinated, data, title, width) => {
    const series = [vaccinated, non_vaccinated]

    const options ={
      chart: {
        width: width,
        type: 'donut',
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },

      fill: {
        type: 'gradient',
      },
      labels: data,
      dataLabels: {
        enabled: false
      },
      tooltip: {
        y: {
          formatter: function(value) {
            return value.toFixed(0) + '%';
          }
        }
      },
      legend: {
        formatter: function (labels, opts) {
          return labels+' '+ opts.w.globals.series[opts.seriesIndex]+"%";;
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    }

    return (
      <div id="chart">
        <h6 style={{ padding: '0px 0' }} className="h6">{title}</h6>
        <ReactApexChart className="piech" options={options} series={series} type="donut" width={width} />
      </div>
    );
  };
  const Cattleweightchart = (below_100, range_101_150, above_150, data, title, width) => {
    const series=[below_100, range_101_150, above_150]
    const options={
      chart: {
        width: width,
        type: 'donut',
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      tooltip: {
        y: {
          formatter: function(value) {
            return value.toFixed(0) + '%';
          }
        }
      },

      fill: {
        type: 'gradient',
      },
      labels: data,
      colors: ['#00E396', '#007fff', "#203354"],
      dataLabels: {
        enabled: false
      },
      legend: {
        formatter: function (labels, opts) {
          return labels+' '+ opts.w.globals.series[opts.seriesIndex]+"%";;
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    }

    return (
      <div id="chart">
        <h6 style={{ padding: '0px 0' }} className="h6">{title}</h6>
        <ReactApexChart className="piech" options={options} series={series} type="donut" width={width} />
      </div>
    );
  };


  const Sidebar = () => {
    return (
      <div>
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
                      <i
                       className={`fas fa-bars ${show ? "fa-solid fa-xmark" : null} `}
                      ></i>
                    </div>
                  </header>
                </Nav.Link>
              </div>
              <div className="btn-id">
                <Nav.Link href="#home" className="link  link2">
                  <Button variant="light" className="id" >
                    User ID: {App_user}
                  </Button>
                {/* <Button variant="light" className="logout">
                    Logout <img className="signout" src={signout}></img>
                  </Button> */}
                  <Logout/>
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <main className={show ? 'space-toggle' : null}>
          <aside className={`sidebar ${show ? 'show' : null}`}>
            <nav className='nav'>
              <div className="nav1">
                <div className='nav-list'>
                  <div to='' className='nav-link active'>
                    <i className='fas fa-home nav-link-icon'></i>
                    <span className='nav-link-name word-home'>Home</span>
                  </div>
                  
                  <div onClick={()=>handleClick()} className='nav-link re'>
                    <i class='fas fa-file nav-link-icon'></i>
                    <span className='nav-link-name ss'>Reports</span>
                  </div>
                  <div onClick={()=>Manage()}  className='nav-link man'>
                    <i className='fas fa-edit nav-link-icon'></i>
                    <span className='nav-link-name word mm'>Manage</span>
                  </div>
                  <div to=''  className='nav-link pro'>
                    <i className='fas fa-user nav-link-icon' ></i>
                    <span className='nav-link-name profile-text pro-text' >Profile</span>
                  </div>
                </div>
              </div>
            </nav>
          </aside>
          <div className="container-fluid all-cards ">
            <div className="row ch">
              <div className="col-lg-6 ">
                <div className="card card-1">
                  {Piechart(details.returnables.vaccination_status.vaccinated, details.returnables.vaccination_status.non_vaccinated, ['Vaccinated','Non vaccinated'], "VACCINATION STATUS", 425)}
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="card card-1">
                  {Piechart(details.returnables.traded_newborn.traded, details.returnables.traded_newborn.newborn, ['Traded', 'New Born',], "TRADED OR NEWBORN", 393)}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card card-1">
                  <Cattlecountchart />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card card-1">
                  {Cattleweightchart(details.returnables.cattle_weights.below_100, details.returnables.cattle_weights.range_101_150, details.returnables.cattle_weights.more_150, ['Below 100', 'Range 100-150', 'Above 150'], "CATTLE WEIGHT", 430)}
                </div>
              </div>
              <div>
                {details &&
                  <div>
                
                      <div>
                        <div>
                        </div>
                        <div>
                          <Card className="  card-1">
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
                                    {filterData().slice(0,3).map((item, index) => (
                                      <tr key={item.ID} className={`row-${index % 2}`}>
                                        <td>{item.ID}</td>
                                        <td>{item.CurrentLocation}</td>
                                        <td>{item.Name}</td>
                                        <td>{item.BreedType}</td>
                                        <td>{item.Color}</td>
                                        <td>{item.Height}</td>
                                        <td>{item.Time_inward}</td>
                                        <td>{item.Traded_Born}</td>
                                        <td>{item.Vaccinated == true && <img src={Yes} className="no2" /> || <img src={No} className="no1" />}</td>
                                        <td>{item.Weight}</td>
                                        {/* <td>{item.inspection == "true" && <img src={Yes} className="no2" /> || <img src={No} className="no1" />}</td> */}
                                      
                                      
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                              <div className="view-more">
                              <h6 onClick={() => View_more()} className="readmore">View more..</h6>
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
        </main>
      </div>
    );
  };

  return (
    <div>{Sidebar()}</div>
  );
};

export default Farm_user_dashboard;
