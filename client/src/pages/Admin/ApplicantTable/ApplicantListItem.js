import React from 'react';
import 'materialize-css';

export default function ApplicantListItem(props) {
    return (
        <tr id={props.id} onClick={props.click} >
            <td id={props.id}>
                {props.name}
            </td>
            <td id={props.id}>
                {props.exp}
            </td>
            <td id={props.id}>
                {props.applied}
            </td>
            <td id={props.id}>
                {props.location}
            </td>
        </tr>
    )
}