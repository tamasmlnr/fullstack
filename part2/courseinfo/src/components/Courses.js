import React from 'react'

const Header = ({title}) => (
  <>
  <h1>{title}</h1> 
  </>
)

const Courses = ({courses}) => {
const courseDivs = courses.map(c => <Course key = {c.id} course={c}></Course>)

  return <div>
    {courseDivs}
  </div>
}

const Course = ({course}) => {
  const courseParts = course.parts.map(c => <Part key={c.id} name={c.name} exercises = {c.exercises}></Part>)
  return <div>
    <Header title={course.name}/>
    {courseParts}
    <Sum course={course}/>
    </div>
}

const Part = ({name, exercises}) => {
return <div>
  {name} {exercises}<br/>
</div>
}

const Sum = ({course}) => {
  const total = course.parts.reduce((acc, obj) => acc + obj.exercises, 0)
  console.log(total)
  return <div>
    <b>total of {total} exercises</b>
  </div>
}

export default Courses