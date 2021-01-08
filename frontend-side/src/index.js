const express = require('express')
const app = express()

const PORT = 3000

app.get('/test', (req, res) => {
  res.send(`Response from Express`)
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
