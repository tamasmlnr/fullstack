import React from 'react'
import ReactDOM from 'react-dom'
const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part title={props.parts[0].name} nr ={props.parts[0].exercises} />
      <Part title={props.parts[1].name} nr ={props.parts[1].exercises} />
      <Part title={props.parts[2].name} nr ={props.parts[2].exercises} />
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <>
    {props.title} {" "}
    {props.nr}
    <p></p>
    </>
  )

}
const Total = (props) => {
  console.log(props)
  return (
    <>
     {props.text}  {" "}
     {props.nr}
    </>
  )
}

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
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))