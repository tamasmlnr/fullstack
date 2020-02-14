import React from 'react';
import { voteForAnecdote } from './../reducers/anecdoteReducer';
import { updateNotification, removeNotification } from './../reducers/notificationReducer';

const AnecdoteList = ({ store }) => {
    const anecdotes = store.getState().anecdotes;
    const vote = (id) => {
        store.dispatch(voteForAnecdote(id))
        store.dispatch(updateNotification(anecdotes.find(a => a.id === id).content));
        setTimeout(function () { store.dispatch(removeNotification()) }, 5000);
    }


    return (
        <div>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList;