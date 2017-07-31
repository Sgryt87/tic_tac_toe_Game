$(document).ready(function () {
    // Game board
    var board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];

    // First and second player ('computer', 'user')
    // First player plays with 'X'
    var firstPlayer, secondPlayer;

    // Prepares all stuff
    function Init() {
        if (IsPlayerTurn() === 1){
            firstPlayer = 'user';
            secondPlayer = 'computer';
        }
        else {
            firstPlayer = 'computer';
            secondPlayer = 'user';
        }
    }

    // Print current game board to html page
    function Print() {
        for (var i = 0; i < 9; i++) {
            $('#' + i).text(board[i]);
        }
    }

    function EndGame(msg){
        $('h1').text(msg);
        $('.inbox').off('click');
    }

    // user's turn
    function IsPlayerTurn() {
        return Math.floor(Math.random() * 2 + 1);
    }

    // Returns true if three cells of the board contains same value
    function IsSame(sign, cell1, cell2, cell3) {
        return  (cell1 === sign) && (cell2 === sign) && (cell3 === sign);
    }

    // Returns true if there is a line on the board with specified sign
    function IsLine(sign) {
        return  IsSame(sign, board[0], board[1], board[2]) ||
                IsSame(sign, board[3], board[4], board[5]) ||
                IsSame(sign, board[6], board[7], board[8]) ||
                IsSame(sign, board[0], board[3], board[6]) ||
                IsSame(sign, board[1], board[4], board[7]) ||
                IsSame(sign, board[2], board[5], board[8]) ||
                IsSame(sign, board[0], board[4], board[8]) ||
                IsSame(sign, board[6], board[4], board[2]);
    }

    // Returns true if all cells of the board are occupied
    function IsFull() {
        return  (board[0] != '') && (board[1] != '') && (board[2] != '') &&
                (board[3] != '') && (board[4] != '') && (board[5] != '') &&
                (board[6] != '') && (board[7] != '') && (board[8] != '');
    }

    // Returns
    // 'computer' if computer won
    // 'user' if user won
    // 'draw' if board is full but nobody won
    // 'none' if game continues
    function GetGameStatus() {
        if (IsLine('X')){
            return firstPlayer;
        } else if (IsLine('O')) {
            return secondPlayer;
        } else if (IsFull()){
            return 'draw';
        }
        return 'none';
    }

    // OnClick event handler
    $('.inbox').click(function () {
        var index = parseInt(this.id);
        $(this).off('click');
        if(firstPlayer === 'user'){
            board[index] = 'X';
        } else{
            board[index] = 'O';
        }
        Print();
        switch(GetGameStatus()){
            case 'computer':
                EndGame('You lose');
                return;
            case 'user':
                EndGame('You won! Congratulations');
                return;
            case 'draw':
                EndGame('Draw');
                return;
        }
        ComputerMove();
        Print();
        switch(GetGameStatus()){
            case 'computer':
                EndGame('You lose');
                return;
            case 'user':
                EndGame('You won! Congratulations');
                return;
            case 'draw':
                EndGame('Draw');
                return;
        }
    });

    // Returns a random umber between [min, max]
    function Rand(min, max){
        return Math.floor(Math.random() * max) + min;
    }

    // Computer makes a move (AI)
    function ComputerMove() {
        var empty = [];
        for(var i = 0; i < board.length; i++){
            if (board[i] === ''){
                empty.push(i);
            }
        }
        var ind = Rand(0, empty.length - 1);
        var sign = firstPlayer === 'computer' ? 'X' : 'O';
        board[empty[ind]] = sign;
    }

    // Game loop
    Init();
    if (firstPlayer === 'computer'){
        ComputerMove();
        Print();
    }
});