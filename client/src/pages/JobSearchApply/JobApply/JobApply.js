import { React, useState, useEffect } from 'react';
import { Row, Col, TextInput, Textarea, Select, Button, Icon } from 'react-materialize';
import Footer from '../../../components/Footer/Footer'
import API from '../../../utils/API';
import emailjs from 'emailjs-com';
import 'materialize-css';
import './job-apply.css';

export default function JobApply(props) {
    useEffect(() => {
        getJobData(props.match.params.job);
    }, [])

    const [userApp, updateUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        location:'',
        job_applied: props.match.params.job,
        education: {
            attained: '',
            studyField: null,
            cert_title: '',
            cert_desc: ''
        },
        experience: ['','','']
    });

    const [appState, updateApp] = useState({
        job: {},
        degree: false,
        certs: false,
        certNum: 0
    })

    const captureField = (e) => {
        switch (e.target.id) {
            case 'first_name':
                updateUser({
                    ...userApp,
                    first_name: e.target.value
                })
                break;
            case 'last_name':
                updateUser({
                    ...userApp,
                    last_name: e.target.value
                })
                break;
            case 'user_email':
                updateUser({
                    ...userApp,
                    email: e.target.value
                })
                break;
            case 'phone':
                updateUser({
                    ...userApp,
                    phone: e.target.value
                })
                break;
            case 'location':
                updateUser({
                    ...userApp,
                    location: e.target.value
                })
                break;
            case 'edu-level':
                let newEdu = userApp.education;
                newEdu.attained = e.target.value
                updateUser({
                    ...userApp,
                    education: newEdu
                })
                break;
            case 'study-field':
                let newFOS = userApp.education;
                newFOS.studyField = e.target.value;
                updateUser({
                    ...userApp,
                    education: newFOS
                })
                break;
            case 'cert-title':
                let newCertTitle = userApp.education;
                newCertTitle.cert_title = e.target.value;
                updateUser({
                    ...userApp,
                    education: newCertTitle
                })
                break;
            case 'cert-desc':
                let newCertDesc = userApp.education;
                newCertDesc.cert_desc = e.target.value;
                updateUser({
                    ...userApp,
                    education: newCertDesc
                })
                break;
            case 'job1':
                let newJobOne = userApp.experience;
                newJobOne[0] = e.target.value;
                updateUser({
                    ...userApp,
                    experience: newJobOne
                })
                break;
            case 'job2':
                let newJob2 = userApp.experience;
                newJob2[1] = e.target.value;
                updateUser({
                    ...userApp,
                    experience: newJob2
                })
                break;
            case 'job3':
                let newJob3 = userApp.experience;
                newJob3[2] = e.target.value;
                updateUser({
                    ...userApp,
                    experience: newJob3
                })
                break;

        }
    }

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

    const submitApp = () => {
        API.postApplication(userApp)
            .then(res => {
                props.history.push('/apply-success')
            })
            .catch(err => console.log(err));
    }

    function sendEmail(e) {
        e.preventDefault();
        console.log(e.target)
        emailjs.sendForm('service_yktqjfg', 'request_resume', e.target, 'user_yX3jDLQByusWm1iD6b6JP')
            .then((result) => {
                submitApp();
            }, (error) => {
                console.log(error.text);
            });
    }

    const addCert = (e) => {
        if (e.target.value === 'cert-yes') {
            updateApp({
                ...appState,
                certs: true
            })
        }
    }

    const fieldOfStudy = (e) => {
        if (e.target.value === 'some-college' ||
            e.target.value === 'associates' ||
            e.target.value === 'bachelors' ||
            e.target.value === 'masters-plus') {
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

    let studyFields;
    if (appState.degree) {
        studyFields = (
            <TextInput s={12} m={6}
                id='study-field'
                label='Field Of Study'
                onChange={(e) => captureField(e)} />)
    }

    let certFields;
    if (appState.certs) {
        certFields = (
            <div>
                <TextInput s={12} m={6}
                    id='cert-title'
                    label='Title'
                    onChange={(e) => captureField(e)} />
                <Textarea s={12} m={8}
                    id='cert-desc'
                    label='description'
                    onChange={(e) => captureField(e)} />
            </div>
        )
    }

    return (
        <div>
            <div className='job-search-apply'>
                <div className='container jsa-content'>
                    <Row className='apply'>
                        <h5>{appState.job.title}</h5>
                        <div className='divider'></div>

                        <Col s={12} className='app-fields'>
                            <h6 className='section-head'>Personal Information:</h6>
                            <form onSubmit={sendEmail}>
                                <div className='input-field col s12 m6'>
                                    <label htmlFor='first_name'>First Name</label>
                                    <input type="text" name="first_name" id="first_name"
                                        onChange={(e) => captureField(e)} />
                                </div>

                                <div className='input-field col s12 m6'>
                                    <label htmlFor='last_name'>Last Name</label>
                                    <input type="text" name="last_name" id="last_name"
                                        onChange={(e) => captureField(e)} />
                                </div>

                                <div className='input-field col s12 m6'>
                                    <label htmlFor='user_email'>Email</label>
                                    <input type="text" name="user_email" id="user_email"
                                        onChange={(e) => captureField(e)} />
                                </div>

                                <Col className='empty-col' s={12}>
                                    <TextInput s={12} m={6}
                                        id='phone'
                                        label='Phone Number'
                                        type='tel'
                                        onChange={(e) => captureField(e)} />
                                </Col>
                                <Col className='empty-col' s={12}>
                                    <TextInput s={12} m={6}
                                        id='location'
                                        label='Location'
                                        onChange={(e) => captureField(e)}
                                        placeholder='City, State (e.g. Atlanta, GA)' />
                                </Col>


                                <Col className='empty-col' s={12}>
                                    <h6 className='section-head'>Education & Certifications:</h6>
                                </Col>
                                <Col className='empty-col' s={12}>
                                    <Select
                                        s={12} m={6}
                                        id="edu-level"
                                        onChange={(e) => {
                                            fieldOfStudy(e)
                                            captureField(e)
                                        }}
                                        multiple={false}
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
                                        onChange={(e) => addCert(e)}
                                        id="certifications"
                                        multiple={false}
                                        s={12} m={6}
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
                                    <TextInput s={12} m={4}
                                        id='job1'
                                        label='Job Title'
                                        onChange={(e) => captureField(e)} />
                                    <TextInput s={12} m={4}
                                        id='job2'
                                        label='Job Title'
                                        onChange={(e) => captureField(e)} />
                                    <TextInput s={12} m={4}
                                        id='job3'
                                        label='Job Title'
                                        onChange={(e) => captureField(e)} />
                                </Col>
                                <Row className='apply right'>
                                    <Col s={12}>
                                        <input className='submit-button btn' type="submit" value="Submit" />
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </div>
            </div>
            <Footer />
        </div>
    )
}