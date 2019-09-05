import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import Form from './components/Form'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([])
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

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons').then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

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