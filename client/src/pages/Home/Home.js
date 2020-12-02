import React from 'react';
import { Parallax, Row, Col, Button, Icon } from 'react-materialize';
import img1 from './assets/welder.png';
import img2 from './assets/carousel2.jpg';
import EHSicon from './assets/EHS-icon.png';
import QEicon from './assets/QE-icon.png';
import Micon from './assets/M-icon.png';
import 'materialize-css';
import './Home.css';

import JobSearchSmall from '../../components/JobSearchSmall/JobSearchSmall';

const Home = () => {
    return (
        <div className='home-page'>
            <div className='title-container'>
                <div className='title-background'>
                    <h1 className='title-head'>LET'S GET TO WORK</h1>
                    <p className='title-motto'>
                        CAREER RECRUITING SPECIALISTS CONNECTS QUALITY CANDIDATES AND EMPLOYERS THROUGHOUT THE SOUTHEAST.
                    </p>
                    <div className='btn-group'>
                        <span>
                            <Button className='title-btn'
                                node="button"
                                waves='light'>
                                FIND WORK
                            </Button>
                            <Button className='title-btn'
                                node="button"
                                waves='light'>
                                FIND TALENT
                            </Button>
                        </span>
                    </div>
                </div>
            </div>
            <div className='parallax-container'>
                <Parallax
                    image={<img className='parallax-img' alt="" src={img1} />}
                    options={{
                        responsiveThreshold: 0
                    }}
                />
            </div>
            <Row className='specialties'>
                <Col className='center-align' s={12}>
                    <h1>OUR SPECIALTIES</h1>
                    <h5 className='specialties-desc'>We are a full-service staffing and recruitment agency based in Augusta, with a focus on three key industries.</h5>
                </Col>
                <Col className='center-align' m={4}>
                    <div className='icon-img'>
                        <img src={Micon} />
                    </div>
                    <div>
                        <a href='!#'>INDUSTRIAL MAINTENANCE</a>
                    </div>
                </Col>
                <Col className='center-align' m={4}>
                    <div className='icon-img'>
                        <img src={QEicon} />
                    </div>
                    <div>
                        <a href='!#'>QUALITY ENGINEERING & MANAGEMENT</a>
                    </div>
                </Col>
                <Col className='center-align' m={4}>
                    <div className='icon-img'>
                        <img src={EHSicon} />
                    </div>
                    <div>
                        <a href='!#'>ENVIRONMENTAL HEALTH & SAFETY</a>
                    </div>
                </Col>
            </Row>
            <div className='title-container'>
                <div className='title-background'>
                    <h1 className='title-head'>TALENT HAS NO LIMITS.</h1>
                    <p className='title-motto'>
                        We optimize human potential, increase happiness, and maximize the engagement of people by providing superior solutions for understanding, acquiring, developing and retaining talent.
                    </p>
                </div>
            </div>
            <div className='parallax-container'>
                <Parallax
                    image={<img className='parallax-img' alt="" src={img2} />}
                    options={{
                        responsiveThreshold: 0
                    }}
                />
            </div>
            <JobSearchSmall/>
        </div>
    )
}

export default Home