const employees = require('../../data/employees');
const express = require("express");
const router = express.Router();
router.delete('/empdel/:employeeId',  function(req, res) {
   try{
  const employeeId = req.params.employeeId;
  console.log(employeeId)
  employees.findByIdAndDelete({_id : employeeId} , (err , employees) => {  

    if (err) return res.status(500).send("There was a problem finding the employee."); 

    res.status(200).json({
         data: null,
         message: 'employee has been deleted'
         });
     });
    }
    catch (err){}
   
});
   module.exports = router;
// const employees = require('../../data/employees');
// const express = require("express");
// const router = express.Router();
// router.delete('/empdel/:employeeId',  function(req, res) {
//     try{
//   const employeeId = req.params.employeeId;
//   employees.findByIdAndDelete({_id : employeeId} , (err,employees) => {
//     if (err) return res.status(500).send("There was a problem finding the employee."); 

//     res.status(200).json({
//      data: null,
//      message: 'employee has been deleted'
//    });
//    });
// }
// catch (err){
//     next(err)
// } 
// });
//    module.exports = router;