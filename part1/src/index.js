import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    setCounter(counter+1)
  }

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleClick}>
        plus
      </button>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)