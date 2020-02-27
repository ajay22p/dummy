var express = require("express")
const MSOffice = require('../../data/MSOffice');
const router = express.Router();
router.put('/msedit/:MSOfficeId',(req, res, next)=>{
    try{
    const edit = req.body
    const MSOfficeId = req.params.MSOfficeId
    MSOffice.findById({_id : MSOfficeId},function (err, MSOffice) {
        console.log(MSOffice);
        if (err) return res.status(500).send("There was a problem finding the MSOffice.");
        if (MSOffice === null) {
            res.status(404).send("No MSOffice details found.");
        }else{
            MSOffice.updateOne({$set:edit}, (err,MSOffice)=>{
                if(!err){
                    res.status(200).json({
                        data:MSOffice,
                        message:"MSOffice updated"
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