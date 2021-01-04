import { React, useState, useEffect } from 'react';
import { Row, Col, TextInput, Textarea, Select, Button, Modal } from 'react-materialize';
import DeleteJobModal from '../../../components/Modals/DeleteJobModal';
import API from '../../../utils/API'
import './admin-job-view.css'
import 'materialize-css';

export default function AdminJobView(props) {
    const [Job, updateFields] = useState({
        jobTitle: props.job.title,
        company: props.job.company,
        industry: props.job.industry,
        jobType: props.job.type,
        shift: props.job.shift,
        description: props.job.description,
        location: props.job.location,
        salaryLow: '',
        salaryHigh: ''
    })

    const [editMode, changeMode] = useState({
        edit: false,
        mode: 'Edit'
    })

    const [modalStates, displayModals] = useState({
        delete: false
    })

    useEffect(() => {
        determineSalary();
    }, [])

    const determineSalary = () => {
        let sArr = props.job.salary.split('-')
        updateFields({
            ...Job,
            salaryLow: sArr[0],
            salaryHigh: sArr[1]
        });
    }

    const changeModes = () => {
        if (!editMode.edit) {
            changeMode({
                edit: true,
                mode: 'Save'
            })
        }
        else {
            changeMode({
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

    const checkedChange = () => {
        let change
        let sArr = props.job.salary.split('-')
        if (
            Job.jobTitle === props.job.title &&
            Job.company === props.job.company &&
            Job.industry === props.job.industry &&
            Job.jobType === props.job.type &&
            Job.shift === props.job.shift &&
            Job.description === props.job.description &&
            Job.location === props.job.location &&
            Job.salaryLow === sArr[0] &&
            Job.salaryHigh === sArr[1]
        ) {
            change = false
        }
        else {
            change = true
        }
        return change
    }
    const handleUpdate = () => {
        let changed = checkedChange();
        if (changed) {
            alert('You have made some updates to this job!')
        }
        else {
            alert('You have not made any changes to this job!')
        }
    }

    const handleDelete = () => {
        alert('You deleted this job!')
    }



    const captureField = (e) => {
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
                                <span className='right'>
                                    <Button
                                        className='title-btn delete-btn'
                                        node="button"
                                        waves='light'
                                        onClick={showDeleteModal}
                                    >
                                        Delete
                                    </Button>
                                </span>
                                <span className='right edit-btn'>
                                    <Button
                                        className='title-btn'
                                        node="button"
                                        waves='light'
                                        onClick={changeModes}
                                    >
                                        {editMode.mode}
                                    </Button>
                                </span>

                            </h4>
                            <div className='divider'></div>
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
                delete={handleDelete}/>
        </div>
    )
}