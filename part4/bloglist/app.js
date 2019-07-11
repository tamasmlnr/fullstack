const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const blogRouter = require('./controllers/blogs')
const userRouter = require('./controllers/users')
const cors = require('cors')
const mongoose = require('mongoose')
const loginRouter = require('./controllers/login')

const mongoUrl = process.env.MONGO_BLOG_URI
console.log(`connecting to ${mongoUrl}`);
mongoose.connect(mongoUrl, { useNewUrlParser: true })

app.use(cors())
app.use(bodyParser.json())
app.use('/api/blogs', blogRouter)
app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)

module.exports = app