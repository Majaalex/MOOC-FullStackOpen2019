import React from 'react';

 const Form = (props) => {
  <form onSubmit={props.addPerson}>
    <div>
      Name: <input value={props.newName} onChange={props.handleAddNames} />
      Number: <input value={props.newNumber} onChange={props.handleAddNumbers} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>;
};

export default Form
