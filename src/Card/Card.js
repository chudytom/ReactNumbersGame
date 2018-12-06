import React from 'react';
import './Card.css'

const Card = (props) => {
    const card = props.cardData;
    return(
        <div className='cardElement'>
            <img className='personImage' src={card.imageUrl} alt='Person picutre'/>
            <div className='imageInfo'>
                <div className='personName'>{card.personName}</div>
                <div>{card.personCompany}</div>
            </div>
        </div>
    )
}

export default Card