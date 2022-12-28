// import { Axios } from "axios";
import Axios from 'axios';
import React, { useState } from "react";


export default function StudentAccess() {


  //* setting state
  const [canadd, setcanadd] = useState('')
  const [CerID, setCerID] = useState('')
  const [CanID, setCanID] = useState('')
  const [claimst, setclaimst] = useState([])
  const [recAdd, setrecAdd] = useState([])
  const [recSta, setrecSta] = useState([])
  const [cerrid, setcerrid] = useState([])
  const [cannid, setcannid] = useState([])

  const [rec_addr, setrec_add] = useState([])
  const [rec_cerid, setrec_cerid] = useState([])
  const [rec_canid, setrec_canid] = useState([])
  const [remsha, setremsha] = useState([])
  const [vercan, setvercan] = useState([])
  const [canSta, setcansta] = useState([])
  //* Functions for inputs
  const cer_add = (e) => {
    setcanadd(e.target.value)
  }
  const cer_id = (e) => {
    console.log(e)
    setCerID(e.target.value)
  }
  const can_id = (e) => {
    console.log(e)
    setCanID(e.target.value)
  }
  const cerr_id = (e) => {
    setcerrid(e.target.value)
  }
  const cann_id = (e) => {
    setcannid(e.target.value)
  }
  const rec_add = (e) => {
    setrecAdd(e.target.value)
  }
  const re_rec_add = (e) => {
    setrec_add(e.target.value)
  }
  const re_can_id = (e) => {
    setrec_canid(e.target.value)
  }
  const re_cer_id = (e) => {
    setrec_cerid(e.target.value)
  }
  const candidate_ver = (e) => {
    setvercan(e.target.value)
  }
  //* Event functions
  let handleSubmit = (e) => {
    e.preventDefault();
  }

  const claimCertificate = async () => {
    try {
      console.log("canadd", canadd)
      console.log("certificatid", CerID)
      console.log("candiid", CanID)

      // var rem =
      await Axios.post("http://localhost:7001/api/read/claim", { candidateadd: canadd, certificatid: CerID, candiid: CanID }).then((result) => {
        console.log("this is the resultfsrsff", result.data.message)
        setclaimst(result.data.message)
      })
        .catch((error) => {
          console.log(error.response);
        });
    } catch (error) {
      console.log(error.response);
    }
  }
  const shareCertificate = async () => {
    try {
      await Axios.post("http://localhost:7001/api/write/candidateshare", { certificateid: cerrid, get: recAdd, candiid: cannid }).then((result) => {
        console.log("this is the resultfsrsff", result.data.message)
        setrecSta(result.data.message)
      })
        .catch((error) => {
          console.log(error.response);
        });
    } catch (error) {
      console.log(error.response);
    }
  }
  const removeShareCertificate = async () => {
    try {
      await Axios.post("http://localhost:7001/api/write/recandidate", {
        certificateid: rec_cerid, get: rec_addr, candiid: rec_canid
      }).then((result) => {
        console.log("this is the resultfsrsff", result.data.message)
        setremsha(result.data.message)
      })
        .catch((error) => {
          console.log(error.response);
        });
    } catch (error) {

    }
  }
  const verifyCandidate = async () => {
    try {
      console.log("printing vercan", vercan)
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
            <h1 align="center">Student Pannel</h1>
            <div className="App">
              <div>

                <form className="form-group" onSubmit={handleSubmit}>
                  <h4 align="center">Verify candidate</h4>
                  <label className="form-label">Candidate validate</label>
                  <input
                    className="form-control"
                    type="text"
                    // value={valemp}
                    placeholder="Address"
                    onChange={candidate_ver}
                  />
                  <div className='d-grid gap-2'>
                    <button type="submit" className="btn btn-success" onClick={verifyCandidate}>Verify</button>
                  </div>

                  <div className="message">{canSta ? <p>{canSta}</p> : null}</div>
                </form>





                <form onSubmit={handleSubmit}>
                  <h4 align="center">Claim Certification</h4>
                  <label className="form-label">Candidate Address</label>

                  <input
                    className="form-control"
                    type="text"
                    // value={valemp}
                    placeholder="Address"
                    onChange={cer_add}
                  />
                  <label className="form-label">Certificate ID</label>
                  {/* Certificate ID <label /> */}
                  <input
                    className="form-control"
                    type="text"
                    // value={valemp}
                    placeholder="ID"
                    onChange={cer_id}
                  />
                  <label className="form-label">Candidate ID</label>
                  {/* Candidate ID <label /> */}
                  <input
                    className="form-control"
                    type="text"
                    // value={valemp}
                    placeholder="ID"
                    onChange={can_id}
                  />
                  <div className='d-grid gap-2'>
                    <button type="submit" className="btn btn-success" onClick={claimCertificate}>Claim Certificate</button>
                  </div>

                  <div className="message">{claimst ? <p>{claimst}</p> : null}</div>
                </form>





                <form onSubmit={handleSubmit}>
                  <h4 align="center">Share Certification</h4>
                  <label className="form-label">To Address</label>
                  {/* Receiver Address <label /> */}
                  <input
                    className="form-control"
                    type="text"
                    // value={valemp}
                    placeholder="Address"
                    onChange={rec_add}
                  />
                  <label className="form-label">Certificate ID</label>
                  {/* Certificate ID <label /> */}
                  <input
                    className="form-control"
                    type="text"
                    // value={valemp}
                    placeholder="ID"
                    onChange={cerr_id}
                  />
                  <label className="form-label">Candidate ID</label>
                  {/* Candidate ID <label /> */}
                  <input
                    className="form-control"
                    type="text"
                    // value={valemp}
                    placeholder="ID"
                    onChange={cann_id}
                  />
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-success" onClick={shareCertificate}>Share Certificate</button>
                  </div>

                  <div className="message">{recSta ? <p>{recSta}</p> : null}</div>
                </form>





                <form onSubmit={handleSubmit}>
                  <h4 align="center">Revoke Certificate Access</h4>
                  <label className="form-label">To Address</label>
                  {/* Receiver Address <label /> */}
                  <input
                    className="form-control"
                    type="text"
                    // value={valemp}
                    placeholder="Address"
                    onChange={re_rec_add}
                  />
                  <label className="form-label">Certificate ID</label>
                  {/* Certificate ID <label /> */}
                  <input
                    className="form-control"
                    type="text"
                    // value={valemp}
                    placeholder="ID"
                    onChange={re_cer_id}
                  />
                  <label className="form-label">Candidate ID</label>
                  {/* Candidate ID <label /> */}
                  <input
                    className="form-control"
                    type="text"
                    // value={valemp}
                    placeholder="ID"
                    onChange={re_can_id}
                  />
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-success" onClick={removeShareCertificate}>Revoke Certificate Access</button>
                  </div>

                  <div className="message">{remsha ? <p>{remsha}</p> : null}</div>
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