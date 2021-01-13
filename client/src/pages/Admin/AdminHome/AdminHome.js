import { React, useEffect, useState } from 'react';
import { Row, Col } from 'react-materialize';
import ApplicantTable from '../ApplicantTable/ApplicantTable';
import JobTable from '../JobTable/JobTable';
import AddNewJob from '../AddNewJob/AddNewJob';
import AdminJobView from '../AdminJobView/AdminJobView';
import API from '../../../utils/API';
import 'materialize-css';
import './admin.css';


export default function AdminHome() {
    const [directoryState, changeDir] = useState({
        render: (
        <div>
            <Col>
                <h4>Use the Sidebar to get started!</h4>
            </Col>
        </div>
        )
    });

    const [jobState, updateJobs] = useState({
        jobs: []
    })

    const [appState, updateApps] = useState({
        applicants: []
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
        API.getApplicants()
            .then(res =>{
                updateApps({
                    applicants: res.data
                })
            })
    }

    const RenderJobs = () => {
        changeDir({
            render: (<JobTable jobs={jobState.jobs} click={(e) => RenderJobView(e)} />)
        })
    }

    const RenderAddNewJob = () => {
        changeDir({
            render: (<AddNewJob />)
        })
    }

    const RenderApplicants = () => {
        changeDir({
            render: (<ApplicantTable apps={appState.applicants} />)
        })
    }

    const RenderJobView = (e) => {
        changeDir({
            render: (<AdminJobView job={jobState.jobs[e.target.id]} navi={()=>deleteNavi}/>)
        })
    }

    const deleteNavi = () =>{
        changeDir({
            render: (<JobTable jobs={jobState.jobs} click={(e) => RenderJobView(e)} />)
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
                    <div className='sidenav-item hoverable'
                        onClick={RenderAddNewJob}>
                        Add New Job Listing
                    </div>
                </Col>
                <Col s={10} className='directory-window'>
                    {directoryState.render}
                </Col>
            </Row>
        </div>
    )
}