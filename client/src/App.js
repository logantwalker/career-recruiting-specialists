import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from './utils/API';

//user facing pages & components
import Navbar from './components/Navbar/navbar';
import Home from './pages/Home/Home';
import EmployerOverview from './pages/EmployerOverview/EmployerOverview'
import RequestEmployee from './pages/RequestEmployee/RequestEmployee';
import SearchApply from './pages/JobSearchApply/SearchApply';
import JobView from './pages/JobSearchApply/JobView/JobView'
import JobApply from './pages/JobSearchApply/JobApply/JobApply';
import ApplySuccess from './pages/JobSearchApply/ApplySuccess/ApplySuccess';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/ContactUs/Contact';
import NotFound from './pages/NotFound/NotFound';

import './App.css';

//admin components
import AdminHome from './pages/Admin/AdminHome/AdminHome';
import AdminJobView from './pages/Admin/AdminJobView/AdminJobView';
import AddNewJob from './pages/Admin/AddNewJob/AddNewJob';
import AdminAppView from './pages/Admin/AdminAppView/AdminAppView';
import EditJob from './pages/Admin/EditJob/EditJob';
import CandidateView from './pages/Admin/CandidateView/CandidateView';

function App() {

  useEffect(() => {
    getRouteKey();
  }, [])

  const [routeKey, setKey] = useState({
    key: ''
  })

  function getRouteKey() {
    API.getUUID()
      .then(res => {
        setKey({
            key: res.data[0].value
          })
      })
  }
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/employer-overview' component={EmployerOverview} />
        <Route exact path='/request-employee' component={RequestEmployee} />
        <Route exact path='/job-search' component={SearchApply} />
        <Route exact path='/job-search/:job' component={JobView} />
        <Route exact path='/apply/:job' component={JobApply} />
        <Route exact path='/apply-success' component={ApplySuccess} />
        <Route exact path='/about' component={AboutUs} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path={`/${routeKey.key}/admin/jobs`} component={AdminHome} />
        <Route exact path={`/${routeKey.key}/admin/jobs/:job`} component={AdminJobView} />
        <Route exact path={`/${routeKey.key}/admin/edit-job/:job`} component={EditJob} />
        <Route exact path={`/${routeKey.key}/admin/add-job`} component={AddNewJob} />
        <Route exact path={`/${routeKey.key}/admin/candidates`} component={AdminAppView} />
        <Route exact path={`/${routeKey.key}/admin/candidates/:candidate`} component={CandidateView} />

        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
