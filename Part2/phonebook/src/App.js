import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import Form from './components/Form'
import useService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length * Math.floor(Math.random() * Math.floor(100))
    }
    switch (checkExistingPersons(newPerson)) {
      case 1:
        const oldPeople = persons.filter(person => newPerson.name === person.name)
        const oldPerson = oldPeople[0]
        newPerson.id = oldPerson.id
        const newPeople = persons.filter(person => String(person.id) !== newPerson.id)
        newPeople.concat(newPerson)
        console.log("newpeople", newPeople, persons)
        setPersons(newPeople)
        console.log("after", newPeople, persons)
        useService.update(newPerson.id, newPerson)
        break
      case 0:
        setPersons(persons.concat(newPerson))
        useService.create(newPerson)
        break
      case 9:
        alert(`${newName} or ${newNumber} already exists in the phonebook.`)
        break
      default:
        console.log("Incorrect parameters")
        break
    }
    setNewName('')
    setNewNumber('')
  }

  const handleAddNames = (event) => {
    return setNewName(event.target.value);
  }
  const handleAddNumbers = (event) => {
    return setNewNumber(event.target.value);
  }
  const handleAddFilter = (event) => {
    return setNewFilter(event.target.value);
  }

  const handleRemovePersons = (event) => {
    const toDelete = persons.filter(person => String(person.id) === event.target.value)
    if (window.confirm(`Delete ${toDelete[0].name}?`)){
      useService.remove(toDelete[0])
      setPersons(persons.filter(person => String(person.id) !== event.target.value))
    }
  }

  const checkExistingPersons = (nameObject) => {
    const nameList = persons.filter(person => person.name === nameObject.name)
    const numberList = persons.filter(person => person.number === nameObject.number)
    const nameExists = (nameList.length > 0) ? true : false
    const numberExists = (numberList.length > 0) ? true : false
    if (nameExists && !numberExists) return 1
    else if (!nameExists && !numberExists) return 0
    else if (nameExists && numberExists) return 9
    else return 9
  }

  useEffect(() => {
    const persons = useService.getAll()
    persons.then(response => setPersons(response))
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
      <Person persons={persons.filter(person => person.name.toLowerCase().includes(newFilter))} onClick={handleRemovePersons} />
    </div>
  )
}




export default App