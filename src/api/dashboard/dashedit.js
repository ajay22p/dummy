var express = require("express")
const dashboard = require('../../data/dashboard');
const router = express.Router();
router.put('/dashedit/:dashId',(req, res, next)=>{
    try{
    const edit = req.body
    const dashId = req.params.dashId
    dashboard.findById({_id : dashId},function (err, dashboard) {
        console.log(dashboard);
        if (err) return res.status(500).send("There was a problem finding the details.");
        if (dashboard === null) {
            res.status(404).send("No details found.");
        }else{
            dashboard.updateOne({$set:edit}, (err,dashboard)=>{
                if(!err){
                    res.status(200).json({
                        data:dashboard,
                        message:"details updated"
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