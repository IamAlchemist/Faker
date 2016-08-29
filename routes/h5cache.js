var q = require('q');
var fs = require('fs');
const path = require('path');
const md5File = require('md5-file/promise')
var express = require('express');
var router = express.Router();

router.post('/cacheitems', function(req, res) {
    console.log("--- query ---");
    console.log(req.body);
    var result = generateCacheItems(req);
    res.send(result);
});

router.post('/fingerprint', function(req, res) {
    var sourcename = path.dirname(__filename) + '/../data/h5CacheList.json';
    
    md5File(sourcename).then(hash => {
	var result = new Object();
	result.md5 = hash;
	result.interval = 5000;
	res.send(result);
    });
});

function generateCacheItems(req) {
    var prefix = req.headers.host;
    prefix = "http://" + prefix;
    prefix = prefix + "/images/";

    var sourcename = path.dirname(__filename) + '/../data/h5CacheList.json';
    
    var array  = JSON.parse(fs.readFileSync(sourcename, 'utf8'));

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

	   
