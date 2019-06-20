import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => {
  return <h1>{text}</h1>
}

const Button = ({handleClick, text}) => {
  return <>
    <button onClick = {handleClick}>{text}</button>
  </>
}

const Anecdote = ({quote, vote}) => {
  return <div>
    {quote}
    <br/>
    <Votes vote={vote} />
  </div>
}

const Votes = ({vote}) => {
  return <div>
    has {vote} votes
  </div>
}

const App = ({anecdotes}) => {
   const [selected, setSelected] = useState(0)
   const [votes, setVotes] = useState(new Array(10).fill(0))

  const randomQuote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length)); 
  }

  const maxVote = Math.max(...votes)
  const mostVotedAnecdote = votes.indexOf(maxVote)

  const vote = (element) => () => {
    const votesStateCopy = [...votes]
    votesStateCopy[element]++
    setVotes(votesStateCopy)
  }

  return (
    <div>
      <Header text="Anecdote of the day"/>
      <Anecdote quote={anecdotes[selected]}  vote={votes[selected]} />
      <Button handleClick = {vote(selected)} text = "Vote"></Button>
      <Button handleClick = {randomQuote} text = "Gimme a random anecdote"></Button>
      <Header text="Anecdote with the most votes"></Header>
      <Anecdote quote={anecdotes[mostVotedAnecdote]} vote = {maxVote}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
