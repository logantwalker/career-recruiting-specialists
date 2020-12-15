import React from 'react';
import { Row, Col, Button, Icon } from 'react-materialize';
import joyce from './assets/Joyce.jpg';
import 'materialize-css';

const AboutUs = () => {
    return (
        <div className='employer-overview'>
            <div className='about-head'>
                <h1 className='right-align'>ABOUT US</h1>
            </div>
            <div className='employer-header'>
                <div className='header-title'>
                    Joyce McLaughlin
                </div>
                <div className='header-subtitle'>
                    President and CEO
                </div>
            </div>
            <div className='container overview-text'>
                <Row>
                    <Col m={7}>
                        <h6>
                            Joyce brings 11 years of technical and executive recruiting experience to her clients with a deep understanding of the recruitment life-cycle process.
                            After graduating from Jacksonville State University with honors, and receiving her degree in business administration, she joined a multi-billion-dollar chemical company where she worked in sales and marketing, and as a corporate global buyer for 18 years.
                            This experience gave her a strong background in the manufacturing industry.
                        </h6>
                        <h6>
                            In 2006 Joyce made a decision to change her career path to business development and recruiting.  
                            She had an opportunity to open a staffing company for a new business that was opening in Warner Robins, Georgia.  
                            By hard work and using her people skills to fit in to a new community, she managed to grow the revenue of this company to become the top office out of 700 offices in the US. This company later was sold to investment bankers and Joyce lost her job, but not her tenacity for this industry.
                        </h6>
                    </Col>
                    <Col s={5}>
                        <img src={joyce}></img>
                    </Col>
                </Row>
                <Row>
                    <h6>
                        In 2009, Joyce joined Snelling Staffing Company as their branch manager. 
                        With the insight to hire a winning team, and innovation to make changes in a weak economy, she managed to grow this business to a multi-million-dollar company. 
                        In 2016, she founded Career Recruiting Specialists: a professional search firm specializing in permanent placement of professionals such as Manufacturing, Management, Operations, Supply Chains, Engineers, Quality Assurance, Sales and Marketing, Accounting, Executive Administrative Assistants, Industrial Maintenance, (Skilled Trades in which she pioneered in the staffing industry in 2009), Safety Managers, and Logistics.
                    </h6>
                    <h6>
                        Her achievements include: Top 10 Management Team out of 124 offices, consistently remained in the top 20 offices in the nation for calendar years 2012, 2013 and 2014 for gross revenue margin, in addition to top 10 Business Development Manager.
                    </h6>
                    <h6>
                        Joyce offers both clients and candidates exceptional professional service, absolute confidentiality, and the most ethical values, while using numerous creative tools for job searches. 
                        Joyce strives to put hard working people to work and solve clients’ hiring needs and demand for a stable workforce. 
                        Her philosophy for success is to assess and evaluate her clients’ personnel needs, and then structures a plan to provide quality employees to her clients.
                    </h6>
                    <h6>
                        Not only is Joyce committed to excellence in her job performance, she is very active in the community. 
                        She is a member of both Warner Robins and Macon Chambers of Commerce, SHRM and Rotary. She completed Leadership Warner Robins in 2007, and is an active member of Middle Georgia Employment Committee, a past active Advisory Board Member of Central Georgia Tech, and Hutchins Learning Center.  
                        She also finds time to do voluntary charitable duties for her community.
                    </h6>
                </Row>
            </div>
        </div>
    )
}

export default AboutUs