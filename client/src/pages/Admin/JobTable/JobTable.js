import React from 'react';
import JobListItem from './JobList/JobListItem';
import 'materialize-css';
import { Table } from 'react-materialize';

export default function JobTable(props) {
    
    return(
        <div className='job-table'>
            <Table  hoverable={true} >
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
                                key={i}
                                id={job._id}
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