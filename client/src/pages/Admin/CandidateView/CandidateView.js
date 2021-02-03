import { React, useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-materialize';
import API from '../../../utils/API';
import 'materialize-css';


export default function CandidateView(props) {
    useEffect(() => {
        getCandidateData(props.match.params.candidate);
        
    }, [])

    const [appState, updateApp] = useState({
        candidate: {}
    });

    const [jobState, updateJob] = useState({
        job: {}
    });

    function getCandidateData(id) {
        API.getOneApplicant(id)
            .then(res => {
                updateApp({
                    candidate: res.data
                })
                API.getOneJob(res.data.job_applied)
                    .then(res => {
                        console.log(appState)
                        updateJob({
                            job: res.data
                        })
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }

    let eduPlaceholder
    if(appState.candidate.education){
        eduPlaceholder=(
            <div className='desc-section'>
                <div className='desc-sub'>Education Level:<span className='small-text'> {appState.candidate.education.attained}</span></div>
                <div className='desc-sub'>Field of Study: <span className='small-text'>{appState.candidate.education.studyField}</span></div>
                <div className='sum-sub'>Certification Title: <span className='small-text'>{appState.candidate.education.cert_title}</span></div>
                <div className='desc-sub'>Description: <span className='small-text'>{appState.candidate.education.cert_desc}</span></div>
            </div>
        )
    }

    const applyToJob = (id) => {
        props.history.push('/apply/' + id)
    }

    let duties;
    let dutyList = appState.candidate.experience;
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
                        <h4 className='job-title'>{`${appState.candidate.first_name} ${appState.candidate.last_name}`}</h4>
                        <div className='divider'></div>
                        <div className='desc-head'>{`Candidate for: ${jobState.job.title}`}</div>
                        <div className='desc-section'>
                            <div className='desc-sub'>Location: <span className='small-text'>{appState.candidate.location}</span></div>
                            <div className='desc-sub'>Email: <span className='small-text'>{appState.candidate.email}</span></div>
                            <div className='desc-sub'>Phone: <span className='small-text'>{appState.candidate.phone}</span></div>
                        </div>
                        <div className='desc-head'>Education and Certifications:</div>
                        {eduPlaceholder}
                        <div className='desc-head'>Previous Job Titles:</div>
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
        </div>
    )
}