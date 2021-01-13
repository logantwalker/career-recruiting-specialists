import { React, useEffect, useState } from 'react';
import { Row, Col } from 'react-materialize';
import Footer from '../../components/Footer/Footer';
import API from '../../utils/API';
import 'materialize-css';
import './searchapply.css';
import JobSearch from './JobSearch/JobSearch';

export default function SearchApply() {

    const [jobState, updateJobs] = useState({
        jobs: []
    });

    const [directoryState, changeDir] = useState({
        render: (
            <JobSearch jobs={jobState.jobs} />
        )
    });

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = () => {
        API.getJobs()
            .then(res => {

                initalJobRender(res.data)
                updateJobs({
                    jobs: res.data
                })
                
            });
    }

    const initalJobRender = (jobArr) => {
        console.log(jobArr)
        changeDir({
            render: (
                <JobSearch jobs={jobArr} />
            )
        })
    }

    const renderJobSearch = () =>{
        changeDir({
            render: (
                <JobSearch jobs={jobState.jobs} />
            )
        })
    }

    return(
        <div>
            <div className='job-search-apply'>
                <div className='container jsa-content'>
                    {directoryState.render}
                </div>
            </div>
            <Footer/>
        </div>
    )
}