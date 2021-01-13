import React from 'react';
import 'materialize-css';

const JobSearchItem = (props) => {
    return (
        <tr id={props.id} >
            <td id={props.id}>
                {props.title}
            </td>
            <td id={props.id}>
                {props.company}
            </td>
            <td id={props.id}>
                {props.salary}
            </td>
            <td id={props.id}>
                {props.location}
            </td>
        </tr>
    )
}

export default JobSearchItem;