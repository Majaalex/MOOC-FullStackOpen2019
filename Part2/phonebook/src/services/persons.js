import axios from 'axios'
const baseUrl = "/api/persons"

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
    console.log('Inside update')
    
    const request = axios.post(`${baseUrl}/${id}`, newObject)
    console.log('AFter req')
    
    return request.then(response => {
        console.log('Updated the data')
        return response.data;
    })
}

const remove = newObject => {
    axios.delete(`${baseUrl}/${newObject.id}`)
}

export default {getAll, create, update, remove}