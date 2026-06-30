const express = require('express');
const cors = require('cors')
const app = express()
const mysql = require('mysql2/promise')

require('dotenv').config();

const PORT = process.env.PORT || 5000
const pool = require('./db.cjs');


// middleware
app.use(cors())
app.use(express.json())


// test page
app.get('/test', (req, res) => {
    res.send('Hello mate!')
})


app.post('/api/users', async(req, res) =>{
    
    try{
        const {id, name, email, password} = req.body

        if (!id || !name || !email || !password){
            return res.status(400).json({
                message:"iNVALID INPUTS"
            })
        }

        const connection = await pool.getConnection();
        const result = await connection.execute(
            "INSERT INTO users (id, fullName, email, password) VALUES(?,?,?,?)",
            [id, name, email, password]
        );
        connection.release()

        res.status(201).json({
            message:'User created successfully',
            userId: result[0].insertId,
            user: {id: result[0].insertId, name, email }
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'User was not registered :('})
    }

})


app.listen(PORT, () => {
    console.log(`server running on port http://localhost:${PORT}`)
})
