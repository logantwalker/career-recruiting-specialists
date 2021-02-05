import { React, useEffect, useState } from 'react';
import { Row, Col, TextInput, Select } from 'react-materialize';
import ApplicantTable from '../ApplicantTable/ApplicantTable';
import API from '../../../utils/API';
import 'materialize-css';


export default function AdminAppView(props) {

    useEffect(() => {
        
        fetchApplicants();
        getRouteKey();
    }, []);


    const [appState, updateApps] = useState({
        applicants: []
    })

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

    function fetchApplicants() {
        API.getApplicants()
            .then(res => {
                updateApps({
                    applicants: res.data
                })
            })
    }

    const RenderJobs = () => {
        props.history.push(`/${routeKey.key}/admin/jobs`)
    }

    const RenderAddNewJob = () => {
        props.history.push(`/${routeKey.key}/admin/add-job`)
    }

    const renderCandidate = (e) => {
        props.history.push(`/${routeKey.key}/admin/candidates/` + e.target.id)
    }

    return (
        <div className='admin'>
            <Row className='directory-container'>
                <Col s={9} className='directory-window'>
                    <ApplicantTable apps={appState.applicants} click={(e)=>renderCandidate(e)}/>
                </Col>
                <Col s={3} className='side-nav'>
                    <Col s={12} className='search-filter'>
                        
                        <div className='input-field col s12'>
                            <select id="search-filter" name="search-filter" className='keyword-search'>
                                <option value="" disabled selected>Select Search Filter</option>
                                <option value="full-time">Full-Time</option>
                                <option value="temporary">Temporary</option>
                            </select>
                        </div>
                        <TextInput s={12} className='keyword-search'
                            id='query'
                            placeholder='search'/>
                        
                        
                    </Col>
                    <Col s={12} onClick={RenderJobs} className='sidenav-item'>
                        View All Jobs
                    </Col>
                    <Col s={12} onClick={RenderAddNewJob} className='sidenav-item'>
                        Add New Job Listing
                    </Col>
                </Col>
            </Row>
        </div>
    )
}