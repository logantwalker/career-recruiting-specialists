import React, {useState} from 'react';
import './navbar.css';
import 'materialize-css';

import BrandLogo from './assets/logo-image.jpg'
import { Col, Row, Icon } from 'react-materialize';
import NavItem from './NavItem/navitem'
import MobileNav from './MobileNav/MobileNav'


const Navbar = (props) => {
    let mobileNav;
    const [mobileSate, setState] = useState({ showNav: false });

    const mobileNavClick = () => {
       let currentState = !mobileSate.showNav
        setState({ showNav: currentState });
    }

    if (mobileSate.showNav) {
        mobileNav = (
            <MobileNav />
        )
    }



    return (
        <React.Fragment>
            <div className='custom-navbar'>
                <div className='nav-content'>
                    <Row>
                        <Col>
                            <img height='75px' src={BrandLogo} alt='Career Recruiting Specialists Logo' />
                        </Col>
                        <div className='right hide-on-med-and-down'>
                            <Col>
                                <a className='dropdown-link' href='/'><NavItem>Home</NavItem></a>
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
                                    <a className='dropdown-link' href='/careerportal'>JOB SEARCH</a>
                                </NavItem>
                            </Col>
                            <Col>
                                <a href='/about'><NavItem>About Us</NavItem></a>
                            </Col>
                            <Col>
                                <a href='/contact'><NavItem>Contact Us</NavItem></a>
                            </Col>
                        </div>
                        <div className='mobileButton show-on-med-and-down hide-on-large-only'>
                            <Col className='right'>
                                <div className='menu-item valign-wrapper'>
                                    <a onClick={()=>mobileNavClick()}><Icon small>menu</Icon></a>
                                </div>

                            </Col>
                        </div>
                        {mobileNav}
                    </Row>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar