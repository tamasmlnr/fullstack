import React, { useState } from 'react'

const Phonebook = ({people}) => {
  return people.map(p => <Person name={p.name} key={p.name}></Person>)
}

const Person = ({name}) => {
  return <>{name}<br/></>
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', 
      id: 1}
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

 const submitName = (event) => {
 event.preventDefault()
  const nameToAdd = {name: newName, id:persons.length+1}
  setPersons(persons.concat(nameToAdd))
}

  return (
    <div>
      <div>debug: {newName}</div>   
      <h2>Phonebook</h2>
      <form onSubmit={submitName}>
        <div>
          name: 
          <input value={newName} onChange={handleChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Phonebook people={persons}/>
    </div>
  )
}

export default App