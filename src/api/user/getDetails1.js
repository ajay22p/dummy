var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../../lib/config');
const user = require('../../data/user');
const express = require("express");
const router = express.Router();
const verifyToken = require('./verifyToken');
router.get('/getDetails1', verifyToken, function(req, res, next) {
   try{
   user.find({}, function (err, user) {
     if (err) return res.status(500).send("There was a problem finding the user.");
     if (!user) return res.status(404).send("No user found.");
     
     res.status(200).json({
       data:user
     });
   });
  } catch (err){
    next(err)
  }
   
 });
router.get('/getDetails1/:userId',function(req, res, next) {
  try{
  const userId = req.params.userId

  user.findById({_id : userId}, function (err, user) {
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    
    res.status(200).json(user);
  });
  } catch (err){
  next (err)
}
  
});
  module.exports = router;