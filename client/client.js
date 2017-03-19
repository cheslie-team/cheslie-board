var board = io();

ChessBoard('board');

board.on('connect', function () {
    console.log("Connected to board");
});

board.on('display', function (position) {
    console.log(position);
    ChessBoard('board', position);

    /*
    var div = document.getElementById('board');
    div.innerHTML = '';

    players.forEach(function (player) {
        var tr = document.createElement('tr'),
            name = document.createElement('td');
        
        name.textContent = player.name;
        
        tr.appendChild(name);
        div.appendChild(tr);
    });
    */
});