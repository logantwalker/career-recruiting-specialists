import { React, useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-materialize';
import Footer from '../../../components/Footer/Footer'
import API from '../../../utils/API';
import 'materialize-css';
import './job-view.css';

export default function JobView(props) {
    useEffect(() => {
        getJobData(props.match.params.job);
    }, [])

    const [jobState, updateJob] = useState({
        job: {}
    });

    function getJobData(id) {
        API.getOneJob(id)
            .then(res => {
                updateJob({
                    job: res.data
                })
            })
            .catch(err => console.log(err))
    }

    const applyToJob = (id) => {
        props.history.push('/apply/' + id)
    }

    let duties;
    let dutyList = jobState.job.duties;
    if (dutyList) {
        duties = (
            <ul className='duty-list'>
                {dutyList.map((duty, i) => {
                    return (<li key={i}>{duty}</li>)
                })}
            </ul>
        )

    }

    let quals;
    let qualList = jobState.job.qualifications;
    if (qualList) {
        quals = (
            <ul className='duty-list'>
                {qualList.map((qual, i) => {
                    return (<li key={i}>{qual}</li>)
                })}
            </ul>
        )

    }

    return (
        <div>
            <div className='job-search-apply'>
                <div className='container jsa-content'>
                    <div className='job-feature'>
                        <h4 className='job-title'>{jobState.job.title}</h4>
                        <div className='divider'></div>
                        <div className='desc-head'>Job Description:</div>
                        <div className='desc-section'>
                            <div className='desc-sub'>Job Title: <span className='small-text'>{jobState.job.title}</span></div>
                            <div className='desc-sub'>Location: <span className='small-text'>{jobState.job.location}</span></div>
                            <div className='desc-sub'>Salary: <span className='small-text'>{jobState.job.salary}</span></div>
                            <div className='desc-sub'>Shift: <span className='small-text'>{jobState.job.shift}</span></div>
                            <div className='desc-sub'>Job Type: <span className='small-text'>{jobState.job.type}</span></div>
                            <div className='sum-sub'>Summary:</div>
                            <p className='summary'>{jobState.job.description}</p>
                        </div>
                        <div className='desc-head'>Job Duties:</div>
                        <div className='list-wrapper'>
                            {duties}
                        </div>
                        <div className='desc-head'>Preferred Qualifications: </div>
                        <div className='list-wrapper'>
                            {quals}
                        </div>
                        <Row className='apply'>
                            <Col s={12}>
                                <Button className='title-btn'
                                    onClick={() => applyToJob(props.match.params.job)}>APPLY</Button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}