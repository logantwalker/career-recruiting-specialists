import React from 'react';
import 'materialize-css';
import './mobilenav.css';
import NavItem from "../NavItem/navitem"
import { Col, Row, Icon, Dropdown, Button } from 'react-materialize';


const MobileNav = (props) => {

    return (
        <Row className='nav-window hide-on-large-only right'>
            <Col s={12} m={6} className='center hoverable'>
                <NavItem> <a className='dropdown-link' href='/'>Home</a></NavItem>
            </Col>
            <Col s={12} m={6} className='center hoverable'>
                <NavItem> <a className='dropdown-link' href='/employer-overview'>For Employers</a></NavItem>
            </Col>
            <Col s={12} m={6} className='center hoverable' >
                <NavItem> <a className='dropdown-link' href='/request-employee'>Request Employee</a></NavItem>
            </Col>
            <Col s={12} m={6} className='center  hoverable'>
                <NavItem> <a className='dropdown-link' href='/job-search'>Job Search</a></NavItem>
            </Col>
            <Col s={12} m={6} className='center hoverable'>
                <a href='/about'><NavItem>About Us</NavItem></a>
            </Col>
            <Col s={12} m={6} className='center hoverable'>
                <a href='/contact'><NavItem>Contact Us</NavItem></a>
            </Col>
        </Row>
    )
}

export default MobileNav;