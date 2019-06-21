import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({title}) => (
  <>
  <h1>{title}</h1> 
  </>
)

const Course = ({course}) => {
  const courseParts = course.parts.map(c => <Part key={c.id} name={c.name} exercises = {c.exercises}></Part>)
  return <div>
    {courseParts}
  </div>
}

const Part = ({name, exercises}) => {
return <>
  {name} {exercises}<br/>
</>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Header title={course.name}/>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))