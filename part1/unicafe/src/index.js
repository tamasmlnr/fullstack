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
  const all = good + neutral + bad
  const avg =  (good  - bad)/all
  const positive = good / all

  return all == 0 ?  "No feedback given"  : 
  <div>
    <Statistic text="good" value ={good} />
    <Statistic text="neutral" value ={neutral} />
    <Statistic text="bad" value ={bad} />
    <Statistic text="average" value={avg} />
    <Statistic text="positive" value={positive} />
  </div>
}

const Statistic = ({text, value}) => {
  return <>
  {text}  {value} <br/>
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

  const all = good + neutral + bad
  const avg =  (good  - bad)/all
  const positive = good / all

  return (
    <div>
    <Header title="give feedback"/>
    <Button handleClick={addGood} text="good"/>
    <Button handleClick={addNeutral} text="neutral"/>
    <Button handleClick={addBad} text="bad"/>
    <Header title="statistics"/>
    <Statistics ratings={[good, neutral, bad]} />
    </div>

  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)