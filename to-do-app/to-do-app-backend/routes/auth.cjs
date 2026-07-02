const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '..', '.env') })

const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const { randomUUID } = require('crypto')

const router = express.Router()
const pool = require('../db.cjs');

router.get('/signup', (req, res) => {
    res.json({ message: 'Use POST /api/auth/signup to create a user' })
})

router.get('/login', (req, res) => {
    res.json({ message: 'Use POST /api/auth/login to sign in' })
})


// signup
router.post('/signup', async (req, res) => {
    try {
        const userId = randomUUID()
        const { name, email, password } = req.body

        //validation
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Name, email and password required"
            })
        }

        const connection = await pool.getConnection();

        const [existing] = await connection.execute('select * from users where email = ?', [email])

        if (existing.length > 0) {
            return res.status(400).json({
                message: 'User Already exist, try a different email'
            })
        }

        // hash the password
        const hashedPassword = await bcrypt.hash(password, 10)

        //create a new user 

        const result = await connection.execute(
            'insert into users (id, fullName, email, password) values(?,?,?,?)',
            [userId, name, email, hashedPassword]
        )
        connection.release()

        //generate a JWT
        const token = jwt.sign(
            { id: userId, email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRE }
        )

        res.status(201).json({
            message: 'User Created Successfully',
            token,
            user: { id: userId, name, email }
        })
    }

    catch (error) {
        console.log(error),
            res.status(500).json({ message: 'Error creating the user',systemError: error.message})            
    }
})


//LOGIN - verify credentials and return token
router.post('/login', async (req, res) => {

    try {
        const { email, password } = req.body

        //validate
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            })
        }

        const connection = await pool.getConnection();

        //find user by email
        const [rows] = await connection.execute(
            'select * from users where email = ?',
            [email]
        )
        connection.release()

        if (rows.length === 0) {
            return res.status(401).json({
                message: 'Invalid email or password1'
            })
        }

        const user = rows[0]

        //verify the password

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid email or password2"
            })
        }

        //generate a token
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRE }
        )

        res.json({
            message: "Login Successful!",
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.fullName
            }
        })

    }
    catch (error) {
        console.log(error),
            res.status(500).json({
                message: "Error loging you in",
                systemError: error.message
            })
    }
})

module.exports = router;