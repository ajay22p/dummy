var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../../lib/config');
const user = require('../../data/user');
const express = require("express");
const router = express.Router();
router.delete('/deletee/:userId',  function(req, res) {
    try{
  const userId = req.params.userId;
  user.findByIdAndDelete({_id : userId} , (err,user) => {
    if (err) return res.status(500).send("There was a problem finding the user."); 

    res.status(200).json({
     data: null,
    message: 'User has been deleted'
   });
   });
}
catch (err){
    next(err)
} 
});
   module.exports = router;