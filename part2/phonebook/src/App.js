import React, { useState } from "react";

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
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterWord, setFilterWord] = useState("");

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

  var filteredPeople = persons.filter(p => p.name.toLowerCase().includes(filterWord.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter show with <input onChange={searchForValue} />
        </div>
      </form>
      <h2>Add new person</h2>
      <form onSubmit={submitName}>
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
      <h2>Numbers</h2>
      <Phonebook people={filteredPeople} />
    </div>
  );
};

export default App;
