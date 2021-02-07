import { React, useEffect, useState } from 'react';
import { Row, Col, TextInput, Select } from 'react-materialize';
import ApplicantTable from '../ApplicantTable/ApplicantTable';
import API from '../../../utils/API';
import 'materialize-css';


export default function AdminAppView(props) {

    useEffect(() => {
        fetchApplicants();
        getRouteKey();
    }, []);


    const [appState, updateApps] = useState({
        applicants: []
    })

    const [routeKey, setKey] = useState({
        key: ''
    })

    const [query, setQuery] = useState({
        filter: '',
        res: []
    })

    function getRouteKey() {
        API.getUUID()
            .then(res => {
                setKey({
                    key: res.data[0].value
                })
            })
    }

    function fetchApplicants() {
        API.getApplicants()
            .then(res => {
                updateApps({
                    applicants: res.data
                })
                setQuery({
                    ...query,
                    res: res.data
                })
            })
    }

    const filterApplicants = (search) => {
        let searchTerm = search.toLowerCase();
        let filteredRes = [];
        switch (query.filter) {
            case "":
                alert('You have not selected a search filter!')
                break
            case "name":
                appState.applicants.forEach(app => {
                    if (
                        app.first_name.toLowerCase().includes(searchTerm) ||
                        app.last_name.toLowerCase().includes(searchTerm)
                    ) {
                        filteredRes.push(app);
                        console.log(query.value, filteredRes)
                    }
                })
                setQuery({
                    ...query,
                    res: filteredRes
                })
                break
            case "location":
                appState.applicants.forEach(app => {
                    if (
                        app.location.toLowerCase().includes(searchTerm)
                    ) {
                        filteredRes.push(app);
                    }
                })
                setQuery({
                    ...query,
                    res: filteredRes
                })
                break
            case "edu-level":
                appState.applicants.forEach(app => {
                    if (
                        app.education.attained.toLowerCase().includes(searchTerm)
                    ) {
                        filteredRes.push(app);
                    }
                })
                setQuery({
                    ...query,
                    res: filteredRes
                })
                break
            case "study-field":
                appState.applicants.forEach(app => {
                    if (
                        app.education.studyField.toLowerCase().includes(searchTerm)
                    ) {
                        filteredRes.push(app);
                    }
                })
                setQuery({
                    ...query,
                    res: filteredRes
                })
                break
            case "certs":
                appState.applicants.forEach(app => {
                    if (
                        app.education.cert_title.toLowerCase().includes(searchTerm) ||
                        app.education.cert_desc.toLowerCase().includes(searchTerm)
                    ) {
                        filteredRes.push(app);
                    }
                })
                setQuery({
                    ...query,
                    res: filteredRes
                })
                break
            case "exp":
                appState.applicants.forEach(app => {
                    if (
                        app.experience[0].toLowerCase().includes(searchTerm) ||
                        app.experience[1].toLowerCase().includes(searchTerm) ||
                        app.experience[2].toLowerCase().includes(searchTerm)
                    ) {
                        filteredRes.push(app);
                    }
                })
                setQuery({
                    ...query,
                    res: filteredRes
                })
                break
        }
    }

    const setFilter = (e) => {
        setQuery({
            ...query,
            filter: e.target.value
        })
    }



    const RenderJobs = () => {
        props.history.push(`/${routeKey.key}/admin/jobs`)
    }

    const RenderAddNewJob = () => {
        props.history.push(`/${routeKey.key}/admin/add-job`)
    }

    const renderCandidate = (e) => {
        props.history.push(`/${routeKey.key}/admin/candidates/` + e.target.id)
    }

    return (
        <div className='admin'>
            <Row className='directory-container'>
                <Col s={9} className='directory-window'>
                    <ApplicantTable apps={query.res} click={(e) => renderCandidate(e)} />
                </Col>
                <Col s={3} className='side-nav'>
                    <Col s={12} className='search-filter'>

                        <div className='input-field col s12'>
                            <select id="search-filter"
                                name="search-filter"
                                className='keyword-search'
                                onChange={(e) => setFilter(e)}
                                defaultValue="">
                                <option value="" disabled>Select Search Filter</option>
                                <option value="name">Name</option>
                                <option value="location">Location</option>
                                <option value="edu-level">Education Level</option>
                                <option value="study-field">Degree Field</option>
                                <option value="certs">Certifications</option>
                                <option value="exp">Previous Experience</option>
                            </select>
                        </div>
                        <TextInput s={12} className='keyword-search'
                            id='query'
                            placeholder='search'
                            onChange={(e) => filterApplicants(e.target.value)} />

                    </Col>
                    <Col s={12} onClick={RenderJobs} className='sidenav-item'>
                        View All Jobs
                    </Col>
                    <Col s={12} onClick={RenderAddNewJob} className='sidenav-item'>
                        Add New Job Listing
                    </Col>
                </Col>
            </Row>
        </div>
    )
}