import React, { useState } from 'react';
    
const PersonCard = (props) => {
    const [age, setAge] = useState(props.age);

    const birthdayButton = () =>{
        setAge(age+1);
    }

    return(
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={ birthdayButton }>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    );
}

export default PersonCard;