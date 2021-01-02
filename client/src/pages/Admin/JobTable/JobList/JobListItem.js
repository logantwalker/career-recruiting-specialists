import React from 'react';
import 'materialize-css';

const JobListItem = (props) => {
    return (
        <tr>
            <td>
                {props.title}
            </td>
            <td>
                {props.industry}
            </td>
            <td>
                {props.company}
            </td>
            <td>
                {props.location}
            </td>
        </tr>
    )
}

export default JobListItem;