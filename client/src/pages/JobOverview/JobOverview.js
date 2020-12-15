import React from 'react';
import { Row, Col, Button, Icon } from 'react-materialize';
import JobSearchSmall from '../../components/JobSearchSmall/JobSearchSmall';
import 'materialize-css';

const JobOverview = () => {
    return (
        <div className='employer-overview'>
            <div className='employer-head'>
                <h1 className='right-align'>JOB SEEKERS</h1>

            </div>
            <div className='employer-header'>
                <div className='header-title'>
                    LET'S GET TO WORK
                </div>
                <div className='header-subtitle'>
                    Our Team of Specialists are Here to Help!
                </div>
            </div>
            <div className='container overview-text'>
                <h6>
                    Registering with an employment or job placement agency is similar to applying for a job with any other business.
                    The only difference is that by registering with Career Recruiting Specialists, you are essentially applying for many jobs at once.
                    Our recruiters will consider your past work experience, education, and career goals to determine if we have an opening that is a match for you.
                    If we do not currently have an opening, we will keep your application and continue to search for opportunities that match your qualifications.
                </h6>

                <JobSearchSmall />
                <Button className='title-btn right-align'
                    node="button"
                    waves='light'>
                    SEARCH JOBS
                </Button>
            </div>
        </div>
    )
}

export default JobOverview