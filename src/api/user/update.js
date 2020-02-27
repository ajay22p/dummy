var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../../lib/config');
const user = require('../../data/user');
const express = require("express");
const router = express.Router();
router.put('/update/:userId',  function(req, res) {
    try{
    // res.send("hello");
    const update =req.body
    //const update = { name: req.body.name, phone: req.body.phone , email: req.body.email }
    console.log(update);
    const userId = req.params.userId;
    console.log(req.params);
    
    user.findById({_id: userId},function (err, user) {
        console.log(user);
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (user === null) {
            res.status(404).send("No user found.");
        }else{
            user.updateOne({$set:update}, (err, data)=>{
                if(!err){
                    res.status(200).json({
                        data:user,
                        message:"user updated"
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