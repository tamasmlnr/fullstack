import React, { useState, useEffect } from "react";
import axios from 'axios';

const Filter = ({ action }) => {
  return <form>
    find countries <input onChange={action} />
  </form>
}

const Result = ({ countries, filterWord }) => {
  if (filterWord.length !== 0) {
    const filteredCountries = countries.filter(c => { return c.name.toLowerCase().includes(filterWord.toLowerCase()) })
    const resultHtml =
      filteredCountries.length >= 10 ?
        "Too many matches, define another filter" : filteredCountries.length === 1 ?
          filteredCountries.map(c => <CountryDescription country={c}></CountryDescription>)
          : filteredCountries.map(c => { return <p key={c.name}>{c.name}</p> })
    return <>
      {resultHtml}
    </>
  }
  else return "Type in a search word!"
}

const CountryDescription = ({ country }) => {
  const languages = country.languages.map(l => <li key={l.name}>{l.name}</li>)
  return (<> <h1>{country.name}</h1>
    <p>capital {country.capital}</p>
    <p>population {country.population}</p>
    <h2>languages</h2>
    <ul>{languages}</ul>
    <img src={country.flag} width="100px"></img>
  </>)

}

const App = () => {
  const [searchWord, setSearchWord] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        setCountries(response.data);
      })
  }, [])

  const searchForValue = event => {
    setSearchWord(event.target.value);
  };

  console.log(countries);

  return (
    <div>
      <Filter action={searchForValue}></Filter>
      <Result countries={countries} filterWord={searchWord} />
    </div>
  );
}

export default App;
