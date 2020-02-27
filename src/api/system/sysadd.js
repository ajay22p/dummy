var express = require("express")
const system = require('../../data/system');
const router = express.Router(); 
router.post('/sysadd', (req,res,next)=>{
    try{
   
    const {sysid,owner,systype,cpu,ram,hdd,recieveddate,returndate}=req.body
    system.create({sysid,owner,systype,cpu,ram,hdd,recieveddate,returndate},
    function(err , system){
     if(err) res.status(500).send("There was problem in registering system Details");
      
        res.status(200).json({
            data : system,
            message : "system Details added"
        });

    })
    } catch (err){
        next(err)
    }
    
});
module.exports = router;