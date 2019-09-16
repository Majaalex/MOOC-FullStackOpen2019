import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => {
        console.log('Getting the entries')
        return response.data;
    })
    .catch(error => {
        console.log(`Could not get the data`)
    })
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => {
        console.log('Created a new entry')
        return response.data;
    })
    .catch(error => {
        console.log(`Could not create the entry`)
    })
}

const update = (id, newObject) => {
    console.log("before update", id, newObject)
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => {
        console.log('Updated the data')
        return response.data;
    })
    .catch(error => {
        console.log(`Could not update`, error)
    }) 
}

const remove = newObject => {
    axios.delete(`${baseUrl}/${newObject.id}`)
    .catch(error => {
        console.log(`Could not delete entry`, error)
    })
}

export default {getAll, create, update, remove}