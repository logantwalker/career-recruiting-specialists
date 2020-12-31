import {React} from 'react';
import { Row, Col } from 'react-materialize';
import Footer from '../../components/Footer/Footer';
import emailjs from 'emailjs-com';
import './contact.css';
import 'materialize-css';


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
                    Middle GA'S Staffing Specialists
                    </div>
                <div className='header-subtitle'>
                    Have a question? We are here to help!
                    </div>
            </div>
            
            <div className='container'>
                <Row>
                    <Col s={6} className='form-container'>
                        <form className="contact-form" onSubmit={sendEmail}>
                            <div className='input-field'>
                                <label for='user_name'>Name</label>
                                <input type="text" name="user_name" id="user_name" />
                            </div>

                            <div className='input-field'>
                                <label for='user_email'>Email</label>
                                <input type="email" name="user_email" id='user_email' />
                            </div>

                            <div className='input-field'>
                                <label for='contact_number'>Phone Number</label>
                                <input id='contact_number' type="text" name="contact_number" />
                            </div>

                            <div className='input-field'>
                                <label for='message'>Message</label>
                                <textarea className='materialize-textarea' name="message" id='message' />
                            </div>
                            <input className='submit-button btn' type="submit" value="Send" />
                        </form>
                    </Col>
                </Row>
            </div>
            <Footer/>
        </div>
    );
}
