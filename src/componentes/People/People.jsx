import React, { useState } from "react";

const People = (props) => {
    const [age, setAge] = useState(props.age);

    const increaseAge = () => {
        setAge(age + 1);
    };

    return (
        <li>
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair color: {props.hairColor}</p>
            <button onClick={increaseAge}>{props.button}</button>
        </li>
    );
}

export default People;