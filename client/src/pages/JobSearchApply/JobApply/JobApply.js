import { React, useState, useEffect } from 'react';
import { Row, Col, TextInput, Textarea, Select, Button, Icon } from 'react-materialize';
import Footer from '../../../components/Footer/Footer'
import API from '../../../utils/API';
import 'materialize-css';
import './job-apply.css';

export default function JobApply(props) {
    useEffect(() => {
        getJobData(props.match.params.job);
    }, [])

    const [userApp, updateUser] = useState({
        first_name:'',
        last_name:'',
        email:'',
        phone:'',
        job_applied: props.match.params.job,
        education:{
            attained: '',
            studyField: null
        },
        experience:{
            previousJobs:['','',''],
            skills:[]
        },
        relocate: '',
        travel: ''
    });

    const [appState, updateApp] = useState({
        job:{},
        degree: false,
        certs: false,
        certNum: 0,
        numSkill: 0
    })

    function getJobData(id) {
        API.getOneJob(id)
            .then(res => {
                updateApp({
                    ...appState,
                    job: res.data
                })
            })
            .catch(err => console.log(err))
    }

    const addCert = (e) =>{
        if(e.target.value === 'cert-yes'){
            updateApp({
                ...appState,
                certs: true
            })
        }
    }

    const fieldOfStudy = (e) =>{
        if(e.target.value === 'some-college' ||
            e.target.value === 'associates' ||
            e.target.value === 'bachelors' ||
            e.target.value === 'masters-plus'){
                updateApp({
                    ...appState,
                    degree: true
                })
        }
        else {
            updateApp({
                ...appState,
                degree: false
            })
        }
    }

    const addSkill = () =>{
        let curCount = appState.numSkill;
        curCount++;
        updateApp({
            ...appState,
            numSkill: curCount
        })
    }


    let studyFields;
    if(appState.degree){
        studyFields = (
                <TextInput s={6}
                    id='study-field'
                    label='Field Of Study'/>)
    }

    let certFields;
    if(appState.certs){
        certFields=(
            <div>
                <TextInput s={6}
                    id='cert-title'
                    label='Title'/>
                <Textarea s={8}
                    id='cert-desc'
                    label='description'/>
            </div>
        )
    }

    let skillsField=[];
    if(appState.numSkill){
        for(let i=0; i<appState.numSkill; i++){
            skillsField.push(
                <Col s={12} className='empty-col'>
                    <TextInput s={6}
                        id={`skill${i}`}
                        label='Skill'/>
                </Col>
            )
        }
    }

    return (
        <div>
            <div className='job-search-apply'>
                <div className='container jsa-content'>
                    <Row className='apply'>
                        <h5>{appState.job.title}</h5>
                        <div className='divider'></div>
                        <Col s={12} className='app-fields'>

                            <Col s={12} className='empty-col'>
                                <h6 className='section-head'>Personal Information:</h6>
                            </Col>
                            <TextInput s={6}
                                id='first_name'
                                label='First Name' />
                            <TextInput s={6}
                                id='last_name'
                                label='Last Name' />
                            <Col className='empty-col' s={12}>
                                <TextInput s={6}
                                    id='email'
                                    label='Email'
                                    type='email' />
                            </Col>
                            <Col className='empty-col' s={12}>
                                <TextInput s={6}
                                    id='phone'
                                    label='Phone Number'
                                    type='tel' />
                            </Col>
                            <Col className='empty-col' s={12}>
                                <TextInput s={6}
                                    id='location'
                                    label='Location'
                                    placeholder='City, State (e.g. Atlanta, GA)' />
                            </Col>


                            <Col className='empty-col' s={12}>
                                <h6 className='section-head'>Education & Certifications:</h6>
                            </Col>
                            <Col className='empty-col' s={12}>
                                <Select
                                    id="edu-level"
                                    onChange={(e)=>fieldOfStudy(e)}
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
                                    value="">
                                    <option
                                        disabled
                                        value="">
                                        Select Eductaion Level
                                    </option>
                                    <option value="some-HS">
                                        Some High School
                                    </option>
                                    <option value="HS-GED">
                                        High School or GED
                                    </option>
                                    <option value="some-college">
                                        Some College
                                    </option>
                                    <option value="associates">
                                        Associates Degree
                                    </option>
                                    <option value="bachelors">
                                        Bachelor's Degree
                                    </option>
                                    <option value="masters-plus">
                                        Master's Degree or Higher
                                    </option>
                                </Select>
                            </Col>
                            <Col className='empty-col' s={12}>
                                {studyFields}
                            </Col>
                            <Col s={12} className='empty-col'>
                                <p className='section-subhead'>
                                    Do you have any relevant certifications?
                                </p>
                                <Select
                                    label=''
                                    onChange={(e)=>addCert(e)}
                                    id="certifications"
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
                                    value="">
                                    <option
                                        disabled
                                        value="">
                                        Select
                                    </option>
                                    <option value="cert-yes">
                                        Yes
                                    </option>
                                </Select>
                            </Col>
                            <Col s={12} className='empty-col'>
                                {certFields}
                            </Col>


                            <Col className='empty-col' s={12}>
                                <h6 className='section-head'>Work Experience:</h6>
                            </Col>
                            <Col className='empty-col' s={12}>
                                <p className='section-subhead'>
                                    Previous Three Job Titles
                                </p>
                                <TextInput s={4}
                                    id='job1'
                                    label='Job Title'/>
                                <TextInput s={4} 
                                    id='job2'
                                    label='Job Title'/>
                                <TextInput s={4} 
                                    id='job3'
                                    label='Job Title'/>
                            </Col>
                            <Col className='empty-col' s={12}>
                                <p className='section-subhead '>
                                    Would you like to add any relevant skills?
                                    <span className='skills-btn'>
                                        <Button
                                            small={true}
                                            className='title-btn'
                                            floating
                                            icon={<Icon>add</Icon>}
                                            onClick={()=> addSkill()}>
                                        </Button>
                                    </span>
                                </p>
                            </Col>
                            <div className='skills-fields'>
                                {skillsField}
                            </div>
                            <Row className='apply right'>
                                <Col s={12}>
                                    <Button className='title-btn'
                                        onClick={()=>console.log('applied!')}>APPLY</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
            <Footer />
        </div>
    )
}