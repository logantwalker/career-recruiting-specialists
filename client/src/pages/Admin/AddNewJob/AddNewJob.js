import { React, useState } from 'react';
import { Row, Col, TextInput, Textarea, Select, Button } from 'react-materialize';
import API from '../../../utils/API'
import './addJob.css'
import 'materialize-css';

export default function AddNewJob() {
    const [newJob, updateFields] = useState({
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

    const captureField = (e) => {
        switch(e.target.id){
            case 'jobTitle':
                updateFields({
                    ...newJob,
                    jobTitle: e.target.value
                })
                break;
            case 'company':
                updateFields({
                    ...newJob,
                    company: e.target.value
                })
                break;
            case 'industry':
                updateFields({
                    ...newJob,
                    industry: e.target.value
                })
                break;
            case 'jobType':
                updateFields({
                    ...newJob,
                    jobType: e.target.value
                })
                break;
            case 'shift':
                updateFields({
                    ...newJob,
                    shift: e.target.value
                })
                break;
            case 'description':
                updateFields({
                    ...newJob,
                    description: e.target.value
                })
                break;
            case 'location':
                updateFields({
                    ...newJob,
                    location: e.target.value
                })
                break;
            case 'salaryLow':
                updateFields({
                    ...newJob,
                    salaryLow: e.target.value
                })
                break;
            case 'salaryHigh':
                updateFields({
                    ...newJob,
                    salaryHigh: e.target.value
                })
                break;

        }
    }

    const postJob = () =>{
        API.postNewJob(newJob)
            .then(res =>{
                console.log(res);
            })
    }

    return (
        <div className='addJobPage'>
            <Row className='container addJob-fields'>
                <Col s={10} className='job-inputs'>
                    <h4>Add a new job!</h4>
                    <div className='divider'></div>
                    <TextInput s={8}
                        id="jobTitle"
                        label="Job Title"
                        onChange={(e) => captureField(e)}
                    />
                    <TextInput s={8}
                        id="company"
                        label="Company Name"
                        onChange={(e) => captureField(e)}
                    />
                    <TextInput s={8}
                        id="industry"
                        label="Industry"
                        onChange={(e) => captureField(e)}
                    />
                    <Select
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
                        value=""
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
                        value=""
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
                        onChange={(e) => captureField(e)}
                        s={12}
                        id="description"
                        label="Job Description"
                    />
                    <TextInput s={8}
                        onChange={(e) => captureField(e)}
                        id="location"
                        label="Job Location"
                    />
                    <Col s={12}>
                        <h6>Salary Range:</h6>
                    </Col>
                    <TextInput s={6}
                        onChange={(e) => captureField(e)}
                        id="salaryLow"
                        label="Low"
                    />
                    <TextInput s={6}
                        onChange={(e) => captureField(e)}
                        id="salaryHigh"
                        label="High"
                    />
                    <Col s={12}>
                        <a href='/admin'>
                            <Button className='title-btn right'
                                node="button"
                                waves='light'
                                onClick={postJob}>
                                Add Job
                            </Button>
                        </a>
                    </Col>
                </Col>
            </Row>
        </div>
    )
}