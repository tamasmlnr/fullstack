import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({title}) => <div> <h1>{title}</h1> </div>

const Button = ({handleClick, text}) =>  {
  return <button onClick={handleClick}>
    {text}
  </button>
}

const Statistics = ({ratings}) => {
  const good = ratings[0]
  const neutral = ratings [1]
  const bad = ratings [2]
  return <div>
    good: {good} <br/>
    neutral: {neutral} <br/>
    bad: {bad} <br/>
  <Details ratings={ratings}></Details>
  </div>
}

const Details = ({ratings}) => {
  const good = ratings[0]
  const neutral = ratings [1]
  const bad = ratings [2]

  const all = good + neutral + bad
  const avg = all == 0 ? "No ratings yet" : (good  - bad)/all
  const positive = all == 0 ? "No ratings yet" : good / all

  return <>
  All: {all} <br/>
  Average: {avg} <br/>
  Positive: {positive}
  </>
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {
    setGood(good+1)
  }

  const addNeutral = () => {
    setNeutral(neutral+1)
  }

  const addBad = () => {
    setBad(bad+1)
  }

  return (
    <div>
    <Header title="give feedback"></Header>
    <Button handleClick={addGood} text="good"></Button>
    <Button handleClick={addNeutral} text="neutral"></Button>
    <Button handleClick={addBad} text="bad"></Button>
    <Header title="statistics"></Header>
    <Statistics ratings={[good, neutral, bad]}></Statistics>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)