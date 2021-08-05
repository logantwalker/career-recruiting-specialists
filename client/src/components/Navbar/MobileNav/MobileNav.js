import React from 'react';
import 'materialize-css';
import './mobilenav.css';
import NavItem from "../NavItem/navitem"
import { Col, Row} from 'react-materialize';


const MobileNav = (props) => {

    return (
        <Row className='nav-window hide-on-large-only right'>
            <Col s={12} m={6} className='center hoverable'>
                <a className='dropdown-link' href='/'><NavItem> Home</NavItem></a>
            </Col>
            <Col s={12} m={6} className='center hoverable'>
                <a className='dropdown-link' href='/employer-overview'><NavItem>For Employers</NavItem></a>
            </Col>
            <Col s={12} m={6} className='center hoverable' >
                <a className='dropdown-link' href='/request-employee'><NavItem>Request Employee</NavItem></a>
            </Col>
            <Col s={12} m={6} className='center  hoverable'>
                <a className='dropdown-link' href='/careerportal'><NavItem>Job Search</NavItem></a>
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