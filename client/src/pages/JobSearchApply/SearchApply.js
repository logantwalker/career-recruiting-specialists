import { React, useEffect, useState } from 'react';
import { Row, Col } from 'react-materialize';
import Footer from '../../components/Footer/Footer';
import API from '../../utils/API';
import 'materialize-css';
import './searchapply.css';
import JobSearch from './JobSearch/JobSearch';
import JobView from './JobView/JobView';

export default function SearchApply(props) {


    const [jobState, updateJobs] = useState({
        jobs: []
    });

    const [directoryState, changeDir] = useState({
        render: (
            <JobSearch jobs={jobState.jobs} click={renderJobView} />
        )
    });

    useEffect(() => {
        fetchJobs();
    }, []);


    const fetchJobs = () => {
        API.getJobs()
            .then(res => {
                updateJobs({
                    jobs: res.data
                })
                initalJobRender(res.data)
            });
    }

    function renderJobView(e) {
        props.history.push('/job-search/' + e.target.id)
    }

    const initalJobRender = (jobArr) => {
        changeDir({
            render: (
                <JobSearch jobs={jobArr} click={renderJobView} />
            )
        })
    }

    const renderJobSearch = () => {
        changeDir({
            render: (
                <JobSearch jobs={jobState.jobs} click={renderJobView} />
            )
        })
    }

    return (
        <div>
            <div className='job-search-apply'>
                <div className='container jsa-content'>
                    {directoryState.render}
                </div>
            </div>
            <Footer />
        </div>
    )
}