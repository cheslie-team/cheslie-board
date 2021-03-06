var config = require('cheslie-config'),
	express = require('express'),
	app = express(),
	http = require('http').Server(app),
	io = require('socket.io')(http),
	game = require('socket.io-client')(config.game.url);

game.on('connect', function () {
	console.log('Conntected to game');
	game.emit('subscribe');
});

game.on('move', function (move) {
	io.emit('move', move);
});

io.on('connect', function (socket) {
	console.log('Looksies! We got ourselves a user!');

	socket.on('server:results', function (data) {
		console.log("server:results");
		io.emit('client:display', data);
	});
});

app.use('/', express.static('client'));

// TODO: Find better way to include chessboardjs.
// Why don't they have a good npm package?
app.use('/js', express.static('lib/chessboardjs-0.3.0/js'));
app.use('/css', express.static('lib/chessboardjs-0.3.0/css'));
app.use('/img', express.static('lib/chessboardjs-0.3.0/img'));

http.listen(config.board.port, function () {
	console.log('Running our app at http://localhost:' + config.board.port)
});