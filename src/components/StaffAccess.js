import React from "react";
// import '../App.css';
import { useState } from "react";
import Axios from 'axios';


export default function StaffAccess() {

  //* setting state
  const [valemp, setValemp,] = useState('');
  const [update, setUpdate] = useState([])
  const [CanAdd, setCanAdd] = useState([])
  const [CanID, setCanID] = useState([])
  const [CerID, setCerID] = useState([])
  const [Cername, setCername] = useState([])
  const [Courdu, setCourdu] = useState([])
  const [Cernname, setCernname] = useState([])
  const [CerStatus, setCerStatus] = useState([])
  const [Remcan, setRemcan] = useState([])
  const [remstatus, setremstatus] = useState([])
  const [vercan, setvercan] = useState([])
  const [canSta, setcansta] = useState([])



  //* Handle input data
  const handlevalemp = (e) => {
    setValemp(e.target.value);
  };
  const CandidateAddress = (e) => {
    setCanAdd(e.target.value)
  }
  const CandidateID = (e) => {
    setCanID(e.target.value)
  }
  const CertID = (e) => {
    setCerID(e.target.value)
  }
  const Certname = (e) => {
    setCername(e.target.value)
  }
  const CourDuration = (e) => {
    setCourdu(e.target.value)
  }
  const Certificatename = (e) => {
    setCernname(e.target.value)
  }
  const CanRemAdd = (e) => {
    setRemcan(e.target.value)
  }
  const candidate_ver = (e) => {
    console.log("print e", e)
    setvercan(e.target.value)
  }


  //* Function for form submit
  let handleSubmit = (e) => {
    e.preventDefault();
  }

  //* Function to update the state
  const UpdateEmp = (params) => {
    var conv = params.toString()
    return setUpdate(conv)
  }

  //* certification issue
  const issueCertificate = async () => {
    try {
      await Axios.post('http://localhost:7001/api/write/issue', { candidate: CanAdd, candiid: CanID, certificateid: CerID, name: Cername, duration: Courdu, certiname: Cernname }).then((result) => {
        console.log("this is the result", result.data.message)
        setCerStatus(result.data.message)
      })
        .catch((error) => {
          console.log(error.response);
        });
    } catch (error) {
      console.log(error.response);
    }

  }
  //* Removing a candidate 
  const remCandidate = async () => {
    try {
      await Axios.post('http://localhost:7001/api/write/removecandidate', { candidate: Remcan }).then((result) => {
        console.log("this is the result", result.data.message)
        setremstatus(result.data.message)
      })
        .catch((error) => {
          console.log(error.response);
        });
    } catch (error) {
      console.log(error.response);
    }
  }
  //* Function to verify employee
  const verifyEmpApi = async () => {
    try {

      await Axios.post('http://localhost:7001/api/read/employervalidate', { input: valemp })
        .then((result) => {
          console.log("this is the result", result.data.status)
          UpdateEmp(result.data.status)
        })
        .catch((error) => {
          console.log(error.response);
        });
    } catch (error) {
      console.log(error.response);
    }


  };
  const verifyCandidate = async () => {
    try {
      console.log("printig vercan", vercan)
      await Axios.post("http://localhost:7001/api/read/candidate", { input1: vercan }).then((result) => {
        console.log("this is the result", result.data.message)
        setcansta(result.data.message)
      })
        .catch((error) => {
          console.log(error.response);
        });
    } catch (error) {
      console.log(error.response);
    }
  }


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div>
            <h1 align="center">Staff Pannel</h1>
            <div className="App">
              <div>
                <form onSubmit={handleSubmit}>

                  <h4 align="center">Staff Self Validate</h4>
                  <label className="form-label">Staff address</label>

                  <input
                    className="form-control"
                    type="text"
                    value={valemp}
                    placeholder="Address"
                    onChange={handlevalemp}
                  />
                  <div className='d-grid gap-2'>
                    <button type="submit" className="btn btn-success" onClick={verifyEmpApi}>Verify</button>
                  </div>

                  <div className="message">{update ? <p>{update}</p> : null}</div>

                </form>

                <form onSubmit={handleSubmit}>
                  <h4 align="center">Issue New Certificate</h4>
                  Candidate Address <label />
                  <input
                    className="form-control"
                    type="text"
                    // value={CandidateAddress}
                    placeholder="Address"
                    onChange={CandidateAddress}
                  />
                  <label className="form-label">Candidate ID</label>

                  <input
                    className="form-control"
                    type="text"
                    // value={CandidateID}
                    placeholder="ID"
                    onChange={CandidateID}
                  />
                  <label className="form-label">Certificate ID </label>
                  <input
                    className="form-control"
                    type="text"
                    // value={CertID}
                    placeholder="ID"
                    onChange={CertID}
                  />
                  <label className="form-label">Name </label>
                  {/* Certificate name <label /> */}
                  <input
                    className="form-control"
                    type="text"
                    // value={Certname}
                    placeholder="Name"
                    onChange={Certname}
                  />
                  <label className="form-label">Course Duration</label>
                  {/* Course Duration <label /> */}
                  <input
                    className="form-control"
                    type="text"
                    // value={CourDuration}
                    placeholder="Duration"
                    onChange={CourDuration}
                  />
                  <label className="form-label">Certificate Name </label>
                  {/* Certificate Name <label /> */}
                  <input
                    className="form-control"
                    type="text"
                    // value={CourDuration}
                    placeholder="Name"
                    onChange={Certificatename}
                  />
                  <div className='d-grid gap-2'>
                    <button type="submit" className="btn btn-success" onClick={issueCertificate}>Generate Certificate</button>
                  </div>
                  <div className="message">{CerStatus ? <p>{CerStatus}</p> : null}</div>
                </form>
                <form onSubmit={handleSubmit}>
                  <h4 align="center">Verify candidate</h4>
                  <label className="form-label">Candidate Address </label>
                  {/* Candidate Address <label /> */}
                  <input
                    className="form-control"
                    type="text"
                    // value={valemp}
                    placeholder="Address"
                    onChange={candidate_ver}
                  />
                  <div className='d-grid gap-2'>
                    <button type="submit" className="btn btn-success" onClick={verifyCandidate}>Verify Candidate</button>
                  </div>
                  <div className="message">{canSta ? <p>{canSta}</p> : null}</div>
                </form>
                <form onSubmit={handleSubmit}>
                  {/* *verifying candidate */}
                  <h4 align="center">Remove a candidate</h4>
                  <label className="form-label">Candidate Address </label>
                  {/* Candidate Address <label /> */}
                  <input
                    className="form-control"
                    type="text"
                    // value={valemp}
                    placeholder="Address"
                    onChange={CanRemAdd}
                  />
                  <div className='d-grid gap-2'>
                    <button type="submit" className="btn btn-success" onClick={remCandidate}>Remove Candidate</button>
                  </div>

                  <div className="message">{remstatus ? <p>{remstatus}</p> : null}</div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>

    </div>

  )
}