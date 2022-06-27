var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/swag-shop-react');
var cors = require('cors');

var userRouter = require('./routes/User');
var caseRouter = require('./routes/Case');

app.all('/*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const PORT = 3004;

app.use('/users', userRouter);
app.use('/cases', caseRouter);

app.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
});