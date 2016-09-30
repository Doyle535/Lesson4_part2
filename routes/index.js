var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    message: 'Hello world'
  });
});

router.get('/random', function(req, res, next){
  var someNumber = Math.random();
  res.render('random', {
    title: 'Random Number',
    randomNumber: someNumber
  });
});

module.exports = router;
