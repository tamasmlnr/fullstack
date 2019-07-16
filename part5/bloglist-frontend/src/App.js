import React, { useState, useEffect } from "react";
import Blog from './components/Blog'
import Togglable from './components/Togglable'
import blogService from './services/blogs'
import loginService from './services/login'
import SubmitBlog from './components/SubmitBlog'


const BlogList = ({ inputBlogs, user }) => {
  return inputBlogs
    .filter(blog => {
      console.log(blog.user);
      return blog.user.username === user
    })
    .map(blog => (
      <Blog blog={blog} key={blog.id} />
    ));
}

const Welcome = ({ user, handleLogout }) => {
  return <p>
    {user} logged in
    <button onClick = {handleLogout}>Log out</button>
  </p>
}

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    blogService.getAll().then(response => setBlogs(response));
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('blogUser')
    console.log(loggedUserJSON);
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        username
        <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
        <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>
  )

  const handleLogin = async (event) => {
    event.preventDefault()
    const user = await loginService.login({
      username, password,
    }).catch(error => {
      setErrorMessage("Unable to log in!")
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    })
    window.localStorage.setItem(
      'blogUser', JSON.stringify(user)
    )
    blogService.setToken(user.token)

    setUser(user)
    setUsername('')
    setPassword('')
  }

  const handleLogout= () => {
    setUser(null)
    window.localStorage.removeItem('blogUser')
  }

  if (!user) {
    return (
      <div>
        <h2>Log in to application</h2>
        {loginForm()}
        {errorMessage}
      </div>
    )
  }

  return (
    <div>
      <h2>blogs</h2>
      <Welcome user={user.name} handleLogout={handleLogout}></Welcome>
      <BlogList inputBlogs={blogs} user={user.username}></BlogList>
      <p></p>
      <Togglable buttonLabel='New post'>
      <SubmitBlog user={user} blogs={blogs} setBlogs={setBlogs}></SubmitBlog>
      </Togglable>
    </div>
  )
}

export default App;
