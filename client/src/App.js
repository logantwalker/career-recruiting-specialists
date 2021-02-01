import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from './utils/API';

//user facing pages & components
import Navbar from './components/Navbar/navbar';
import Home from './pages/Home/Home';
import EmployerOverview from './pages/EmployerOverview/EmployerOverview'
import RequestEmployee from './pages/RequestEmployee/RequestEmployee';
import JobOverview from './pages/JobOverview/JobOverview';
import SearchApply from './pages/JobSearchApply/SearchApply';
import JobView from './pages/JobSearchApply/JobView/JobView'
import JobApply from './pages/JobSearchApply/JobApply/JobApply';
import ApplySuccess from './pages/JobSearchApply/ApplySuccess/ApplySuccess';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/ContactUs/Contact';
import NotFound from './pages/NotFound/NotFound';

//admin components
import AdminHome from './pages/Admin/AdminHome/AdminHome';
import './App.css';




function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/employer-overview' component={EmployerOverview} />
        <Route exact path='/request-employee' component={RequestEmployee} />
        <Route exact path='/job-seekers' component={JobOverview} />
        <Route exact path='/job-search' component={SearchApply} />
        <Route exact path='/job-search/:job' component={JobView} />
        <Route exact path='/apply/:job' component={JobApply}/>
        <Route exact path='/app-success' component={ApplySuccess} />
        <Route exact path='/about' component={AboutUs} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/admin' component={AdminHome} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
