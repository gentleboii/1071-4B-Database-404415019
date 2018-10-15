var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { id: '404415019', name: '陳志雍' });
});

module.exports = router;