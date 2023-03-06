const express = require('express')
const app = express()


const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('static'))

const userRoutes = require('./routes/user.routes')

app.use('/', userRoutes)



module.exports = app;