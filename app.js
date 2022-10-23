const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const Campground = require('./models/campground')
const app = express()
const port = 3003

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))

// You may need to use '127.0.0.1' instead of localhost
mongoose.connect('mongodb://127.0.0.1:27017/yelprev-01', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const dbConn = mongoose.connection
dbConn.on('error', console.error.bind(console, 'connection error:'))
dbConn.once('open', () => { console.log("We are connected") })

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/makecampground', (req, res) => {
  const myNewCampground = new Campground({
    title: 'Ballybough Campsite',
    price: 1.00,
    description: 'Full of knackers',
    location: 'Dublin',
    image: 'https://source.unsplash.com/collection/483251'
  })
  console.log(myNewCampground)
  res.send(myNewCampground)
})

app.listen(port, (req, res) => {
  console.log(`Server running on Port ${port}`)
})