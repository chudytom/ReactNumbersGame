import React from 'react';
import Card from '../Card/Card.js';

const CardList = (props) => {
    return (
        <div>
            {props.cards.map(cardData => <Card key={cardData.id} cardData={cardData}/>)}
        </div>
    )
}

export default CardList