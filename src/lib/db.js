const mongoose = require('mongoose')

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME
} = process.env

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

module.exports = () => mongoose.connect(uri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})