import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
   <>
   {props.part} {" "}
   </>
  )
}

const Total = (props) => {
  return (
    <>
     {props.nr}
    <br/>
    <p></p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part={part1} />
      <Total nr={exercises1} />
      <Content part={part2} />
      <Total nr={exercises2} />
      <Content part={part3} />
      <Total nr={exercises3} />
      Number of exercises {exercises1 + exercises2 + exercises3}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))