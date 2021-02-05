import { React, useEffect, useState } from 'react';
import { Row, Col, TextInput, Button } from 'react-materialize';
import API from '../../../utils/API';
import 'materialize-css';



export default function Login(props) {


    return (
        <div className='admin'>
            <Row className='directory-container'>
                <div className='login-container'>
                    <Col s={6} className='login'>
                        <TextInput
                            s={12}
                            id='username'
                            label='username' />
                        <TextInput
                            s={12}
                            id='password'
                            label='password'
                            type='password' />
                        <Col className='right'>
                            <Button className='title-btn'>LOGIN</Button>
                        </Col>
                    </Col>  
                </div>
            </Row>
        </div>
    )
}