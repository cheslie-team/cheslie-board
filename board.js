var express = require('express'),
	app = express(),
	http = require('http').Server(app),
	io = require('socket.io')(http),
	port = 8080;

io.on('connect', function (socket) {
    console.log('Board/game connected');

    socket.on('move', function (board) {
    	console.log(board);
    	io.emit('display', board);
    });
});

app.use('/', express.static('client'));

// TODO: Find better way to include chessboardjs.
// Why don't they have a good npm package?
app.use('/js', express.static('lib/chessboardjs-0.3.0/js'));
app.use('/css', express.static('lib/chessboardjs-0.3.0/css'));
app.use('/img', express.static('lib/chessboardjs-0.3.0/img'));

http.listen(port, function () {
    console.log('Running our app at http://localhost:' + port)
});