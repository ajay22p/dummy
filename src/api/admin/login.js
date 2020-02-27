var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../../lib/config');
const admin = require('../../data/admin');
const express = require("express");
const router = express.Router();
router.post('/login', (req, res) => {
   try{
    admin.findOne({ email: req.body.email }, (err, admin) => {
      if (err) return res.status(500).send('Error on the server.');
      if (!admin) return res.status(404).send('No admin found.');
   
      var passwordIsValid = bcrypt.compareSync(req.body.password, admin.password);
      if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
  
      //token code
      var token = jwt.sign({ id: admin._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
  
      res.status(200).send({ auth: true, token: token });
    });
   }
   catch (err){
     next (err)
   }

  });
  module.exports = router;