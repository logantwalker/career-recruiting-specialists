import React from 'react';
import { Parallax, Row, Col, Button, Carousel, Icon } from 'react-materialize';
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
            <JobSearchSmall />
            <div className='testimonials'>
                <h3 className='center-align'>RESULTS THAT SPEAK FOR THEMSELVES</h3>
                <Carousel
                    carouselId="testimonial-carousel"
                    className="white-text center"
                    options={{
                        fullWidth: true,
                        indicators: true
                    }}
                >
                    <div className="t1">
                        <div className='testimonial-background'>
                            <h2>
                                Jim, HR Director
                            </h2>
                            <p>
                                "Not only did Joyce make sure to recruit candidates that met the technical requirements for the job, but she ensured that the candidates would be an excellent fit for our manufacturing culture.
                                  She ensured the cultural fit by spending time upfront with me and the hiring manager and asking multiple detailed questions about the position responsibilities, goals, challenges and requirements.
                                   I always feel confident at the end of our meetings that she knows exactly what we are looking for in our next hire..  
                                   Simply the BEST.  Our company would not use anyone else."
                            </p>
                        </div>
                    </div>
                    <div className="t2">
                        <div className='testimonial-background'>
                            <h2>
                                Jennifer, Senior Accounting Manager
                            </h2>
                            <p>
                                “Joyce is an excellent recruiter who made the effort to get to know me as a person and consequently found me a job that fit well with my requirements.
                                 She was quick to follow up and is an excellent communicator.
                                 I would recommend her to anyone looking for a new position.” 
                            </p>
                        </div>
                    </div>
                    <div className="t3">
                        <div className='testimonial-background'>
                            <h2>
                                Matt, Chemical Engineer
                            </h2>
                            <p>
                                 “It is a real pleasure to work with Joyce. She provided me with support through all stages of job hunting.
                                 I just have to come and perform on the interview and she took care of everything else (communicating desirable salary, chasing HR, etc.). 
                                 Thank you, Joyce!”
                            </p>
                        </div>
                    </div>
                </Carousel>
            </div>
            <footer className="page-footer">
                <div className="container footer-content">
                    <div className="row">
                        <div className="col l5 s12">
                            <h5 className="white-text">Contact Me</h5>
                            <p className="grey-text text-lighten-4">If you want to work together or just learn more about me, check out these links!.</p>
                        </div>
                        <div className="col l4 offset-l3 s12">
                            <h5 className="white-text">Social Media:</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="https://github.com/logantwalker" target="_blank"><i
                                    className='material-icons tiny'>computer</i> GitHub</a></li>
                                <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/logantwalker37/"
                                    target="_blank"><i className='material-icons tiny'>account_box</i> LinkedIn</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!"><i className='material-icons tiny'>folder</i> Resume</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container center-align">
                        Career Recruiting Specialists © 2021
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home