import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Homepage from './components/Home';
import AdminForm from "./components/Admin"
import StaffAccess from './components/StaffAccess';
import StudentAccess from './components/StudentAccess';
import LastView from './components/Lastviewer';

export default function App() {

  return (
    <Router>
      <div>
        <h2>Drip Wallet For Examroom.ai</h2>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/admin'} className="nav-link">Admin</Link></li>
            <li><Link to={'/staff'} className="nav-link">staff</Link></li>
            <li><Link to={'/student'} className="nav-link">Student</Link></li>
            <li><Link to={"/viewer"} className="nav-link">viewer</Link></li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/admin' element={<AdminForm />} />
          <Route path='/staff' element={<StaffAccess />} />
          <Route path='/student' element={<StudentAccess />} />
          <Route path='/viewer' element={<LastView />} />
        </Routes>
      </div>
    </Router>

  );
}
