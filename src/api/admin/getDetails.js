var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../../lib/config');
const admin = require('../../data/admin');
const express = require("express");
const router = express.Router();
const verifyToken = require('./verifyToken');
router.get('/getDetails', verifyToken, function(req, res, next) {
  try{

   admin.findById(req.adminId, { password: 0 }, function (err, admin) {
     if (err) return res.status(500).send("There was a problem finding the admin.");
     if (!admin) return res.status(404).send("No admin found.");
     
     res.status(200).send(admin);
   });
  }
  catch(err){
    next(err)
  }
   
 });
//  router.get('/getDetails', verifyToken, function(req, res, next) {

//   admin.find({}, function (err, admin) {
//     if (err) return res.status(500).send("There was a problem finding the admin.");
//     if (!admin) return res.status(404).send("No admin found.");
    
//     res.status(200).json({
//       data:admin
//     })
//   });
  
// });
  module.exports = router;  