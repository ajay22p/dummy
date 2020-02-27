const system = require('../../data/system');
const express = require("express");
const router = express.Router();
router.delete('/sysdel/:systemId',  function(req, res) {
   try {
  const systemId = req.params.systemId;
  console.log(systemId)
  system.findByIdAndDelete({_id : systemId} , (err , system) => {  

    if (err) return res.status(500).send("There was a problem finding the laptop/desktop."); 

    res.status(200).json({
         data: null,
         message: 'system details has been deleted'
         });
     });
    }
    catch (err){
        next (err)
    }
   
});
   module.exports = router;