var express = require('express');
var router = express.Router();

var User = require('../model/Users.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).send({error: err}));
});

router.route('/add').post((req, res) => {

    var user = new User();

    user.username = req.body.username;
    user.password = req.body.password;
    user.designation = req.body.designation;

    user.save((err, savedUser) => {
        if (err) {
            res.status(500).send({ error: err });
        }
        else {
            res.send(savedUser);
        }
    });
});

router.route('/login').post((req, res) => {
    User.findOne({ username: req.body.username, password: req.body.password })
        .then(doc => {
            console.log(doc);
            if (doc) {
                res.json({ username: doc.username, success: true });
            }
            else {
                res.json({ success: false });
            }
        })
        .catch(err => {
            res.status(500).json('failed');
        })
})

module.exports = router;