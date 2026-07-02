const express = require('express');
const cors = require('cors')
const path = require('path')
const authRoutes = require('./routes/auth.cjs')
const verifyToken = require('./middleware/auth.cjs')

const app = express()

require('dotenv').config({ path: path.join(__dirname, '.env') });

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

/* previous code no routes and tokens

// // test page
// app.get('/test', (req, res) => {
//     res.send('Hello mate!')
// })

// app.post('/api/users', async(req, res) =>{
    
//     try{
//         const {id, name, email, password} = req.body

//         if (!id || !name || !email || !password){
//             return res.status(400).json({
//                 message:"Invalid Inputs"
//             })
//         }

//         const connection = await pool.getConnection();
//         const result = await connection.execute(
//             "INSERT INTO users (id, fullName, email, password) VALUES(?,?,?,?)",
//             [id, name, email, password]
//         );
//         connection.release()

//         res.status(201).json({
//             message:'User created successfully',
//             userId: result[0].insertId,
//             user: {id: result[0].insertId, name, email }
//         })
//     }
//     catch(error){
//         console.log(error);
//         res.status(500).json({message: 'User was not registered :('})
//     }

// })

// app.get('/api/users', async(req, res) => {

//     try{
//         const connection = await pool.getConnection()
//         const [rows] = await connection.execute(
//             "SELECT * FROM users"
//         )
//         connection.release()

//         res.json({
//             message: "Users retrieved successfully",
//             count: rows.length,
//             users: rows
//         })
//     }
//     catch(error){
//         console.log(error);
//         res.status(500).json({message: 'Failed to get the user'})
//     }
// })

*/


//unprotected route
app.use('/api/auth', authRoutes)

// protected route
app.get('/api/profile', verifyToken, async (req, res) => {
    try{
        pass
    }
    catch(error){
        console.log(error)
    }
})

app.listen(PORT, () => {
    console.log(`server running on port http://localhost:${PORT}`)
})
