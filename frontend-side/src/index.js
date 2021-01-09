const express = require('express')
const mongoose = require('mongoose')
const { connectDB } = require('./helpers/db')
const { HOST, PORT, MONGODB_URI } = require('./configurations')
const app = express()

const postSchema = new mongoose.Schema({
  name: String
})
const Post = mongoose.model('Post', postSchema)

startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server started on ${HOST}:${PORT} with database URL ${MONGODB_URI}`)

    const post = new Post({ name: 'New Post' })
    post.save((error, post) => {
      if (error) return console.log(error)
      console.log('saved post is: ', post)
    })
  })
}

app.get('/test', (req, res) => {
  res.send(`Response from Express`)
})

connectDB()
  .on('error', () => console.log())
  .on('disconnected', connectDB)
  .once('open', startServer)
