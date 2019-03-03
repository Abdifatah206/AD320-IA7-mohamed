var express = require('express');

var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('route1', {title:'EXPRESS'
    });

});



module.exports = router;