require('dotenv').config()
require('express-async-errors')

const conn = require('./db/conn')
const sequelize = require('sequelize')
const express = require('express')
const app = express()

const nf = require('./middleware/not-found')



app.get('/api/home', (req, res)=>{
    res.json({info: 'Node.js, Express, and Postgres API'})
    // .send('Postgres Crud app')
})

app.use(express.json())
app.use(nf)

app.listen(8000, ()=>{
    console.log('listening on port 8000')
})


