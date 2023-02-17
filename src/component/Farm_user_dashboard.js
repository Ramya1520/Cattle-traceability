import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import './Farm_user_dashboard.css';
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
import No from '../assets/No1.png';
import Yes from '../assets/tick.png'

const details = { vaccination_status: { "yes": 43, "no": 57 }, traded_or_newborn: { "traded": 10, "newborn": 90 }, cattle_count: { "hr_0_3": 2, "hr_4_7": 6, "hr_8_11": 12, "hr_12_15": 20, "hr_16_19": 8, "hr_20_23": 3 }, cattle_weights: { "below_100": 30, "range_100_150": 20, "more_150": 50 }, overall_report: [{ "unique_id": "PRO1", "weight": 89, "traded_or_newborn": "traded", "inspection": false, "vaccination": false, "date_of_arrival": "30-Jan-2023", "time_of_arrival": "08:50:55", "location": "India" }, { "unique_id": "PRO2", "weight": 150, "traded_or_newborn": "traded", "inspection": true, "vaccination": true, "date_of_arrival": "30-Jan-2023", "time_of_arrival": "08:50:55", "location": "India" }, { "unique_id": "PRO3", "weight": 170, "traded_or_newborn": "traded", "inspection": true, "vaccination": true, "date_of_arrival": "30-Jan-2023", "time_of_arrival": "08:50:55", "location": "India" }, { "unique_id": "PRO4", "weight": 120, "traded_or_newborn": "traded", "inspection": true, "vaccination": true, "date_of_arrival": "30-Jan-2023", "time_of_arrival": "08:50:55", "location": "India" }] }

const Farm_user_dashboard = () => {
  const handleClickScroll = () => {
    const element = document.getElementById('section-1');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [table, setTable] = useState(false)
  function ApexChart(data1, data2, key, title, width) {
    const [chartData, setChartData] = useState({
      series: [data1, data2],
      options: {
        chart: {
          type: 'pie',
        },
        labels: key,
        colors: ['#18B7F6', '#26409f']

      }
    });

    return (
      <div id="chart">
        <div className="title">
          <h6 className="text">{title}</h6>
        </div>
        <ReactApexChart options={chartData.options} series={chartData.series} type="pie" width={width} />
      </div>
    );
  }

  function ApexChart1(data1, data2, data3, key, title) {
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
        <ReactApexChart options={chartData.options} series={chartData.series} type="pie" width={400} />
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
          <h6>CATTLE COUNT</h6>
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
            <Nav.Link href="#home" className="link">Farm</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container-fluid view">
        <div className="row chart">
          <div className="col-lg-1" >
            <div className="type">
              <div className="row">
                <img src={Fac} alt="factorys" className='img1 '></img>
              </div>
              <div className="row">
                <img src={Notes} onClick={handleClick} alt="factorys" className='img1 '>
                </img></div>
              <div className="row">
                <img src={Edit1} alt="factorys" className='img1 '></img></div>
              <div className="row">  <img src={Profile} alt="factorys" className='img1 '></img>
              </div>
            </div>
          </div>
          <div className="col-lg-5">{ApexChart(details.vaccination_status.yes, details.vaccination_status.no, ['yes', 'no'], "VACCINATION STATUS", 330)}</div>
          <div className="col-lg-6"><div className="second">{ApexChart(details.traded_or_newborn.traded, details.traded_or_newborn.newborn, ['Traded', 'New Born',], "TRADED OR NEWBORN", 360)}</div></div>
        </div>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-5">{ColumnChart()}</div>
          <div className="col-lg-6"><div className="second">{ApexChart1(details.cattle_weights.below_100, details.cattle_weights.more_150, details.cattle_weights.range_100_150, ['below_100', 'more_150', 'range_100_150'], "CATTLE WEIGHT")}</div></div>
          {table === true &&
            <div className="row tbl">
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
                  {details.overall_report.map((item, index) => (
                    <tr key={item.unique_id} className={`row-${index % 2}`}>
                      <td>{item.unique_id}</td>
                      <td>{item.weight}</td>
                      <td className="traded-newborn">{item.traded_or_newborn}</td>
                      <td>{item.inspection.toString() == "true" && <img src={Yes} className="no2" /> || <img src={No} className="no1" />}</td>
                      <td>{item.vaccination.toString() == "true" && <img src={Yes} className="no2" /> || <img src={No} className="no1" />}</td>
                      <td>{item.date_of_arrival}</td>
                      <td>{item.time_of_arrival}</td>
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

export default Farm_user_dashboard;
