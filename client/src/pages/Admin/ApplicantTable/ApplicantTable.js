import React from 'react';
import 'materialize-css';
import ApplicantListItem from './ApplicantListItem';
import { Table } from 'react-materialize';

export default function JobTable(props) {
    return (
        <div className='applicant-table'>
            <Table centered={true} hoverable={true} >
                <thead>
                    <tr>
                        <th data-field="name">
                            Name
                        </th>
                        <th data-field="experience">
                            Experience
                        </th>
                        <th data-field="jobs-applied">
                            Jobs Applied
                        </th>
                        <th data-field="location">
                            Location
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.apps.map((app, i) => {
                        return (
                            <ApplicantListItem className='hoverable'
                                key={app._id}
                                id={i}
                                name={`${app.last_name}, ${app.first_name}`}
                                exp={app.experience[0]}
                                applied={app.job_applied}
                                location={app.location}
                                click={props.click} />
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}