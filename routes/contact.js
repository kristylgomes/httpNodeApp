var express = require('express');
var router = express.Router();

/* GET contacts listing. */
router.get('/', function(req, res) {
	 res.render('contact')
  // res.send('respond with a resource');
});

module.exports = router;
