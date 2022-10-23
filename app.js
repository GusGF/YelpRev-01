const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const app = express()
const port = 3003

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))

// You may need to use '127.0.0.1' instead of localhost
mongoose.connect('mongodb://127.0.0.1:27017/yelprev-01', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, (req, res) => {
  console.log(`Server running on Port ${port}`)
})