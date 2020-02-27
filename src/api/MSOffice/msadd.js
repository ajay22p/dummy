var express = require("express")
const MSOffice = require('../../data/MSOffice');
const router = express.Router(); 
router.post('/msadd', (req,res,next)=>{
    try{
    const {msname}=req.body
    MSOffice.create({msname},
    function(err , MSOffice){
     if(err) res.status(500).send("There was problem in registering msoffice");
      
        res.status(200).json({
            data : MSOffice,
            message : "MSOffice Details added"
        });

    })
    } catch (err){
        next(err)
    }
    
});
module.exports = router;