import React from 'react';
import { Icon } from 'react-materialize';
import 'materialize-css';

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="container footer-content">
                <div className="row">
                    <div className="col l5 s12">
                        <h4 className="white-text">Contact Us!</h4>
                        <h6 >
                            <Icon tiny left={true}>access_time</Icon> 8:00 AM - 5:00 PM Monday - Friday
                            </h6>
                        <h6>
                            <Icon tiny left={true}>phone</Icon>  478-319-3550
                            </h6>
                        <h6>
                            <Icon tiny left={true}>mail</Icon> joyce@careerrecruitingspecialists.com
                            </h6>
                    </div>
                    <div className="col l4 offset-l3 s12">
                        <h4 className="white-text">Social Media:</h4>
                        <h6>
                            <a className="grey-text text-lighten-3" href="https://github.com/logantwalker" >
                                <Icon tiny left={true}>class</Icon>FaceBook
                                </a>
                        </h6>
                        <h6>
                            <a className="grey-text text-lighten-3" href="https://github.com/logantwalker" >
                                <Icon tiny left={true}>business</Icon>LinkedIn
                                </a>
                        </h6>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container center-align">
                    <a className="grey-text text-lighten-3" href="https://github.com/logantwalker">Website by Walker Web Design © 2021</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;