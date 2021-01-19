import React from 'react';
import 'materialize-css';
import { Table } from 'react-materialize';
import JobSearchItem from './JobSearchItem';

export default function JobSearchTable(props) {
    return(
        <Table centered={true} hoverable={true} >
            <thead>
                <tr>
                    <th data-field="job-title" className='job-title-head'>
                        Job Title
                        </th>
                    <th data-field="company">
                        Company
                        </th>
                    <th data-field="salary">
                        Salary
                        </th>
                    <th data-field="location">
                        Location
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.jobs.map((job, i) => {
                    return (
                        <JobSearchItem className='hoverable'
                            key={job._id}
                            id={job._id}
                            title={job.title}
                            salary={job.salary}
                            company={job.company}
                            location={job.location}
                            click={props.click}
                             />
                    )
                })}
            </tbody>
        </Table >
    )
}