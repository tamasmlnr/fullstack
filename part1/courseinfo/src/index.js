import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const part4= {
    name: 'Number of exercises',
    exercises: part1.exercises+part2.exercises+part3.exercises
  }

  return (
    <div>
      <h1>{course}</h1>
      {part1.name} {part1.exercises} <br/>
      {part2.name} {part2.exercises} <br/>
      {part3.name} {part3.exercises} <br/>
      {part4.name} {part4.exercises} <br/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))