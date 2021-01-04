import React from 'react';
import 'materialize-css';

const JobListItem = (props) => {
    return (
        <tr onClick={props.click} id={props.id} >
            <td id={props.id}>
                {props.title}
            </td>
            <td id={props.id}>
                {props.industry}
            </td>
            <td id={props.id}>
                {props.company}
            </td>
            <td id={props.id}>
                {props.location}
            </td>
        </tr>
    )
}

export default JobListItem;