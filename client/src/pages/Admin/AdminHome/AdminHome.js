import { React, useEffect, useState } from 'react';
import { Row, Col } from 'react-materialize';
import ApplicantTable from '../ApplicantTable/ApplicantTable';
import JobTable from '../JobTable/JobTable';
import AddNewJob from '../AddNewJob/AddNewJob';
import AdminJobView from '../AdminJobView/AdminJobView';
import API from '../../../utils/API';
import 'materialize-css';
import './admin.css';


export default function AdminHome(props) {

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
            .then(res =>{
                updateApps({
                    applicants: res.data
                })
            })
    }

    // const RenderJobs = () => {
    //     changeDir({
    //         render: (<JobTable jobs={jobState.jobs} click={(e) => RenderJobView(e)} />)
    //     })
    // }

    const RenderAddNewJob = () => {
        props.history.push('/admin/add-job')
    }

    // const RenderApplicants = () => {
    //     changeDir({
    //         render: (<ApplicantTable apps={appState.applicants} />)
    //     })
    // }

    const RenderJobView = (e) => {
        props.history.push('/admin/jobs/' + e.target.id)
    }

    // const deleteNavi = () =>{
    //     changeDir({
    //         render: (<JobTable jobs={jobState.jobs} click={(e) => RenderJobView(e)} />)
    //     })
    // }

    return (
        <div className='admin'>
            <Row className='directory-container'>
                <Col s={10} className='directory-window'>
                    <JobTable jobs={jobState.jobs} click={(e)=>{RenderJobView(e)}}/>
                </Col>
                <Col className='side-nav'>
                    <div className='sidenav-item'>
                        View All Candidates
                    </div>
                    <div onClick={RenderAddNewJob} className='sidenav-item'>
                        Add New Job Listing
                    </div>
                </Col>
            </Row>
        </div>
    )
}