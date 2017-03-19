var game = io('http://192.168.0.24:3000'),
    board = ChessBoard('board');

game.on('connect', function () {
    console.log("Connected to board");
    game.emit('subscribe');
});

game.on('move', function (move) {
    console.log(move);
    ChessBoard('board', move.board);
});