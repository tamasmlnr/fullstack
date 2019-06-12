import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    },
   ]

  return (
    <div>
      <h1>{course}</h1>
      {parts[0].name} {parts[0].exercises} <br/>
      {parts[1].name} {parts[1].exercises} <br/>
      {parts[2].name} {parts[2].exercises} <br/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))