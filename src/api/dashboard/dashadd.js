var express = require("express")
const dashboard = require('../../data/dashboard');
const router = express.Router();
const employees = require('../../data/employees');
router.post('/dashadd',(req,res,next)=>{
try{
   
    const {emp,sys,os,ms,rd,rtd}=req.body;
    dashboard.create({emp,sys,os,ms,rd,rtd},
        function(err , dashboard){
            if(err) res.status(500).send("There was problem in registering details")

            res.status(200).json({
                data : dashboard,
                message:"dashboard info shown"
            });
        });
   
        
}
catch (err){
  next(err)
}
})

// router.get('/dashboard',(req,res,next)=>{
// try{
//     system.find().populate('emp').populate('os').populate('ms').exec().then(doc=>{
//         var arr= []
//         doc.forEach(item=>{
//             var obj={
//                 "empid":item.emp.empid,
//                 "empname":item.emp.empname,
//                 "sysid":item.sysid,
//                 "osname":item.os.osname,
//                 "msname":item.ms.msname,
//                 "recieveddate":item.recieveddate,
//                 "returndate":item.returndate

//             }
//             arr.push(obj);
            
//         })
//         res.send(arr);
//         //res.send({"empid":doc[0].empid,"empname":doc[0].empname,"sysid":doc[0].sysid,"osname":doc[0].osname,"msname":doc[0].msname,"recieveddate":doc[0].recieveddate,"returndate":doc[0].returndate})
//     })
//     }
//     catch (err){
//         next (err)
//     }
// })

// router.delete('/dashboard/dashid',  function(req, res) {
//     try {
   
//    system.findByIdAndDelete({_id : systemId} , (err , system) => {  
 
//      if (err) return res.status(500).send("There was a problem finding the laptop/desktop."); 
 
//      res.status(200).json({
//           data: null,
//           message: 'system details has been deleted'
//           });
//       });
//      }
//      catch (err){
//          next (err)
//      }
    
//  });

module.exports=router