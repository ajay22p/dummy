let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var MSOffice = new Schema({
    msname: {
        type: String,
        required : true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('MSOffice', MSOffice);