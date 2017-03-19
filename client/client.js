var game = io('http://localhost:3000'),
    board = ChessBoard('board');

game.on('connect', function () {
    console.log("Connected to board");
    game.emit('subscribe');
});

game.on('move', function (move) {
    console.log(move);
    ChessBoard('board', move.board);
});