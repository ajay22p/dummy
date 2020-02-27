var express = require("express")
const system = require('../../data/system');
const router = express.Router();
router.put('/sysedit/:systemId',(req, res, next)=>{
    try{
    const edit = req.body
    const systemId = req.params.systemId
    system.findById({_id : systemId},function (err, system) {
        console.log(system);
        if (err) return res.status(500).send("There was a problem finding the laptop/system.");
        if (system === null) {
            res.status(404).send("No laptop/system found.");
        }else{
            system.updateOne({$set:edit}, (err,system)=>{
                if(!err){
                    res.status(200).json({
                        data:system,
                        message:"system details updated"
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