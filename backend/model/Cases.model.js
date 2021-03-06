var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Creating the case schema
var Case = new Schema({
    defendantName: String,
    defendantAddr: String,
    crimeType: String,
    crimeDate: Date,
    crimeLoc: String,
    officerName: String,
    arrestDate: Date,
    judgeName: String,
    lawyerName: String,
    startDate: Date,
    endDate: Date,
    status: String,
    summary: String
}, {
    timestamps: true
});

// exporting the case schema as a model named Case
module.exports = mongoose.model('Case', Case);