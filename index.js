 const express = require("express");
const bodyParser= require("body-parser");
const app = express();
const mongooose = require('./src/data/mongo.js');
const logger  = require('./src/lib/logger.js');
const register = require('./src/api/user/register.js');
const login = require('./src/api/user/login.js');
const getDetails = require('./src/api/user/getDetails.js');
const getDetails1 = require('./src/api/user/getDetails1.js');
const update = require('./src/api/user/update.js');
const deletee = require('./src/api/user/deletee.js');

const add = require('./src/api/employee/add.js');
const showDetails = require('./src/api/employee/showDetails.js');
const edit = require('./src/api/employee/edit.js');
const empdel = require('./src/api/employee/empdel.js');

const sysadd = require('./src/api/system/sysadd.js');
const sysshowDetails = require('./src/api/system/sysshowDetails.js');
const sysedit = require('./src/api/system/sysedit.js');
const sysdel = require('./src/api/system/sysdel.js');

const osadd = require('./src/api/os/osadd.js');
const osshowDetails = require('./src/api/os/osshowDetails.js');
const osedit = require('./src/api/os/osedit.js');
const osdel = require('./src/api/os/osdel.js');

const msadd = require('./src/api/MSOffice/msadd.js');
const msshowDetails = require('./src/api/MSOffice/msshowDetails.js');
const msedit = require('./src/api/MSOffice/msedit.js');
const msdel = require('./src/api/MSOffice/msdel.js');

const PORT = process.env.PORT ;
const cors = require('cors');
app.use(cors({ origin: '*', optionsSuccessStatus: 200 }));


var db = mongooose.connection;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname +'/public'));
const router = express.Router();
router.use('/api/user', register);
router.use('/api/user', login);
router.use('/api/user', getDetails);
router.use('/api/user', getDetails1);
router.use('/api/user', update);
router.use('/api/user', deletee)
router.use('/api/employee',add);
router.use('/api/employee',showDetails);
router.use('/api/employee',edit);
router.use('/api/employee',empdel);
router.use('/api/system',sysadd);
router.use('/api/system',sysshowDetails);
router.use('/api/system',sysedit);
router.use('/api/system',sysdel);
router.use('/api/os',osadd);
router.use('/api/os',osshowDetails);
router.use('/api/os',osedit);
router.use('/api/os',osdel);
router.use('/api/MSOffice',msadd);
router.use('/api/MSOffice',msshowDetails);
router.use('/api/MSOffice',msedit);
router.use('/api/MSOffice',msdel);

app.listen(PORT, () => {logger.info(`server listening at port : ${PORT}`);
});
app.use(router);


