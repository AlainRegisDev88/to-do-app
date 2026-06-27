const express = require('express');
const app = express()

const PORT = 4000

app.get('/', (req, res) => {
    res.send('Hello mate!')
})

app.get('/api/login-info', (req, res) => {
    res.json([{
        id: 'us_1',
        name: "Regis",
        email: "regis@gmail.com",
        password: "regis"
    },
    {
        id: 'us_2',
        name: "Roger",
        email: "roger@gmail.com",
        password: "roger"
    }]
    )
})

// saving a new user

app.post('/api/login-info', (req, res) => {
    const newUser = req.body

    res.json({
        message: 'Saved the new user',
        savedUser: newUser
    })
})


    
app.listen(PORT, () => {
    console.log(`server running on port http://localhost:${PORT}`)
})
