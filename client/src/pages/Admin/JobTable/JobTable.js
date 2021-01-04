import React from 'react';
// import JobList from './JobList/JobList';
import JobListItem from './JobList/JobListItem';
import 'materialize-css';
import { Table } from 'react-materialize';

export default function JobTable(props) {
    
    return(
        <div className='job-table'>
            <Table centered={true} hoverable={true} >
                <thead>
                    <tr>
                        <th data-field="job-title">
                           Job Title
                        </th>
                        <th data-field="industry">
                            Industry
                        </th>
                        <th data-field="company">
                            Company
                        </th>
                        <th data-field="location">
                           Location
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.jobs.map((job, i) => {
                        return (
                            <JobListItem className='hoverable'
                                key={job._id}
                                id={i}
                                title={job.title}
                                industry={job.industry}
                                company={job.company}
                                location={job.location}
                                click={props.click}/>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}