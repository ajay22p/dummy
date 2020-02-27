var express = require("express")
const system = require('../../data/system');
const router = express.Router();
router.get('/sysshowDetails',( req , res , next )=>{
     try{
         systemId=req.params.systemId
         system.find({},function( err , system ){
             if(err) res.status(500).send("There was problem in finding laptop/desktop");
             if(!system) res.status(404).send("No laptop/desktop found")
              res.status(200).json({
                  data : system
              });
         });
         
     }
     catch(err){
         next(err)
     }
});
module.exports=router;