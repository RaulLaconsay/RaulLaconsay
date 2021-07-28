var express = require('express');
var router = express.Router();
var rg = require('random-greetings')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'My Travel Agency',
        greet: rg.greet(),
        dt: (new Date()).toString()
    });
});

module.exports = router;