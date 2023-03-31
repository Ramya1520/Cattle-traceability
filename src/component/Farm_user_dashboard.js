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
import { Link, Navigate} from 'react-router-dom';
import Cattle from '../assets/cattle.png'
import { useEffect } from "react";
import signout from "../assets/signout.png"
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import profile from '../assets/profile.svg';
import Logout from "./Logout";


const Farm_user_dashboard = (props) => {
  const [details, setDetails] = useState()
  const [table, setTable] = useState(false)
  const [show, setShow] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedOption, setSelectedOption] = useState();
  const [title, setTitle] = useState(null);
  const [option, setOption] = useState(null);
  const [titles,setTitles]=useState(null);
  
  useEffect(() => {

    fetch(process.env.REACT_APP_BACKEND_HOST + "api/FarmHouseUser", {
      method: 'POST',
      body: JSON.stringify(
        {
          "userid": process.env.REACT_APP_ADMIN_USER,
        }),
      headers: {
        'Authorization': 'Bearer ' + process.env.REACT_APP_BACKEND_ENDUSER_TOKEN,
        'Content-Type': 'application/json'
        },
      })
      .then(res => res.json())
      .then(data => {
        setDetails(data)
        setTitles(Object.keys(data.returnables.overall_reports[0]))
        console.log(data.returnables)
      
      })
      .catch(err => console.log(err));
    
  },[])

  const [columnchart, setColumnchart] = useState();
useEffect(() => {
    setColumnchart({
      series: [
        {
          name: 'Hours',
          data: [{ x: '0-3hrs', y: details?.returnables.cattle_count_perday?.time_0_3, }, { x: '4-7hrs', y: details?.returnables.cattle_count_perday?.time_4_7, }, { x: '8-11hrs', y: details?.returnables.cattle_count_perday.time_8_11, }, { x: '12-15hrs', y: details?.returnables.cattle_count_perday.time_12_15, },
          {
            x: '16-19hrs',
            y: details?.returnables.cattle_count_perday.time_16_19,
          }, { x: '20-23hrs', y: details?.returnables.cattle_count_perday.time_20_23, }]
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
   
},[details])


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

function Manage() {
  console.log("&&")
  navigate("/manage", {state: {user: App_user}});
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

    if (!options.Vaccinated.includes(item.Vaccinated)) {
      options.Vaccinated.push(item.Vaccinated);
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
    if (!options.Height.includes(item.Height)) {
      options.Height.push(item.Height);
    }
    if (!options.Traded_Born.includes(item.Traded_Born)) {
      options.Traded_Born.push(item.Traded_Born);
    }
    if (!options.Weight.includes(item.Weight)) {
      options.Weight.push(item.Weight);
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
    console.log(title,"title")
    console.log(option,"option")
    console.log(details.returnables.overall_reports[0].CurrentLocation,"curr")
    console.log(details.returnables.overall_reports[0].Vaccinated,"vacci")
    const reports = details.returnables.overall_reports.filter(report => {
      if (title === 'CurrentLocation' || title === 'ID' || title === 'Name' || title === 'ParentProduct' || title === 'BreedType' || title === 'Color' || title === "Height" || title === 'Time_inward' || title === 'Weight'||title==="Vaccinated"||title==="Traded_Born" ) {
        return report[title] === option;
      }
    });
    return reports;
   
  };
  const data=filterData()
  console.log(data,"data")

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
      console.log(value,"value")
      if (value === 'date') {
        setColumnchart({
          series: [
            {
              name: 'Hours',
              data: [{ x: '0-3hrs', y: details.returnables?.cattle_count_perday?.time_0_3, }, { x: '4-7hrs', y: details.returnables?.returnables?.cattle_count_perday?.time_4_7, }, { x: '8-11hrs', y: details.returnables?.cattle_count_perday?.time_8_11, }, { x: '12-15hrs', y: details.returnables?.cattle_count_perday?.time_12_15, },
              {
                x: '16-19hrs',
                y: details.returnables.cattle_count_perday?.time_16_19,
              }, { x: '20-23hrs', y: details.returnables.cattle_count_perday?.time_20_23, },]
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
              data: [{ x: 'Mon', y: details.returnables?.cattle_count_perweek.sunday, }, { x: 'Tues', y: details.returnables.cattle_count_perweek.monday, }, { x: 'Wed', y: details.returnables.cattle_count_perweek.tuesday, }, { x: 'Thurs', y: details.returnables.cattle_count_perweek.wednesday, }, { x: 'Fri', y: details.returnables.cattle_count_perweek.thursday, }, { x: 'Sat', y: details.returnables.cattle_count_perweek.friday, },]
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
         
            <ReactApexChart options={options} series={columnchart?.series} type="bar" height={215} width={480} />

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
                  {Piechart(details?.returnables.vaccination_status.vaccinated, details?.returnables.vaccination_status.non_vaccinated, ['Vaccinated','Non vaccinated'], "VACCINATION STATUS", 425)}
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="card card-1">
                  {Piechart(details?.returnables.traded_newborn.traded, details?.returnables.traded_newborn.newborn, ['Traded', 'New Born',], "TRADED OR NEWBORN", 393)}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card card-1">
                  <Cattlecountchart />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card card-1">
                  {Cattleweightchart(details?.returnables.cattle_weight.below_100, details?.returnables.cattle_weight.range_101_150, details?.returnables.cattle_weight.more_150, ['Below 100', 'Range 100-150', 'Above 150'], "CATTLE WEIGHT", 430)}
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
                                    {data.map((item, index) => (
                                      <tr className={`row-${index % 2}`}>
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
