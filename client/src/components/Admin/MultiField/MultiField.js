import { React } from 'react';
import { Col, Textarea, Button} from 'react-materialize';
import './multifield.css'
import 'materialize-css';

export default function MultiField(props) {
    let head;
    let Label;
    switch (props.type) {
        case 'd':
            head = 'Add Duties & Resposibilities:'
            Label = 'Job Responsibility'
            break
        case 'q':
            head = 'Add Preferred Qualifications:'
            Label = 'Qualification'

    }

    let fields = props.items.map((item,i) =>{
        return(
            <div key={i}>
                <Textarea s={10} 
                    id={`${props.type}-${i}`}
                    label={Label}
                    value={item}
                    onChange={e => props.record(e)}/>
                <Col s={2}>
                    <Button
                        id={`${props.type}-${i}`}
                        className="red remove-btn"
                        floating
                        small
                        node="button"
                        waves="light"
                        onClick={e => props.remove(e)}
                    >X</Button>
                </Col>
            </div>
        )
    })


    return (
        <Col s={12} className='multi-field'>
            <Col s={8} className='multi-title'>
                <h6>{head}</h6>
            </Col>
            <Col s={4} className='multi-title'>
                <Button
                    className='right title-btn'
                    small
                    onClick={() => props.add()}
                >ADD
                </Button>
            </Col>
            <Col s={12} className='field-container'>
                {fields}
            </Col>

        </Col>
    )
}
