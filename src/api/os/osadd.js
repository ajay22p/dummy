var express = require("express")
const os = require('../../data/os');
const router = express.Router(); 
router.post('/osadd', (req,res,next)=>{
    try{
        const {osname}=req.body
    os.create({osname},
    function(err , os){
     if(err) res.status(500).send("There was problem in registering operating system");
      
        res.status(200).json({
            data : os,
            message : "os Details added"
        });

    })
    } catch (err){
        next(err)
    }
    
});
module.exports = router;