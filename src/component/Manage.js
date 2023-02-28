import React from "react";
import { useState } from "react";
import './Manage.css'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Manage() {
  const [data, setData] = useState([]);
  const navigate=useNavigate();
  const location = useLocation();

  const App_user=location.state?.user
   console.log(App_user,"AA")
   


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4000/data');
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);
  const Handleclick=()=>{
navigate('/create',{state :{user:App_user}})
  }
  return (
    <div >

      <div className='container-fluid'>
        <div className="row ">
          <div className='col-lg-12 create-report'>
            <button type="button" onClick={()=>Handleclick()} class="btn btn-primary create_new">Create New</button>
          </div>
        </div>
        <div className="report">
        <div className='col-lg-12'>
        {data && (
          <table className="report-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>DESIGNATION</th>
                <th>PHONE</th>
                <th>MAILORGANIZATION</th>
                <th>ORGANIZATION</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.ID} className={`rows-${index % 2}`}>
                  <td>{item.ID}</td>
                  <td>{item.Name}</td>
                  <td>{item.Designation}</td>
                  <td>{item.Phone}</td>
                  <td>{item.Mail}</td>
                  <td>{item.Organization}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        </div>
        </div>
      </div>
    </div>
  )
}
export default Manage