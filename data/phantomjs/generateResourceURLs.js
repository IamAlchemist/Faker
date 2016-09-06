var webPage = require('webpage');
var page = webPage.create();

page.onResourceRequested = function(requestData, networkRequest) {
    console.log(requestData.url);
//    console.log('Request (#' + requestData.id + '): ' + JSON.stringify(requestData));
};

page.open('https://m.zhongan.com', function(s) {
    setTimeout(function() {
	console.log(s);
	phantom.exit();
    }, 15000);
});
