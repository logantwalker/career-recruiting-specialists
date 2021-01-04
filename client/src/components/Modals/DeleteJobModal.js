import { React} from 'react';
import { Row, Col, Button } from 'react-materialize';
import './styles/delete-job.css';

const DeleteJobModal = (props) => {
    let renderModal = <div></div>;
    if(props.show){
        renderModal = (
            <div className='modal-background'>
                <div className='modal-content'>
                    <h4 className='modal-header'>
                        Warning! You are about to delete this job!
                </h4>
                    <div className='divider'></div>
                    <p className='center-align'>
                        Confirm below if you would like to delete this job listing.
                </p>
                    <Row className='confirmation'>
                        <Col s={2} className='cfrm-btn '>
                            <Button
                                className='yes-btn title-btn'
                                onClick={()=>{
                                    props.delete();
                                    props.hide();
                                }}>
                                YES
                        </Button>
                        </Col>
                        <Col s={2}  >
                            <Button
                                className='no-btn title-btn'
                                onClick={props.hide}>
                                NO
                        </Button>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
    return(
        renderModal
    )
}

export default DeleteJobModal;

