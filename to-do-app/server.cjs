const express = require('express');
const cors = require('cors')
const app = express()
const mysql = require('mysql2/promise')

require('dotenv').config();

const PORT = process.env.PORT || 5000
const pool = require('./db')


// middleware
app.use(cors())
app.use(express.json())

app.get('/test', (req, res) => {
    res.send('Hello mate!')
})







app.listen(PORT, () => {
    console.log(`server running on port http://localhost:${PORT}`)
})
