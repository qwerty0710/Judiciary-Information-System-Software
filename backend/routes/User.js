var express = require('express');
var router = express.Router();

var User = require('../model/Users.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).send('Error ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body
})