import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import './Logistics.css';
import { VictoryPie } from 'victory';
import 'react-circular-progressbar/dist/styles.css';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Chart from "react-google-charts";
import 'react-circular-progressbar/dist/styles.css';
import ReactApexChart from 'react-apexcharts';
import { useState } from "react";
import Fac from '../assets/Factory.png'
import Profile from '../assets/Profile.png';
import Notes from '../assets/Edit.png';
import Edit1 from '../assets/Edit2.png';

const details = { location: { "india": 50, "china": 30, "america": 20 }, farm_name: { "variety": 10, "cultivatio": 60, "ogo": 30 }, cattle_count: { "hr_0_3": 2, "hr_4_7": 6, "hr_8_11": 12, "hr_12_15": 20, "hr_16_19": 8, "hr_20_23": 3 }, cattle_weights: { "below_100": 30, "range_100_150": 20, "more_150": 50 }, overall_report: [{ "unique_id": "PRO1", "weight": 89, "farm_name": "ogo", "date_of_arrival": "30-Jan-2023", "time_of_arrival": "08:50:55", "location": "India", "from": "TamilNadu", "To": "UP", "starting_date_and_time": "11/2/2023T22:33:11", "ending_date_and_time": "15/2/2023T21:30:11", "starting_date_and_time": "11/2/2023T22:33:11", "ending_date_and_time": "15/2/2023T21:30:11" }, { "unique_id": "PRO2", "weight": 150, "farm_name": "variety", "date_of_arrival": "30-Jan-2023", "time_of_arrival": "08:50:55", "location": "India", "from": "UP", "To": "Tamilnadu", "starting_date_and_time": "11/2/2023T22:33:11", "ending_date_and_time": "15/2/2023T21:30:11" }, { "unique_id": "PRO3", "weight": 170, "farm_name": "cultivatio", "date_of_arrival": "30-Jan-2023", "time_of_arrival": "08:50:55", "location": "India", "from": "Kerala", "To": "UP", "starting_date_and_time": "11/2/2023T22:33:11", "ending_date_and_time": "15/2/2023T21:30:11" }, { "unique_id": "PRO4", "weight": 120, "farm_name": "cultivatio", "date_of_arrival": "30-Jan-2023", "time_of_arrival": "08:50:55", "location": "India", "from": "TamilNadu", "To": "UP", "starting_date_and_time": "11/2/2023T22:33:11", "ending_date_and_time": "15/2/2023T21:30:11" }] }

const Logistics_dashboard = () => {
    const [table, setTable] = useState(false)
    function ApexChart1(data1, data2, data3, key, title, width) {
        const [chartData, setChartData] = useState({
            series: [data1, data2, data3],
            options: {
                chart: {
                    type: 'pie',
                },
                labels: key,
                colors: ['#18B7F6', '#3255f5', '#26409f']
            }
        });

        return (
            <div id="chart">
                <div className="title">
                    <h6>{title}</h6>
                </div>
                <ReactApexChart options={chartData.options} series={chartData.series} type="pie" width={width} />
            </div>
        );
    }

    function ColumnChart() {
        const dataObject = { "hr_0_3": 2, "hr_4_7": 6, "hr_8_11": 12, "hr_12_15": 20, "hr_16_19": 8, "hr_20_23": 3 };

        const data = Object.entries(dataObject).map(([hourRange, occurrences]) => {
            const hourLabel = hourRange.replace('hr_', '').replace(/_/g, '-');
            return [hourLabel, occurrences];
        });

        data.unshift(['Hour', 'Occurrences']);

        const options = {
            hAxis: { title: 'Hour', titleTextStyle: { color: '#333' } },
            vAxis: { minValue: 0 },
        };

        return (
            <div>
                <div className="title">
                    <h6>TRIPS COUNT</h6>
                </div>
                <Chart
                    chartType="ColumnChart"
                    width="90%"
                    height="200px"
                    data={data}
                    options={options}
                />
            </div>
        );
    }
    const handleClick = () => {
        setTable(true)
    }
    return (
        <div>
            <Navbar className="navbar" expand="lg" fixed="top">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home" className="link">Logistics</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="container-fluid view">

                <div className="row chart">
                    <div className="col-lg-1">
                        <div className="logistics">
                            <div className="row">
                                <img src={Fac} alt="factorys" className='imgl'></img>
                            </div>
                            <div className="row">
                                <img src={Notes} onClick={handleClick} alt="factorys" className='imgl'></img>
                            </div>
                            <div className="row">
                                <img src={Edit1} alt="factorys" className='imgl '></img>
                            </div>
                            <div className="row">
                                <img src={Profile} alt="factorys" className='imgl '></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">{ApexChart1(details.location.india, details.location.china, details.location.america, ['India', 'China', 'America'], "LOCATION", "360")}</div>
                    <div className="col-lg-6">
                        <div >{ApexChart1(details.farm_name.cultivatio, details.farm_name.ogo, details.farm_name.variety, ["cultivatio", "ogo", "variety"], "FARM NAME", "360")}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5">{ColumnChart()}</div>
                    <div className="col-lg-6">{ApexChart1(details.cattle_weights.below_100, details.cattle_weights.more_150, details.cattle_weights.range_100_150, ['below_100', 'more_150', 'range_100_150'], "CATTLE WEIGHT", "400")}</div>
                    {table === true &&
                        <div className="row tbl">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Unique ID</th>
                                        <th>Weight</th>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Company Name</th>
                                        <th>Date/Time to start</th>
                                        <th>Date/Time to end</th>
                                        <th>Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {details.overall_report.map((item, index) => (
                                        <tr key={item.unique_id} className={`row-${index % 2}`}>
                                            <td>{item.unique_id}</td>
                                            <td>{item.weight}</td>
                                            <td>{item.from}</td>
                                            <td>{item.To}</td>
                                            <td>{item.farm_name}</td>
                                            <td>{item.starting_date_and_time}</td>
                                            <td>{item.ending_date_and_time}</td>
                                            <td>{item.location}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Logistics_dashboard;
