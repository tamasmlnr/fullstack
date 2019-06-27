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
          : filteredCountries.map(c => { return <CountryNoDetails country={c}></CountryNoDetails> })
    return <>
      {resultHtml}
    </>
  }
  else return "Type in a search word!"
}


const CountryNoDetails = ({ country }) => {

  const [showDetails, setShowDetails] = useState(false);

  const show = () => {
    setShowDetails(!showDetails)
  }

  return (
    <><p key={country.name}>{country.name}
      <button onClick={show}>show</button>
    </p>
      <div id="details" style={{ display: showDetails == 1 ? 'block' : 'none' }}><CountryDescription country={country} /></div>
    </>
  )
}

const CountryDescription = ({ country }) => {
  const languages = country.languages.map(l => <li key={l.name}>{l.name}</li>)
  return (<> <h1>{country.name}</h1>
    <p>capital {country.capital}</p>
    <p>population {country.population}</p>
    <h2>languages</h2>
    <ul>{languages}</ul>
    <img src={country.flag} width="100px"></img> <br />
    <Weather capital={country.capital} />
  </>)
}

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    axios
      .get("http://api.apixu.com/v1/current.json?key=e92c273648be4d7ab63183712192706&q=".concat(capital))
      .then(response => {
        setWeather(response.data)
      })
  }, [])
  if (weather.current!==undefined) {
  console.log();
  return (<>
  <h1>Weather in {capital}</h1>
  <p>temperature: {weather.current.temp_c} celsius</p>
  <p><img src={weather.current.condition.icon}></img></p>
  <p>wind: {weather.current.wind_kph} kph direction {weather.current.wind_dir}</p>
   </>)}
  else return (<></>)
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

  return (
    <div>
      <Filter action={searchForValue}></Filter>
      <Result countries={countries} filterWord={searchWord} />
    </div>
  );
}

export default App;
