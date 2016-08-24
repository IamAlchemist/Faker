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
    prefix = prefix + "/images";

    var filenames = new Array("GOLD.001.png", "GOLD.002.jpeg");
    var md5s = new Array("5c980839c607b8b2ad8b6b79b066981a", "5a82cd3f1bf662ef65964f06018970a9");

    var result = new Array();
    
    for (var i = 0; i < 2; ++i) {
	var url = prefix + "/" + filenames[i];
	var md5 = md5s[i];

	var item = new Object();
	item.url = url;
	item.md5 = md5;

	result[i] = item;
    }

    return result;
}

module.exports = router;

	   
