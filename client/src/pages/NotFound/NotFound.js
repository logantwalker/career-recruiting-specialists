import React from 'react';
import './NotFound.css';
import Footer from '../../components/Footer/Footer';

const NotFound = () =>{
    return(
        <div>
            <div className="not-found">
                <h1 className='center-align'>404</h1>
                <h3 className='center-align'>Looks like that page doesn't exist!</h3>
            </div>
            <Footer/>
        </div>
        
        )
}

export default NotFound;