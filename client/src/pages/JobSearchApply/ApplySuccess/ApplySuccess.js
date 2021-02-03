import { React } from 'react';
import { Row, Col} from 'react-materialize';
import Footer from '../../../components/Footer/Footer'
import 'materialize-css';
import './app-success.css';

export default function ApplySuccess (){
    return(
        <div>
            <div className='job-search-apply'>
                <div className='jsa-content container'>
                    <div className='apply-success'>
                        <Col s={11} className='empty-col'>
                            <h3 className='thanks'>We have recieved your application!</h3>
                            <div className='divider'></div>
                            <Col s={6} className='empty-col'>
                                <div className='next-steps'>
                                    <h6 className='instructions'>
                                        Thank you for applying with Career Recruiting Specialists!
                                    </h6>
                                    <h6 className='instructions'>
                                        We will be in touch with you soon regarding next steps in the process!
                                    </h6>
                                </div>
                            </Col>
                        </Col>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}