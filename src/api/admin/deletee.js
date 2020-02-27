var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../../lib/config');
const admin = require('../../data/admin');
const express = require("express");
const router = express.Router();
router.delete('/deletee/:adminId',  function(req, res) {
    try{
  const adminId = req.params.adminId;
  admin.findByIdAndDelete({_id : adminId} , (err,admin) => {
    if (err) return res.status(500).send("There was a problem finding the admin."); 

    res.status(200).json({
     data: null,
    message: 'admin has been deleted'
   });
   });
}
catch (err){
    next(err)
} 
});
   module.exports = router;