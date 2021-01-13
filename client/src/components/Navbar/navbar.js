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
                                    <a className='dropdown-link' href='/request-employee'>REQUEST EMPLOYEE</a>
                                </NavItem>
                            </Col>
                            <Col>
                                <NavItem
                                    id='2'
                                    title='For Job Seekers'
                                    dropdown={true}>
                                    <a className='dropdown-link' href='/job-seekers'>OVERVIEW</a>
                                    <a className='dropdown-link' href='/job-search'>JOB SEARCH</a>
                                    <a className='dropdown-link' href='!#'>APPLY NOW</a>
                                </NavItem>
                            </Col>
                            <Col>
                                <a href='/about'><NavItem>About Us</NavItem></a>
                            </Col>
                            <Col>
                                <a href='/contact'><NavItem>Contact Us</NavItem></a>
                            </Col>
                        </div>

                    </Row>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar