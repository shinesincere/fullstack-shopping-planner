const dotenv = require('dotenv')
const path = require('path')
const express = require('express')
const {createServer} = require('http')
const mongoose = require('mongoose')

dotenv.config()
const env = process.env.NODE_ENV
const db = process.env.DB  || 'mongodb://localhost/fullstack-shopping-planner'
const port = process.env.PORT || 3002

mongoose
.connect(db, {useNewUrlParser: true}, err => console.log(err || db))

const app = express()
app.use(express.json())
app.use('/api/items', require('./src/routes/api/items'))  

if (env === 'production') {
  app.use(express.static('build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build/index.html'))
  })
}

const server = createServer(app)
server.listen(port, err => console.log(err || `http://localhost:${port}`))