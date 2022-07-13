const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    try{
        // header - Authorization: Bearer (secret key)
        // Placed in a try to catch errors, can be placed by itself without the error, but always best to do error catches where possible
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWTKEY);
    
        decoded: decoded
        // middleware
        next();
       }
       catch(err){
           res.status(401).json({ message: 'Authorization Failed' })
       }
}