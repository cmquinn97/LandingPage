var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'', menuId:'home'});
});

router.get('/about', function(req, res, next) {
  res.render('about', {page:'F things up', menuId:'about'});
});

router.get('/projects', function(req, res, next) {
  res.render('projects', {page:'Loserville', menuId:'projects'});
});

module.exports = router;
