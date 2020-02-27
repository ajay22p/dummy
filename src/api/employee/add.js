var express = require("express")
const employees = require('../../data/employees');
const router = express.Router(); 
router.post('/add', (req,res,next)=>{
    try{
        const {empid,empname,email,phone,doj,dor}=req.body
    employees.create({empid,empname,email,phone,doj,dor},
    function(err , employees){
     if(err) res.status(500).send("There was problem in registering employee");
      
        res.status(200).json({
            data : employees,
            message : "employee added"
        });

    })
    } catch (err){
        next(err)
    }
    
});
module.exports = router;