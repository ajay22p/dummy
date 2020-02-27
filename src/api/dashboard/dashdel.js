const dashboard = require('../../data/dashboard');
const express = require("express");
const router = express.Router();
router.delete('/dashdel/:dashId',  function(req, res) {
   try{
  const dashId = req.params.dashId;
  console.log(dashId)
  dashboard.findByIdAndDelete({_id : dashId} , (err ,dashboard) => {  

    if (err) return res.status(500).send("There was a problem finding all details."); 

    res.status(200).json({
         data: null,
         message: 'All details are deleted'
         });
     });
    }
    catch (err){}
   
});
   module.exports = router;
