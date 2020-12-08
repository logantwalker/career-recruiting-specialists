import React from 'react';
import 'materialize-css';
import { Col, Row, Select, Card, Icon, TextInput } from 'react-materialize';
import './JSS.css';

const JobSearchSmall = () => {
    return (
        <div className='featured-section'>
            <Row>
                <Col s={5}>
                    <h4 className='featured-head'>FEATURED JOBS</h4>
                </Col>
                <Col className='right' l={4}>
                    <h4 className='jobsearch-head'>SEARCH JOBS</h4>
                </Col>
            </Row>
            <Row>

                <div className='featured-jobs'>
                    <Col className='featured-item' l={3}>
                        <Card
                            actions={[
                                <a key="1" href="#">APPLY NOW</a>,

                            ]}
                            className="job-card hoverable"
                            closeIcon={<Icon>close</Icon>}
                            revealIcon={<Icon>more_vert</Icon>}
                            textClassName=""
                            title="Job Title"
                        >
                            This is a job description.
                        </Card>
                    </Col>
                    <Col className='featured-item' l={3}>
                        <Card
                            actions={[
                                <a key="1" href="#">APPLY NOW</a>,

                            ]}
                            className="job-card hoverable"
                            closeIcon={<Icon>close</Icon>}
                            revealIcon={<Icon>more_vert</Icon>}
                            textClassName=""
                            title="Job Title"
                        >
                            This is a job description.
                        </Card>
                    </Col>
                </div>
                <Col className='right' l={4}>
                    <TextInput
                        s={10}
                        id="TextInput-1"
                        label="Job title, skills, etc."
                    />

                    <Select
                        s={10}
                        id="location-select"
                        multiple
                        options={{
                            classes: '',
                            dropdownOptions: {
                                alignment: 'left',
                                autoTrigger: true,
                                closeOnClick: true,
                                constrainWidth: true,
                                coverTrigger: true,
                                hover: false,
                                inDuration: 150,
                                onCloseEnd: null,
                                onCloseStart: null,
                                onOpenEnd: null,
                                onOpenStart: null,
                                outDuration: 250
                            }
                        }}
                        value={[
                            ''
                        ]}
                    >
                        <option
                            disabled
                            value=""
                        >
                            Location
                        </option>
                        <option value="1">
                            Option 1
                        </option>
                        <option value="2">
                            Option 2
                        </option>
                        <option value="3">
                            Option 3
                        </option>
                    </Select>

                    <Select
                        s={10}
                        id="industry-select"
                        multiple
                        options={{
                            classes: '',
                            dropdownOptions: {
                                alignment: 'left',
                                autoTrigger: true,
                                closeOnClick: true,
                                constrainWidth: true,
                                coverTrigger: true,
                                hover: false,
                                inDuration: 150,
                                onCloseEnd: null,
                                onCloseStart: null,
                                onOpenEnd: null,
                                onOpenStart: null,
                                outDuration: 250
                            }
                        }}
                        value={[
                            ''
                        ]}
                        >
                        <option
                            disabled
                            value=""
                            >
                            Industry
                        </option>
                        <option value="1">
                            Option 1
                        </option>
                        <option value="2">
                            Option 2
                        </option>
                        <option value="3">
                            Option 3
                        </option>
                    </Select>
                </Col>
            </Row>
        </div>
    )
}

export default JobSearchSmall;