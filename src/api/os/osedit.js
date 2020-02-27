var express = require("express")
const os = require('../../data/os');
const router = express.Router();
router.put('/osedit/:osId',(req, res, next)=>{
    try{
    const edit = req.body
    const osId = req.params.osId
    os.findById({_id : osId},function (err, os) {
        console.log(os);
        if (err) return res.status(500).send("There was a problem finding the os.");
        if (os === null) {
            res.status(404).send("No matching os found.");
        }else{
            os.updateOne({$set:edit}, (err,os)=>{
                if(!err){
                    res.status(200).json({
                        data:os,
                        message:"os updated"
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