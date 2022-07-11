const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.use(express.json());

// require ("crypto").randomBytes(30).toString('hex'), can do any number instructor did 64
router.post('/login', (req, res, next) => {
    const email = req.body.email;
    const id = req.body.id;
    const token = jwt.sign({ email: email, id: id }, process.env.JWTKEY,)

    res.status(200).json({ message: 'Secure', token: token })
});

router.get('/profile', (req, res, next) => {
    // header - Authorization: Bearer (secret key)
    // Placed in a try to catch errors, can be placed by itself without the error, but always best to do error catches where possible
   try{
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWTKEY);

    res.status(200).json({ message: 'Authorization Verified', decoded: decoded })
   }
   catch(err){
       res.status(401).json({ message: 'Authorization Failed' })
   }
});

module.exports = router;