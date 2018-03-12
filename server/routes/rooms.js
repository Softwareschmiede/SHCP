var express = require('express');
var mongoose = require('mongoose');
var Room = require('../models/Room.js');
var validate = require('../middelware/validate');
var router = express.Router();

// router.use(validate);

/* GET ALL ROOMS */
router.get('/', function (req, res, next) {
    Room.find((err, rooms) => {
        if (err) return next(err);

        res.json(rooms);
    });
});

/* GET SINGLE ROOM BY ID */
router.get('/:id', function (req, res, next) {
    Room.findById(req.params.id, (err, rooms) => {
        if (err) return next(err);

        res.json(rooms);
    });
});

/* SAVE ROOM */
router.post('/', function (req, res, next) {
    Room.create(req.body, (err, post) => {
        if (err) return next(err);

        res.json(post);
    });
});

/* UPDATE ROOM */
router.put('/:id', function (req, res, next) {
    Room.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
        if (err) return next(err);

        res.json(post);
    });
});

/* DELETE ROOM */
router.delete('/:id', function (req, res, next) {
    Room.findByIdAndRemove(req.params.id, req.body, (err, post) => {
        if (err) return next(err);

        res.json(post);
    });
});

module.exports = router;
