import React from 'react'


const Person = (props) => {
  
    return <div>
        {props.persons.map(person => <p key={person.name}>
            {person.name} {person.number} <button onClick={props.onClick} value={person.id}>Delete</button>
        </p>)}
    </div>;
}


export default Person