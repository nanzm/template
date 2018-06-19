var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index.art');
});

router.get('/login', function (req, res, next) {
  res.render('login.art');
});

router.get('/register', function (req, res, next) {
  res.render('register.art');
});

router.get('/video', function (req, res, next) {
  res.render('video.art');
});

router.get('/error404', function (req, res, next) {
  res.render('error/404.art');
});

router.get('/error500', function (req, res, next) {
  res.render('error/500.art');
});


module.exports = router;
