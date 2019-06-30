var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'', menuId:'home'});
});

router.get('/about', function(req, res, next) {
  res.render('about', {page:'F things up', menuId:'about'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {page:'Loserville', menuId:'contact'});
});

module.exports = router;
