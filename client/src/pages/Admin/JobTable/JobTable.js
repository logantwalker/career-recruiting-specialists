import React from 'react';
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
                    
                </tbody>
            </Table>
        </div>
    )
}