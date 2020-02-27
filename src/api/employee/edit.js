var express = require("express")
const employees = require('../../data/employees');
const router = express.Router();
router.put('/edit/:employeeId',(req, res, next)=>{
    try{
    const edit = req.body
    const employeeId = req.params.employeeId
    employees.findById({_id : employeeId},function (err, employees) {
        console.log(employees);
        if (err) return res.status(500).send("There was a problem finding the employee.");
        if (employees === null) {
            res.status(404).send("No employee found.");
        }else{
            employees.updateOne({$set:edit}, (err,employees)=>{
                if(!err){
                    res.status(200).json({
                        data:employees,
                        message:"employees updated"
                    })
                }
            });
        }
        
      
  });
}
catch (err){
   next(err)
}

})
module.exports=router