var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../../lib/config');
const admin = require('../../data/admin');
const express = require("express");
const router = express.Router();
router.put('/update/:adminId',  function(req, res) {
    try{
    // res.send("hello");
    const update =req.body
    //const update = { name: req.body.name, phone: req.body.phone , email: req.body.email }
    console.log(update);
    const adminId = req.params.adminId;
    console.log(req.params);
    
    admin.findById({_id: adminId},function (err, admin) {
        console.log(admin);
        if (err) return res.status(500).send("There was a problem finding the admin.");
        if (admin === null) {
            res.status(404).send(" admin not found.");
        }else{
            admin.updateOne({$set:update}, (err, data)=>{
                if(!err){
                    res.status(200).json({
                        data:admin,
                        message:"admin updated"
                    })
                }
            });
        }
        
      
  });
}
catch (err){
    next(err)
}
});
   module.exports = router;