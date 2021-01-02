import { React, useEffect, useState } from 'react';
import { Row, Col } from 'react-materialize';
import ApplicantTable from '../ApplicantTable/ApplicantTable';
import JobTable from '../JobTable/JobTable';
import API from '../../../utils/API';
import 'materialize-css';
import './admin.css';

export default function AdminHome() {
    const [directoryState, changeDir] = useState({
        render: (<div></div>)
    });

    const [jobState, updateJobs] = useState({
        jobs: []
    })


    useEffect(() => {
        fetchJobs();
        fetchApplicants();
    }, []);

    const fetchJobs = () => {
        API.getJobs()
            .then(res => {
                updateJobs({
                    jobs: res.data
                })
            });
    }

    const fetchApplicants = () => {
        console.log('fetching applicants...')
    }

    const RenderJobs = () => {
        changeDir({
            render: (<JobTable jobs={jobState.jobs} />)
        })
    }

    const RenderApplicants = () => {
        changeDir({
            render: (<ApplicantTable />)
        })
    }

    return (
        <div className='admin'>
            <Row className='directory-container'>
                <Col s={2} className='side-nav'>
                    <div className='sidenav-item hoverable'
                        onClick={RenderJobs} >
                        View Listed Jobs
                    </div>
                    <div className='sidenav-item hoverable'
                        onClick={RenderApplicants}>
                        View Applicants
                    </div>
                    <a href='/admin/add-job'>
                        <div className='sidenav-item hoverable'>
                            Add New Job Listing
                        </div>
                    </a>
                    <a>
                        <div className='sidenav-item hoverable'>
                            Add New Applicant
                        </div>
                    </a>
                </Col>
                <Col s={10} className='directory-window'>
                    {directoryState.render}
                </Col>
            </Row>
        </div>
    )
}