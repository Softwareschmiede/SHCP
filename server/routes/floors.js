var express = require('express');
var mongoose = require('mongoose');
var Floor = require('../models/Floor.js');
var validate = require('../middelware/validate');
var router = express.Router();

// router.use(validate);

/* GET ALL FLOORS */
router.get('/', function (req, res, next) {
    Floor.find((err, floors) => {
        if (err) return next(err);

        res.json(floors);
    });
});

/* GET SINGLE FLOOR BY ID */
router.get('/:id', function (req, res, next) {
    Floor.findById(req.params.id, (err, floors) => {
        if (err) return next(err);

        res.json(floors);
    });
});

/* SAVE FLOOR */
router.post('/', function (req, res, next) {
    Floor.create(req.body, (err, post) => {
        if (err) return next(err);

        res.json(post);
    });
});

/* UPDATE FLOOR */
router.put('/:id', function (req, res, next) {
    Floor.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
        if (err) return next(err);

        res.json(post);
    });
});

/* DELETE FLOOR */
router.delete('/:id', function (req, res, next) {
    Floor.findByIdAndRemove(req.params.id, req.body, (err, post) => {
        if (err) return next(err);

        res.json(post);
    });
});

module.exports = router;
