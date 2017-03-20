var game = io('http://localhost:3000'),
    board = ChessBoard('board', 'start'),
    gameId = window.location.hash.replace('#', '');

document.getElementById('heading').innerHTML = gameId || 'cheslie-board';

game.on('connect', function () {
    game.emit('subscribe');
});

game.on('move', function (move) {
    if (move.gameId === gameId) {
        ChessBoard('board', move.board);
    }
});
