import axios from 'axios'
const url = 'http://localhost:3001/persons'

const getAll = async () => {
  const request = axios.get(url)
  const response = await request;
  return response.data;
}

const create = async newPerson => {
  const request = axios.post(url, newPerson)
  const response = await request;
  return response.data;
}

const deletePerson = async id => {
  const urlToDelete = `${url}/${id}`
  const request = axios.delete(urlToDelete)
  const response = await request;
  return response.data;
}


export default {
  getAll,
  create,
  deletePerson
}