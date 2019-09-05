import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName
    }
    checkExistingNames(nameObject.name) 
    ? alert(`Error! ${nameObject.name} already exists in the phonebook`)
    : setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleAddNames = (event) => {
    setNewName(event.target.value)
  }

  const checkExistingNames = (name) => {
    const check = persons.find(function(element) {
      return element.name === name
    })
    return check ? true : false
  }

   return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleAddNames}/>
        </div>
        <div>
          <div>debug: {newName}</div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => 
        <Person 
          key={person.name}
          name={person.name}/>)}
      </div>
    </div>
  )
}



export default App