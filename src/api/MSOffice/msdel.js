const MSOffice = require('../../data/MSOffice');
const express = require("express");
const router = express.Router();
router.delete('/msdel/:MSOfficeId',  function(req, res) {
   try{
  const MSOfficeId = req.params.MSOfficeId;
  console.log(MSOfficeId)
  MSOffice.findByIdAndDelete({_id : MSOfficeId} , (err , MSOffice) => {  

    if (err) return res.status(500).send("There was a problem finding the MSOffice."); 

    res.status(200).json({
         data: null,
         message: 'MSOffice has been deleted'
         });
     });
    }
    catch (err){
        next (err)
    }
   
});
   module.exports = router;