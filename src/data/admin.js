let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var admin = new Schema({
    name: {
        type: String,
        required : [ true, 'name is required'],
        lowercase : true
    },
    phone: {
      type: Number,
      required : [ true, 'phone is required'],

  },
    email: {
        type: String,
        required : [ true, 'email is required'],
        unique : true,
        lowercase : true
    },
    
    
    password: {
        type: String,
        required : [ true, 'password is required']
    },
    role: {
        type: String,
        default: "admin",
        enum: ["admin", "HR"]
    }
    
}, {
    timestamps: true
});

module.exports = mongoose.model('admin', admin);
