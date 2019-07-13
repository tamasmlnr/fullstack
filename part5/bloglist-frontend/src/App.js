import React, { useState, useEffect } from "react";
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'


const BlogList = ({ inputBlogs, user }) => {
  return inputBlogs
    .filter(blog => {
      console.log(blog.user);
      return blog.user.username === user})
    .map(blog => (
      <Blog blog={blog} key={blog.id} />
    ));
}

const Welcome = ({ user }) => {
  return <p>
    {user} logged in
  </p>
}

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    blogService.getAll().then(response => setBlogs(response))
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

    setUser(user)
    setUsername('')
    setPassword('')
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
      <Welcome user={user.name}></Welcome>
      <BlogList inputBlogs={blogs} user={user.username}></BlogList>
    </div>
  )
}

export default App;
