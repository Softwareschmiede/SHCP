var express = require('express');
var validate = require('../middelware/validate');
var router = express.Router();

router.use(validate);

/* GET home page. */
router.get('/', function (req, res, next) {
    res.status(200).send();
});

module.exports = router;
