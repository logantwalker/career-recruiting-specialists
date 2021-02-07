import { React, useEffect, useState } from 'react';
import { Row, Col, TextInput } from 'react-materialize';
import JobTable from '../JobTable/JobTable';
import API from '../../../utils/API';
import 'materialize-css';
import './admin.css';


export default function AdminHome(props) {

    useEffect(() => {
        fetchJobs();
        getRouteKey();
    }, []);

    const [jobState, updateJobs] = useState({
        jobs: []
    })

    const [query, setQuery] = useState({
        filter: '',
        res: []
    })

    const [routeKey, setKey] = useState({
        key: ''
    })

    function getRouteKey() {
        API.getUUID()
            .then(res => {
                setKey({
                    key: res.data[0].value
                })
            })
    }

    function fetchJobs() {
        API.getJobs()
            .then(res => {
                updateJobs({
                    jobs: res.data
                })
                setQuery({
                    ...query,
                    res: res.data
                })
            });
        
    }

    const RenderAddNewJob = () => {
        console.log(routeKey.key)
        props.history.push(`/${routeKey.key}/admin/add-job`)
    }

    const RenderApplicants = () => {
        props.history.push(`/${routeKey.key}/admin/candidates`)
    }

    const RenderJobView = (e) => {
        props.history.push(`/${routeKey.key}/admin/jobs/` + e.target.id)
    }
    const filterJobs = (search) => {
        let searchTerm = search.toLowerCase();
        let filteredRes = [];
        switch (query.filter) {
            case "":
                alert('You have not selected a search filter!')
                break
            case "name":
                jobState.jobs.forEach(job => {
                    if (
                        job.title.toLowerCase().includes(searchTerm)
                    ) {
                        filteredRes.push(job);
                    }
                })
                setQuery({
                    ...query,
                    res: filteredRes
                })
                break
            case "location":
                jobState.jobs.forEach(job => {
                    if (
                        job.location.toLowerCase().includes(searchTerm)
                    ) {
                        filteredRes.push(job);
                    }
                })
                setQuery({
                    ...query,
                    res: filteredRes
                })
                break;
        }
    }

    const setFilter = (e) => {
        setQuery({
            ...query,
            filter: e.target.value
        })
    }

    return (
        <div className='admin'>
            <Row className='directory-container'>
                <Col s={9} className='directory-window'>
                    <JobTable jobs={query.res} click={(e)=>{RenderJobView(e)}}/>
                </Col>
                <Col s={3} className='side-nav'>
                    <Col s={12} className='search-filter'>
                        <div className='input-field col s12'>
                            <select id="search-filter"
                                name="search-filter"
                                className='keyword-search'
                                onChange={(e)=>setFilter(e)}
                                defaultValue="">
                                <option value="" disabled>Select Search Filter</option>
                                <option value="name">Job Title</option>
                                <option value="location">Location</option>
                            </select>
                        </div>
                        <TextInput s={12} className='keyword-search'
                            id='query'
                            placeholder='search'
                            onChange={(e)=>filterJobs(e.target.value)} />

                    </Col>
                    <Col s={12} onClick={RenderApplicants} className='sidenav-item'>
                        View All Candidates
                    </Col>
                    <Col s={12} onClick={RenderAddNewJob} className='sidenav-item'>
                        Add New Job Listing
                    </Col>
                </Col>
            </Row>
        </div>
    )
}