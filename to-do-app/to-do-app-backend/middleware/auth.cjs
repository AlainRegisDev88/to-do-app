const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) =>{
    try{
        const token = req.headers.authorization?.split(' ')[1];


        // check if the token exist
        if(!token) {
            return res.status(401).json({
                message: "No token provided"
            })
        }

        // verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded
        next()
    }

    catch(error){
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                message: "Token expired"
            })
        }

        res.status(401).json({message: "Inveali token"})

    }
}

module.exports = verifyToken