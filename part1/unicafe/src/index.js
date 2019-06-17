import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({title}) => <div> <h1>{title}</h1> </div>

const Button = ({handleClick, text}) =>  {
  return <button onClick={handleClick}>
    {text}
  </button>
}

const Statistics = ({good, neutral, bad}) => {
  return <div>
    good: {good} <br/>
    neutral: {neutral}<br/>
    bad: {bad}<br/>

  </div>
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
    <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)