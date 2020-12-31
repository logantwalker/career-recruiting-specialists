import React from 'react';
import { Row, Col} from 'react-materialize';
import Footer from '../../components/Footer/Footer';
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
                            Joyce brings 16 years of technical and executive recruiting experience to her clients with a deep
                            understanding of the recruitment life-cycle process. After graduating from Jacksonville State University with
                            honors, and receiving her degree in business administration, she joined a multi-billion-dollar chemical
                            company where she worked in sales and marketing, and as a corporate global buyer for 18 years. This
                            experience gives her a strong background in the manufacturing industry and an understanding of her
                            client’s needs.
                        </h6>
                        <h6>
                            In 2006 Joyce decided to change her career path to business development and recruiting. She had an
                            opportunity to open a staffing company for a new business that was opening in Warner Robins, Georgia.
                            By hard work and using her people skills to fit in to a new community, she managed to grow the revenue of
                            this company to become the top office out of 700 offices in the US. This company later was sold to Select
                            Staffing and she lost her job, but not her tenacity for this industry.
                        </h6>
                    </Col>
                    <Col s={5}>
                        <img src={joyce}></img>
                    </Col>
                </Row>
                <Row>
                    <h6>
                        In 2009, Joyce joined Snelling Staffing Company as their branch manager. With the insight to hire a winning
                        team, and innovation to make changes in a weak economy, she managed to grow this business to a multi-
                        million-dollar company. In 2015, she founded Career Recruiting Specialists: a professional search firm
                        specializing in permanent placement of professionals such as: Production Management, Plant Managers,
                        Operations Managers, Supply Chain, Logistics, Purchasing, Engineering, Quality Assurance, Lean
                        Manufacturing, Implementation Specialists, Human Resources, Benefits and Payroll, Environmental Health
                        and Safety, Workers Compensation, Information Technology, Technical, Industrial Maintenance, Industrial
                        Electricians, PLC Programmers, Manual and Automated Machine Operators, Fabricators, Accounting, Data
                        Analyst / Data Management, Sales, Marketing and Account Management, Commercial Construction,
                        Medical and Legal, Office Managers and Office Administrators. (Joyce pioneered skilled trades in the
                        staffing industry in 2009).
                    </h6>
                    <h6>
                        Her achievements include: Top 10 Management Team out of 124 offices, consistently remained in the top
                        20 offices in the nation for calendar years 2012, 2013 and 2014 for gross revenue margin, in addition to top
                        10 Business Development Manager. Joyce ranks in the top 100 direct hire recruiters in the state of Georgia,
                        Tennessee, Indiana, and the Carolina’s.
                    </h6>
                    <h6>
                        Joyce offers both clients and candidates exceptional professional service, absolute confidentiality, and the
                        most ethical values, while using numerous creative tools for job searches. She strives to put hard working
                        people to work and solve clients’ hiring needs and demand for a stable workforce. Her philosophy for
                        success is to assess and evaluate her clients’ hiring needs, and then structures a plan to provide quality
                        employees to her clients.
                    </h6>
                    <h6>
                        Not only is Joyce committed to excellence in her job performance, she is continually active in the
                        community. She is a member of Warner Robins, Macon, and Augusta Regional Chambers of Commerce,
                        SHRM, and SHRM Board member and Rotary member. She completed Leadership Warner Robins in 2007
                        and is an active member of Middle Georgia Employment Committee, a past active Advisory Board Member
                        of Central Georgia Tech, and Hutchins Career Learning Center (Technical high school for low income
                        family’s). She also finds time to do voluntary charitable duties for her community.
                    </h6>
                </Row>
            </div>
            <Footer/>
        </div>
    )
}

export default AboutUs