var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('hello', {title:"aaaa"});
});

module.exports = router;
