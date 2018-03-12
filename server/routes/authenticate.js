var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');

/* GET home page. */
router.post('/', function (req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username: username }, (err, user) => {
        if (err) return next(err);
        console.log(user);
        if (user && password === user.password) {
            console.log('Validated')
            jwt.sign({ id: user.id }, process.env.JWT_KEY, { expiresIn: 3600 }, (err, token) => {
                if (err) return next(err);

                res.json({ error: null, token: token });
            });
        } else {
            res.json({ error: {id: 1, msg: 'Username or password incorrect'} });
        }
    });
});

module.exports = router;
