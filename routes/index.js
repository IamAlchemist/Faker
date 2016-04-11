var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/productId/', function(req, res, next) {
    setTimeout(function() {
	var result = {"productId" : 80}
	var response = { "errCode" : 0,
			 "result" : result }
	res.send(response)
    }, 2000);
});

router.get('/product/articles', function(req, res, next) {
    var result = { "productId": req.query.productId,
		   "articles" : "contents" }
    var response = { "errCode" : 0 ,
		     "result" : result }
    res.send(response)
});
	   

	   
module.exports = router;
