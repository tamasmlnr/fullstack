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

// const modifyPerson = async person, idToChange => {
//   const urltoModify = `${url}/${person.id}`
//   const request = axios.put(urltoModify, person)
//   const response = await request
//   return response.data
// 

const modifyPerson = async (newPerson, idToChange) => {
  const request = axios.put(`${url}/${idToChange}`, newPerson)
  const response = await request;
  return response.data;
}

export default {
  getAll,
  create,
  deletePerson,
  modifyPerson
}