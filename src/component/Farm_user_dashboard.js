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
import Login from "./Login";
import Logout from "./Logout";


const Farm_user_dashboard = (props) => {

  //  const [details, setDetails] = useState({returnables:{ name: "Bangalore Farmhouse",vaccination_status: { "yes": 20, "no": 80 }, traded_or_newborn: { "traded": 40, "new_born": 60 }, location: { "india": 4, "china": 90, "america": 6 }, farm_name: { "variety": 10, "cultivatio": 60, "ogo": 30 }, cattle_count_perday: { "hr_0_3": 9, "hr_4_7": 50, "hr_8_11": 7, "hr_12_15": 80, "hr_16_19": 9, "hr_20_23": 93 }, cattle_count_perweek: { "day1": 90, "day2": 50, "day3": 56, "day4": 80, "day5": 67, "day6": 93 }, cattle_weights: { "below_100": 25, "range_100_150": 35, "more_150": 40 }, overall_report: [{ "unique_id": "PRO1", "weight": 89, "inspection": "true", "farm_name": "ogo", "date_of_arrival": "30-Jan-2023", "time_of_arrival": "08:50:55", "location": "India", "traded_or_newborn": "Traded", "vaccination_status": "true" }, { "unique_id": "PRO2", "weight": 150, "inspection": "true", "farm_name": "variety", "date_of_arrival": "30-Jan-2023", "time_of_arrival": "08:50:55", "location": "India", "traded_or_newborn": "New_born", "vaccination_status": "false" }, { "unique_id": "PRO4", "weight": 180, "inspection": "false", "farm_name": "cultivatio", "date_of_arrival": "30-Jan-2023", "time_of_arrival": "08:50:55", "location": "India", "traded_or_newborn": "New_born", "vaccination_status": "true" }, { "unique_id": "PRO7", "weight": 120, "inspection": "false", "farm_name": "cultivatio", "date_of_arrival": "30-Jan-2023", "time_of_arrival": "08:50:55", "location": "India", "traded_or_newborn": "New_born", "vaccination_status": "true"}, { "unique_id": "PRO5", "weight": 120, "inspection": "false", "farm_name": "cultivatio", "date_of_arrival": "20-Jan-2023", "time_of_arrival": "08:50:55", "location": "China", "traded_or_newborn": "New_born", "vaccination_status": "true"}, { "unique_id": "PRO6", "weight": 170, "inspection": "false", "farm_name": "cultivatio", "date_of_arrival": "30-Feb-2023", "time_of_arrival": "08:51:55", "location": "China", "traded_or_newborn": "New_born", "vaccination_status": "true"}]}})
  const [details, setDetails] = useState(null)

  const [table, setTable] = useState(false)
  const [show, setShow] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedOption, setSelectedOption] = useState();
  const [title, setTitle] = useState(null);
  const [option, setOption] = useState(null);
  const [titles, setTitles] = useState(null)
  const [columnchart, setColumnchart] = useState({})
 

  const navigate = useNavigate();


  // useEffect(() => {
    // const fetchData = async () => {
    //   const response = await fetch(process.env.REACT_APP_BACKEND_HOST + "api/FarmHouseUser", {
    //     method: 'POST',
    //     body: JSON.stringify(
    //       {
    //         "userid": process.env.REACT_APP_ADMIN_USER
    //       }
    //     ),
    //     headers: {
    //       'Content-type': 'application/json; charset=UTF-8',
    //       'Authorization': 'Bearer ' + process.env.REACT_APP_BACKEND_ENDUSER_TOKEN
    //       //process.env.BACKEND_ENDUSER_TOKEN
    //     }
    //   }).then(res => res.json())
    //     .then(data => {
    //       setDetails(data);
    //     })
    //     .catch(err => console.log(err));
    // };
    // fetchData();
    // setDetails(  {
    //   status: true,
    //   returnables: {
    //   name: "Bangalore Farmhouse",
    //  emp_org: "FH1",
    //   vaccination_status: {
    //   vaccinated: 0,
    //   non_vaccinated: 100
    //   },
    //   traded_newborn: {
    //   traded: 0,
    //   newborn: 100
    //   },
    //   cattle_count_perday: {
    //   time_0_3: 0,
    //   time_4_7: 0,
    //   time_8_11: 100,
    //   time_12_15: 0,
    //   time_16_19: 0,
    //   time_20_23: 0
    //   },
    //   cattle_count_perweek: {
    //   sunday: 100,
    //  monday: 0,
    //  tuesday: 0,
    //   wednesday: 0,
    //   thursday: 0,
    //   friday: 0,
    //   saturday: 0
    //   },
    //   cattle_weight: {
    //   below_100: 0,
    //   range_101_150: 0,
    //   more_150: 100
    //   },
    //   overall_reports: [
    //   {
    //   CurrentLocation: "FH1",
    //   ID: "PRO4",
    //   Name: "Cow_0004",
    //   ParentProduct: "-",
    //   Properties: {
    //   BreedType: "Breed2",
    //   Color: "White&Brown",
    //   Height: 600,
    //   Time_inward: "1677385642000",
    //   Traded_Born: "Born",
    //   Vaccinated: false,
    //   Weight: 185
    //   }
    //   }
    //   ]
    //   }
    //   })
  // }, []);

  useEffect(() => {
    fetch('https://263f922d-2052-42d7-8d17-587a1f17a93e.mock.pstmn.io/FarmHouseUser', {
      method: 'POST',
      body: JSON.stringify(
              {
                "userid": "EMP1"
              }
            ),
      headers: {
        'Content-Type': 'application/json'
      },
    
    })
      .then(response => response.json())
      .then(data => setDetails(data))
      .catch(error => console.error(error));
  }, []);

  console.log(details)
  useEffect(() => {
  if (details) {
    setTitles(Object.keys(details.returnables.overall_reports[0]))
  }},[])
  useEffect(() => {
  if (details) {
    setColumnchart({
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
  }},[])

  const options = {
    'unique_id': [],
    'weight': [],
    'vaccination_status': [],
    'inspection': [],
    'farm_name': [],
    'date_of_arrival': [],
    'traded_newborn': [],
    'time_of_arrival': [],
    'location': []
  };
  const App_user = "EMP002"

  const handleClick = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  function Manage() {
    console.log("&&")
    navigate("/manage", { state: { user: App_user } });
  }
  // if (details) {
  //   details.returnables.overall_reports.forEach((item) => {
  //     if (!options.ID.includes(item.ID)) {
  //       options.ID.push(item.ID);
  //     }
  //     if (item.weight < 100) {
  //       if (!options.weight.includes('below 100')) {
  //         options.weight.push('below 100');
  //       }
  //     } else if (item.weight <= 150) {
  //       if (!options.weight.includes('100 to 150')) {
  //         options.weight.push('100 to 150');
  //       }
  //     } else {
  //       if (!options.weight.includes('above 150')) {
  //         options.weight.push('above 150');
  //       }
  //     }
  //     // if (item.vaccination_status =='true') {
  //     //   if (!options.vaccination_status.includes('Vaccinated')) {
  //     //     options.vaccination_status.push('Vaccinated');
  //     //   }
  //     // } else if (item.vaccination_status =='false') {
  //     //   if (!options.vaccination_status.includes('Non Vaccinated')) {
  //     //     options.vaccination_status.push('Non Vaccinated');
  //     //   }
  //     // }

  //     // if (item.curr == true) {
  //     //   if (!options.inspection.includes('inspection completed')) {
  //     //     options.inspection.push('inspection completed');
  //     //   }
  //     // } else if (item.inspection == false) {
  //     //   if (!options.inspection.includes('inspection not completed')) {
  //     //     options.inspection.push('inspection not completed');
  //     //   }
  //     // }
  //     if (!options.vaccination_status.includes(item.vaccination_status)) {
  //       options.vaccination_status.push(item.vaccination_status);
  //     }
  //     if (!options.Name.includes(item.Name)) {
  //       options.Name.push(item.Name);
  //     }
  //     if (!options.date_of_arrival.includes(item.date_of_arrival)) {
  //       options.date_of_arrival.push(item.date_of_arrival);
  //     }
  //     if (!options.traded_newborn.includes(item.traded_newborn)) {
  //       options.traded_newborn.push(item.traded_newborn);
  //     }
  //     if (!options.date_of_arrival.includes(item.date_of_arrival)) {
  //       options.date_of_arrival.push(item.date_of_arrival);
  //     }
  //     if (!options.time_of_arrival.includes(item.time_of_arrival)) {
  //       options.time_of_arrival.push(item.time_of_arrival);
  //     }
  //     if (!options.location.includes(item.location)) {
  //       options.location.push(item.location);
  //     }

  //   });
  // }

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

    const reports = details.returnables.overall_reports.filter(report => {
      if (title === 'ID' || title === "vaccination_status" || title === 'Name' || title === 'location' || title === 'date_of_arrival' || title === 'time_of_arrival' || title === "traded_newborn") {
        return report[title] === option;
      }
      //  else if (title === 'vaccination_status') {
      //   if (option === 'Vaccinated') {
      //     return report[title] == 'true';
      //   } if (option === 'Non Vaccinated') {
      //     return report[title] =='false';
      //   } 
      // }
      else if (title === 'inspection') {
        if (option === 'inspection completed') {
          return report[title] == 'true';
        } if (option === 'inspection not completed') {
          return report[title] == 'false';
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

  const Cattlecountchart = () => {
    function handleOptionChange(value) {
      setSelectedOption(value)
      if (value === 'date') {
        setColumnchart({
          series: [
            {
              name: 'Hours',
              data: [{ x: '0-3hrs', y: details.returnables.cattle_count_perday.time_0_3, }, { x: '4-7hrs', y: details.returnables.cattle_count_perday.time_4_7, }, { x: '8-11hrs', y: details.returnables.cattle_count_perday.time_8_11, }, { x: '12-15hrs', y: details.returnables.cattle_count_perday.time_12_15, },
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
  const Piechart = (yes, no, data, title, width) => {
    const series = [yes, no]

    const options = {
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
          formatter: function (value) {
            return value.toFixed(0) + '%';
          }
        }
      },
      legend: {
        formatter: function (labels, opts) {
          return labels + ' ' + opts.w.globals.series[opts.seriesIndex] + "%";;
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
  const Cattleweightchart = (below_100, range_100_150, above_150, data, title, width) => {
    const series = [below_100, range_100_150, above_150]
    const options = {
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
          formatter: function (value) {
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
          return labels + ' ' + opts.w.globals.series[opts.seriesIndex] + "%";;
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
  const View_more = () => {
    navigate('/farmusermanage', { state: { de: details } })
  }
  const Sidebar = () => {
    return (
      <div className="frm-usr">
        <div>
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
                  <Logout />
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
        <main className={show ? 'space-toggle' : null}>
          <aside className={`sidebar ${show ? 'show' : null}`}>
            <nav className='nav'>
              <div className="nav1">
                <div className='nav-list'>
                  <div to='' className='nav-link active'>
                    <i className='fas fa-home nav-link-icon'></i>
                    <span className='nav-link-name word-home'>Home</span>
                  </div>

                  <div onClick={() => handleClick()} className='nav-link'>
                    {/* <i class='fas fa-x-ray nav-link-icon'></i> */}
                    <img src={profile} className="profile-icon"></img>
                    <span className='nav-link-name report-word'>Reports</span>
                  </div>
                  <div onClick={() => Manage()} className='nav-link'>
                    <i className='fas fa-edit nav-link-icon'></i>
                    <span className='nav-link-name manage-word'>Manage</span>
                  </div>
                  <div to='' className='nav-link'>
                    <i className='fas fa-user nav-link-icon' ></i>
                    <span className='nav-link-name profile-text' >Profile</span>
                  </div>
                </div>
              </div>
            </nav>
          </aside>
          <div className="container-fluid all-cards ">
            <div className="row ch">
              <div className="col-lg-6 ">
                <div className="card card-1">
                  {details && (
                   Piechart(details.returnables.vaccination_status.vaccinated, details.returnables.vaccination_status.non_vaccinated, ['Vaccinated', 'Non vaccinated'], "VACCINATION STATUS", 425)
                  )
                  }
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="card card-1">
                  {details &&(
                   Piechart(details.returnables.traded_newborn.traded, details.returnables.traded_newborn.newborn, ['Traded', 'New Born',], "TRADED OR NEWBORN", 393)
                   )
                   }
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card card-1">
                  <Cattlecountchart />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card card-1">
                  {details && (
                    Cattleweightchart(details.returnables.cattle_weight.below_100, details.returnables.cattle_weight.range_101_150, details.returnables.cattle_weight.more_150, ['Below 100', 'Range 100-150', 'Above 150'], "CATTLE WEIGHT", 430))}
                </div>
              </div>
              {/* <div>
                {details &&
                  <div>
               
                      <div>
                        <div>
                        </div>
                        <div>
                          <Card className="card-1 ">
                            <Card.Header className="card-header">
                              <div>
                                <h6 className="report">REPORTS</h6>
                              </div>
                              <div className="table-header">
                              <p className="sort">Sort by</p>
                                <select id="title" name="title" className="dropdown-title" onChange={handleTitleChange}>
                                
                                  <option value="">Select</option>
                                  {details &&
                                  titles.map((title) => (
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
                                      <th>Unique ID</th>
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
                                    {filterData().slice(0,4).map((item, index) => (
                                      <tr key={item.unique_id} className={`row-${index % 2}`}>
                                        <td>{item.unique_id}</td>
                                        <td>{item.weight}</td>
                                        <td className="traded-newborn">{item.traded_or_newborn}</td>
                                        <td>{item.inspection == "true" && <img src={Yes} className="no2" /> || <img src={No} className="no1" />}</td>
                                        <td>{item.vaccination_status == "vacciinated" && <img src={Yes} className="no2" /> || <img src={No} className="no1" />}</td>
                                        <td>{item.date_of_arrival}</td>
                                        <td>{item.time_of_arrival}</td>
                                        <td>{item.location}</td>
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
              </div> */}
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
