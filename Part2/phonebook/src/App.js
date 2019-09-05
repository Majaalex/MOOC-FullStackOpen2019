import React, { useState } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import Form from './components/Form'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    checkExistingPersons(nameObject)
      ? alert(`${newName} or ${newNumber} already exists in the phonebook.`)
      : setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const handleAddNames = (event) => setNewName(event.target.value)
  const handleAddNumbers = (event) => setNewNumber(event.target.value)
  const handleAddFilter = (event) => setNewFilter(event.target.value)

  const checkExistingPersons = (nameObject) => {
    const nameExists = persons.find(function (x) {
      return x.name === nameObject.name
    })
    const numberExists = persons.find(function (x) {
      return x.number === nameObject.number
    })
    return nameExists || numberExists
      ? true
      : false
  }
  return (
    <div>
      <h1>Phonebook</h1>
      <Filter value={newFilter} onChange={handleAddFilter} />
      <h2>New contact</h2>
      <Form addPerson={addPerson}
        handleAddNames={handleAddNames}
        handleAddNumbers={handleAddNumbers}
        newName={newName}
        newNumber={newNumber} />
      <h2>Numbers</h2>
      <Person persons={persons.filter(person => person.name.toLowerCase().includes(newFilter))} />
    </div>
  )
}




export default App