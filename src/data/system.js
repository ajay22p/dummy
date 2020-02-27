
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var system = new Schema({
    emp:{
        type: Schema.Types.ObjectId,
        ref: 'employees'
    }, 
    os:{
        type: Schema.Types.ObjectId,
        ref: 'os'
    },
    ms:{
        type: Schema.Types.ObjectId,
        ref: 'MSOffice'
    },
    sysid: {
        type: String,
        required : true,
        unique: true
    },
    owner: {
        type:String,
        required: true,
        enum: ["rented", "own"]

    },
    systype: {
        type:String,
        required: true,
        enum: ["laptop", "desktop"]

    },
    cpu: {
      type: String,
      required : [ true],

    },
    ram: {
        type: String,
        required : [ true],
  
    },
    hdd: {
        type: String,
        required : [ true],
  
    },
    recieveddate: {
        type: String,
        required : [ true]
    },
    returndate: {
        type: String,
        required : [ true]
    }
}, {
    timestamps: true
});
module.exports = mongoose.model('system', system);
