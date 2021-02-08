import { React } from 'react';
import { Row, Col} from 'react-materialize';
import Footer from '../../components/Footer/Footer';
import emailjs from 'emailjs-com';
import './RequestEmployee.css';
import 'materialize-css';

export default function RequestEmployee(props) {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_yktqjfg', 'employee_request', e.target, 'user_yX3jDLQByusWm1iD6b6JP')
            .then((result) => {
                props.history.push('/');
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='employer-overview'>
            <div className='about-head'>
                <h1 className='right-align'>REQUEST AN EMPLOYEE</h1>
            </div>
            <div className='employer-header'>
                <div className='header-title hide-on-small-only'>
                    Find your right fit, right now.
                </div>
                <div className='header-subtitle hide-on-small-only'>
                    Request your next employee through Career Recruiting Specialists!
                </div>
            </div>

            <div className='container'>
                
                <Row>
                    <Col s={12} m={8} l={6} className='form-container'>
                        <form className="request-form" onSubmit={sendEmail}>
                            <h5>Job Information</h5>
                            <div className='divider width-helper'></div>

                            <div className='input-field'>
                                <label htmlFor='job_title'>Job Title</label>
                                <input type="text" name="job_title" id="job_title" />
                            </div>

                            <div className='input-field'>
                                <label htmlFor='industry'>Industry</label>
                                <input type="text" name="industry" id='industry' />
                            </div>

                            <div className='input-filed'>
                                <label htmlFor="timing">Is this position full-time or temporary?</label>
                                <select id="timing" name="timing">
                                    <option value="full-time">Full-Time</option>
                                    <option value="temporary">Temporary</option>
                                </select>
                            </div>

                            <div className='input-field'>
                                <label htmlFor='job_shift'>Shift</label>
                                <input type="text" name="job_shift" id='job_shift' />
                            </div>

                            <div className='input-field'>
                                <label htmlFor='job_desc'>Job Description</label>
                                <textarea className='materialize-textarea' name="job_desc" id='job_desc' />
                            </div>

                            <div className='input-field'>
                                <label htmlFor='location'>Location</label>
                                <input type="text" name="location" id='location' />
                            </div>

                            <div className='input-field'>
                                <label htmlFor='more_comments'>Additional Comments</label>
                                <textarea className='materialize-textarea' name="more_comments" id='more_comments' />
                            </div>

                            <h5 className='form-head'>Your Contact Information</h5>
                            <div className='divider width-helper'></div>

                            <div className='input-field'>
                                <label htmlFor='user_name'>Name</label>
                                <input type="text" name="user_name" id="user_name" />
                            </div>

                            <div className='input-field'>
                                <label htmlFor='company'>Company</label>
                                <input type="text" name="company" id="company" />
                            </div>

                            <div className='input-field'>
                                <label htmlFor='user_phone'>Phone Number</label>
                                <input type="text" name="user_phone" id="user_phone" />
                            </div>

                            <div className='input-field'>
                                <label htmlFor='user_email'>Email</label>
                                <input type="email" name="user_email" id='user_email' />
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
            <Footer/>
        </div>
    );
}
