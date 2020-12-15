import React from 'react';
import './navbar.css';
import 'materialize-css';

import BrandLogo from './assets/logo-image.jpg'
import { Col, Row } from 'react-materialize';
import NavItem from './NavItem/navitem'

const Navbar = (props) => {
    return (
        <React.Fragment>
            <div className='custom-navbar'>
                <div className='nav-content'>
                    <Row>
                        <Col>
                            <img height='75px' src={BrandLogo} alt='Career Recruiting Specialists Logo' />
                        </Col>
                        <div className='right'>
                            <Col>
                                <NavItem> <a className='dropdown-link' href='/'>Home</a></NavItem>
                            </Col>
                            <Col>
                                <NavItem
                                    id='1'
                                    title='For Employers'
                                    dropdown={true}>
                                    <a className='dropdown-link' href='/employer-overview'>SPECIALTY SERVICE</a>
                                    <a className='dropdown-link' href='!#'>REQUEST EMPLOYEE</a>
                                </NavItem>
                            </Col>
                            <Col>
                                <NavItem
                                    id='2'
                                    title='For Job Seekers'
                                    dropdown={true}>
                                    <a className='dropdown-link' href='/job-seekers'>OVERVIEW</a>
                                    <a className='dropdown-link' href='!#'>JOB SEARCH</a>
                                    <a className='dropdown-link' href='!#'>APPLY NOW</a>
                                </NavItem>
                            </Col>
                            <Col>
                                <NavItem>About Us</NavItem>
                            </Col>
                            <Col>
                                <NavItem>Contact Us</NavItem>
                            </Col>
                        </div>

                    </Row>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar