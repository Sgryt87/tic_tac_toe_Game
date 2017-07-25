$(document).ready(function() {

  var board = [
      '', '', '',
      '', '', '',
      '', '', ''
    ];

  function Print(board) {
      for (var i = 0; i < 9; i++) {
          $('#' + i).text(board[i]);
      }
  }
// user's turn
function IsPlayerTurn () {
  return Math.floor(Math.random()*2+1);
}

// X or O
 
$('.inbox').click(function () {
        var index = parseInt(this.id);
        if(IsPlayerTurn() == 1) {
        board[index] = 'X';
        $(this).off('click');
        Print(board);
      } else {
        board[index] = 'O';
        $(this).off('click');
        Print(board);
      }
  });

// if array is empty 
function isEmpty () {
   if(board.length < 1) {
    return true;
    } else {
    return false;
    }
}



//f whoWon() who won or draw
function whoWon() {
    var playerX;
    var playerO;
    var draw;
     if ((board[0] === 'X')&&(board[1] === 'X')&&(board[2] === 'X')) {
        return playerX;
      } else if ((board[3] === 'X')&&(board[4] === 'X')&&(board[5] === 'X')) {
        return playerX;
      } else if ((board[6] === 'X')&&(board[7] === 'X')&&(board[8] === 'X')) {
        return playerX;
      } else if ((board[0] === 'X')&&(board[3] === 'X')&&(board[6] === 'X')) {
        return playerX;
      } else if ((board[1] === 'X')&&(board[4] === 'X')&&(board[7] === 'X')) {
        return playerX;
      } else if ((board[2] === 'X')&&(board[5] === 'X')&&(board[8] === 'X')) {
        return playerX;
      } else if ((board[0] === 'X')&&(board[4] === 'X')&&(board[8] === 'X')) {
        return playerX;
      } else if ((board[2] === 'X')&&(board[4] === 'X')&&(board[6] === 'X')) {
        return playerX;
      } else if ((board[0] === 'O')&&(board[1] === 'O')&&(board[2] === 'O')) {
        return playerO;
      } else if ((board[3] === 'O')&&(board[4] === 'O')&&(board[5] === 'O')) {
        return playerO;
      } else if ((board[6] === 'O')&&(board[7] === 'O')&&(board[8] === 'O')) {
        return playerO;
      } else if ((board[0] === 'O')&&(board[3] === 'O')&&(board[6] === 'O')) {
        return playerO;
      } else if ((board[1] === 'O')&&(board[4] === 'O')&&(board[7] === 'O')) {
        return playerO;
      } else if ((board[2] === 'O')&&(board[5] === 'O')&&(board[8] === 'O')) {
        return playerO;
      } else if ((board[0] === 'O')&&(board[4] === 'O')&&(board[8] === 'O')) {
        return playerO;
      } else if ((board[2] === 'O')&&(board[4] === 'O')&&(board[6] === 'O')) {
        return playerO;
      } else {
        return draw;
      }
}



///end
});


/*function Log(val) {
    console.log(val);
}
*/
/*function IsEmpty(index){
    if(board[index] != '')
        return
}
function MakeStep() {
}*/



    /*while(true){
        MakeStep();
        var status = getCurrentStatus();
        if(status=== 'draw'){
            break;
        }
    }*/



  /*  $('.inbox').click(function () {
        var index = parseInt(this.id);
        board[index] = 'X';
        Print(board);
        // computer logic
    });*/