var express = require("express")
const employees = require('../../data/employees');
const router = express.Router();
router.get('/showDetails',( req , res , next )=>{
     try{
         employeeId=req.params.employeeId
         employees.find({},function( err , employees ){
             if(err) res.status(500).send("There was problem in finding employee");
             if(!employees) res.status(404).send("No employee found")
              res.status(200).json({
                  data : employees
              });
         });
         
     }
     catch(err){
         next(err)
     }
});
module.exports=router;