import React from 'react';
import 'materialize-css';
import ApplicantListItem from './ApplicantListItem';
import { Table } from 'react-materialize';

export default function ApplicantTable(props) {
    let tableClass
    if(props.small){
        tableClass='applicant-table-small'
    }
    else{
        tableClass='applicant-table'
    }

    return (
        <div className={tableClass}>
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
                            Education
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
                                key={i}
                                id={app._id}
                                name={`${app.last_name}, ${app.first_name}`}
                                exp={app.experience[0]}
                                applied={app.education.attained}
                                location={app.location}
                                click={props.click} />
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}