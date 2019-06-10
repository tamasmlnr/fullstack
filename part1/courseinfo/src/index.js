import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part title={props.part1} nr ={props.nr1} />
      <Part title={props.part2} nr ={props.nr2}/>
      <Part title={props.part3} nr ={props.nr3}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <>
    {props.title} {" "}
    {props.nr}
    <p></p>
    </>
  )

}
const Total = (props) => {
  return (
    <>
     {props.text}  {" "}
     {props.nr}
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
      <Content part1={part1} nr1={exercises1} part2={part2} nr2={exercises2} part3={part3} nr3={exercises3} />
     <Total text="Number of exercises" nr={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))