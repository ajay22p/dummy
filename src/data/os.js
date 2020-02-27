let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var os = new Schema({
    osname: {
        type: String,
        required : true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('os', os);
