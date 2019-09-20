import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import Form from './components/Form'
import useService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [positiveMessage, setPositiveMessage] = useState(null)

  const updateList = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length * Math.floor(Math.random() * Math.floor(100))
    }
    // Update an entry on case 1, add an entry on case 0;
    switch (checkExistingPersons(newPerson)) {
      case 1:
        const prompt = `${newPerson.name}  is already in the phonebook, replace the old number with the new one?`
        if (window.confirm(prompt)) handleUpdatePerson(persons, newPerson, setPersons)
        break
      case 0:
        useService.create(newPerson).then(() => {
          setPersons(persons.concat(newPerson))
          setPositiveMessage(`${newPerson.name} has been added.`)
          setTimeout(() => {
            setPositiveMessage(null)
          }, 5000)
        })
          .catch(error => {
            setErrorMessage(
              `Could not add ${newPerson.name} to the phonebook.`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          })
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
  const handleUpdatePerson = (persons, newPerson, setPersons) => {
    const oldPeople = persons.filter(person => newPerson.name === person.name);
    const oldPerson = oldPeople[0];
    newPerson.id = oldPerson.id;
    console.log('trying to update')
    
    useService.update(newPerson.id, newPerson).then(() => {
      console.log('Updating')
      
      setPersons(persons.splice(persons.findIndex(pers => pers.id === oldPerson.id), 1))
      setPersons(persons.concat(newPerson))
      setPositiveMessage(`${oldPerson.name}'s phonenumber has been updated.`)
          setTimeout(() => {
            setPositiveMessage(null)
          }, 5000)
    })
      .catch(error => {
        setErrorMessage(`Could not update ${oldPerson.name}'s phone number.`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
  }

  const handleAddNames = (event) => setNewName(event.target.value)
  const handleAddNumbers = (event) => setNewNumber(event.target.value)
  const handleAddFilter = (event) => setNewFilter(event.target.value)

  const handleRemovePersons = (event) => {
    const toDelete = persons.filter(person => String(person.id) === event.target.value)
    if (window.confirm(`Delete ${toDelete[0].name}?`)) {
      useService.remove(toDelete[0])
      setPersons(persons.filter(person => String(person.id) !== event.target.value))
        setPositiveMessage(`${toDelete[0].name} has been removed.`)
          setTimeout(() => {
            setPositiveMessage(null)
          }, 5000)
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
      <Notification message={errorMessage} type='error' />
      <Notification message={positiveMessage} type='confirmation' />
      <Filter value={newFilter} onChange={handleAddFilter} />
      <h2>New contact</h2>
      <Form addPerson={updateList}
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

