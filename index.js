const express = require('express')
const app = express()
app.set('view engine', 'pug')

//const fetch = require('node-fetch')
const { combineData } = require('./businessLogic/combineData')

app.get('/', async function (req, res) {
  res.render('index', { 
    title: 'Node, Express & ES6',
    heading: 'Node, Express & ES6',
    subtitle: 'Posts grouped by user (json: /users)',
    postsByUser: await combineData()
   })
})

app.get('/users', async function (req, res) {
  let data = await combineData()
  res.json(data)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})