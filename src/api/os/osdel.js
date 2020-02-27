const os = require('../../data/os');
const express = require("express");
const router = express.Router();
router.delete('/osdel/:osId',  function(req, res) {
   try{
  const osId = req.params.osId;
  console.log(osId)
  os.findByIdAndDelete({_id : osId} , (err , os) => {  

    if (err) return res.status(500).send("There was a problem finding the os."); 

    res.status(200).json({
         data: null,
         message: 'os has been deleted'
         });
     });
    }
    catch (err){
        next (err)
    }
   
});
   module.exports = router;