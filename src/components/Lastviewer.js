// import { Axios } from "axios";
import Axios from 'axios';
import React from "react";
import { useState } from "react";


export default function LastView() {


  const [can_id, setcan_id] = useState([])
  const [cer_id, setcer_id] = useState([])
  const [share_status, setshare_status] = useState([])





  const candidate_id = (e) => {
    setcan_id(e.target.value)
  }
  const certificate_id = (e) => {
    setcer_id(e.target.value)
  }
  // const share_st = (e)=>{
  //   setshare_status(e.target.value)
  // }

  //* Function for form submit
  let handleSubmit = (e) => {
    e.preventDefault();
  }


  let share_status_data = async () => {
    try {
      await Axios.post("http://localhost:7001/api/read/certificate", { input1: cer_id, input2: can_id }).then((result) => {
        console.log("this is the result", result.data.message)
        setshare_status(result.data.message)
      })
        .catch((error) => {
          console.log(error.response);
        });
    } catch (error) {
      console.log(error.response);
    }
  }



  return (

    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <div>
          <div className="App">
            <div>
            <h1 align = "center">End Viewer </h1>
              <h4 align = "center">Verify Certificate</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Certificate ID </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="ID"
                    onChange={certificate_id}
                  />
                </div>

                <label className="form-label">candidate ID</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="ID"
                  onChange={candidate_id}
                />
                <div className='d-grid gap-2'>
                <button className="btn btn-success" type="submit" onClick={share_status_data}>View Certificate</button>
                </div>
                <div className="message">{share_status ? <p>{share_status}</p> : null}</div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3"></div>
    </div>

  )
}