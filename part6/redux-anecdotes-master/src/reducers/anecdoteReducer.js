const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

export const voteForAnecdote = (id) => {
  return {
    type: 'VOTE',
    idToVote: id
  }
}

export const addNewAnecdote = (content) => {
  return {
    type: 'ADD',
    content: content
  }
}

const anecdoteReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action) 

  switch (action.type) {
    case 'VOTE': {
      const id = action.idToVote
      const anecdoteToUpdate = state.find(a => a.id === id);
      const newState = state.map(element => element.id === id ? { ...element, votes: anecdoteToUpdate.votes + 1 } : element);
      newState.sort((a,b) => b.votes - a.votes)
      return newState;
    }
    case 'ADD': {
      return state.concat(asObject(action.content))
    }
  }
  return state;
}
export default anecdoteReducer