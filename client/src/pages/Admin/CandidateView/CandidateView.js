import { React, useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-materialize';
import { useHistory } from "react-router-dom";
import DeleteJobModal from '../../../components/Modals/DeleteJobModal';
import API from '../../../utils/API';
import 'materialize-css';


export default function CandidateView(props) {
    const history = useHistory();

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
                        updateJob({
                            job: res.data
                        })
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }

    function translateEdu(input) {
        switch (input) {
            case 'some-HS':
                return "Some High School";

            case 'HS-GED':
                return "High School or GED Equivalent";

            case 'some-college':
                return "Some College";

            case 'associates':
                return "Associates Degree";

            case 'bachelors':
                return "Bachelor's Degree";

            case 'masters-plus':
                return "Master's Degree or Higher";

        }
    }

    let eduPlaceholder
    let eduLevel;
    if (appState.candidate.education) {
        eduLevel = translateEdu(appState.candidate.education.attained)
        eduPlaceholder = (
            <div className='desc-section'>
                <div className='desc-sub'>Education Level:<span className='small-text'> {eduLevel}</span></div>
                <div className='desc-sub'>Field of Study: <span className='small-text'>{appState.candidate.education.studyField}</span></div>
                <div className='sum-sub'>Certification Title: <span className='small-text'>{appState.candidate.education.cert_title}</span></div>
                <div className='desc-sub'>Description: <span className='small-text'>{appState.candidate.education.cert_desc}</span></div>
            </div>
        )
    }
    const [modalStates, displayModals] = useState({
        delete: false
    })

    const showDeleteModal = () => {
        displayModals({
            ...modalStates,
            delete: true
        })
    }
    const hideDeleteModal = () => {
        displayModals({
            ...modalStates,
            delete: false
        })
    }

    const handleDelete = () => {
        API.deleteApplicant(appState.candidate._id)
            .then(res => {
                history.goBack();
            })
            .catch(err => console.log(err))
    }

    let workHistory;
    let jobList = appState.candidate.experience;
    if (jobList) {
        workHistory = (
            <ul className='duty-list'>
                {jobList.map((job, i) => {
                    return (<li key={i}>{job}</li>)
                })}
            </ul>
        )

    }

    return (
        <div>
            <div className='candidate-view'>
                <div className='container candidate-content'>
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
                            {workHistory}
                        </div>

                        <Row className='apply right'>
                            <Col s={12}>
                                <Button className='title-btn delete-btn'
                                    onClick={showDeleteModal}>DELETE</Button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <DeleteJobModal
                show={modalStates.delete}
                hide={hideDeleteModal}
                delete={handleDelete} />
        </div>
    )
}