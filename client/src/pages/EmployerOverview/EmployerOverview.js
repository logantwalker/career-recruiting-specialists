import React from 'react';
import { Row, Col, Button, Icon } from 'react-materialize';
import Footer from '../../components/Footer/Footer';
import './employers.css';
import 'materialize-css';

const EmployerOverview = () => {
    return (
        <div className='employer-overview'>
            <div className='employer-head'>
                <h1 className='right-align'>EMPLOYERS</h1>

            </div>
            <div className='employer-header'>
                <div className='header-title'>
                    WE SPECIALIZE IN SUCCESS
                </div>
                <div className='header-subtitle'>
                    It's more than job descriptions. It takes expertise.
                </div>
            </div>
            <div className='container overview-text'>
                <p>
                    Career Recruiting Specialists’ (CRS) recruiters uphold the highest standards in the employment industry for professionalism, integrity, confidentiality and ethical service.
                    Our recruiters are degreed and experienced placement professionals. In order to enhance our National recruiting efforts, CRS is well respected in Georgia and surrounding areas.
                    To assure that we only recruit A+ Talent we have retained memberships with several search engines, attend local and college job fairs, in addition to hosting job fairs.
                </p>
                <p>
                    CRS is committed to serving the Human Resources Profession. In order to pursue this commitment, CRS supports and participates in Human Resources related organizations and projects in our community.
                    We are proud to be a member of SHRM, Rotary, and many charitable programs.
                    CRS also actively participates and supports the Department of Labor’s Employer Committee, it’s projects and seminars, and, Joyce McLaughlin, President and CEO, is a member of this Committee.
                </p>
                <p>
                    With experience in the employment industry beginning in 2001, our professional recruiters offer placement expertise in professional and skilled trades positions in many disciplines, including:
                </p>
                <Row>
                    <Col s={12} m={4} className='center-align'>
                        <ul>
                            <li>Engineers</li>
                            <li>Industrial Maintenance</li>
                            <li>Operation Managers</li>
                            <li>Production Managers</li>
                            <li>Shift Supervisors</li>
                            <li>EH & Safety Managers</li>
                            <li>Safety Managers</li>
                        </ul>
                    </Col>
                    <Col s={12} m={4} className='center-align'>
                        <ul>
                            <li>Human Resources</li>
                            <li>Quality Assurance</li>
                            <li>Inspectors</li>
                            <li>Logistics</li>
                            <li>Accounting</li>
                            <li>Payroll Processors</li>
                            <li>Sales & Marketing</li>
                        </ul>
                    </Col>
                    <Col s={12} m={4} className='center-align'>
                        <ul>
                            <li>Information Technology</li>
                            <li>Schedulers/Planners</li>
                            <li>Purchasing</li>
                            <li>Auditors</li>
                            <li>Machinists</li>
                            <li>Executive Assistants</li>
                            <li>Skilled Trades</li>
                        </ul>
                    </Col>
                </Row>
                <div>
                    <h3>60 Day Guarantee</h3>
                    <p>
                        Because we are confident in our placements we will replace free any candidate that does not remain with your company for 60 days regardless of the reason.
                    </p>
                </div>
                <a href={'/request-employee'}>
                    <Button className='title-btn'
                        node="button"
                        waves='light'>
                        REQUEST AN EMPLOYEE
                    </Button>
                </a>
            </div>
            <Footer/>
        </div>
    )
}

export default EmployerOverview