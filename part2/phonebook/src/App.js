import React, { useState, useEffect } from "react";
import numberService from './services/number'

const Filter = ({ searchValue }) => {
  return (
    <>
      <form>
        <div>
          filter show with <input onChange={searchValue} />
        </div>
      </form>
    </>)
}

const PersonForm = ({ submitName, newName, handleChange, newNumber, handleNumberChange }) => {
  return (<form onSubmit={submitName}>
    <div>
      name: <input value={newName} onChange={handleChange} />
    </div>
    <div>
      number: <input value={newNumber} onChange={handleNumberChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}

const Phonebook = ({ people, handleDelete }) => {
  return people.map(p => (
    <Person person={p} key={p.name} handleDelete={handleDelete} />
  ));
};

const Person = ({ person, handleDelete }) => {
  const name = person.name
  const number = person.number
  return (
    <>
      {name} : {number} <DeleteButton person={person} handleDelete={handleDelete}></DeleteButton> <br />
    </>
  );
}

const Notification = ({ message }) => {
  if (message === '') {
    return null
  }

  const notif = {
    color: 'green',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  }

  return (
    <div style={notif}>
      {message}
    </div>
  )
}

const DeleteButton = ({ person, handleDelete }) => {
  return <button onClick={() => handleDelete(person)}>delete</button>
}

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterWord, setFilterWord] = useState("");
  const [confirmMessage, setConfirmMessage]= useState("");

  useEffect(() => {
    numberService.getAll().then(response => setPersons(response))
  }, [])

  const handleDelete = (person) => {
    const result = window.confirm(`Delete ${person.name} ?`)
    if (result) {
      numberService.deletePerson(person.id).then(setPersons(persons.filter(p=>p.id!==person.id)))
    }
  }

  const handleChange = event => {
    setNewName(event.target.value);
  }

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  }

  const searchForValue = event => {
    setFilterWord(event.target.value);
  }

  const submitName = event => {
    event.preventDefault();
    const nameToAdd = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    };
    persons.filter(person => person.name === newName).length === 0
      ? addPerson(persons, nameToAdd)
      : modifyPerson(persons, nameToAdd)
  }

  const addPerson = (persons, nameToAdd) => {
    numberService.create(nameToAdd).then(response =>
      setPersons(persons.concat(response))
    )
    setConfirmMessage(`${nameToAdd.name} successfully added!`)
    setTimeout(() => {
      setConfirmMessage('')
    }, 5000)
  }

  const modifyPerson = (persons, nameToAdd) => {
    const result = window.confirm(`${newName} is already in the phone book! Would you like to replace the number with the new one?`);
    if (result) {
      const idToChange = persons.find(p => nameToAdd.name === p.name).id
      numberService.modifyPerson(nameToAdd, idToChange)
      .then(result => setPersons(persons.map(person => person.id !== idToChange ? person : result)))
    }
  }

  const filteredPeople = persons.filter(c => c.name.toLowerCase().includes(filterWord.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={confirmMessage}></Notification>
      <Filter searchValue={searchForValue}></Filter>
      <h2>Add new person</h2>
      <PersonForm submitName={submitName} newName={newName}
        handleChange={handleChange} newNumber={newNumber} handleNumberChange={handleNumberChange}></PersonForm>
      <h2>Numbers</h2>
      <Phonebook people={filteredPeople} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
