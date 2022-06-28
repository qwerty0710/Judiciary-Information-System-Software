var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Judge = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    designation: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Judge', Judge);