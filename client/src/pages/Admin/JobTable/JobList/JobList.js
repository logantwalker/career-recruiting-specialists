import React from 'react';
import JobListItem from './JobListItem';

const JobList = (props) => {
    return (
        props.jobs.map((job, i) => {
            return (
                <JobListItem className='hoverable'
                    key={job._id}
                    title={job.title}
                    industry={job.industry}
                    company={job.company}
                    location={job.location} />
            )
        })
    );
}

export default JobList;