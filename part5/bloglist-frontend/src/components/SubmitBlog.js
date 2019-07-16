import React, { useState } from 'react'
import  { useField } from '../hooks/useField'
import blogService from '../services/blogs'

const SubmitBlog = ({user}) => {

  const title = useField('text')
  const author = useField('text')
  const url = useField('text')

  const addBlog = async (event) => {
    event.preventDefault()
    const newBlog = {
      title: title.value,
      author: author.value,
      url: url.value,
      likes: 0,
      user: user.id
    }

    blogService
      .create(newBlog)
      .then(data => {
        title.reset(true);
        author.reset(true);
        url.reset(true);
        window.location.reload(true);
      })
  }

  return (
    <form onSubmit={addBlog}>
      <div>Title:
        <input {...title} />
      </div>
      <div>Author:
        <input {...author} />
      </div>
      <div>Url:
        <input {...url} />
      </div>
      <button type="submit">save</button>
    </form>
  )
}

export default SubmitBlog