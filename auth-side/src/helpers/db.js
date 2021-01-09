const mongoose = require('mongoose')
const { MONGODB_URI } = require('../configurations')

module.exports.connectDB = () => {
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  return mongoose.connection
}
