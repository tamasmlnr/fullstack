const blogRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

blogRouter.get('/', (request, response) => {
  Blog
    .find({}).populate('user', { username: 1, name: 1 })
    .then(blogs => {
      response.json(blogs)
    })
})

blogRouter.post('/', async (request, response) => {
  const body = request.body
  const user = await User.findById(body.userId)
  console.log(body.userId);

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
    user: user.id
  })

  const savedBLog = await blog.save()
  user.blogs = user.blogs.concat(savedBLog.id)
  await user.save()
  response.status(201).json(savedBLog.toJSON)
})

blogRouter.delete('/:id', async (request, response) => {
  await Blog.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

blogRouter.put('/:id', async (request, response) => {
  const body = request.body

  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
    user: body.user
  }

  const result = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
  response.status(201).json(result.toJSON)
})

module.exports = blogRouter