import React, { useState, useEffect } from "react";
import axios from 'axios'

const Filter = ({searchValue}) => {
  return (
    <>
      <form>
        <div>
           filter show with <input onChange={searchValue} />
        </div>
 </form>
 </>)
}

const PersonForm = ({submitName, newName, handleChange, newNumber, handleNumberChange}) => {
return( <form onSubmit={submitName}>
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

const Phonebook = ({ people }) => {
  return people.map(p => (
    <Person name={p.name} number={p.number} key={p.name} />
  ));
};

const Person = ({ name, number }) => {
  return (
    <>
      {name} : {number} <br />
    </>
  );
};


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterWord, setFilterWord] = useState("");

  useEffect(() => {
    axios
    .get("http://localhost:3001/persons")
    .then(response => {
      setPersons(response.data)
    })
  }, [])


  const handleChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const searchForValue = event => {
    setFilterWord(event.target.value);
  };

  const submitName = event => {
    event.preventDefault();
    const nameToAdd = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    };
    persons.filter(person => person.name === newName).length === 0
      ? setPersons(persons.concat(nameToAdd))
      : window.alert(`${newName} is already in the phone book!`);
  };

  var filteredPeople = persons.filter(c => c.name.toLowerCase().includes(filterWord.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchValue={searchForValue}></Filter>
      <h2>Add new person</h2>
      <PersonForm submitName={submitName} newName = {newName} 
      handleChange = {handleChange} newNumber = {newNumber} handleNumberChange={handleNumberChange}></PersonForm>
      <h2>Numbers</h2>
      <Phonebook people={filteredPeople} />
    </div>
  );
};

export default App;
