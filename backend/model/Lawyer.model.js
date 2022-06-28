var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Lawyer = new Schema({
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
    },
    chargedAmount: {
        type: int,
        default: 0,
    }
}, {
    timestamps: true
});

// exporting the user schema as User
module.exports = mongoose.model('Lawyer', Lawyer);