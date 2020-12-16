import {React} from 'react';
import { Row, Col } from 'react-materialize';
import emailjs from 'emailjs-com';
import './contact.css';
import 'materialize-css';

// import './ContactUs.css';

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_yktqjfg', 'contact_form', e.target, 'user_yX3jDLQByusWm1iD6b6JP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='employer-overview'>
            <div className='about-head'>
                <h1 className='right-align'>CONTACT US</h1>
            </div>
            <div className='employer-header'>
                <div className='header-title'>
                    MIDDLE GA'S STAFFING SPECIALISTS
                    </div>
                <div className='header-subtitle'>
                    Have a question? We are here to help!
                    </div>
            </div>
            <div className='container'>
                <Row>
                    <Col s={6} className='form-container'>
                        <form className="contact-form" onSubmit={sendEmail}>
                            
                            <input type="text" name="user_name" />
                            <label>Name</label>
                            
                            <input type="email" name="user_email" />
                            <label>Email</label>
                            
                            <input type="text" name="contact_number" />
                            <label>Phone Number</label>
                            
                            <textarea className='materialize-textarea' name = "message" />
                            <label>Message</label>
                            <input className='submit-button' type="submit" value="Send" />
                        </form>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
