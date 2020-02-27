var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../../lib/config');
const admin = require('../../data/admin');
const express = require("express");
const router = express.Router(); 

router.post('/register', (req, res) => {
   try{

    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  
    admin.create({
      name : req.body.name,
      phone: req.body.phone,
      email : req.body.email,
      password : hashedPassword
    },
    function (err, admin) {
      if (err) return res.status(500).send("There was a problem registering the admin.")
      // create a token
      var token = jwt.sign({ id: admin._id }, config.secret, {
        expiresIn: 86400 
      });
      res.status(200).send({ auth: true, token: token });
    });
  }
  catch (err){
    next(err)
  }
  });
module.exports = router;