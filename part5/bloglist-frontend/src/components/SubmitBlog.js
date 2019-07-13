import React, { useState } from 'react'
import blogService from '../services/blogs'

const SubmitBlog = ({user}) => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')


  const addBlog = async (event) => {
    event.preventDefault()
    const newBlog = {
      title: title,
      author: author,
      url: url,
      likes: 0,
      user: user.id
    }

    blogService
      .create(newBlog)
      .then(data => {
        setTitle('')
        setAuthor('')
        setUrl('')
        window.location.reload();
      })
  }

  return (
    <form onSubmit={addBlog}>
      <div>Title:
        <input label="Title:" onChange={({ target }) => setTitle(target.value)} />
      </div>
      <div>Author:
        <input label="Author:" onChange={({ target }) => setAuthor(target.value)} />
      </div>
      <div>Url:
        <input label="Url:" onChange={({ target }) => setUrl(target.value)} />
      </div>
      <button type="submit">save</button>
    </form>
  )
}

export default SubmitBlog