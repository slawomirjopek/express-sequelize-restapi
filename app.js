const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

const app = express()

// Log requests
app.use(logger('dev'))

// Parse req data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Default route
app.get('*', (req, res) => 
    res.status(200).send('Server working, but you are at empty route!')
)

module.exports = app
