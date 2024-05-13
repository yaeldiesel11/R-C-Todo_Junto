import { Component } from 'react';
import './App.css';
import People from '../People/People';

class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPeople: [{
        firstName: "Jane",
        lastName: "Doe",
        age: 45,
        hairColor: "Black",
        button: "Birthday button for Jane Doe"
      },
      {
        firstName: "John",
        lastName: "Smith",
        age: 88,
        hairColor: "Brown",
        button: "Birthday button for John Smith"
      },
      {
        firstName: "Millard",
        lastName: "Fillmore",
        age: 50,
        hairColor: "Brown",
        button: "Birthday button for Millard Fillmore"
      },
      {
        firstName: "Maria",
        lastName: "Smith",
        age: 62,
        hairColor: "Brown",
        button: "Birthday button for Jane Doe"
      }],
    };
  }
  render = () => {
    return (
      <div>
        <ul>
          {this.state.listPeople.map((people, index) => {
            return (<People key={index}
              firstName={people.firstName}
              lastName={people.lastName}
              age={people.age}
              hairColor={people.hairColor}
              button={people.button} />)
          })}
        </ul>
      </div>
    );
  }
}

export default PersonCard;
