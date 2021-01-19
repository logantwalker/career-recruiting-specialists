import { React } from 'react';
import { Row, Col, Autocomplete, Icon } from 'react-materialize';
import JobSearchTable from './JobSearchTable/JobSearchTable';
import 'materialize-css';


export default function JobSearch(props) {
    return(
        <Row className='search'>
            <div className='search-feature'>
                <h4>Search for a Job!</h4>
                <div className='divider'></div>
                <Col s={12} className='search-bars'>
                    <Autocomplete 
                        id='title-search'
                        s={6}
                        placeholder='job title, keywords, or company'
                        icon={<Icon>search</Icon>}/>
                    <Autocomplete 
                        id='location-search'
                        s={6}
                        placeholder='location'
                        icon={<Icon>location_on</Icon>}/>
                </Col>
                <Col s={12} className='job-search-table'>
                    <JobSearchTable jobs={props.jobs} click={props.click}/>
                </Col>
            </div>
        </Row>
    )
}