var express = require('express'),
	app = express(),
	port = 8080;

app.use('/', express.static('client'));

// TODO: Find better way to include chessboardjs.
// Why don't they have a good npm package?
app.use('/js', express.static('lib/chessboardjs-0.3.0/js'));
app.use('/css', express.static('lib/chessboardjs-0.3.0/css'));
app.use('/img', express.static('lib/chessboardjs-0.3.0/img'));

app.listen(port, function () {
    console.log('Running our app at http://localhost:' + port)
});