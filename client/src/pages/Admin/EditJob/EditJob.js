import { React, useState, useEffect } from 'react';
import { Row, Col, TextInput, Textarea, Select, Button } from 'react-materialize';
import { useHistory } from "react-router-dom";
import DeleteJobModal from '../../../components/Modals/DeleteJobModal';
import API from '../../../utils/API'
import './editjob.css'
import 'materialize-css';

export default function EditJob(props) {
    const history = useHistory();


    useEffect(() => {
        getJobData(props.match.params.job);
    }, [])

    const [Job, updateFields] = useState({
        job_id: '',
        jobTitle: '',
        company: '',
        industry: '',
        jobType: '',
        shift: '',
        description: '',
        location: '',
        salaryLow: '',
        salaryHigh: ''
    })

    function getJobData(id) {
        API.getOneJob(id)
            .then(res => {
                let job = res.data
                let sArr = job.salary.split('-')
                updateFields({
                    job_id: job._id,
                    jobTitle: job.title,
                    company: job.company,
                    industry: job.industry,
                    jobType: job.type,
                    shift: job.shift,
                    description: job.description,
                    location: job.location,
                    salaryLow: sArr[0],
                    salaryHigh: sArr[1]
                })
            })
            .catch(err => console.log(err))
    }

    const [editMode, changeMode] = useState({
        edit: false,
        mode: 'Edit',
        changeMade: false
    })

    const [modalStates, displayModals] = useState({
        delete: false
    })

    const changeModes = () => {
        if (!editMode.edit) {
            changeMode({
                ...editMode,
                edit: true,
                mode: 'Save'
            })
        }
        else {
            changeMode({
                ...editMode,
                edit: false,
                mode: 'Edit'
            })
        }
    }

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

    const handleUpdate = () => {
        if (editMode.changeMade) {
            console.log(Job.job_id)
            API.updateJob(Job, Job.job_id).then().catch(err => console.log(err));
        }
        else {
            alert('You have not made any changes to this job!')
        }
    }

    const handleDelete = () => {
        API.deleteJob(Job.job_id)
            .then(res => {
                props.history.push('/admin/jobs')
            })
            .catch(err => console.log(err))
    }

    const captureField = (e) => {
        changeMode({
            ...editMode,
            changeMade: true
        })
        switch (e.target.id) {
            case 'jobTitle':
                updateFields({
                    ...Job,
                    jobTitle: e.target.value
                })
                break;
            case 'company':
                updateFields({
                    ...Job,
                    company: e.target.value
                })
                break;
            case 'industry':
                updateFields({
                    ...Job,
                    industry: e.target.value
                })
                break;
            case 'jobType':
                updateFields({
                    ...Job,
                    jobType: e.target.value
                })
                break;
            case 'shift':
                updateFields({
                    ...Job,
                    shift: e.target.value
                })
                break;
            case 'description':
                updateFields({
                    ...Job,
                    description: e.target.value
                })
                break;
            case 'location':
                updateFields({
                    ...Job,
                    location: e.target.value
                })
                break;
            case 'salaryLow':
                updateFields({
                    ...Job,
                    salaryLow: e.target.value
                })
                break;
            case 'salaryHigh':
                updateFields({
                    ...Job,
                    salaryHigh: e.target.value
                })
                break;

        }
    }


    return (
        <div>
            <div className='addJobPage'>
                <Row className='container addJob-fields'>
                    <Col s={10} className='job-inputs'>
                        <Row>
                            <h4>
                                {Job.jobTitle}
                            </h4>
                            <div className='divider'></div>
                            <div className='btn-row'>
                                <Button
                                    className='title-btn'
                                    node="button"
                                    waves='light'
                                    onClick={changeModes}
                                >
                                    {editMode.mode}
                                </Button>
                                <Button
                                    className='title-btn delete-btn'
                                    node="button"
                                    waves='light'
                                    onClick={showDeleteModal}
                                >
                                    Delete
                                </Button>
                            </div>
                        </Row>

                        <TextInput s={8}
                            disabled={!editMode.edit}
                            value={Job.jobTitle}
                            id="jobTitle"
                            label="Job Title"
                            onChange={(e) => captureField(e)}
                        />
                        <TextInput s={8}
                            disabled={!editMode.edit}
                            value={Job.company}
                            id="company"
                            label="Company Name"
                            onChange={(e) => captureField(e)}
                        />
                        <TextInput s={8}
                            disabled={!editMode.edit}
                            value={Job.industry}
                            id="industry"
                            label="Industry"
                            onChange={(e) => captureField(e)}
                        />
                        <Select
                            disabled={!editMode.edit}
                            value={Job.jobType}
                            id="jobType"
                            onChange={(e) => captureField(e)}
                            multiple={false}
                            s={6}
                            options={{
                                classes: '',
                                dropdownOptions: {
                                    alignment: 'left',
                                    autoTrigger: true,
                                    closeOnClick: true,
                                    constrainWidth: true,
                                    coverTrigger: true,
                                    hover: false,
                                    inDuration: 150,
                                    onCloseEnd: null,
                                    onCloseStart: null,
                                    onOpenEnd: null,
                                    onOpenStart: null,
                                    outDuration: 250
                                }
                            }}

                        >
                            <option
                                disabled
                                value=""
                            >
                                Select Job Type
                        </option>
                            <option value="Full-Time">
                                Full-Time
                        </option>
                            <option value="Part-Time">
                                Part-Time
                        </option>
                            <option value="Temporary">
                                Temporary
                        </option>
                        </Select>

                        <Select
                            disabled={!editMode.edit}
                            value={Job.shift}
                            id="shift"
                            multiple={false}
                            s={6}
                            onChange={(e) => captureField(e)}
                            options={{
                                classes: '',
                                dropdownOptions: {
                                    alignment: 'left',
                                    autoTrigger: true,
                                    closeOnClick: true,
                                    constrainWidth: true,
                                    coverTrigger: true,
                                    hover: false,
                                    inDuration: 150,
                                    onCloseEnd: null,
                                    onCloseStart: null,
                                    onOpenEnd: null,
                                    onOpenStart: null,
                                    outDuration: 250
                                }
                            }}

                        >
                            <option
                                disabled
                                value=""
                            >
                                Select Shift
                        </option>
                            <option value="First">
                                First
                        </option>
                            <option value="Second">
                                Second
                        </option>
                            <option value="Third">
                                Third
                        </option>
                            <option value="Split">
                                Split Shift
                        </option>
                        </Select>

                        <Textarea
                            disabled={!editMode.edit}
                            value={Job.description}
                            onChange={(e) => captureField(e)}
                            s={12}
                            id="description"
                            label="Job Description"
                        />
                        <TextInput s={8}
                            disabled={!editMode.edit}
                            value={Job.location}
                            onChange={(e) => captureField(e)}
                            id="location"
                            label="Job Location"
                        />
                        <Col s={12}>
                            <h6>Salary Range:</h6>
                        </Col>
                        <TextInput s={6}
                            disabled={!editMode.edit}
                            value={Job.salaryLow}
                            onChange={(e) => captureField(e)}
                            id="salaryLow"
                            label="Low"
                        />
                        <TextInput s={6}
                            disabled={!editMode.edit}
                            value={Job.salaryHigh}
                            onChange={(e) => captureField(e)}
                            id="salaryHigh"
                            label="High"
                        />
                        <Col s={12}>

                            <Button className='title-btn right'
                                node="button"
                                waves='light'
                                onClick={handleUpdate}>
                                Submit Changes
                            </Button>

                        </Col>
                    </Col>
                </Row>
            </div>
            <DeleteJobModal
                show={modalStates.delete}
                hide={hideDeleteModal}
                delete={handleDelete} />

        </div>
    )
}