var express = require("express")
const system = require('../../data/system');
const router = express.Router();
const employees = require('../../data/employees');
router.post('/dashboard/:emp/:os/:ms',(req,res,next)=>{
try{
    const emp = req.params.emp;
    const os = req.params.os;
    const ms = req.params.ms;
    const {sysid,owner,systype,cpu,ram,hdd,recieveddate,returndate}=req.body;
    system.create({emp,os,ms,sysid,owner,systype,cpu,ram,hdd,recieveddate,returndate},
        function(err , system){
            if(err) res.status(500).send("There was problem in registering system")

            res.status(200).json({
                data : system,
                message:"systeminfo shown"
            });
        });
   
        
}
catch (err){
  next(err)
}
})

router.get('/dashboard',(req,res,next)=>{
try{
    system.find().populate('emp').populate('os').populate('ms').exec().then(doc=>{
        var arr= []
        doc.forEach(item=>{
            var obj={
                "empid":item.emp.empid,
                "empname":item.emp.empname,
                "sysid":item.sysid,
                "osname":item.os.osname,
                "msname":item.ms.msname,
                "recieveddate":item.recieveddate,
                "returndate":item.returndate

            }
            arr.push(obj);
            
        })
        res.send(arr);
        //res.send({"empid":doc[0].empid,"empname":doc[0].empname,"sysid":doc[0].sysid,"osname":doc[0].osname,"msname":doc[0].msname,"recieveddate":doc[0].recieveddate,"returndate":doc[0].returndate})
    })
    }
    catch (err){
        next (err)
    }
})

router.delete('/dashboard/dashid',  function(req, res) {
    try {
   
   system.findByIdAndDelete({_id : systemId} , (err , system) => {  
 
     if (err) return res.status(500).send("There was a problem finding the laptop/desktop."); 
 
     res.status(200).json({
          data: null,
          message: 'system details has been deleted'
          });
      });
     }
     catch (err){
         next (err)
     }
    
 });

module.exports=router
// var express = require("express")
// const system = require('../../data/system');
// const employees = require('../../data/employees');
// const router = express.Router(); 
// router.post('/dashboard/:emp/:os/:ms', (req,res,next)=>{
//     try{
//       const emp = req.params.emp;
//       const os = req.params.os;
//       const ms = req.params.ms;

//         const {sysid,owner,systype,cpu,ram,hdd,recieveddate,returndate}=req.body;  
//         system.create({emp,os,ms,sysid,owner,systype,cpu,ram,hdd,recieveddate,returndate},
//         function(err , system){
//           console.log(err)
//           if(err) res.status(500).send("There was problem in registering system Details");
      
//           res.status(200).json({
//             data : system,
//             message : "system Details added"
//           });

//         })
//     } 
//     catch (err){
//         next(err)
//     }
    
// });
// router.get('/dashboard/:emp/:os/:ms',( req , res , next )=>{
//     try{
    
//         system.find({"emp": req.params.emp,"os":req.params.os,"ms":req.params.ms}).populate('emp').populate('os').populate('ms').exec().then(doc=>{
//             res.send({"sysId": doc[0].sysid, "empid": doc[0].emp.empid, "empname": doc[0].emp.empname, "osname": doc[0].os.osname, "msname": doc[0].ms.msname,"recieveddate":doc[0].recieveddate,"returndate":doc[0].returndate});
//             // res.send(doc);
//         })
//     }
//     catch(err){
//         next(err)
//     }
// });
// module.exports = router;
