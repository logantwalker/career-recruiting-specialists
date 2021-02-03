import { React, useEffect, useState } from 'react';
import { Row, Col } from 'react-materialize';
import ApplicantTable from '../ApplicantTable/ApplicantTable';
import JobTable from '../JobTable/JobTable';
import API from '../../../utils/API';
import 'materialize-css';


export default function AdminAppView(props) {

    useEffect(() => {
        fetchJobs();
        fetchApplicants();
    }, []);

    const [jobState, updateJobs] = useState({
        jobs: []
    })

    const [appState, updateApps] = useState({
        applicants: []
    })



    function fetchJobs() {
        API.getJobs()
            .then(res => {
                updateJobs({
                    jobs: res.data
                })
            });

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
        props.history.push('/admin/jobs')
    }

    const RenderAddNewJob = () => {
        props.history.push('/admin/add-job')
    }

    const renderCandidate = (e) => {
        props.history.push('/admin/candidates/' + e.target.id)
    }

    return (
        <div className='admin'>
            <Row className='directory-container'>
                <Col s={10} className='directory-window'>
                    <ApplicantTable apps={appState.applicants} click={(e)=>renderCandidate(e)}/>
                </Col>
                <Col className='side-nav'>
                    <div onClick={RenderJobs} className='sidenav-item'>
                        View All Jobs
                    </div>
                    <div onClick={RenderAddNewJob} className='sidenav-item'>
                        Add New Job Listing
                    </div>
                </Col>
            </Row>
        </div>
    )
}