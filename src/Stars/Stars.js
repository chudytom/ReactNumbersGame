import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import _ from 'lodash'


const Stars = (props) => {
    return (
        <div className='col-5'>
            {_.range(0, props.starsCount).map(i =>
                <FontAwesomeIcon key={i} icon='star' />
            )}
        </div>
    )
}

export default Stars