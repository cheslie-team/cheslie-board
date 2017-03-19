var game = io('http://localhost:3000'),
    board = ChessBoard('board'),
    gameId = window.location.hash.replace('#', '');

document.getElementById('heading').innerHTML = gameId || 'cheslie-board';

game.on('connect', function () {
    console.log("Connected to board");
    game.emit('subscribe');
});

game.on('move', function (move) {
    console.log(move);
    if (move.gameId === gameId) {
        ChessBoard('board', move.board);
    }
});
