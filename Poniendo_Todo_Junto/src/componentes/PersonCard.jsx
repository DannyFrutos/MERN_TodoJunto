import React, { useState } from 'react';
import './PersonCard.css';

function PersonCard(props) {
    const [age, setAge] = useState(props.age);

    const handleBirthdayClick = () => {
        setAge(age + 1);
    };

    return (
        <div className="person-card">
            <h2>{props.lastName}, {props.firstName}</h2>
            <p className="data">Age: {age}</p>
            <p className="data">Hair Color: {props.hairColor}</p>
            <button className="age-button" onClick={handleBirthdayClick}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    );
}

export default PersonCard;
