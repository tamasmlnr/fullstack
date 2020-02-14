import React from 'react';
import { addNewAnecdote } from '../reducers/anecdoteReducer';
import addNotification from '../reducers/notificationReducer';
import { removeNotification } from './../reducers/notificationReducer';


const AnecdoteForm = ({ store }) => {

    const add = (event) => {
        event.preventDefault()
        const content = event.target.newAnecdote.value
        store.dispatch(addNewAnecdote(content))
        setTimeout(function () { store.dispatch(removeNotification()) }, 5000);
    }

    return (<>
        <h2>create new</h2>
        <form onSubmit={add}>
            <div><input name="newAnecdote" /></div>
            <button type="submit">submit</button>
        </form>
      </>)
}

export default AnecdoteForm