var q = require('q');
var fs = require('fs');
var express = require('express');
var router = express.Router();

router.post('/cacheitems', function(req, res) {
    console.log("--- query ---");
    console.log(req.body);
    var result = generateCacheItems(req);
    res.send(result);
});


function generateCacheItems(req) {
    var prefix = req.headers.host;
    prefix = "http://" + prefix;
    prefix = prefix + "/images/";
    
    var array  = JSON.parse(fs.readFileSync('data/h5CacheList.json', 'utf8'));

    var result = new Array();
    
    for(var i = 0; i < array.length; ++i) {
	var item = array[i];
	var url = prefix + item.filename;
	var md5 = item.md5

	var object = new Object();
	object.url = url;
	object.md5 = md5;

	result[i] = object;
    }
    
    return result;
}

module.exports = router;

	   
