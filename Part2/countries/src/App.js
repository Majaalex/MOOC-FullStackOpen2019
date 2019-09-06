import React, { useState, useEffect } from 'react';
import Input from './components/Input'
import axios from 'axios';
import Countries from './components/Countries'

function App() {
  const [newFilter, setNewFilter] = useState('')
  const [newCountries, setNewCountries] = useState([])
  const handleAddFilter = (event) => setNewFilter(event.target.value.toLowerCase())

  useEffect(() => {
    console.log('Making a database request')
    axios
      .get('https://restcountries.eu/rest/v2/all').then((response) => {
        setNewCountries(response.data)
      })
  }, [])

  const filterCountries = () => {
    return newCountries.filter(country => {
      return (country.name.toLowerCase().includes(newFilter))
    })
  }
  return (
    <div className="App">
      <Input text="Find countries: " onChange={handleAddFilter} value={newFilter} />
      <Countries data={filterCountries()} onClick={handleAddFilter}/>
    </div>
  );
}




export default App;
