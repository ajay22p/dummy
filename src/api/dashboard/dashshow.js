var express = require("express")
const dashboard = require('../../data/dashboard');
const router = express.Router();


router.get('/dashshow',(req,res,next)=>{
try{
    dashboard.find().populate('emp').populate('sys').populate('os').populate('ms').exec().then(doc=>{
        var arr= []
        doc.forEach(item=>{
            var obj={
                "empid":item.emp.empid,
                "empname":item.emp.empname,
                "sysid":item.sys.sysid,
                "osname":item.os.osname,
                "msname":item.ms.msname,
                "rd":item.rd,
                "rtd":item.rtd

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


module.exports=router