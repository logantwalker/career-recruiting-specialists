import React from 'react';
import { Parallax, Row, Col, Button, Icon } from 'react-materialize';
import img1 from './assets/carousel1.jpg';
import img2 from './assets/carousel2.jpg';
import 'materialize-css';
import './Home.css';

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
                    image={<img className='parallax-img' alt="" src={img2} />}
                    options={{
                        responsiveThreshold: 0
                    }}
                />
            </div>
            <Row className='specialties'>
                <Col className='center-align' s={12}>
                    <h1>Placeholder</h1>
                </Col>
                <Col className='center-align' m={4}>
                    1
                </Col>
                <Col className='center-align' m={4}>
                    2
                </Col>
                <Col className='center-align' m={4}>
                    3
                </Col>
            </Row>

        </div>
    )
}

export default Home