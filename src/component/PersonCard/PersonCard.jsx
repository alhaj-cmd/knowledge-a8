import React from 'react';
import './PersoneCard.css'

const PersonCard = ({person}) => {
    // console.log(person)
    const {name} = person
    return (
        <div>
            <h2>Name :{name}</h2>
        </div>
    );
};

export default PersonCard;