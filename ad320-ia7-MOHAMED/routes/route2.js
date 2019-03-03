var express = require('express');
var router = express.Router();
var path = require('path');

var coll = require('../col.json');
console.log(coll);
router.get('/', function(req, res, next) {
    
  res.send(coll);
    });


module.exports = router;
