var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../../lib/config');
const admin = require('../../data/admin');
const express = require("express");
const router = express.Router();
const verifyToken = require('./verifyToken');
router.get('/getDetails1', verifyToken, function(req, res, next) {
   try{
   admin.find({}, function (err, admin) {
     if (err) return res.status(500).send("There was a problem finding the admin.");
     if (!admin) return res.status(404).send("No admin found.");
     
     res.status(200).json({
       data:admin
     });
   });
  } catch (err){
    next(err)
  }
   
 });
router.get('/getDetails1/:adminId',function(req, res, next) {
  try{
  const adminId = req.params.adminId

  admin.findById({_id : adminId}, function (err, admin) {
    if (err) return res.status(500).send("There was a problem finding the admin.");
    if (!admin) return res.status(404).send("No admin found.");
    
    res.status(200).json(admin);
  });
  } catch (err){
  next (err)
}
  
});
  module.exports = router;