// import { Axios } from 'axios';
import React from 'react';
// import '../App.css';
import { useState } from 'react';
import Axios from 'axios';


export default function AdminForm() {
  const [addemploye, setEmployee] = useState('');
  const [delemp, setDelemp] = useState('');
  const [valemp, setValemp,] = useState('');
  const [update, setUpdate] = useState([])
  const [add_status, set_add_status] = useState([])
  const [rem_status, set_rem_status] = useState([])


  const handleaddemp = (e) => {
    setEmployee(e.target.value);
  };
  const handledelemp = (e) => {
    setDelemp(e.target.value);
  };

  //* Handle input data
  const handlevalemp = (e) => {
    setValemp(e.target.value);
  };

  //* Function to verify employee
  const verifyEmpApi = async () => {
    console.log("printing emp addr", valemp);
    await Axios
      // (
      //   {
      //     method:'post',
      //     url:'http://localhost:7001/api/read/employervalidate',
      //     headers:{'Content-Type':'application/json'},
      //     body:{
      //       input:"cegvckgwvuekvwkuv"
      //     }
      //   }
      // )
      .post('http://localhost:7001/api/read/employervalidate', { input: valemp })
      .then((result) => {
        console.log("this is the resultfsrsff", result.data.status)
        UpdateEmp(result.data.status)
      })
      .catch((error) => {
        console.log(error.response);
      });
    // console.log("print for",rem)
  };

  //* Function to update the state
  const UpdateEmp = (params) => {
    var conv = params.toString()
    // console.log("test para", typeof (conv))
    return setUpdate(conv)
  }

  let handleSubmit = (e) => {
    e.preventDefault();
  }

  //* Function to add employee
  const addEmployee = async () => {
    console.log("printing for employee address:", addemploye)
    await Axios.post('http://localhost:7001/api/write/addEmployer', { employer: addemploye })
      .then((result) => {
        console.log("this is the add", result.data)
        set_add_status(result.data.message)
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  //* Function to remove employee
  const removeEmployee = async () => {
    console.log("printing for employee address:", delemp)
    await Axios.post('http://localhost:7001/api/write/removeEmployer', { employer: delemp })
      .then((result) => {
        console.log("this is the add", result.data)
        set_rem_status(result.data.message)
      })
      .catch((error) => {
        console.log(error.response);
      });
  }



  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="App">
            <h1 align="center">Admin Pannel</h1>
            <form onSubmit={handleSubmit}>
              <h4 align="center">Verify Employee</h4>
              <label className="form-label">Employee Address</label>
              <input
                className="form-control"
                type="text"
                // value={valemp}
                placeholder="Employee Address"
                onChange={handlevalemp}
              />
              <div className='d-grid gap-2'>
                <button type="submit" className="btn btn-success" onClick={verifyEmpApi}>Verify Employee</button>
              </div>
              <div className="message">{update ? <p>{update}</p> : null}</div>
            </form>
            <form onSubmit={handleSubmit}>
              <h4 align="center">Add  Employee</h4>
              <label className="form-label">New Employee Address</label>
              <label />
              <input
                className="form-control"
                type="text"
                // value={addemploye}
                placeholder="Enter Employee public address"
                onChange={handleaddemp}
              />
              <div className='d-grid gap-2'>
                <button type="submit" className="btn btn-success" onClick={addEmployee}>Add Employee</button>
              </div>
              <div className="message">{add_status ? <p>{add_status}</p> : null}</div>
            </form>
            <form onSubmit={handleSubmit}>
              <h4 align="center">Remove Employee</h4>
              <label className="form-label">Employee Address</label>
              <input
                className="form-control"
                type="text"
                // value={delemp}
                placeholder="Employee Address"
                onChange={handledelemp}
              />
              <div className='d-grid gap-2'>
                <button type="submit" className="btn btn-success" onClick={removeEmployee}>Remove Employee</button>
              </div>
              <div className="message">{rem_status ? <p>{rem_status}</p> : null}</div>
            </form>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>


  );
}
