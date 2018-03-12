var express = require('express');
var mongoose = require('mongoose');
var User = require('../models/User.js');
var validate = require('../middelware/validate');
var router = express.Router();

router.use(validate);

/* GET ALL USERS */
router.get('/', function (req, res, next) {
    User.find((err, users) => {
        if (err) return next(err);

        console.log(users);
        res.json(users);
    });
});

/* GET SINGLE USER BY ID */
router.get('/:id', function (req, res, next) {
    User.findById(req.params.id, (err, users) => {
        if (err) return next(err);

        console.log(users);
        res.json(users);
    });
});

/* SAVE USER */
router.post('/', function (req, res, next) {
    User.create(req.body, (err, post) => {
        if (err) return next(err);

        console.log(post);
        res.json(post);
    });
});

/* UPDATE USER */
router.put('/:id', function (req, res, next) {
    User.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
        if (err) return next(err);

        console.log(post);
        res.json(post);
    });
});

/* DELETE USER */
router.delete('/:id', function (req, res, next) {
    User.findByIdAndRemove(req.params.id, req.body, (err, post) => {
        if (err) return next(err);

        console.log(post);
        res.json(post);
    });
});

module.exports = router;
