var express = require("express")
const MSOffice = require('../../data/MSOffice');
const router = express.Router();
router.get('/msshowDetails',( req , res , next )=>{
     try{
         MSOfficeId=req.params.MSOfficeId
         MSOffice.find({},function( err , MSOffice ){
             if(err) res.status(500).send("There was problem in finding MSOffice");
             if(!MSOffice) res.status(404).send(" MSOffice Details NOT found")
              res.status(200).json({
                  data :MSOffice
              });
         });
         
     }
     catch(err){
         next(err)
     }
});
module.exports=router;