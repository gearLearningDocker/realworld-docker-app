const express = require('express')
const { connectDB } = require('./helpers/db')
const { HOST, PORT, MONGODB_URI } = require('./configurations')
const app = express()

startServer = () => {
  app.listen(PORT, () => {
    console.log(`Auth started on ${HOST}:${PORT} with database URL ${MONGODB_URI}`)
  })
}

app.get('/auth', (req, res) => {
  res.send(`Response from auth`)
})

connectDB()
  .on('error', () => console.log())
  .on('disconnected', connectDB)
  .once('open', startServer)
