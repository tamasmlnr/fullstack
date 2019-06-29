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

const DeleteButton = ({ person, handleDelete }) => {
  return <button onClick={() => handleDelete(person)}>delete</button>
}

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterWord, setFilterWord] = useState("");

  useEffect(() => {
    numberService.getAll().then(response => setPersons(response))
  }, [])

  const handleDelete = (person) => {
    const result = window.confirm(`Delete ${person.name} ?`)
    if (result) {
      numberService.deletePerson(person.id).then(setPersons(persons.filter(p=>p.id!=person.id)))
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
      : window.alert(`${newName} is already in the phone book!`);
  }

  const addPerson = (persons, nameToAdd) => {
    numberService.create(nameToAdd).then(response =>
      setPersons(persons.concat(response))
    )
  }

  const filteredPeople = persons.filter(c => c.name.toLowerCase().includes(filterWord.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
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
