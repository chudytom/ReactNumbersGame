import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Button = (props) => {
    let button;
    switch (props.isAnswerCorrect) {
        case true:
            button = <button className='btn btn-success' disabled={props.selectedNumbers.length === 0} onClick={props.acceptAnswer}>
                <FontAwesomeIcon icon='check' />
            </button>
            break;
        case false:
            button = <button className='btn btn-danger' disabled={props.selectedNumbers.length === 0} onClick={props.checkAnswer}>
                <FontAwesomeIcon icon='times' />
            </button>
            break;
        default:
            button = <button className='btn' disabled={props.selectedNumbers.length === 0} onClick={props.checkAnswer}> =</button>
            break;
    }

    return (
        <div className='col-2 text-center'>
            {button}
            <br />
            <br />
            <button className='btn btn-warning btn-sm' onClick={props.redraw} disabled={props.redraws <= 0}>
                <FontAwesomeIcon icon='circle' /> {props.redraws}
            </button>
        </div>
    )
}

export default Button