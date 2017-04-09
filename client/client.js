var io = io(),
    board = ChessBoard('board', 'start'),
    gameId = window.location.hash.replace('#', '');

document.getElementById('heading').innerHTML = gameId || 'cheslie-board';

io.on('connect', function () {
	console.log('Connected to lobby');
});

io.on('move', function (move) {
    if (move.gameId === gameId) {
        ChessBoard('board', move.board);
    }
});
