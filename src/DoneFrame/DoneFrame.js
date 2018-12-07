import React from 'react'

export const DoneFrame = (props) => {
    return (
        <div className='text-center'>
            <br />
            <h2>{props.doneStatus}</h2>
        </div>
    )
}