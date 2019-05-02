const express = require('express')
const app = express()

const data = require('./data')
const newData = ({id: 2, message: "Hello, holiday!"})
// Const message = {'Woy, How are you?'}

// Setup a '/' endpoint
// Data from user
app.get('/', (req, res, next) => res.send(data))

// Setup a '/hello' endpoint
app.get('/hello', (request, response, next) => {
  response.send({
    message: 'Congratulations you have fetch the data'
  })
})

app.post('/', (request, response, next) => {
    data.push({id: 2, message: "Hallo, Monday" })


    res.send("data has been added")
  })

app.delete('/', (request, response, next) => {
  data.splice()

  res.send("data has been deleted")
})

// Override data to change it
// Can only be done in database

app.listen(3000, () => console.log('Express server is ready on localhost:3000'))

