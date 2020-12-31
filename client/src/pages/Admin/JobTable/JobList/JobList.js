import React from 'react';
import Employee from './Employee/Employee';

const employees = (props) => {
    return (
        props.employees.map((employee, i) => {
            return (
                <Employee
                    key={employee.id}
                    name={employee.name}
                    email={employee.email}
                    phone={employee.phone}
                    start={employee.startDate} />
            )
        })
    );
}

export default employees;