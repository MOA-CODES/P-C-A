require('dotenv').config()
require('express-async-errors')

const sequelize = require('sequelize')
const express = require('express')
const bodyParser = require('body-parser')

const conn = require('./db/conn')
const notfound = require('./middleware/not-found')
const routes = require('./routes/routes')

const app = express()
const PORT = process.env.PORT || 3001

app.get('/', (req, res)=>{
    res.json({info: 'Node.js, Express, and Postgres API'})
})

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true,
}))

app.use('/api/v1', routes)

app.use(express.json())
app.use(notfound)

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})


