var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home');
});

router.get('/main', function(req, res, next) {
    res.render('home', { title: 'Express', name: req.query.name });
});

module.exports = router;
