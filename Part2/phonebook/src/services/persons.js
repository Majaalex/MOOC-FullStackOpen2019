import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => {
        console.log('Getting the entries')
        return response.data;
    })
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => {
        console.log('Created a new entry')
        return response.data;
    })
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => {
        console.log('Updated the data')
        
        return response.data;
    })
}

export default {getAll, create, update}