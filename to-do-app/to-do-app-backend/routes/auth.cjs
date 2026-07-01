const express = reuqire('express');
const jwt = require('jsonwebtoken');
const bkrypt = require('bcryptjs')

const router = express.Router()
const pool = require('../db.cjs');
const { Connect } = require('vite');

router.post('/signup', async (req, res) => {
    try{
        const{id, name, email, password} = req.body

        //validation
        if(!name || !email|| !password){
            return res.status(400).json({
                message: "Name, email and password required"
            })
        }

        const connection = await pool.getConnection();

        const [existing] = await connection.execute('select * from users where email = ?', [email])

        if(existing.length >0 ){
            return res.status(400).json({
                message: 'User Already exist, try a different email'
            })
        }

        // hash the password
        const hashedPassword = await bcrypt.hash(password, 10)

        //create a new user 

        const result = await connection.execute(
            'insert into users (id, fullName, email, password) values(?,?,?,?)'
            [id, name, email, hashedPassword]
        )
        connection.release()

        const userId = result[0].insertId
    }
})