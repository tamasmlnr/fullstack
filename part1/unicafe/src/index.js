import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({title}) => <div> <h1>{title}</h1> </div>


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
    <Header title="give feedback"></Header>
    <Header title="give feedback"></Header>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)