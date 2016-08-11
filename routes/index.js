var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/sample', function(req, res, next) {
    res.render('sample', { title: 'Sample' });
});

router.get('/echo_cookie', function(req, res, next) {
    res.setHeader("Set-Cookie", ['a=000']);
    res.render('echo_cookie', { title: 'Echo Cookie' });
});

router.get('/call_native_func', function(req, res, next) {
    res.render('call_native_func', { title: 'Call Native Func' });
});

router.get('/productId/', function(req, res, next) {
    setTimeout(function() {
	var result = {"productId" : 80}
	var response = { "errCode" : 0,
			 "result" : result }
	res.send(response)
    }, 2000);
});

router.get('/echo', function(req, res, next) {
    var response = { "errCode" : 0,
		     "msg" : req.query.question }
    res.send(response);
});

router.get('/product/articles', function(req, res, next) {
    var result = { "productId": req.query.productId,
		   "articles" : "contents" }
    var response = { "errCode" : 0 ,
		     "result" : result }
    res.send(response)
});

module.exports = router;

	   
